<template>
  <div class="guide-question">
    <div class="question" v-for="(item, index) in questions" :key="index">
      <h4>{{ index + 1 }}.{{ item.question }}</h4>
      <p v-for="(answer, index2) in item.answer.split(';')" :key="index2">
        {{ answer }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  props: {
    questions: {
      type: Array,
      required: true
    }
  },
  setup() {
    return {}
  }
})
</script>

<style lang="less" scoped>
.guide-question {
  margin-bottom: 1.2821rem;
}
.question {
  // height: 4.1026rem;
  padding: 0.2564rem 0.9231rem;
  border-top: 1px solid #333;
  &:nth-last-of-type(1) {
    border-bottom: 1px solid #333;
  }
  h4 {
    margin: 0.2564rem 0;
    font-size: 0.5128rem;
  }
  p {
    font-size: 0.4103rem;
    line-height: 0.5128rem;
  }
}
</style>
