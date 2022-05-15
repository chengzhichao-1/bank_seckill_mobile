<template>
  <div class="guide">
    <nav-title title="服务指南" />
    <div class="module-choice">
      <span @click="choice = 0" :class="{ active: choice === 0 }"
        >服务指南</span
      >
      <span @click="choice = 1" :class="{ active: choice === 1 }"
        >常见问题</span
      >
    </div>
    <guide-manual v-if="choice === 0" />
    <guide-question :questions="questions" v-if="choice === 1" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue"
import NavTitle from "@/components/nav-title"
import GuideManual from "./cpns/guide-manual.vue"
import GuideQuestion from "./cpns/guide-question.vue"
import { useStore } from "vuex"

export default defineComponent({
  components: {
    NavTitle,
    GuideManual,
    GuideQuestion
  },
  setup() {
    const choice = ref(0)
    const store = useStore()
    store.dispatch("guide/getQuestionsAction")

    const questions = computed(() => store.state.guide.questions)

    return {
      choice,
      questions
    }
  }
})
</script>

<style lang="less" scoped>
.module-choice {
  display: flex;
  height: 0.6154rem;
  font-size: 0.4615rem;
  text-align: center;
  margin: 0.7692rem 0;
  span {
    flex: 1;
    &:nth-child(1) {
      border-right: 1px solid #000;
    }
  }
}
.active {
  color: var(--theme-color);
  position: relative;
  &::after {
    position: absolute;
    content: "";
    width: 0.8205rem;
    border-bottom: 1px solid var(--theme-color);
    left: 50%;
    bottom: -0.3077rem;
    transform: translateX(-50%);
  }
}
</style>
