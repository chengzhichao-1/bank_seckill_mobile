<template>
  <div class="guide-manual">
    <div class="step">
      <img src="~@/assets/img/guide/step1.png" alt="step1" />
      <div>
        <h4>1.登录并进入首页</h4>
        <p>登录账号后进入首页，下滑至产品信息板块可预览秒杀活动产品</p>
      </div>
    </div>
    <div class="step">
      <img src="~@/assets/img/guide/step2.png" alt="step2" />
      <div>
        <h4>2.进入产品详情页</h4>
        <p>点击产品的任意空白区域进入产品详情页面了解详情</p>
      </div>
    </div>
    <div class="step">
      <img src="~@/assets/img/guide/step3.png" alt="step3" />
      <div>
        <h4>3.点击“抢”</h4>
        <p>1. 可在首页直接“抢”</p>
        <p>2. 在详情页点击“抢”</p>
      </div>
    </div>
    <div class="step">
      <img src="~@/assets/img/guide/step4.png" alt="step4" />
      <div>
        <h4>4.确认并支付</h4>
        <p>在弹窗确认信息并点击前往支付，若放弃则点击返回</p>
      </div>
    </div>
    <div class="step">
      <img src="~@/assets/img/guide/step5.png" alt="step5" />
      <div>
        <h4>5.支付完成</h4>
        <p>选择支付方式，输入密码，支付成功，可在“我的秒杀”中产看订单详情</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style lang="less" scoped>
.step {
  img {
    width: 100%;
    height: auto;
  }
  div {
    height: 3.8462rem;
    h4 {
      font-size: 0.6154rem;
      margin: 0.359rem 0.6154rem;
    }
    p {
      padding: 0 0.9744rem;
      font-size: 0.4615rem;
    }
  }
}
</style>
