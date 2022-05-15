<template>
  <div class="product-list">
    <nav-title title="产品列表" />
    <van-search
      v-model.lazy="payload.keyWords"
      placeholder="请输入搜索关键词"
    />
    <product-list-select
      @selectOptionsChange="selectOptionsChange"
      :selectTypeConfig="selectTypeConfig"
    />

    <zc-table-column-sort
      @sortOptionsChange="sortOptionsChange"
      :sortOptions="sortOptionsConfig"
    />
    <product-list-detail :productList="productList?.data" />
    <van-pagination
      class="my-pagination"
      v-model="payload.curPage"
      :total-items="productList?.total_records ?? 1"
      :page-count="productList?.total_pages ?? 1"
      force-ellipses
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from "vue"
import { useStore } from "vuex"

import NavTitle from "@/components/nav-title"
import ZcTableColumnSort from "@/base-ui/table-column-sort"
import ProductListSelect from "./cpns/product-list-select.vue"
import ProductListDetail from "./cpns/product-list-detail.vue"

import { sortOptionsConfig } from "./config/sort.config"
import { selectTypeConfig } from "./config/select.config"

export default defineComponent({
  components: {
    NavTitle,
    ZcTableColumnSort,
    ProductListSelect,
    ProductListDetail
  },
  setup() {
    const store = useStore()
    // 搜索产品列表的初始化条件
    const payload = ref({
      keyWords: "",
      initialAmount: "-1",
      deadLine: "-1",
      riskRating: "",
      selectType: "", // 排序字段名称
      state: 0, // 排序类型 0不排序 1升序 2降序
      curPage: 1,
      pageSize: 5
    })

    const sortOptionsChange = (prop: string, state: number) => {
      payload.value.selectType = prop
      payload.value.state = state
    }
    const selectOptionsChange = (
      initialAmount: string,
      deadLine: string,
      riskRating: string
    ) => {
      payload.value.initialAmount = initialAmount
      payload.value.deadLine = deadLine
      payload.value.riskRating = riskRating
    }
    watch(
      payload.value,
      () => {
        store.dispatch("product/getProductListAction", payload.value)
      },
      { deep: true, immediate: true }
    )

    const productList = computed(() => store.state.product.productList)

    return {
      payload,
      productList,
      sortOptionsConfig,
      selectTypeConfig,
      sortOptionsChange,
      selectOptionsChange
    }
  }
})
</script>

<style lang="less" scoped>
.my-pagination {
  margin: 0.3846rem 0;
}
</style>
