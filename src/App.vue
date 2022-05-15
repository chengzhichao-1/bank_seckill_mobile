<template>
  <nav-header />
  <router-view />
  <nav-footer />
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

<style lang="less" scoped></style>
