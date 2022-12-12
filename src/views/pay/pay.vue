<template>
  <div class="pay">
    <div class="top">
      <div
        class="circle"
        :class="state === 0 ? 'active' : ''"
        :style="{ backgroundColor: state >= 0 ? 'var(--theme-color)' : '#aaa' }"
      ></div>
      <div
        class="line"
        :style="{ backgroundColor: state >= 1 ? 'var(--theme-color)' : '#aaa' }"
      ></div>
      <div
        class="circle"
        :class="state === 1 ? 'active' : ''"
        :style="{ backgroundColor: state >= 1 ? 'var(--theme-color)' : '#aaa' }"
      ></div>
      <div
        class="line"
        :style="{ backgroundColor: state >= 2 ? 'var(--theme-color)' : '#aaa' }"
      ></div>
      <div
        class="circle"
        :class="state === 2 ? 'active' : ''"
        :style="{ backgroundColor: state >= 2 ? 'var(--theme-color)' : '#aaa' }"
      ></div>
    </div>
    <template v-if="state === 0">
      <pay-choice @changeState="changeState" />
    </template>
    <template v-else-if="state === 1">
      <pay-ing @changeState="changeState" />
    </template>
    <template v-else-if="state === 2">
      <pay-complete />
    </template>
    <order-preview />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import { useRouter, useRoute } from "vue-router"

import PayChoice from "./cpns/pay-choice.vue"
import PayIng from "./cpns/pay-ing.vue"
import PayComplete from "./cpns/pay-complete.vue"
import OrderPreview from "./cpns/order-preview.vue"
import localCache from "@/utils/cache"
import { Toast } from "vant"

export default defineComponent({
  components: {
    PayChoice,
    PayIng,
    PayComplete,
    OrderPreview
  },
  setup() {
    const state = ref(0)
    const route = useRoute()
    const router = useRouter()

    if (Object.keys(route.params).length !== 0) {
      localCache.setCache("payOrderPreview", route.params)
    }
    // 判断缓存信息是否过期
    else if (
      !localCache.getCache("payOrderPreview")?.localCacheExpirationTimestamp ||
      new Date().getTime() >
        localCache.getCache("payOrderPreview")?.localCacheExpirationTimestamp
    ) {
      Toast.fail("支付信息已过期")
      console.log("支付信息已过期")
      // router.push("/")
    }
    const changeState = (s: number) => {
      if (s === -1) {
        router.go(-1)
      } else {
        state.value = s
      }
    }
    return {
      state,
      changeState
    }
  }
})
</script>

<style lang="less" scoped>
.pay {
  .top {
    // width: 6.25rem;
    // margin: 0.625rem auto 1.125rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3.4rem;
    .circle {
      width: 0.7692rem;
      height: 0.7692rem;
      border-radius: 50%;
      background-color: #aaa;
      position: relative;
      &::after {
        position: absolute;
        width: 2.5641rem;
        text-align: center;
        font-size: 0.4103rem;
        font-weight: 500;
        bottom: -0.65rem;
        left: 50%;
        transform: translateX(-50%);
      }
      &:nth-of-type(1)::after {
        content: "选择支付方式";
      }
      &:nth-of-type(3)::after {
        content: "支付";
      }
      &:nth-of-type(5)::after {
        content: "支付成功";
      }
    }
    .active {
      position: relative;
      background-color: var(--theme-color);
      &::before {
        position: absolute;
        content: "";
        display: block;
        width: 0.4103rem;
        height: 0.4103rem;
        border-radius: 50%;
        top: 0.1795rem;
        left: 0.1795rem;
        background-color: #fff;
      }
    }
    .line {
      width: 2.1795rem;
      height: 0.1026rem;
      background-color: #aaa;
    }
  }
}
</style>
