<script setup>
const title = ref("Mijn inspiratie");

definePageMeta({
    layout: "landing",
});
</script>

<template>
    <Title>{{ title }} - Lieve Annemarie</Title>
    <LandingContainer>
        <LandingSectionhead>
            <template v-slot:title>{{ title }}</template>
            <template v-slot:desc></template>
        </LandingSectionhead>

        <div
            class="flex flex-col gap-3 mt-16 text-slate-500 text-lg leading-relaxed text-center"
        >
            <h2>Linkjes</h2>
            <p>
                Hier komt nog: Not every is preventable en een australisch
                onderzoek
            </p>

            <h2>Muziek</h2>
            <p>Muziek die Annemarie tot haar laatste momenten met haar meenam:</p>
            

            <div class="grid col-span-2 gap-3">
                <div
                    class="flex flex-col w-full order-first lg:order-none border-2 border-[#D8DEE9] border-opacity-50 py-5 px-6 rounded-md"
                >
                    <h4 class="text-lg font-medium text-gray-400">Spotify</h4>
                    <a
                        href="https://open.spotify.com/playlist/4X1poonxdifniNlDEeb7pa?pi=0koVbEHqRaWA2"
                        class="rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200"
                        target="_blank"
                    >
                      Milky 🍼
            </a>
                </div>
            </div>
        </div>
    </LandingContainer>
</template>
