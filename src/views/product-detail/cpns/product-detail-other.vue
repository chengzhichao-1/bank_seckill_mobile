<template>
  <div class="product-detail-other">
    <div class="top">
      <div
        :class="{ active: activeTitleIndex === index }"
        class="item"
        v-for="(item, index) in topTitleList"
        :key="index"
        @click="activeTitleIndex = index"
      >
        <div class="inner">{{ item }}</div>
      </div>
    </div>
    <div class="content">
      <table>
        <tr>
          <td>名称</td>
          <td>{{ productName }}</td>
        </tr>
        <tr>
          <td>全国银行业理财信息登记系统登记编号</td>
          <td>
            产品登记编码：Z7001621000402（养老），投资者可以根据该登记编号在中国理财网查询产品信息。
          </td>
        </tr>
        <tr>
          <td>产品代码</td>
          <td>103507</td>
        </tr>
        <tr>
          <td>理财币种</td>
          <td>人民币</td>
        </tr>
        <tr>
          <td>产品类型</td>
          <td>固定收益类</td>
        </tr>
        <tr>
          <td>产品代码</td>
          <td>103507</td>
        </tr>
        <tr>
          <td>募集方式</td>
          <td>公募发行</td>
        </tr>
        <tr>
          <td>运作方式</td>
          <td>
            封闭式，原则上存续期间不得申购和赎回，符合监管提前赎回情形或本理财计划产品说明书有特别约定的除外
          </td>
        </tr>
        <tr>
          <td>发行对象</td>
          <td>持有试点地区（湖南）身份证的湖南三湘银行个人</td>
        </tr>
        <tr>
          <td>发行规则</td>
          <td>
            产品合计发行规模下限1亿元，上限30亿元。若本理财计划发行规模超出上限，销售服务机构及管理人有权暂停接受认购申请。详细内容见本《产品说明书之》“理财计划认购”。
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"

export default defineComponent({
  props: ["productName"],
  setup() {
    const topTitleList = [
      "产品概览",
      "购买说明",
      "产品说明书",
      "风险揭示书",
      "产品公告",
      "产品净值",
      "投资报告"
    ]
    let activeTitleIndex = ref(0)
    return {
      topTitleList,
      activeTitleIndex
    }
  }
})
</script>

<style lang="less" scoped>
.product-detail-other {
  margin-bottom: 1.0256rem;
  .top {
    display: flex;
    align-items: center;
    overflow-x: scroll;
    overflow-y: hidden;
    font-weight: 550;
    font-size: 0.4103rem;
    text-align: center;
    height: 2.3077rem;
    .item {
      .inner {
        width: 3.0769rem;
      }
      padding: 0.3846rem 0;
    }
    .active {
      position: relative;
      color: var(--theme-color);
      &::after {
        position: absolute;
        content: "";
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 0.7692rem;
        border: 1px solid var(--theme-color);
      }
    }
  }
  .content {
    font-size: 0.4103rem;
    table {
      tr {
        display: flex;
        td {
          border: 1px solid #ddd;
          padding: 0.3846rem;
        }
        td:nth-of-type(1) {
          font-weight: 550;
          text-align: center;
          flex: 1;
          border-left: 0;
        }
        td:nth-of-type(2) {
          flex: 2;
          border-right: 0;
        }
      }
    }
  }
}
</style>
