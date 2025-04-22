<script setup>
definePageMeta({
  layout: "landing",
});
const title = ref("Mijn wensen");
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
