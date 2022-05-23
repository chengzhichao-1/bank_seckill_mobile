<template>
  <div class="pay-choice">
    <label for="sanxiang">
      <input
        type="radio"
        name="choiceWay"
        id="sanxiang"
        @change="changeInput"
      />
      <i></i>
      <img src="~@/assets/img/pay/logo.png" alt="" />
      <span>湖南三湘银行</span>
    </label>
    <label for="alipay">
      <input type="radio" name="choiceWay" id="alipay" @change="changeInput" />
      <i></i>
      <img src="~@/assets/img/pay/airpay.png" alt="" />
      <span>支付宝</span>
    </label>
    <label for="wechatpay">
      <input
        type="radio"
        name="choiceWay"
        id="wechatpay"
        @change="changeInput"
      />
      <i></i>
      <img src="~@/assets/img/pay/wechatpay.png" alt="" />
      <span>微信</span>
    </label>
    <div class="btns">
      <button @click="changeState(-1)">返回</button>
      <button @click="changeState(1)">确认</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"

export default defineComponent({
  emits: ["changeState"],
  setup(props, { emit }) {
    let curTarget = ref()
    const changeInput = (e: any) => {
      curTarget.value = e.target.id
    }
    const changeState = (s: number) => {
      console.log(s, curTarget.value)
      console.log(s === 1 && curTarget.value === "sanxiang")

      if (s === -1) {
        emit("changeState", s)
      } else if (s === 1 && curTarget.value === "sanxiang") {
        emit("changeState", s)
      }
    }
    return {
      changeInput,
      changeState
    }
  }
})
</script>

<style lang="less" scoped>
.pay-choice {
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
  .btns {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0.5128rem 0;
    button {
      width: 3.0769rem;
      height: 1.0256rem;
      line-height: 1.0256rem;
      font-size: 0.5128rem;
      text-align: center;
      border-radius: 0.1282rem;
      &:nth-child(1) {
        border: 0.0256rem solid #aaa;
        color: #aaa;
        background-color: #fff;
      }
      &:nth-child(2) {
        border: 0;
        background-color: var(--theme-color);
        color: #fff;
      }
    }
  }
}
</style>
