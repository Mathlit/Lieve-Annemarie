import { fetchPublishedMessages } from "../utils/datocms";

export default defineEventHandler(async () => {
    return fetchPublishedMessages();
});
