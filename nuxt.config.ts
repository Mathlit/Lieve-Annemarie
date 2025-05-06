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
        "@nuxt/icon",
        "@nuxt/image",
        "@nuxt/scripts",
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

    scripts: {
        registry: {
            matomoAnalytics: {
                matomoUrl: "https://matomo.mathijslitjens.nl",
            },
        },
    },
});
