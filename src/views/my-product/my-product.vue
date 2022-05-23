<template>
  <div class="my-product">
    <nav-title title="我的秒杀" />
    <div class="module-choice">
      <span
        @click="orderTimeState = 0"
        :class="{ active: orderTimeState === 0 }"
        >全部</span
      >
      <span
        @click="orderTimeState = 1"
        :class="{ active: orderTimeState === 1 }"
        >进行中</span
      >
      <span
        @click="orderTimeState = 2"
        :class="{ active: orderTimeState === 2 }"
        >已结束</span
      >
    </div>

    <div class="time-select">
      <van-field
        v-model="startDate"
        placeholder="起始时间"
        @click=";(showPicker = true) && (pickerType = 'startDate')"
      />
      <van-field
        v-model="endDate"
        placeholder="结束时间"
        @click=";(showPicker = true) && (pickerType = 'endDate')"
      />
    </div>
    <van-popup v-model:show="showPicker" position="bottom">
      <van-datetime-picker
        type="date"
        title="选择年月日"
        :min-date="new Date(2021, 0, 1)"
        :max-date="new Date()"
        @confirm="(value) => handleConfirm(value, pickerType)"
        @cancel="showPicker = false"
      />
    </van-popup>

    <van-field class="my-field" name="radio" label="支付状态">
      <template #input>
        <van-radio-group v-model="orderPaymentState" direction="horizontal">
          <van-radio checked-color="var(--theme-color)" :name="0"
            >全部</van-radio
          >
          <van-radio checked-color="var(--theme-color)" :name="1"
            >已支付</van-radio
          >
          <van-radio checked-color="var(--theme-color)" :name="2"
            >未支付</van-radio
          >
        </van-radio-group>
      </template>
    </van-field>

    <my-product-detail
      @curPageChange="curPageChange"
      :curPage="curPage"
      :pageSize="pageSize"
      :myProductList="myProductList"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, ref, watch } from "vue"
import { useStore } from "vuex"
import NavTitle from "@/components/nav-title"
import MyProductDetail from "./cpns/my-product-detail.vue"

import { formatTime } from "@/utils/date-format"
import localCache from "@/utils/cache"

export default defineComponent({
  components: {
    NavTitle,
    MyProductDetail
  },
  setup() {
    const showPicker = ref(false)
    const pickerType = ref("startDate")
    const myProductList = ref({})
    const payload = reactive({
      orderTimeState: 0,
      orderPaymentState: 0,
      startDate: "",
      endDate: "",
      curPage: 1,
      pageSize: 3,
      customerID: localCache.getCache("userBaseInfo").customerNumber
    })
    const store = useStore()

    watch(
      payload,
      () => {
        // const newPayload = { ...payload }
        // newPayload.startDate =
        const res = store.dispatch("login/getMyProductListAction", payload)
        res.then((res) => {
          console.log(res)
          myProductList.value = res
        })
      },
      {
        deep: true,
        immediate: true
      }
    )

    const handleConfirm = (
      value: Date,
      pickerType: "startDate" | "endDate"
    ) => {
      console.log(value, pickerType)
      payload[pickerType] = formatTime(value.getTime())
      showPicker.value = false
    }
    const curPageChange = (curPage: number) => {
      payload.curPage = curPage
    }
    return {
      ...toRefs(payload),
      showPicker,
      pickerType,
      myProductList,
      handleConfirm,
      curPageChange
    }
  }
})
</script>

<style lang="less" scoped>
.my-product {
  .module-choice {
    display: flex;
    align-items: center;
    font-size: 0.4359rem;
    height: 2.0513rem;
    color: #b8b8b8;
    text-align: center;
    span {
      flex: 1;
      border-right: 0.0769rem solid #b8b8b8;
      &:nth-last-of-type(1) {
        border-right: 0;
      }
    }
  }
  .time-select {
    display: flex;
    /deep/ .van-cell {
      height: 1.1795rem;
      // border: 1px solid #666;
      background-color: #f3f3f3;
      border-radius: 0.5897rem;
      margin: 0 0.5128rem;
    }
    /deep/ .van-field__control {
      text-align: center;
    }
  }
  .my-field {
    margin: 0.3846rem 0.2564rem;
    /deep/ .van-cell__value {
      font-size: 0.3333rem;
    }
  }
}

.active {
  position: relative;
  color: var(--theme-color);
  font-weight: 550;
  &::after {
    position: absolute;
    left: 50%;
    bottom: -0.2564rem;
    transform: translateX(-50%);
    width: 1.2821rem;
    border-bottom: 1px solid var(--theme-color);
  }
}
</style>
