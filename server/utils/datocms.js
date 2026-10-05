const DATO_API_VERSION = "3";
const DATO_MESSAGE_MODEL_API_KEY = "message";
let cachedMessageModelId;

function getDatoRuntimeConfig() {
    const config = useRuntimeConfig();

    return {
        apiUrl: config.datocmsApiUrl || "https://site-api.datocms.com",
        readToken: config.datocmsReadToken,
        writeToken: config.datocmsWriteToken,
    };
}

function getDatoHeaders(token, extraHeaders = {}) {
    return {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        ...extraHeaders,
    };
}

async function parseDatoResponse(response) {
    const payload = await response.json();

    if (!response.ok) {
        throw createError({
            statusCode: response.status,
            statusMessage: payload?.data?.[0]?.attributes?.code || "DatoCMS request failed",
            data: payload,
        });
    }

    return payload;
}

async function getMessageModelId() {
    if (cachedMessageModelId) {
        return cachedMessageModelId;
    }

    const payload = await datoCmaRequest("/item-types");
    const model = payload.data.find(
        (itemType) => itemType.attributes?.api_key === DATO_MESSAGE_MODEL_API_KEY,
    );

    if (!model) {
        throw createError({
            statusCode: 500,
            statusMessage: `DatoCMS model '${DATO_MESSAGE_MODEL_API_KEY}' not found`,
        });
    }

    cachedMessageModelId = model.id;

    return cachedMessageModelId;
}

export async function datoGraphqlRequest(query, variables = {}) {
    const { readToken } = getDatoRuntimeConfig();

    if (!readToken) {
        throw createError({
            statusCode: 500,
            statusMessage: "Missing DATOCMS_READ_TOKEN",
        });
    }

    const response = await fetch("https://graphql.datocms.com/", {
        method: "POST",
        headers: getDatoHeaders(readToken, {
            "Content-Type": "application/json",
        }),
        body: JSON.stringify({ query, variables }),
    });

    const payload = await response.json();

    if (!response.ok || payload.errors) {
        throw createError({
            statusCode: response.status || 500,
            statusMessage: "DatoCMS GraphQL request failed",
            data: payload,
        });
    }

    return payload.data;
}

export function normalizeDatoDateTime(value) {
    if (!value) {
        return null;
    }

    const normalized = String(value).trim().replace(
        /(\.\d{3})\d+(?=$|Z|[+-]\d{2}:?\d{2})/,
        "$1",
    );

    const parsed = new Date(normalized);

    if (!Number.isNaN(parsed.getTime())) {
        if (/[zZ]|[+-]\d{2}:?\d{2}$/.test(normalized)) {
            return parsed.toISOString();
        }

        return normalized;
    }

    return normalized;
}

export function mapDatoMessageRecord(record) {
    const date = record.date ? new Date(record.date) : null;

    return {
        id: record.id,
        naam: record.from,
        bericht: record.text,
        email: record.email || "",
        datum: date && !Number.isNaN(date.getTime())
            ? new Intl.DateTimeFormat("nl", {
                year: "numeric",
                month: "long",
                day: "numeric",
            }).format(date)
            : "",
        date: record.date || null,
    };
}

export async function fetchPublishedMessages() {
    const data = await datoGraphqlRequest(`
        query GetMessages {
            allMessages(orderBy: date_DESC, first: 500) {
                id
                from
                text(markdown: false)
                email
                date
            }
        }
    `);

    return data.allMessages.map(mapDatoMessageRecord);
}

export async function createMessage({ from, text, email = "", date, publish = false }) {
    const itemTypeId = await getMessageModelId();
    const createPayload = {
        data: {
            type: "item",
            attributes: {
                from,
                text,
                email,
                date: normalizeDatoDateTime(date),
            },
            relationships: {
                item_type: {
                    data: {
                        type: "item_type",
                        id: itemTypeId,
                    },
                },
            },
        },
    };

    const created = await datoCmaRequest("/items", {
        method: "POST",
        body: createPayload,
    });

    if (publish) {
        await datoCmaRequest(`/items/${created.data.id}/publish`, {
            method: "PUT",
        });
    }

    return created.data;
}
