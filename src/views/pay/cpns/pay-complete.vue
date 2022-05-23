<template>
  <div class="pay-complete">
    <label for="sanxiang">
      <input
        type="radio"
        name="choiceWay"
        id="sanxiang"
        :checked="true"
        @change="changeInput"
      />
      <i></i>
      <img src="~@/assets/img/pay/logo.png" alt="" />
      <span>湖南三湘银行</span>
    </label>
    <div class="success">
      <img
        class="success-icon"
        src="~@/assets/img/pay/pay_success.png"
        alt="success"
      />
      <p class="success_text">购买成功</p>
      <p class="success_money">￥{{ money }}</p>
      <p class="success_notice">
        购买成功，您可以在<a href="/myseckill">历史订单</a>中查询交易记录
      </p>
    </div>
    <button @click="$router.push('/')" class="btn">完成</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue"
import localCache from "@/utils/cache"

export default defineComponent({
  setup() {
    const money = computed(
      () => localCache.getCache("payOrderPreview").initialAmount
    )
    return {
      money
    }
  }
})
</script>

<style lang="less" scoped>
.pay-complete {
  label {
    display: flex;
    position: relative;
    align-items: center;
    height: 2.5641rem;
    line-height: 2.5641rem;
    border: 1px solid #ddd;
    box-shadow: 0 0.05rem 0.1rem #ddd;
    margin-bottom: 0.7692rem;
    * {
      display: block;
      float: left;
    }
    input[type="radio"] {
      position: absolute;
      left: -99999px;
      border: 1px solid #ddd;
      background-color: #111;
      margin: 0.9231rem;
      &:checked + i {
        border: 1px solid var(--theme-color);
      }
      &:checked + i:after {
        background-color: var(--theme-color);
        opacity: 1;
      }
    }
    i {
      position: relative;
      width: 0.5128rem;
      height: 0.5128rem;
      margin: 0 0.9231rem;
      border: 1px solid #ddd;
      background: transparent;
      border-radius: 50%;
      &:after {
        position: absolute;
        content: "";
        opacity: 0;
        width: 0.3077rem;
        height: 0.3077rem;
        border-radius: 50%;
        background-color: #123;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    img {
      margin-right: 0.6154rem;
      width: 1.1282rem;
      height: 1.1282rem;
    }
    span {
      font-size: 0.5128rem;
    }
  }
  .success {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 7.6923rem;
    p {
      margin: 0;
    }
    .success-icon {
      width: 2.5641rem;
      height: auto;
    }
    .success_text {
      font-size: 0.5128rem;
    }
    .success_money {
      font-size: 0.6154rem;
    }
    .success_notice {
      font-size: 0.3077rem;
      a {
        color: #5292ff;
      }
    }
  }
  .btn {
    width: 4.1026rem;
    height: 1.0256rem;
    line-height: 1.0256rem;
    font-size: 0.5128rem;
    border: 0;
    display: block;
    color: #fff;
    background-color: var(--theme-color);
    border-radius: 0.1282rem;
    margin: 0.2564rem auto 1.5385rem;
  }
}
</style>
