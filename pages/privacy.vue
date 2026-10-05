<script setup>
const title = ref("Privacyverklaring");

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
      class="flex flex-col gap-4 mt-16 text-slate-800 text-lg leading-relaxed text-left"
    >
      <p>
        Deze website is gemaakt ter nagedachtenis aan een dierbare. Wij
        respecteren de privacy van alle bezoekers en gaan zorgvuldig om met
        eventuele gegevens die via deze site worden verstrekt.
      </p>

      <ul class="list-disc pl-6">
        <li>
          Wij maken geen gebruik van cookies, trackingsoftware of analytische
          diensten.
        </li>
        <li>
          Er worden geen gegevens automatisch verzameld of gedeeld met derden.
        </li>
        <li>
          Bezoekers konden indien gewenst een reactie achterlaten op de website.
          Deze reacties zijn handmatig beoordeeld en pas na goedkeuring gepubliceerd.
        </li>
        <li class="ml-4">De mogelijkheid om berichten te plaatsen is inmiddels gedeactiveerd.</li>
        <li>Er is geen koppeling met externe diensten of sociale media.</li>
      </ul>
      <p>
        Deze website heeft geen commercieel doel en verwerkt uitsluitend
        informatie die bezoekers zelf vrijwillig gedeeld hebben.
      </p>
      <p>
        Op termijn worden de geplaatste reacties gebundeld in een fysiek boek
        dat aan de familie wordt overhandigd.
        <strong
          >De reacties zullen niet voor andere doeleinden worden gebruikt of
          online worden gedeeld</strong
        >.
      </p>
    </div>
  </LandingContainer>
</template>
