<template>
  <div>
    <div class="wrap">
      <van-empty
        class="my-empty"
        image="error"
        description="页面不存在，请检查输入的网址~"
      />
    </div>
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
div {
  height: calc(100vh - 4rem);
  display: flex;
  align-items: center;
  .wrap {
    .my-empty {
      width: 100vw;
      /deep/ .van-empty__description {
        font-size: 0.4103rem;
      }
    }
  }
}
</style>
