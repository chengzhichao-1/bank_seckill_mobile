<template>
  <div class="product-detail">
    <nav-title title="产品详情" />
    <product-detail-main :productDetail="productDetail" />
    <product-detail-other :productName="productDetail?.name" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import { useStore } from "vuex"
import { useRoute } from "vue-router"

import NavTitle from "@/components/nav-title"
import ProductDetailMain from "./cpns/product-detail-main.vue"
import ProductDetailOther from "./cpns/product-detail-other.vue"

export default defineComponent({
  components: {
    NavTitle,
    ProductDetailMain,
    ProductDetailOther
  },
  setup() {
    const route = useRoute()
    const store = useStore()

    const productDetail = ref({})

    const productId = route.params.id
    const res = store.dispatch("product/getProductDetailAction", {
      id: productId
    })
    res.then((res) => {
      console.log(res)
      productDetail.value = res
    })
    return {
      productDetail
    }
  }
})
</script>

<style lang="less" scoped></style>
