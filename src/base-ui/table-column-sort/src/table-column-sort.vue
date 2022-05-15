<template>
  <div class="zc-table-column-sort">
    <div
      class="sort-option"
      v-for="(option, index) in sortOptionsOriginData"
      :key="option.name"
    >
      <!-- 排序条件名称 -->
      <span class="label">{{ option.label }}</span>
      <!-- 上三角 下三角 -->
      <span class="caret-wrapper">
        <i
          :class="{ 'ascending-active': option.state === SortType.ASCENDING }"
          class="ascending"
          @click="handleSortBtnClick(option.prop, index, SortType.ASCENDING)"
        ></i>
        <i
          :class="{ 'descending-active': option.state === SortType.DESCENDING }"
          class="descending"
          @click="handleSortBtnClick(option.prop, index, SortType.DESCENDING)"
        ></i>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"

export default defineComponent({
  props: {
    // 排序条件配置信息
    sortOptions: {
      type: Array,
      default: () => []
    }
  },
  emits: ["sortOptionsChange"], // 通知父组件排序配置改变
  setup(props, { emit }) {
    // 为了不违反单向数据流 新建一个排序配置数据
    const sortOptionsOriginData = ref(
      JSON.parse(JSON.stringify(props.sortOptions))
    )
    // 排序类型
    enum SortType {
      UNSORTED = 0,
      ASCENDING = 1,
      DESCENDING = 2
    }
    // 初始化 置state为0
    const originOptions = () => {
      sortOptionsOriginData.value.forEach((option: any) => {
        option["state"] = SortType.UNSORTED
      })
    }

    originOptions()

    // 排序按钮点击
    const handleSortBtnClick = (prop: string, index: number, state: number) => {
      // 再次点击则取消
      if (sortOptionsOriginData.value[index].state === state) {
        sortOptionsOriginData.value[index].state = SortType.UNSORTED
        emit("sortOptionsChange", prop, state)
        return
      }

      originOptions()
      sortOptionsOriginData.value[index].state = state
      emit("sortOptionsChange", prop, state)
    }

    return {
      SortType,
      sortOptionsOriginData,
      handleSortBtnClick
    }
  }
})
</script>

<style lang="less" scoped>
.zc-table-column-sort {
  display: flex;
  padding: 0.1282rem 0;
  .sort-option {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    .label {
      font-size: 0.3077rem;
      color: #b8b8b8;
      padding-right: 0.1282rem;
    }
    .caret-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      // 升序上三角
      .ascending {
        border: 0.1282rem solid transparent;
        border-bottom-color: #a8abb2;
        margin-bottom: 0.0256rem;
      }
      // 降序下三角
      .descending {
        border: 0.1282rem solid transparent;
        border-top-color: #a8abb2;
        margin-top: 0.0256rem;
      }
      // 升序上三角点击样式
      .ascending-active {
        border-bottom-color: #91bef4;
      }
      // 降序下三角点击样式
      .descending-active {
        border-top-color: #91bef4;
      }
    }
  }
}
</style>
