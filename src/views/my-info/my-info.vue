<template>
  <div class="my-info">
    <nav-title title="我的资料" />
    <my-info-account />
    <my-info-base />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

import NavTitle from "@/components/nav-title"
import MyInfoAccount from "./cpns/my-info-account.vue"
import MyInfoBase from "./cpns/my-info-base.vue"

export default defineComponent({
  components: {
    NavTitle,
    MyInfoAccount,
    MyInfoBase
  },
  setup() {
    return {}
  }
})
</script>

<style lang="less" scoped></style>
