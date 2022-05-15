<template>
  <div class="product-list-select">
    <div
      class="select-item"
      v-for="(item, index) in selectTypeData"
      :key="index"
      @click="handleSelectClick(index)"
    >
      <span class="label">{{ item.options[item.activeIndex].label }}</span>
      <i
        :class="{
          'lower-triangle': !isShow || showIndex !== index,
          'upper-triangle': showIndex === index && isShow
        }"
      ></i>
    </div>
    <van-popup v-model:show="isShow" round position="bottom">
      <van-picker
        :title="selectTypeData[showIndex].label"
        :defaultIndex="1"
        :columns="selectTypeData[showIndex].options?.map((item) => item.label)"
        @confirm="handleConfirm"
        @cancel="isShow = false"
      />
    </van-popup>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"

export default defineComponent({
  props: {
    selectTypeConfig: {
      type: Array,
      required: true
    }
  },
  emits: ["selectOptionsChange"],
  setup(props, { emit }) {
    let isShow = ref(false)
    let showIndex = ref(0)
    const selectTypeData = ref(
      JSON.parse(JSON.stringify(props.selectTypeConfig))
    )

    const handleSelectClick = (index: number) => {
      isShow.value = true
      showIndex.value = index
    }

    const handleConfirm = (value: string, index: number) => {
      // console.log(value, index)
      selectTypeData.value[showIndex.value].activeIndex = index
      isShow.value = false
      const selectOptions = selectTypeData.value.map(
        (item: any) => item.options[item.activeIndex].value
      )
      emit("selectOptionsChange", ...selectOptions)
    }
    return {
      isShow,
      showIndex,
      selectTypeData,
      handleSelectClick,
      handleConfirm
    }
  }
})
</script>

<style lang="less" scoped>
.product-list-select {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.2564rem 0;
  .select-item {
    display: flex;
    align-items: center;
    padding: 0.2564rem 0.5128rem;
    border-radius: 0.4359rem;
    background-color: #eee;
    .label {
      font-size: 0.359rem;
      padding-right: 0.0769rem;
    }
  }
}
.lower-triangle {
  border: 0.1795rem solid transparent;
  border-top-color: #a8abb2;
  margin-top: 0.1795rem;
}
.upper-triangle {
  border: 0.1795rem solid transparent;
  border-bottom-color: #a8abb2;
  margin-bottom: 0.1795rem;
}
</style>
