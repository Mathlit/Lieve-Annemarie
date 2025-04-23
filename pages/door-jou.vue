<script setup>
const title = ref("Door Jou");

definePageMeta({
    layout: "landing",
});

const { data: comments } = await useFetch(`/api/comments`);

// Popup and form state
const showForm = ref(false);
const naam = ref("");
const bericht = ref("");
const isSubmitting = ref(false);
const submittedMessage = ref(null);
const apiFeedback = ref({ status: "", message: "" });

const submitForm = async () => {
    isSubmitting.value = true;
    apiFeedback.value = { status: "", message: "" };

    try {
        const { data, error } = await useFetch(`/api/comment`, {
            method: "POST",
            body: {
                naam: naam.value,
                bericht: bericht.value,
            },
        });

        if (error.value) {
            apiFeedback.value = {
                status: "error",
                message: "Er is een fout opgetreden bij het versturen.",
            };
            isSubmitting.value = false;
        } else if (data.value?.status === "success") {
            apiFeedback.value = {
                status: "success",
                message: data.value.message,
            };
            submittedMessage.value = {
                naam: naam.value,
                bericht: bericht.value,
            };
            // Reset inputs
            naam.value = "";
            bericht.value = "";
        } else {
            apiFeedback.value = {
                status: "error",
                message: data.value?.message || "Onbekende fout",
            };
        }
    } catch (e) {
        apiFeedback.value = {
            status: "error",
            message: "Netwerkfout. Probeer het opnieuw.",
        };
    } finally {
        // isSubmitting.value = false;
    }
};
</script>

<template>
    <Title>{{ title }} - Lieve Annemarie</Title>
    <LandingContainer>
        <LandingSectionhead>
            <template v-slot:title>{{ title }}</template>
            <template v-slot:desc>Deel en lees steunbetuigingen en berichten voor Annemarie.</template>
        </LandingSectionhead>
    </LandingContainer>

    <LandingContainer>
        <!-- Trigger -->
        <div class="flex justify-center mt-4">
            <span
                class="inline-block px-4 py-2 cursor-pointer rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 bg-white border-2 border-grey-900 hover:bg-gray-100 text-black"
                @click="showForm = true"
            >
                Schrijf een bericht
            </span>
        </div>

        <!-- Form Popup -->
        <div
            v-if="showForm"
            class="mt-8 p-6 bg-white rounded-2xl shadow-xl border max-w-xl mx-auto"
        >
            <form @submit.prevent="submitForm" class="space-y-4">
                <div class="flex justify-end">
                    <button
                        type="button"
                        class="text-slate-500 hover:text-slate-800"
                        @click="showForm = false"
                    >
                        Sluiten
                    </button>
                </div>
                <div>
                    <label class="block text-sm font-medium text-slate-700">
                        Naam
                    </label>
                    <input
                        type="text"
                        v-model="naam"
                        autofocus
                        :disabled="isSubmitting"
                        class="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 shadow-sm focus:outline-none focus:ring focus:ring-blue-200 disabled:bg-slate-100"
                        required
                    />
                </div>
                <div>
                    <label class="block text-sm font-medium text-slate-700">
                        Bericht
                    </label>
                    <textarea
                        v-model="bericht"
                        :disabled="isSubmitting"
                        class="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 shadow-sm focus:outline-none focus:ring focus:ring-blue-200 disabled:bg-slate-100"
                        rows="4"
                        required
                    ></textarea>
                </div>
                <div class="flex justify-between items-center">
                    <button
                        type="submit"
                        class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
                        :disabled="isSubmitting"
                    >
                        Verzenden
                    </button>
                </div>
            </form>

            <!-- Feedback message -->
            <div v-if="apiFeedback.message" class="mt-4">
                <p
                    :class="[
                        'text-sm',
                        apiFeedback.status === 'success'
                            ? 'text-green-600'
                            : 'text-red-600',
                    ]"
                >
                    {{ apiFeedback.message }}
                </p>
            </div>

            <!-- Show submitted message -->
            <div
                v-if="submittedMessage"
                class="mt-6 p-4 border-t border-slate-200"
            >
                <p class="text-sm text-slate-700">
                    <strong>{{ submittedMessage.naam }}</strong>
                    {{ submittedMessage.datum }}:
                </p>
                <p class="mt-2 text-slate-800">
                    {{ submittedMessage.bericht }}
                </p>
            </div>
        </div>
    </LandingContainer>

    <!-- Existing comments -->
    <LandingContainer class="mt-12">
        <div class="flex justify-center" v-if="!comments.length">
            <span>Er zijn nog geen berichten geplaatst</span>
        </div>

        <ul class="mt-12px-5 space-y-6 mb-12" v-if="comments">
            <li
                v-for="comment in comments"
                :key="comment.id"
                class="p-4 border border-slate-200 rounded-lg bg-white shadow-sm"
            >
                <div class="text-sm text-slate-500 mb-1">
                    {{ comment.naam }} – {{ comment.datum }}
                </div>
                <div class="text-slate-800">
                    <p
                        v-for="(para, i) in comment.bericht.split('\n')"
                        :key="i"
                        class="mb-2 whitespace-pre-line"
                    >
                        {{ para }}
                    </p>
                </div>
            </li>
        </ul>
    </LandingContainer>
</template>
