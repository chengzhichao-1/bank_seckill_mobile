<template>
  <nav-header class="top" />
  <router-view class="content" />
  <nav-footer
    v-if="$route.fullPath !== '/login' && $route.fullPath !== '/register'"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue"
import NavHeader from "@/components/nav-header"
import NavFooter from "@/components/nav-footer"

export default defineComponent({
  components: {
    NavHeader,
    NavFooter
  },
  setup() {
    return {}
  }
})
</script>

<style lang="less" scoped>
.top {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100vw;
}
.content {
  margin-top: 1.5385rem;
}
</style>
