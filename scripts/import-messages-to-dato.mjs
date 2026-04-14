import { readFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const DATO_API_VERSION = "3";
const DATO_GRAPHQL_URL = "https://graphql.datocms.com/";
const DATO_MESSAGE_MODEL_API_KEY = "message";

function parseEnvFile(fileContents) {
    return Object.fromEntries(
        fileContents
            .split(/\r?\n/)
            .map((line) => line.trim())
            .filter((line) => line && !line.startsWith("#"))
            .map((line) => {
                const separatorIndex = line.indexOf("=");
                return [
                    line.slice(0, separatorIndex),
                    line.slice(separatorIndex + 1),
                ];
            }),
    );
}

function normalizeDatoDateTime(value) {
    if (!value) {
        return null;
    }

    return String(value)
        .trim()
        .replace(/(\.\d{3})\d+(?=$|Z|[+-]\d{2}:?\d{2})/, "$1");
}

function getMessageSignature(message) {
    return JSON.stringify([
        message.from,
        message.text,
        message.email || "",
    ]);
}

async function loadEnv() {
    const envPath = path.resolve(process.cwd(), ".env");
    const envContents = await readFile(envPath, "utf8");
    return parseEnvFile(envContents);
}

async function loadMessages() {
    const messagesPath = path.resolve(process.cwd(), "messages.json");
    const contents = await readFile(messagesPath, "utf8");
    return JSON.parse(contents);
}

async function cmaRequest(env, requestPath, options = {}) {
    const response = await fetch(`${env.DATOCMS_API_URL}${requestPath}`, {
        method: options.method || "GET",
        headers: {
            Authorization: `Bearer ${env.DATOCMS_WRITE_TOKEN}`,
            Accept: "application/json",
            "Content-Type": "application/vnd.api+json",
            "X-Api-Version": DATO_API_VERSION,
            ...(options.headers || {}),
        },
        body: options.body ? JSON.stringify(options.body) : undefined,
    });

    const payload = await response.json();

    if (!response.ok) {
        throw new Error(JSON.stringify(payload, null, 2));
    }

    return payload;
}

async function graphqlRequest(env, query) {
    const response = await fetch(DATO_GRAPHQL_URL, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${env.DATOCMS_READ_TOKEN}`,
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
    });

    const payload = await response.json();

    if (!response.ok || payload.errors) {
        throw new Error(JSON.stringify(payload, null, 2));
    }

    return payload.data;
}

async function getMessageModelId(env) {
    const payload = await cmaRequest(env, "/item-types");
    const model = payload.data.find(
        (itemType) => itemType.attributes?.api_key === DATO_MESSAGE_MODEL_API_KEY,
    );

    if (!model) {
        throw new Error(`DatoCMS model '${DATO_MESSAGE_MODEL_API_KEY}' not found`);
    }

    return model.id;
}

async function getExistingMessageSignatures(env) {
    const data = await graphqlRequest(env, `
        query ExistingMessages {
            allMessages(first: 500) {
                from
                text(markdown: false)
                date
            }
        }
    `);

    return new Set(
        data.allMessages.map(getMessageSignature),
    );
}

async function createAndPublishMessage(env, itemTypeId, message) {
    const createPayload = {
        data: {
            type: "item",
            attributes: {
                from: message.from,
                text: message.text,
                email: message.email || "",
                date: normalizeDatoDateTime(message.date),
            },
            relationships: {
                item_type: {
                    data: {
                        id: itemTypeId,
                        type: "item_type",
                    },
                },
            },
        },
    };

    const created = await cmaRequest(env, "/items", {
        method: "POST",
        body: createPayload,
    });

    await cmaRequest(env, `/items/${created.data.id}/publish`, {
        method: "PUT",
    });

    return created.data.id;
}

async function main() {
    const dryRun = process.argv.includes("--dry-run");
    const env = await loadEnv();
    const messages = await loadMessages();

    if (!env.DATOCMS_API_URL || !env.DATOCMS_READ_TOKEN || !env.DATOCMS_WRITE_TOKEN) {
        throw new Error("Missing DATOCMS_API_URL, DATOCMS_READ_TOKEN, or DATOCMS_WRITE_TOKEN");
    }

    const itemTypeId = await getMessageModelId(env);
    const existingSignatures = await getExistingMessageSignatures(env);
    const pendingMessages = messages.filter((message) => {
        return !existingSignatures.has(getMessageSignature(message));
    });

    console.log(`Found ${messages.length} source messages.`);
    console.log(`Detected ${existingSignatures.size} existing DatoCMS messages.`);
    console.log(`${pendingMessages.length} messages need importing.`);

    if (dryRun) {
        console.log("Dry run complete. No records were created.");
        return;
    }

    let importedCount = 0;

    for (const message of pendingMessages) {
        await createAndPublishMessage(env, itemTypeId, message);
        importedCount += 1;
        console.log(`[${importedCount}/${pendingMessages.length}] Imported '${message.from}'`);
    }

    console.log(`Done. Imported ${importedCount} messages.`);
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
