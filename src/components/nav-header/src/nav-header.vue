<template>
  <div class="nav-header">
    <div class="icon-title">
      <img src="~@/assets/img/logo.png" alt="logo" />
      <h3>三湘银行秒杀系统</h3>
    </div>
    <van-icon color="#fff" name="apps-o" size="0.64rem" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style lang="less" scoped>
.nav-header {
  display: flex;
  justify-content: space-around;
  height: 1.5385rem;
  align-items: center;
  background-color: #0d0d0d;
  .icon-title {
    display: flex;
    align-items: center;
    img {
      width: 0.8205rem;
      height: 0.8205rem;
    }
    h3 {
      padding-left: 0.3077rem;
      font-size: 0.5128rem;
      font-weight: 550;
      color: #fff;
    }
  }
}
</style>
