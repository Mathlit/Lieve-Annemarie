import { createMessage } from "../utils/datocms";

export default defineEventHandler(async (event) => {
    const input = await readBody(event);
    const naam = input?.naam?.trim();
    const bericht = input?.bericht?.trim();

    if (!naam || !bericht) {
        return {
            status: "error",
            message: "Niet alle velden zijn ingevuld",
        };
    }

    await createMessage({
        from: naam,
        text: bericht,
        email: "",
        date: new Date().toISOString(),
        publish: false,
    });

    return {
        status: "success",
        message: "Bericht verzonden en wordt na controle geplaatst.",
    };
});
