<script setup>
import { computed, ref } from 'vue';

const props = defineProps({
  q: Object,
  qRaw: Object,
});

const answered = ref(false);
const status = ref(undefined);

const handleInput = (variant) => {
  if (answered.value) return;
  console.log('q in handle input: ', props.q);
  status.value = variant === props.q.answer ? 'correct' : 'incorrect';
};
</script>

<template>
  <p class="number">{{ q.number }}</p>
  <VueShowdown :markdown="qRaw.question" :extensions="['showdownHighlight']" />

  <form class="anwers">
    <label
      v-for="(a, symb) in q.answers"
      :key="symb"
      class="answer"
      :class="status"
    >
      <input
        type="radio"
        @change="handleInput(symb)"
        class="input"
        :name="`${q.subject}-${q.number}`"
        :value="symb"
      />
      <span class="symb">{{ symb }}</span
      ><span>{{ a }}</span>
    </label>
  </form>
</template>

<style scoped>
.number {
  text-align: left;
}
form {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  text-align: left;
  gap: 8px;
}
.answer {
  border-radius: 4px;
  display: flex;
  gap: 8px;
  justify-items: flex-start;
}

.input {
  appearance: none;
}
.symb {
  height: 26px;
  width: 26px;
  text-align: center;
  margin-inline-end: 8px;
  border: 1px solid #eeeeee;
  border-radius: 50%;
}
input[type='radio']:checked ~ .symb {
  border-color: black;
}

.answer.correct input[type='radio']:checked ~ .symb {
  border-color: green;
}
.answer.incorrect input[type='radio']:checked ~ .symb {
  border-color: red;
}
</style>
