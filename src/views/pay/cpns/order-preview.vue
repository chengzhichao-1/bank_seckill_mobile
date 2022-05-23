<template>
  <div class="order-preview">
    <h3>订单预览</h3>
    <div class="product-info">
      <h4>产品信息</h4>
      <div class="product-info-detail">
        <div class="item">
          <div class="key">产品名称</div>
          <div class="value">{{ payOrderPreview?.name }}</div>
        </div>
        <div class="item">
          <div class="key">产品期限</div>
          <div class="value">{{ payOrderPreview?.deadLine }}天</div>
        </div>
        <div class="item">
          <div class="key">年利率</div>
          <div class="value">{{ payOrderPreview?.rateOfReturn }}%</div>
        </div>
      </div>
    </div>
    <div class="buy-info">
      <h4>买入信息</h4>
      <div class="buy-info-detail">
        <div class="item">
          <div class="key">购买金额</div>
          <div class="value">￥{{ payOrderPreview?.initialAmount }}</div>
        </div>
        <div class="item">
          <div class="key">到期日期</div>
          <div class="value">{{ payOrderPreview?.deadLineDate }}</div>
        </div>
        <div class="item">
          <div class="key">预计收益</div>
          <div class="value">￥{{ payOrderPreview?.expectedIncome }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue"
import localCache from "@/utils/cache"

export default defineComponent({
  setup() {
    const payOrderPreview = computed(() =>
      localCache.getCache("payOrderPreview")
    )
    return {
      payOrderPreview
    }
  }
})
</script>

<style lang="less" scoped>
.order-preview {
  h3 {
    font-size: 0.6154rem;
    font-weight: 550;
    padding-left: 1.0256rem;
    border-bottom: 0.0769rem solid #ddd;
    height: 1.7949rem;
    line-height: 1.7949rem;
  }
  .product-info,
  .buy-info {
    margin-bottom: 0.7692rem;
    h4 {
      font-size: 0.4615rem;
      font-weight: 550;
      margin-left: 1.0256rem;
    }
    .product-info-detail,
    .buy-info-detail {
      .item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 0.4103rem;
        padding: 0 1.7949rem;
        height: 1.2821rem;
        border-bottom: 0.0256rem solid #eee;
        &:nth-of-type(1) {
          border-top: 0.0256rem solid #eee;
        }
        .key {
          text-align: left;
        }
        .value {
          text-align: right;
        }
      }
    }
  }
}
</style>
