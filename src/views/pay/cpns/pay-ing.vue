<template>
  <div class="pay-ing">
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
    <van-form>
      <van-cell-group inset>
        <van-field v-model="card" name="卡号" label="卡号" :disabled="true" />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="请输入密码"
          :rules="[
            { required: true, message: '请填写密码' },
            { pattern: /^[0-9]{6}$/, message: '请输入6位数字密码' }
          ]"
        />
      </van-cell-group>
    </van-form>
    <div class="btns">
      <button @click="changeState(0)">返回</button>
      <button @click="changeState(2)">确认</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Toast } from "vant"
import { defineComponent, ref, computed } from "vue"
import { useStore } from "vuex"
import { payByCard } from "@/service/customer/customer"
import localCache from "@/utils/cache"
import md5 from "js-md5"

export default defineComponent({
  emit: ["changeState"],
  setup(props, { emit }) {
    const store = useStore()
    const card = computed(() => store.state.login.userBaseInfo.customerBankCard)
    const password = ref("")
    // const truePassword = computed(
    //   () => store.state.login.userBaseInfo.bankCardPassword
    // )

    const changeState = (s: number) => {
      if (s === 0) {
        emit("changeState", s)
      } else {
        const newPWD = md5(password.value)
        payByCard(
          localCache.getCache("payOrderPreview").orderID,
          store.state.phone,
          card.value,
          newPWD,
          localCache.getCache("payOrderPreview").initialAmount,
          localCache.getCache("payOrderPreview").deadLine
        ).then((res) => {
          console.log(res)
          if (res.status === 200) {
            emit("changeState", s)
            Toast.success("支付成功~")
          } else {
            Toast.fail("密码错误或余额不足")
          }
        })
      }
    }
    return {
      card,
      password,
      changeState
    }
  }
})
</script>

<style lang="less" scoped>
.pay-ing {
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
