<template>
  <div class="my-product-detail">
    <template v-if="myProductList?.data?.length !== 0">
      <div
        v-for="(item, index) in myProductList.data"
        :key="index"
        class="item"
      >
        <div class="top-center">
          <div class="top">
            <h4>{{ item.productName }}</h4>
            <p class="time">
              {{ item.startDateFormat?.split(" ")[0] }} ~
              {{ item.endDateFormat?.split(" ")[0] }}
            </p>
            <p class="id">{{ item.id }}</p>
          </div>
          <div class="center">
            <div class="center-item">
              <p>{{ item.rateOfReturn }} %</p>
              <p>年利率</p>
            </div>
            <div class="center-item">
              <p>{{ item.estimatedEarnings }}元</p>
              <p>预期收益</p>
            </div>
          </div>
        </div>

        <div class="bottom">
          <div class="bottom-item">
            <p>{{ item.productPrice }}元</p>
            <p>金额</p>
          </div>
          <div class="bottom-item">
            <p>{{ item.deadLine }}天</p>
            <p>产品期限</p>
          </div>
          <div class="bottom-item">
            <p>
              {{
                item.orderChannel === 3
                  ? "三湘银行卡"
                  : item.orderChannel === 2
                  ? "微信"
                  : "支付宝"
              }}
            </p>
            <p>支付方式</p>
          </div>
        </div>
        <van-button block color="#91bef4">{{
          item.startDateFormat ? "一键卖出" : "去支付"
        }}</van-button>
      </div>
      <van-pagination
        v-model="newCurPage"
        :total-items="myProductList.total_records"
        :items-per-page="pageSize"
        force-ellipses
      />
    </template>
    <template v-else>
      <van-empty image="search" description="赶紧去购买理财产品吧~" />
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue"

export default defineComponent({
  props: ["myProductList", "curPage", "pageSize"],
  emits: ["curPageChange"],
  setup(props, { emit }) {
    let newCurPage = ref(props.curPage)
    watch(newCurPage, () => emit("curPageChange", newCurPage.value))
    return {
      newCurPage
    }
  }
})
</script>

<style lang="less" scoped>
.my-product-detail {
  min-height: 9rem;
  p,
  h4 {
    margin: 0;
  }
  .item {
    padding: 0.5128rem 0;
    .top-center {
      background: #000 url(~@/assets/img/theme-color-bg.png) no-repeat center;
      background-size: 100% 100%;
      color: #fff;
      .top {
        text-align: center;
        // color: #fff;
        padding: 0.2564rem 0;
        // background-color: var(--theme-color);

        h4 {
          font-size: 0.5128rem;
          margin: 0.2564rem 0;
        }
        .time {
          font-size: 0.4103rem;
          margin: 0.2564rem 0;
          color: #bbb;
        }
        .id {
          font-size: 0.3077rem;
          color: #bbb;
        }
      }
      .center {
        display: flex;
        // color: #fff;
        height: 1.4103rem;
        align-items: center;
        padding: 0.2564rem 0;
        // background-color: var(--theme-color);
        .center-item {
          flex: 1;
          display: flex;
          height: 100%;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          p:nth-of-type(1) {
            font-size: 0.7692rem;
            font-weight: 600;
          }
          p:nth-last-of-type(1) {
            font-size: 0.3077rem;
          }
          &:nth-of-type(1) {
            border-right: 1px solid #fff;
          }
        }
      }
    }

    .bottom {
      display: flex;
      background-color: #fff;
      height: 2.0513rem;

      .bottom-item {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        border-right: 1px solid #666;
        margin: 0.3846rem 0;
        p:nth-of-type(1) {
          font-size: 0.5128rem;
          font-weight: 530;
        }
        p:nth-last-of-type(1) {
          color: #666;
          font-size: 0.3077rem;
        }
        &:nth-last-of-type(1) {
          border: 0;
        }
      }
    }
  }
}
</style>
