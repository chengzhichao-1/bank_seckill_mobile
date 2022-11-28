<template>
  <div class="my-info-account">
    <div class="top">
      <div class="user-image"></div>
      <div class="user-base-info">
        <p>用户{{ userId }}</p>
        <div class="item">普通会员</div>
        <div class="item">注册年龄：{{ userAccountInfo.registerTime }}</div>
      </div>
      <div class="is-perfect">
        {{
          !!userBaseInfo?.customerName && !!userBaseInfo?.customerBankCard
            ? "资料已完善"
            : "资料未完善"
        }}
      </div>
    </div>
    <div class="bottom">
      <div class="item">
        <div class="key">账号</div>
        <div class="value">{{ userAccountInfo.customerPhoneNumber }}</div>
      </div>
      <div class="item">
        <div class="key">已购数量</div>
        <div class="value">{{ userAccountInfo.purchasedProductNum }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue"
import { useStore } from "vuex"

export default defineComponent({
  setup() {
    const store = useStore()
    const userAccountInfo = computed(() => store.state.login.userAccountInfo)
    const userBaseInfo = computed(() => store.state.login.userBaseInfo)
    const userId = computed(() =>
      String(store.state.login.userBaseInfo.customerNumber).padStart(6, "0")
    )
    return {
      userAccountInfo,
      userBaseInfo,
      userId
    }
  }
})
</script>

<style lang="less" scoped>
.my-info-account {
  padding: 0.9231rem;
  .top {
    display: flex;
    justify-content: space-between;
    .user-image {
      display: inline-block;
      position: relative;
      width: 2.0513rem;
      height: 2.0513rem;
      border-radius: 1.0256rem;
      mask-size: 100% 100%;
      background-color: #f3f3f3;
      &::after {
        position: absolute;
        content: "";
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 1.2821rem;
        height: 1.2821rem;
        mask: url(~@/assets/img/user.svg) no-repeat;
        -webkit-mask: url(~@/assets/img/user.svg) no-repeat;
        -webkit-mask-size: 100% 100%;
        background-color: #fff;
      }
    }
    .user-base-info {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      p {
        font-size: 0.3846rem;
        font-weight: 550;
        margin: 0.1282rem 0;
      }
      .item {
        font-size: 0.2564rem;
      }
    }
    .is-perfect {
      box-sizing: border-box;
      padding: 0.2051rem;
      height: 0.7179rem;
      border: 1px solid var(--theme-color);
      color: var(--theme-color);
      font-size: 0.3077rem;
    }
  }
  .bottom {
    padding: 0.3846rem 0;
    .item {
      display: flex;
      height: 0.7692rem;
      line-height: 0.7692rem;
      font-size: 0.3077rem;
      &:nth-of-type(1) {
        .key,
        .value {
          border-bottom: 0;
        }
      }
      .key {
        border: 1px solid #999;
        border-left: 0;
        flex: 3;
        font-weight: 550;
      }
      .value {
        padding-left: 0.2564rem;
        border: 1px solid #999;
        border-left: 0;
        border-right: 0;
        flex: 7;
      }
    }
  }
}
</style>
