<template>
  <div class="product-detail-main">
    <product-detail-info
      @orderShowChange="orderShowChange"
      :currentProducts="[productDetail]"
      :currentIndex="0"
    >
      <template #order>
        <van-overlay
          class="my-overlay"
          :show="isOrderShow"
          @click="isOrderShow = false"
        >
          <div class="wrapper" @click.stop>
            <order-detail
              :productDetail="productDetail"
              @orderShowChange="orderShowChange"
            />
          </div>
        </van-overlay>
      </template>
    </product-detail-info>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"

import ProductDetailInfo from "@/components/product-detail-info"
import OrderDetail from "./order-detail.vue"

export default defineComponent({
  components: {
    ProductDetailInfo,
    OrderDetail
  },
  props: ["productDetail"],
  setup() {
    const isOrderShow = ref(false)
    const orderShowChange = (flag: boolean) => {
      isOrderShow.value = flag
    }
    return {
      isOrderShow,
      orderShowChange
    }
  }
})
</script>

<style lang="less" scoped>
.product-detail-main {
  margin-top: 1.0256rem;
  border-top: 1px solid #e1e1e1;
  border-bottom: 1px solid #e1e1e1;
  .my-overlay {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
}
</style>
