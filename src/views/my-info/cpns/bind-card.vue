<template>
  <div class="bind-card">
    <h4>{{ !!userBaseInfo?.customerBankCard ? "解绑" : "绑定" }}银行卡</h4>
    <van-form class="my-form" @submit="handleSubmit" ref="formRef">
      <van-cell-group inset>
        <van-field
          v-model="customerBankCard"
          name="银行卡号"
          label="银行卡号"
          :disabled="!!userBaseInfo?.customerBankCard"
          placeholder="请输入银行卡号"
          :rules="cardRule"
        />
        <van-field
          v-model="customerPhoneNumber"
          name="手机号"
          label="手机号"
          :disabled="true"
        />
        <van-field
          v-model="bankCardPassword"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="passwordRule"
        />
        <van-field
          v-if="!userBaseInfo?.customerBankCard"
          name="验证码"
          label="验证码"
          placeholder="请输入验证码"
          v-model="code"
          :rules="codeRule"
        >
          <template #button>
            <van-button
              size="small"
              type="primary"
              @click="handleSendCode"
              :disabled="countDown !== 0"
              >{{ countDown === 0 ? "发送验证码" : countDown }}</van-button
            >
          </template>
        </van-field>
      </van-cell-group>
      <div class="btns">
        <button @click="closeOverlay">返回</button>
        <button type="submit">
          {{ !!userBaseInfo?.customerBankCard ? "解绑" : "绑定" }}
        </button>
      </div>
    </van-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import { useStore } from "vuex"

import { cardRule, codeRule, passwordRule } from "../config/account.config"

import { sendCode } from "@/service/login/login"
import { bindCard, unbindCard } from "@/service/customer/customer"

import { Toast } from "vant"

export default defineComponent({
  props: ["userBaseInfo"],
  emits: ["closeOverlay"],
  setup(props, { emit }) {
    const customerBankCard = ref(props.userBaseInfo?.customerBankCard)
    const customerPhoneNumber = ref(props.userBaseInfo?.customerPhoneNumber)
    const bankCardPassword = ref("")
    const code = ref("")
    const countDown = ref(0)
    const store = useStore()

    // 初始化 bankCardPassword code
    const init = () => {
      bankCardPassword.value = ""
      code.value = ""
    }

    const closeOverlay = () => {
      emit("closeOverlay")
    }
    const handleSendCode = async () => {
      countDown.value = 60
      let timer = setInterval(() => {
        if (countDown.value === 0) clearInterval(timer)
        else countDown.value--
      }, 1000)
      const res = await sendCode(customerPhoneNumber.value)
      if (res === 200) {
        Toast.success(res)
      }
    }

    const handleSubmit = async () => {
      if (props.userBaseInfo?.customerBankCard) {
        const res = await unbindCard(
          customerPhoneNumber.value,
          bankCardPassword.value
        )
        if (res.status === 200) {
          Toast.success("卡号解绑成功")
          store.dispatch("login/accountLoginAction", {
            tel: customerPhoneNumber.value,
            password: props.userBaseInfo.customerPassword,
            noToast: true,
            reLogin: true
          })
          init()
          emit("closeOverlay")
        } else {
          // Toast.fail("密码错误")
        }
      } else {
        const res = await bindCard(
          customerPhoneNumber.value,
          customerBankCard.value,
          bankCardPassword.value,
          code.value
        )
        if (res.status === 200) {
          Toast.success("卡号绑定成功")
          store.dispatch("login/accountLoginAction", {
            tel: customerPhoneNumber.value,
            password: props.userBaseInfo.customerPassword,
            noToast: true,
            reLogin: true
          })
          init()
          emit("closeOverlay")
        } else {
          // Toast.fail("验证码错误或银行卡已被注册")
        }
      }
    }
    return {
      cardRule,
      codeRule,
      passwordRule,
      customerBankCard,
      customerPhoneNumber,
      bankCardPassword,
      code,
      countDown,
      closeOverlay,
      handleSendCode,
      handleSubmit
    }
  }
})
</script>

<style lang="less" scoped>
/deep/ .van-button--small {
  width: 2rem;
}
h4 {
  font-size: 0.5128rem;
  height: 1.0256rem;
  line-height: 1.0256rem;
  text-align: center;
}
.btns {
  display: flex;
  margin-top: 0.2564rem;
  button {
    flex: 1;
    border: 0;
    background-color: #fff;
    font-size: 0.4103rem;
    text-align: center;
    height: 1rem;
    line-height: 1rem;
    border-top: 0.0256rem solid #eee;
    &:nth-last-of-type(1) {
      border-left: 1px solid #eee;
      color: var(--theme-color);
    }
  }
}
</style>
