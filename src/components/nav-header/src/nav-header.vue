<template>
  <div class="nav-header">
    <div
      class="icon-title"
      @click="$route.fullPath !== '/' ? $router.push('/') : ''"
    >
      <img src="~@/assets/img/logo.png" alt="logo" />
      <h3>三湘银行秒杀系统</h3>
    </div>
    <van-icon
      @click="isShowPopup = !isShowPopup"
      color="#fff"
      class-prefix="icon"
      :name="isShowPopup ? 'guanbi' : 'caidan'"
      size="0.64rem"
    />
    <van-popup
      v-model:show="isShowPopup"
      position="top"
      class="my-popup"
      :style="{ 'margin-top': '1.5385rem' }"
    >
      <div class="line">
        <div class="i" @click=";(isShowPopup = false) || $router.push('/')">
          <div class="wrap"><span class="icon icon-home"></span></div>
          <p>首页</p>
        </div>
        <div
          class="i"
          @click=";(isShowPopup = false) || $router.push('/productlist')"
        >
          <div class="wrap"><span class="icon icon-chanpinliebiao"></span></div>
          <p>产品列表</p>
        </div>
        <div
          class="i"
          @click=";(isShowPopup = false) || $router.push('/guide')"
        >
          <div class="wrap"><span class="icon icon-fuwuzhinan"></span></div>
          <p>服务指南</p>
        </div>
        <div
          class="i"
          @click=";(isShowPopup = false) || $router.push('/login')"
        >
          <div class="wrap"><span class="icon icon-denglu-copy"></span></div>
          <p>{{ isLogin ? "退出登录" : "登录" }}</p>
        </div>
      </div>
      <div class="line">
        <div
          class="i"
          @click=";(isShowPopup = false) || $router.push('/register')"
        >
          <div class="wrap"><span class="icon icon-zhuce"></span></div>
          <p>注册</p>
        </div>
        <div
          class="i"
          @click=";(isShowPopup = false) || $router.push('/myinformation')"
        >
          <div class="wrap"><span class="icon icon-wodeziliao"></span></div>
          <p>我的资料</p>
        </div>
        <div
          class="i"
          @click=";(isShowPopup = false) || $router.push('/myseckill')"
        >
          <div class="wrap"><span class="icon icon-wodechanpin"></span></div>
          <p>我的秒杀</p>
        </div>
        <div class="i"></div>
      </div>
    </van-popup>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue"
// import localCache from "@/utils/cache"
import { useStore } from "vuex"

export default defineComponent({
  setup() {
    const isShowPopup = ref(false)
    const store = useStore()
    const isLogin = computed(() =>
      ref(store.state.phone).value ? true : false
    )
    return {
      isShowPopup,
      isLogin
    }
  }
})
</script>

<style lang="less" scoped>
.icon {
  font-size: 0.5128rem;
}
/deep/ .van-popup--top {
  height: 5.1282rem;
}
/deep/ .van-overlay {
  top: 1.5385rem;
}
.my-popup {
  .line {
    display: flex;
    align-items: center;
    height: 2.5641rem;
    .i {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex: 1;
      .wrap {
        width: 1.0256rem;
        height: 1.0256rem;
        border-radius: 0.5128rem;
        background-color: #eee;
        font-size: 0.5128rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      p {
        margin: 0;
        margin-top: 0.2564rem;
        font-size: 0.4103rem;
      }
    }
  }
}
.nav-header {
  display: flex;
  justify-content: space-around;
  height: 1.5385rem;
  align-items: center;
  background-color: #0d0d0d;

  .icon-title {
    display: flex;
    align-items: center;
    img {
      width: 0.8205rem;
      height: 0.8205rem;
    }
    h3 {
      padding-left: 0.3077rem;
      font-size: 0.5128rem;
      font-weight: 550;
      color: #fff;
    }
  }
}
</style>
