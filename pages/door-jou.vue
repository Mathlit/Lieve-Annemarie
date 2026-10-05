<script setup>
const title = ref("Door Jou");

definePageMeta({
  layout: "landing",
});

const { data: comments } = await useFetch(`/api/comments`);

const commentClass = {
  container: [`space-y-6`],
  comment: [``],
};

const commentsPerPage = ref(10);
const visibleCount = ref(commentsPerPage.value);

const showMore = () => {
  visibleCount.value += commentsPerPage.value;
};

const visibleComments = computed(() =>
  (comments.value || []).slice(0, visibleCount.value),
);
</script>

<template>
  <Title>{{ title }} - Lieve Annemarie</Title>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>{{ title }}</template>
      <template v-slot:desc
        >Lees hier steunbetuigingen en berichten voor Annemarie.</template
      >
    </LandingSectionhead>
  </LandingContainer>

  <!-- Existing comments -->
  <LandingContainer class="mt-12">
    <div class="flex justify-center" v-if="!comments.length">
      <span>Er zijn nog geen berichten geplaatst</span>
    </div>

    <ul :class="['mt-12', 'mb-12', ...commentClass.container]" v-if="comments">
      <li
        v-for="comment in visibleComments"
        :key="comment.id"
        :class="[
          'p-4',
          'border',
          'border-slate-200',
          'rounded-lg',
          'bg-white shadow-sm',
          ...commentClass.comment,
        ]"
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
    <div
      class="flex justify-center mb-12"
      v-if="visibleCount < comments.length"
    >
      <button
        @click="showMore"
        class="px-6 py-2 text-sm font-medium rounded text-center focus-visible:ring-2 ring-offset-2 ring-gray-200 bg-white border-2 border-grey-900 hover:bg-gray-100 text-black transition"
      >
        Lees meer reacties
      </button>
    </div>
  </LandingContainer>
</template>
