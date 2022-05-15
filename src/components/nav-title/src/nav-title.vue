<template>
  <div class="nav-title">{{ title }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup() {
    return {}
  }
})
</script>

<style lang="less" scoped>
.nav-title {
  padding: 0 0.9231rem;
  height: 1.0256rem;
  line-height: 1.0256rem;
  font-size: 0.4103rem;
  color: #aaa;
  border-bottom: 1px solid #aaa;
}
</style>
