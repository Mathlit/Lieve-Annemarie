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

        <div
            class="mt-16 md:mt-0 text-lg flex flex-col gap-4 text-slate-800 text-center"
        >
            <p class="italic mb-4">
                If my love for you could keep me alive, I would have lived
                forever
            </p>
            <p>
                Na een te kort leven en een te lang ziektebed hebben wij veel te
                vroeg afscheid moeten nemen van onze liefste moeder en mijn
                mooiste partner, onze perfecte dochter, onze beste sis, mijn
                grappigste tante, onze leukste schoonzus en mijn minst strenge
                baasje.
            </p>
            <p>
                Ze weet dat jullie van haar houden, maar ze was gestopt met het
                houden van haarzelf.
            </p>
            <p>De enige die zij uiteindelijk niet aankon, dat was zij zelf.</p>

            <p>
                Om iedereen de kans te geven van Annemarie te leren en haar nog
                een laatste groet te brengen, hebben wij deze website gebouwd.
                Alle berichten die jullie plaatsen zullen we na verloop van tijd
                bundelen in een boek voor de kinderen. Herinner voor hen
                alsjeblieft de leuke tijd met Annemarie, wat voor geweldig mens
                het was en wat ze hen graag zou willen meegeven.
            </p>
            <p>
                Ook hebben we Annemarie’s verhaal gedeeld dat ze voor iedereen
                scheef. Zodat we haar niet vergeten en beseffen hoe ernstig de
                gevolgen van een depressie kunnen zijn.
            </p>
            <p>
                Tenslotte heeft Annemarie aangeven dat zij mensen, die niet een
                bloemstuk of iets anders willen kopen voor de dienst, de
                mogelijkheid wil bieden om geld te doneren aan een studiefonds
                voor haar kinderen en WomenInc, een stichting die zich inzet
                voor gelijke rechten voor vrouwen. Deze link vind je onder "<NuxtLink
                    class="text-[#f16b8c] hover:text-[#da5475] transition transition-duration-200"
                    href="/van-mij"
                    >Van Mij</NuxtLink
                >".
            </p>
        </div>
    </LandingContainer>
</template>
