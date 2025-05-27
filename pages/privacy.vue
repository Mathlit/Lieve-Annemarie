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
                respecteren de privacy van alle bezoekers en gaan zorgvuldig om
                met eventuele gegevens die via deze site worden verstrekt.
            </p>

            <ul class="list-disc pl-6">
                <li>
                    Wij maken geen gebruik van cookies, trackingsoftware of
                    analytische diensten.
                </li>
                <li>
                    Er worden geen gegevens automatisch verzameld of gedeeld met
                    derden.
                </li>
                <li>
                    Bezoekers kunnen indien gewenst een reactie achterlaten op
                    de website. Deze reacties worden
                    <strong
                        >handmatig beoordeeld en pas na goedkeuring
                        gepubliceerd</strong
                    >.
                </li>
                <li>
                    Bij het achterlaten van een reactie kan vrijwillig een naam
                    of boodschap worden ingevuld. Deze informatie wordt
                    uitsluitend gebruikt voor weergave op de website.
                </li>
                <li>
                    Er is geen koppeling met externe diensten of sociale media.
                </li>
            </ul>
            <p>
                Deze website heeft geen commercieel doel en verwerkt uitsluitend
                informatie die bezoekers zelf vrijwillig delen.
            </p>
            <p>
                Op termijn worden de geplaatste reacties gebundeld in een fysiek
                boek dat aan de familie wordt overhandigd.
                <strong
                    >De reacties zullen niet voor andere doeleinden worden
                    gebruikt of online worden gedeeld</strong
                >.
            </p>
            <p>
                Mocht u een geplaatste reactie willen aanpassen of laten
                verwijderen, dan kunt u hiervoor het bestaande reactieformulier
                gebruiken. Vermeld in uw bericht duidelijk dat het om een
                verwijder- of wijzigingsverzoek gaat. Wij vragen u daarbij om
                een e-mailadres bij uw bericht toe te voegen, zodat wij contact
                met u kunnen opnemen over uw verzoek. Dit e-mailadres wordt
                uitsluitend voor dat doel gebruikt.
            </p>
        </div>
    </LandingContainer>
</template>
