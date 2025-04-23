export default defineEventHandler(async (event) => {
    const rawComments = await $fetch(`${process.env.COMMENT_API_ENDPOINT}/comments`, {
        headers: {
            "secret-key": process.env.COMMENT_API_KEY,
        },
    });

    const comments = rawComments.map(rawComment => {
        const comment = {
            naam: rawComment.name,
            bericht: rawComment.message,
        }

        if (rawComment.date) {
            const date = new Date(rawComment.date);
            comment.datum = new Intl.DateTimeFormat("nl", {
                year: "numeric",
                month: "long",
                day: "numeric",
            }).format(date);
        }

        return comment;
    });

    return [];
    // return comments;
    // return rawComments;
});