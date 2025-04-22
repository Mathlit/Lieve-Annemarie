<script setup>
definePageMeta({
    layout: "landing",
});
const title = ref("Mijn verhaal");
</script>

<template>
    <Title>{{ title }} - Lieve Annemarie</Title>
    <LandingContainer>
        <LandingSectionhead>
            <template v-slot:title>{{ title }}</template>
            <!-- <template v-slot:desc></template> -->
        </LandingSectionhead>

        <div
            class="flex flex-col gap-3 mt-16 text-slate-500 text-lg leading-relaxed text-center"
        >
            <p>
                Het spijt me zo. Ik heb dit ook niet gewild. Maar er is voor mij
                geen andere uitweg meer.
            </p>
            <p>
                Zoals Billie Eilish zong:
                <em class="italic"
                    >I had a dream - that I had everything I wanted</em
                >
            </p>

            <p>
                Ik had een geweldig leven - tot ik het niet meer had. Een paar
                maanden geleden belandde ik in een nachtmerrie. Een nachtmerrie
                die niet over is als je wakker wordt, maar dan juist begint. Een
                nachtmerrie die steeds erger wordt. Er is geen weg terug.
            </p>

            <p>
                Ik weet dat jullie van mij houden. Maar ik houd niet meer van
                mezelf.
            </p>

            <p>
                Ik wil dat niemand zich schuldig voelt. Niemand had dit kunnen
                voorkomen. Jullie hebben er alles aan gedaan om mij te helpen.
                Jullie stelden je hart en huis voor me open, er werd naar me
                geluisterd, ik heb therapie gehad, medicatie - maar het is te
                laat. De laatste maanden van 2024 waren traumatisch en hebben
                mij als persoon veranderd. Ik kan het niet meer verwerken.
            </p>
        </div>
    </LandingContainer>
</template>
