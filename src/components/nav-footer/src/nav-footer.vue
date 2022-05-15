<template>
  <div class="nav-footer">
    <div class="icons">
      <div class="icon">
        <div class="svg phone"></div>
        <span>联系我们</span>
      </div>
      <div class="icon">
        <div class="svg house"></div>
        <span>关于我们</span>
      </div>
      <div class="icon">
        <div class="svg safe"></div>
        <span>网站安全</span>
      </div>
      <div class="icon">
        <div class="svg chat"></div>
        <span>意见反馈</span>
      </div>
    </div>
    <div class="copyright">&copy; 2022 湖南三湘银行 版权所有</div>
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
.nav-footer {
  background-color: var(--theme-color);
  font-size: 0.3846rem;
  .icons {
    display: flex;
    flex-wrap: wrap;
    .icon {
      width: 50%;
      height: 1.2821rem;
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        margin-left: 0.2564rem;
        font-size: 0.4103rem;
        color: #fff;
      }
      .svg {
        display: inline-block;
        width: 0.6667rem;
        height: 0.6667rem;
        background-color: #fff;
      }
      .phone {
        -webkit-mask: url("~@/assets/img/phone.svg") no-repeat;
        mask: url("~@/assets/img/phone.svg") no-repeat;
        -webkit-mask-size: 100% 100%;
        mask-size: 100% 100%;
      }
      .house {
        -webkit-mask: url("~@/assets/img/house.svg") no-repeat;
        mask: url("~@/assets/img/house.svg") no-repeat;
        -webkit-mask-size: 100% 100%;
        mask-size: 100% 100%;
      }
      .safe {
        -webkit-mask: url("~@/assets/img/safe.svg") no-repeat;
        mask: url("~@/assets/img/safe.svg") no-repeat;
        -webkit-mask-size: 100% 100%;
        mask-size: 100% 100%;
      }
      .chat {
        -webkit-mask: url("~@/assets/img/chat.svg") no-repeat;
        mask: url("~@/assets/img/chat.svg") no-repeat;
        -webkit-mask-size: 100% 100%;
        mask-size: 100% 100%;
      }
    }
  }
  .copyright {
    border-top: 1px solid #fff;
    height: 1.2821rem;
    line-height: 1.2821rem;
    text-align: center;
    color: #fff;
  }
}
</style>
