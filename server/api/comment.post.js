import { buildClient } from "@datocms/cma-client-node";
const client = buildClient({ apiToken: process.env.DATOCMS_API_TOKEN });

export default defineEventHandler(async (event) => {
    const input = await readBody(event);
    const response = {};
    const data = {
        status: "afwachting",
    };

    // Validate params

    if (!input.naam || !input.bericht || !input.naam.trim()) {
        response.status = "error";
        response.message = "Niet alle velden zijn ingevuld";

        return response;
    }

    data.Name = input.naam;
    // data.email = input.email || "";
    data.Message = input.bericht;

    // return data;
    const commentResponse = await $fetch(`${process.env.COMMENT_API_ENDPOINT}/comment`, {
        method: "POST",
        headers: {
            "secret-key": process.env.COMMENT_API_KEY,
        },
        body: data
    });

    console.log(commentResponse);

    response.status = "success";
    response.message = "Bericht verzonden en wordt spoedig geplaatst.";

    return response;
});
