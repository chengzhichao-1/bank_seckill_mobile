<template>
  <div class="order-detail">
    <h4>订单详情</h4>
    <div class="item">
      <div class="key">{{ productDetail.name }}</div>
    </div>
    <div class="item">
      <div class="key">存入金额</div>
      <div class="value">{{ productDetail.initialAmount }}元</div>
    </div>
    <div class="item">
      <div class="key">产品期限</div>
      <div class="value">{{ productDetail.deadLine }}天</div>
    </div>
    <div class="item">
      <div class="key">年利率</div>
      <div class="value">{{ productDetail.rateOfReturn }}%</div>
    </div>
    <div class="item">
      <div class="key">到期日期</div>
      <div class="value">
        {{
          $filters.formatTime(
            new Date().getTime() + productDetail.deadLine * 24 * 60 * 60 * 1000
          )
        }}
      </div>
    </div>
    <div class="btns">
      <button @click="handleCannel">取消</button>
      <button @click="handleClick">确认并前往支付</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { useRouter } from "vue-router"
import { useStore } from "vuex"
import { Toast } from "vant"

import {
  orderSecKill,
  getPath,
  getSeckillResult
} from "@/service/customer/customer"

import localCache from "@/utils/cache"

export default defineComponent({
  props: ["productDetail"],
  setup(props, { emit }) {
    const router = useRouter()
    const store = useStore()
    const handleCannel = () => {
      emit("orderShowChange", false)
    }
    const handleClick = () => {
      if (store.state.phone.length !== 11) {
        Toast.fail("请先登录")
        router.push("/login")
      } else if (
        !!store.state.login.userBaseInfo?.customerName &&
        !!store.state.login.userBaseInfo?.customerBankCard
      ) {
        handleGetPath()
      } else {
        Toast.fail("请先完善个人信息")
        router.push("/myinformation")
      }
    }
    // 获取秒杀链接
    const handleGetPath = async () => {
      const res = await getPath(
        store.state.phone,
        props.productDetail.activityID,
        String(3)
      )
      console.log(res)
      if (res.status === 200) {
        handleOrderSecKill(res.message)
      } else {
        Toast.fail(res.message)
      }
    }
    // 获取秒杀记录
    const handleGetSecKillResult = async () => {
      setTimeout(async () => {
        const res = await getSeckillResult(
          store.state.phone,
          props.productDetail.activityID,
          store.state.login.userBaseInfo.customerNumber
        )
        console.log("秒杀记录", res)
        if (res.message === "正在秒杀中") {
          handleGetSecKillResult()
        } else if (res.message.substring(0, 4) === "抢购成功") {
          Toast.success("抢购成功")
          setTimeout(() => {
            // 抢购成功后重新登陆以刷新用户个人信息
            store.dispatch("login/accountLoginAction", {
              tel: localCache.getCache("userBaseInfo").customerPhoneNumber,
              password: localCache.getCache("userBaseInfo").customerPassword,
              noToast: true,
              reLogin: true
            })
            router.push({
              name: "Pay",
              params: {
                name: props.productDetail.name,
                initialAmount: props.productDetail.initialAmount,
                deadLine: props.productDetail.deadLine,
                rateOfReturn: props.productDetail.rateOfReturn,
                deadLineDate: calcDeadLineDate(props.productDetail.deadLine),
                expectedIncome: calcExpectedIncome(
                  props.productDetail.rateOfReturn,
                  props.productDetail.initialAmount,
                  props.productDetail.deadLine
                ),
                localCacheExpirationTimestamp:
                  new Date().getTime() + 24 * 60 * 60 * 1000,
                orderID: res.message.substring(4, res.message.length)
              }
            })
          }, 1000)
        } else {
          Toast.fail(res.message)
        }
      }, 1000)
    }
    // 秒杀
    const handleOrderSecKill = async (path: string) => {
      const res = await orderSecKill(
        store.state.phone,
        props.productDetail.activityID,
        String(3),
        path,
        store.state.login.userBaseInfo.customerNumber
      )
      if (res.status === 200) {
        Toast.success("排队中")
        setTimeout(() => {
          handleGetSecKillResult()
        }, 1000)
      } else {
        Toast.fail(res.message)
      }
    }
    // 计算到期日期
    const calcDeadLineDate = (deadLine: number) => {
      const newDate = new Date(
        new Date().getTime() + deadLine * 24 * 60 * 60 * 1000
      )
      return (
        newDate.getFullYear() +
        (newDate.getMonth() + 1 < 10 ? "-0" : "-") +
        (newDate.getMonth() + 1) +
        (newDate.getDate() < 10 ? "-0" : "-") +
        newDate.getDate()
      )
    }
    // 计算预期收益
    const calcExpectedIncome = (
      rate: number,
      money: number,
      deadLine: number
    ) => {
      return ((rate * money * deadLine) / 100 / 365).toFixed(2)
    }
    return {
      handleCannel,
      handleClick,
      handleGetPath
    }
  }
})
</script>

<style lang="less" scoped>
.order-detail {
  background-color: #fff;
  border-radius: 0.2564rem;
  margin: 0.5128rem;
  overflow: hidden;

  h4 {
    width: calc(100vw - 1.0256rem);
    font-size: 0.4103rem;
    text-align: center;
    font-weight: 550;
    height: 1rem;
    line-height: 1rem;
  }
  .item {
    display: flex;
    font-size: 0.359rem;
    justify-content: space-between;
    align-items: center;
    height: 0.7692rem;
    padding: 0 0.641rem;
  }
  .btns {
    display: flex;
    height: 1.2821rem;
    padding-top: 0.5128rem;
    button {
      border: 0;
      flex: 1;
      text-align: center;
      font-size: 0.4103rem;
      background-color: #fff;
      border-top: 0.0256rem solid #eee;
      &:nth-last-of-type(1) {
        color: var(--theme-color);
        border-left: 0.0256rem solid #eee;
      }
    }
  }
}
</style>
