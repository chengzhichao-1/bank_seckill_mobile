<template>
  <div class="home-future-products">
    <div class="bg"></div>
    <div class="wrap">
      <div
        class="product-detail"
        v-for="(item, index) in futureProducts"
        :key="index"
        @click="$router.push(`/productdetail/${item.activityID}`)"
      >
        <h4>{{ item?.name }}</h4>
        <div class="item">
          起购金额：<strong>￥{{ item?.initialAmount }}</strong>
        </div>
        <div class="item">
          产品期限：<strong>{{ item?.deadLine }}天</strong>
        </div>

        <div class="item">
          七日年化收益率：<strong>{{ item?.rateOfReturn }}%</strong>
        </div>
        <div class="item">
          秒杀开始时间：<strong>{{
            item?.activityStartTimeFormat.split(" ")[0]
          }}</strong>
        </div>
        <div class="item">
          秒杀结束时间：<strong>{{
            item?.activityEndTimeFormat.split(" ")[0]
          }}</strong>
        </div>
        <div class="bottom">
          <div class="icon">即将开售</div>
          <div class="icon2">
            <span>业绩比较基准</span>
            <span class="color">{{ item?.rateOfComparative }}%</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  props: {
    futureProducts: {
      type: Array,
      required: true
    }
  },
  setup() {
    return {}
  }
})
</script>

<style lang="less" scoped>
.home-future-products {
  position: relative;
  overflow: hidden;
  .bg {
    position: absolute;
    z-index: 0;
    top: 0.8974rem;
    left: 0;
    width: 100vw;
    height: 5.3846rem;
    background-color: rgba(0, 0, 0, 0.1);
  }
  .wrap {
    z-index: 2;
    position: relative;
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
    flex-direction: row;
    align-content: flex-start;
    width: 100vw;
    .product-detail {
      padding: 0.6154rem 0.5128rem;
      margin: 0 0.9231rem;
      border: 1px solid #e1e1e1;
      background-color: #fff;
      box-shadow: 1px 1px 3px #ddd;
      h4 {
        width: calc(100vw - 2.8718rem);
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
      .bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .icon {
          border: 1px solid var(--theme-color);
          height: 1.0256rem;
          line-height: 1.0256rem;
          text-align: center;
          padding: 0.1282rem;
          color: var(--theme-color);
          font-size: 0.4615rem;
          width: 2.0513rem;
        }
        .icon2 {
          display: flex;
          flex-direction: column;
          justify-content: center;
          border: 0.1282rem solid var(--theme-color);
          font-size: 0.3077rem;
          line-height: 0.5128rem;
          width: 2.0513rem;
          height: 2.0513rem;
          border-radius: 50%;
          text-align: center;
          .color {
            color: var(--theme-color);
            font-weight: 600;
            font-size: 0.4103rem;
          }
        }
      }
    }
  }
}
</style>
