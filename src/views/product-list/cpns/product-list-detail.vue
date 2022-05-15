<template>
  <div class="product-list-detail">
    <div class="product-item" v-for="item in productList" :key="item.id">
      <div class="sec-kill-ing">秒杀中</div>
      <div class="left">
        <div class="left-top">{{ item.rateOfComparative.toFixed(2) }}%</div>
        <div class="left-bottom">业绩比较基准</div>
      </div>
      <div class="right">
        <h5 class="right-top">{{ item.name }}</h5>
        <div class="right-bottom">
          <div class="item">{{ item.initialAmount }}元起购</div>
          <div class="item">封闭{{ item.deadLine }}天</div>
        </div>
        <div class="right-bottom">
          <div class="item">
            七日年化收益率{{ item.rateOfReturn.toFixed(2) }}%
          </div>
          <div class="item">风险等级{{ item.riskRating }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  props: ["productList"],
  setup() {
    return {}
  }
})
</script>

<style lang="less" scoped>
.product-list-detail {
  height: 12.8205rem;
  .product-item {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 2.5641rem;
    margin: 0 0.2564rem;
    border-top: 1px solid #b8b8b8;
    &:nth-last-of-type(1) {
      border-bottom: 1px solid #b8b8b8;
    }
    .sec-kill-ing {
      position: absolute;
      right: 0.1282rem;
      top: 0.1282rem;
      padding: 0.0256rem;
      border: 1px solid var(--theme-color);
      color: var(--theme-color);
      font-size: 0.359rem;
    }
    .left {
      flex: 3;
      display: flex;
      flex-direction: column;
      .left-top {
        color: var(--theme-color);
        font-size: 0.5641rem;
        margin-bottom: 0.1282rem;
      }
      .left-bottom {
        font-size: 0.359rem;
        color: #b8b8b8;
      }
    }
    .right {
      flex: 7;
      display: flex;
      flex-direction: column;
      .right-top {
        font-weight: 550;
        font-size: 0.359rem;
        margin: 0;
      }
      .right-bottom {
        margin-top: 0.1282rem;
        display: flex;
        justify-content: flex-start;
        font-size: 0.2564rem;
        color: #b8b8b8;
        .item {
          padding-right: 0.2564rem;
          margin-right: 0.2564rem;
          border-right: 1px solid #b8b8b8;
          &:nth-last-of-type(1) {
            border: 0;
          }
        }
      }
    }
  }
}
</style>
