<script setup>
const title = ref("Home");

definePageMeta({
    layout: "landing",
});
</script>

<template>
    <Title>{{ title }} - Lieve Annemarie</Title>
    <LandingContainer>
        <LandingHero></LandingHero>

        <div class="mt-16 md:mt-0 text-lg text-slate-600 text-center">
            <p class="mb-3 italic">
                If my love for you could keep me alive, I would have lived
                forever
            </p>
            <p class="mb-3">
                Na een te kort leven en een te lang ziektebed hebben wij veel te
                vroeg afscheid moeten nemen van onze liefste moeder en mijn
                mooiste partner, onze perfecte dochter, onze beste sis, mijn
                grappigste tante, onze leukste schoonzus en mijn minst strenge
                baasje
            </p>
            <p class="mb-3">
                Ze weet dat jullie van haar houden, maar ze was gestopt met het
                houden van haarzelf
            </p>
            <p class="">De enige die zij uiteindelijk niet aankon, dat was zij zelf</p>
        </div>

        <div class="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16">
            <div v-for="item of features" class="flex gap-4 items-start">
                <div class="mt-1 bg-black rounded-full p-2 w-8 h-8 shrink-0">
                    <Icon class="text-white" :name="item.icon" />
                </div>
                <div>
                    <h3 class="font-semibold text-lg">{{ item.title }}</h3>
                    <p class="text-slate-500 mt-2 leading-relaxed">
                        {{ item.description }}
                    </p>
                </div>
            </div>
        </div>

        <!-- <LandingFeatures></LandingFeatures> -->
        <!-- <LandingLogos></LandingLogos> -->
        <!-- <LandingCta></LandingCta> -->
    </LandingContainer>
</template>
