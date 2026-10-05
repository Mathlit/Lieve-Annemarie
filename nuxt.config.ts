// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: "Lieve Annemarie",
            htmlAttrs: {
                lang: "nl",
            },
        },
    },
    devtools: { enabled: true },
    css: ["~/assets/css/main.css"],

    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },

    modules: [
        "nuxt-icon",
        "@nuxt/fonts",
        "@nuxt/image",
        "@nuxtjs/sitemap",
        "@nuxtjs/robots",
    ],

    fonts: {
        families: [
            {
                name: "MrsEavesItalic",
                provider: "local",
            },
            {
                name: "Macarons",
                provider: "local",
            },
        ],
    },

    compatibilityDate: "2025-04-19",
    runtimeConfig: {
        datocmsApiUrl: process.env.DATOCMS_API_URL,
        datocmsReadToken: process.env.DATOCMS_READ_TOKEN,
        public: {
            datocms: {
                apiToken: process.env.DATOCMS_READ_TOKEN,
            },
        },
    },
    sitemap: {
        xsl: false,
    },
    robots: {
        sitemap: "/sitemap.xml",
        allow: ["/", "/door-jou", "/van-mij", "/voor-hen", "/privacy"],
    },
});
