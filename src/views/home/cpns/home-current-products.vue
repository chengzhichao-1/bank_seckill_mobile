<template>
  <div class="home-current-products">
    <div class="title">产品预览</div>
    <div class="timer">
      <div
        class="timer-item"
        :class="{ active: index === currentIndex }"
        v-for="(item, index) in currentProducts"
        :key="index"
        @click="handleTimeClick(index)"
      >
        {{ item.time }}
      </div>
    </div>
    <div class="current-product-detail">
      <div class="sec-kill-ing">正在秒杀中</div>
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
        产品期限：<strong
          >{{ currentProducts[currentIndex]?.deadLine }}天</strong
        >
      </div>

      <div class="item">
        七日年化收益率：<strong
          >{{ currentProducts[currentIndex]?.rateOfReturn }}%</strong
        >
      </div>
      <div class="item">
        秒杀开始时间：<strong>{{
          currentProducts[currentIndex]?.activityStartTimeFormat.split(" ")[0]
        }}</strong>
      </div>
      <div class="item">
        秒杀结束时间：<strong>{{
          currentProducts[currentIndex]?.activityEndTimeFormat.split(" ")[0]
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
        <div class="qiang">抢</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"

export default defineComponent({
  props: {
    currentProducts: {
      type: Array,
      required: true
    }
  },
  setup() {
    const currentIndex = ref(0)

    const handleTimeClick = (index: number) => {
      currentIndex.value = index
    }
    return {
      currentIndex,
      handleTimeClick
    }
  }
})
</script>

<style lang="less" scoped>
.home-current-products {
  margin-bottom: 0.7692rem;
  .title {
    position: relative;
    height: 3.0769rem;
    line-height: 3.0769rem;
    color: var(--theme-color);
    font-size: 0.6667rem;
    text-align: center;
    &::after {
      position: absolute;
      left: 50%;
      bottom: 0.7692rem;
      content: "";
      width: 1.641rem;
      transform: translateX(-50%);
      border-bottom: 1px solid var(--theme-color);
    }
  }
  .timer {
    display: flex;
    padding: 0 0.9231rem;
    margin-bottom: 0.5128rem;
    justify-content: space-between;
    align-items: center;
    height: 0.7692rem;
    border-top: 1px solid #e1e1e1;
    border-bottom: 1px solid #e1e1e1;
    .timer-item {
      color: #b1b1b1;
      font-size: 0.359rem;
      text-align: center;
      width: 1.5385rem;
      height: 0.7692rem;
      line-height: 0.7692rem;
    }
  }
  .current-product-detail {
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
      display: flex;
      align-items: center;
      flex-direction: row-reverse;
      margin: 0.2564rem 0;
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
    }
  }
}
.active {
  background-color: var(--theme-color) !important;
  color: #fff !important;
}
</style>
