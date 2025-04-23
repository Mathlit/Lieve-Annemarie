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
    </LandingContainer>
</template>
