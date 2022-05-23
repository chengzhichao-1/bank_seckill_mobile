import { Module } from "vuex"
import { ILoginState } from "./types"
import { IRootState } from "../types"
import {
  codeCheck,
  enroll,
  loginByPassword,
  sendCode
} from "@/service/login/login"
import { Toast } from "vant"
import root from ".."
import {
  getCustomerByPhoneNumber,
  getMyInfo,
  getMySecKill,
  refineInformation
} from "@/service/customer/customer"

import localCache from "@/utils/cache"

import router from "@/router"

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      userBaseInfo: {},
      userAccountInfo: {}
    }
  },
  getters: {},
  mutations: {
    changeUserBaseInfo(state, userBaseInfo: any) {
      state.userBaseInfo = userBaseInfo
    },
    changeUserAccountInfo(state, userAccountInfo: any) {
      state.userAccountInfo = userAccountInfo
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: any) {
      const { tel, password, noToast = false } = payload
      console.log(tel, password)

      const loginCode = await loginByPassword(tel, password)
      if (loginCode === 200) {
        // 1. 存储手机号
        root.commit("changePhone", tel)
        localCache.setCache("phone", tel)

        // 2. 存储用户基础信息
        const userBaseInfo = await getCustomerByPhoneNumber(tel)
        commit("changeUserBaseInfo", userBaseInfo)
        localCache.setCache("userBaseInfo", userBaseInfo)

        // 3. 存储用户账号信息
        const userAccountInfo = await getMyInfo(tel)
        commit("changeUserAccountInfo", userAccountInfo)
        localCache.setCache("userAccountInfo", userAccountInfo)

        // 4. Toast提示登陆状态
        if (!noToast) Toast.success("登录成功")

        // 5. 路由跳转
        if (!noToast) router.push("/")
      } else {
        Toast.fail("手机密码错误")
      }
    },
    loadLocalLogin({ commit }) {
      const phone = localCache.getCache("phone")
      if (phone) {
        root.commit("changePhone", phone)
      }

      const userBaseInfo = localCache.getCache("userBaseInfo")
      if (userBaseInfo) {
        commit("changeUserBaseInfo", userBaseInfo)
      }

      const userAccountInfo = localCache.getCache("userAccountInfo")
      if (userAccountInfo) {
        commit("changeUserAccountInfo", userAccountInfo)
      }
    },
    async getCodeAction(context, payload: any) {
      const { phone } = payload
      const code = await sendCode(phone)
      if (code === 200) {
        Toast.success("验证码已发送")
      }
    },
    async accountRegisterAction(context, payload: any) {
      const { tel, code, password } = payload
      const status = await codeCheck(tel, code)
      if (status === 200) {
        const status2 = await enroll(tel, password)
        if (status2 === 200) {
          Toast.success("注册成功")
          router.push("/login")
        } else {
          Toast.success("该手机号已注册")
        }
      } else {
        Toast.fail("验证码错误")
      }
    },
    async refineInformationAction(context, payload: any) {
      const {
        customerPhoneNumber,
        customerName,
        customerIdType,
        customerIdNumber,
        customerEmail,
        customerAddress,
        customerPassword
      } = payload
      const code = await refineInformation(
        customerPhoneNumber,
        customerName,
        customerIdType,
        customerIdNumber,
        customerEmail,
        customerAddress
      )
      if (code === 200) {
        const noToast = true
        context.dispatch("accountLoginAction", {
          tel: customerPhoneNumber,
          password: customerPassword,
          noToast
        })
      }
    },
    async getMyProductListAction(context, payload) {
      const {
        orderTimeState,
        orderPaymentState,
        startDate,
        endDate,
        curPage,
        pageSize,
        customerID
      } = payload
      const myProductList = await getMySecKill(
        customerID,
        orderTimeState,
        orderPaymentState,
        startDate,
        endDate,
        curPage,
        pageSize
      )
      return myProductList
    }
  }
}

export default loginModule
