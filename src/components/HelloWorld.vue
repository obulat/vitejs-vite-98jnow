<script setup>
import { computed, ref } from 'vue';
import Question from './Question.vue';

import questions from '../assets/ortaokul_isbo_2022.json';
import rawQuestions from '../assets/raw/ortaokul_isbo_2022.json';

defineProps({
  msg: String,
});

// const rawquestions = computed(() => {
//   return rawQuestions; //.map((q) => { ... q, 'question': await convertMdToHtml(q['question'])}
// });

const zippedQ = computed(() => {
  const q = [];
  for (let i = 0; i < questions.length; i++) {
    q.push({ q: questions[i], qRaw: rawQuestions[i] });
  }
  return q;
});

console.log('questions: ', zippedQ.value);

const score = ref(0);
</script>

<template>
  <h1>2022 ISBO Ortaokul Bilgisayar Olimpiyati</h1>

  <div>
    <p>Kendini dene!</p>
  </div>

  <p>Puanin: {{ score }}</p>

  <section class="questions">
    <Question
      v-for="{ q, qRaw } in zippedQ"
      :key="`${q.subject}-${q.number}`"
      :q="q"
      :qRaw="qRaw"
    />
  </section>
</template>

<style scoped>
.questions {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.read-the-docs {
  color: #888;
}
</style>
