<script setup>
const title = ref("Voor Hen");

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
            class="flex flex-col gap-4 mt-16 text-slate-800 text-lg leading-relaxed text-center"
        >
            <p>
                Lieverds, het was de wens van Annemarie dat mensen die een
                donatie willen doen in plaats van bloemen of andere zaken voor
                haar afscheidsdienst te kopen, dat kunnen doen in de vorm van
                een bijdrage voor een klein studiefonds voor Gilles en Lena of
                anderzijds voor
                <NuxtLink
                    class="text-[#779273] hover:text-[#556d51] underline transition transition-duration-200"
                    href="https://www.womeninc.nl"
                    target="_blank"
                    >Women Inc</NuxtLink
                >. We hebben dus een gofundme opgezet.
            </p>
            <div class="flex justify-center center mb-4">
                <NuxtLink
                    href="https://www.gofundme.com/f/studiefonds-voor-gilles-en-lena"
                    target="_blank"
                    class="py-3 px-5 text-center inline-flex items-center gap-2 text-[#1e242a] bg-[#f8e5c6] rounded-md font-semibold hover:bg-[#f4cf8b] transition duration-200"
                >
                    <Icon name="simple-icons:gofundme" />
                    <span>GoFundMe</span>
                </NuxtLink>
            </div>

            <p>
                Zo wilde ze dat haar afscheid niet alleen in het teken zou staan
                van een laatste groet aan haar, maar ook in het teken van de
                toekomst die zij het liefst voor haar kinderen en andere vrouwen
                zou zien.
            </p>

            <p>
                De opbrengst van deze actie zullen we 50/50 verdelen tussen een
                klein studiefonds voor de kids en
                <NuxtLink
                    class="text-[#779273] hover:text-[#556d51] underline transition transition-duration-200"
                    href="https://www.womeninc.nl"
                    target="_blank"
                    >Women Inc</NuxtLink
                >. Precies zoals Annemarie dat zou hebben gewild. De schat.
            </p>

            <p>
                Deel deze actie gerust onder geliefden en bekenden maar hou het
                van social media af s.v.p.
            </p>

            <p>Dank namens iedereen, maar vooral Annemarie.</p>

            <h2 class="text-2xl lg:text-3xl font-bold mt-4 text-[#1e242a]">
                Muziek
            </h2>
            <p>
                Muziek die Annemarie tot haar laatste momenten met haar meenam:
            </p>

            <div class="inline-flex justify-center gap-3 center center mb-4">
                <NuxtLink
                    href="https://open.spotify.com/playlist/4X1poonxdifniNlDEeb7pa"
                    target="_blank"
                    class="py-3 px-5 text-center inline-flex items-center gap-2 text-[#1e242a] bg-[#aebfab] rounded-md font-semibold hover:bg-[#95a892] transition duration-200"
                >
                    <Icon name="mdi:spotify" />
                    <span>Milky</span>
                </NuxtLink>

                <NuxtLink
                    href="https://open.spotify.com/playlist/0t783nLbcLSROTzDwd5LOT"
                    target="_blank"
                    class="py-3 px-5 text-center inline-flex items-center gap-2 text-[#1e242a] bg-[#aebfab] rounded-md font-semibold hover:bg-[#95a892] transition duration-200"
                >
                    <Icon name="mdi:spotify" />
                    <span>Ann's Lijstje</span>
                </NuxtLink>
            </div>

            <h2 class="text-2xl lg:text-3xl font-bold mt-4 text-[#1e242a]">
                Artikelen
            </h2>
            <p>
                Twee artikelen die Annemarie, zo hebben wij later geleerd via
                haar brieven, hebben geholpen het een en ander in perspectief te
                zetten en te begrijpen wat er met haar gebeurde en hoe wij hier
                vervolgens mee om zouden kunnen gaan.
            </p>

            <p class="mt-4">
                In dit artikel bespreekt de auteur de druk die moeders voelen om
                de perfecte moeder te zijn en dat dit ten koste kan gaan van hun
                eigen gezondheid. Ook stelt hij dat moederschap juist geen
                beschermende factor is tegen zelfdoding, maar juist een
                mogelijke katalysator.
            </p>
            <div class="inline-flex justify-center gap-3 center center mb-4">
                <NuxtLink
                    href="https://journals.sagepub.com/doi/10.1177/10778012241265365"
                    target="_blank"
                    class="py-3 px-5 text-center inline-flex items-center gap-2 text-[#1e242a] bg-[#f8e5c6] rounded-md font-semibold hover:bg-[#f4cf8b] transition duration-200"
                >
                    <Icon name="iconoir:journal" />
                    <span>Sage Journals</span>
                </NuxtLink>
            </div>

            <p>
                Tenslotte een mooi artikel waarvan zij hoopte dat alle mensen om
                haar heen het zouden lezen en hen rust zou kunnen geven. Niet
                elke suïcide kan voorkomen worden; depressie is soms een
                ongeneeslijke en dodelijke ziekte.
            </p>

            <div class="inline-flex justify-center gap-3 center center mb-4">
                <NuxtLink
                    href="https://speakingofsuicide.com/2024/09/23/not-always-preventable/"
                    target="_blank"
                    class="py-3 px-5 text-center inline-flex items-center gap-2 text-[#1e242a] bg-[#f8e5c6] rounded-md font-semibold hover:bg-[#f4cf8b] transition duration-200"
                >
                    <Icon name="iconoir:journal" />
                    <span>Speaking of Suicide</span>
                </NuxtLink>
            </div>
        </div>
    </LandingContainer>
</template>
