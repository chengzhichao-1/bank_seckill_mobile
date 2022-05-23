<template>
  <div
    :style="{ border: route.fullPath === '/' ? '1px solid #e1e1e1' : '0' }"
    class="product-detail-info"
    @click="handleProductDetailClick"
  >
    <div class="sec-kill-ing">
      {{
        new Date().getTime() >
        new Date(currentProducts[currentIndex]?.activityStartTime).getTime()
          ? "正在秒杀中"
          : "敬请期待"
      }}
    </div>
    <h4>{{ currentProducts[currentIndex]?.name }}</h4>
    <div class="item">
      发售渠道：{{ currentProducts[currentIndex]?.salesChannels }}
    </div>
    <div class="item">
      起购金额：<strong
        >￥{{ currentProducts[currentIndex]?.initialAmount }}</strong
      >
    </div>
    <div class="item">
      产品期限：<strong>{{ currentProducts[currentIndex]?.deadLine }}天</strong>
    </div>

    <div class="item">
      七日年化收益率：<strong
        >{{ currentProducts[currentIndex]?.rateOfReturn }}%</strong
      >
    </div>
    <div class="item">
      秒杀开始时间：<strong>{{
        currentProducts[currentIndex]?.activityStartTimeFormat?.split(" ")[0]
      }}</strong>
    </div>
    <div class="item">
      秒杀结束时间：<strong>{{
        currentProducts[currentIndex]?.activityEndTimeFormat?.split(" ")[0]
      }}</strong>
    </div>
    <div class="item flex">
      <strong>余量：</strong
      ><van-progress
        class="my-progress"
        color="var(--theme-color)"
        v-if="
          !isNaN(
            parseInt(
              (currentProducts[currentIndex]?.remainAmount /
                currentProducts[currentIndex]?.totalAmount) *
                100
            )
          )
        "
        :percentage="
          parseInt(
            (currentProducts[currentIndex]?.remainAmount /
              currentProducts[currentIndex]?.totalAmount) *
              100
          )
        "
        stroke-width="0.5128rem"
      />
    </div>
    <div class="item">
      <strong>业绩比较基准：</strong
      ><strong class="emphasize"
        >{{ currentProducts[currentIndex]?.rateOfComparative }}%</strong
      >
    </div>
    <div class="btn">
      <div v-if="startOrEnd == '结束'" class="qiang" @click="orderShowChange">
        抢
      </div>
      <div
        class="count-down"
        v-if="
          new Date().getTime() >
          new Date(currentProducts[currentIndex]?.activityStartTime).getTime()
        "
      >
        <div class="key">距离{{ startOrEnd }}</div>
        <div class="value">{{ distanceToDate }}</div>
      </div>
    </div>
    <slot name="order"></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue"
import { useRoute, useRouter } from "vue-router"

export default defineComponent({
  props: {
    currentProducts: {
      type: Array as PropType<any[]>,
      default: () => []
    },
    currentIndex: {
      type: Number,
      default: 0
    }
  },
  emits: ["orderShowChange"],
  setup(props, { emit }) {
    const route = useRoute()
    const router = useRouter()
    console.log(route.fullPath)
    const startOrEnd = ref("结束")
    const distanceToDate = ref("0天00小时00分钟00秒")

    const orderShowChange = () => {
      emit("orderShowChange", true)
    }

    const handleProductDetailClick = () => {
      // 首页的产品被点击 跳转到对应产品详情页
      if (route.fullPath === "/") {
        router.push(
          `/productdetail/${
            props.currentProducts[props.currentIndex].activityID
          }`
        )
      }
    }
    // 计算距离开始/结束时间
    const calcTime = () => {
      let curTime = new Date().getTime(),
        startTime = new Date(
          props.currentProducts[props.currentIndex]?.activityStartTime
        ).getTime(),
        endTime = new Date(
          props.currentProducts[props.currentIndex]?.activityEndTime
        ).getTime(),
        date = 0
      if (curTime - startTime < 0) {
        startOrEnd.value = "开始"
        date = new Date(startTime - curTime).getTime()
      } else {
        startOrEnd.value = "结束"
        date = new Date(endTime - curTime).getTime()
      }
      let days = Math.floor(date / (24 * 3600 * 1000))
      //计算出小时数
      let leave1 = date % (24 * 3600 * 1000) //计算天数后剩余的毫秒数
      let hours = Math.floor(leave1 / (3600 * 1000))
      //计算相差分钟数
      let leave2 = leave1 % (3600 * 1000) //计算小时数后剩余的毫秒数
      let minutes = Math.floor(leave2 / (60 * 1000))
      //计算相差秒数
      let leave3 = leave2 % (60 * 1000) //计算分钟数后剩余的毫秒数
      let seconds = Math.round(leave3 / 1000)
      distanceToDate.value = `${days}天${hours < 10 ? "0" + hours : hours}小时${
        minutes < 10 ? "0" + minutes : minutes
      }分钟${seconds < 10 ? "0" + seconds : seconds}秒`
    }
    setInterval(() => {
      calcTime()
    }, 1000)
    return {
      route,
      startOrEnd,
      distanceToDate,
      handleProductDetailClick,
      orderShowChange
    }
  }
})
</script>

<style lang="less" scoped>
.product-detail-info {
  position: relative;
  margin: 0 0.9231rem;
  padding: 0.3846rem;
  border: 1px solid #e1e1e1;
  .sec-kill-ing {
    position: absolute;
    top: 0.7692rem;
    right: 0.3846rem;
    border: 1px solid var(--theme-color);
    color: var(--theme-color);
    font-size: 0.359rem;
    padding: 0.0513rem;
  }
  h4 {
    font-size: 0.5128rem;
    margin: 0.3846rem 0;
  }
  .item {
    font-size: 0.4103rem;
    height: 0.6154rem;
    line-height: 0.6154rem;
    color: #a4a4a4;
    strong {
      color: #000;
    }
    .emphasize {
      color: var(--theme-color);
      font-size: 0.6667rem;
    }
  }
  .flex {
    display: flex;
    .my-progress {
      flex: 1;
    }
  }
  .btn {
    position: relative;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    margin: 0.2564rem 0;
    height: 2.0513rem;
    .qiang {
      width: 2.0513rem;
      height: 2.0513rem;
      line-height: 2.0513rem;
      text-align: center;
      font-size: 1.0256rem;
      color: #fff;
      font-weight: 550;
      background-color: var(--theme-color);
      border-radius: 50%;
    }
    .count-down {
      position: absolute;
      top: 0;
      left: 0;
      font-size: 0.4103rem;
      .key {
        font-size: 0.4103rem;
      }
      .value {
        margin-top: 0.3846rem;
        padding: 0.3846rem 0.2564rem;
        border-radius: 0.5897rem;
        box-shadow: 0.0256rem 0.0769rem 0.2051rem #ddd;
      }
    }
  }
}
</style>
