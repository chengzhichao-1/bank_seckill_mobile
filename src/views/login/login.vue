<template>
  <div class="login">
    <zc-form
      @handleSubmit="handleSubmit"
      :contentFormConfig="contentFormConfig"
    >
      <template #btns>
        <div class="btns">
          <div class="two-btns">
            <span>忘记密码</span>
            <van-button
              color="var(--theme-color)"
              size="small"
              native-type="submit"
              @click="toRegister"
            >
              注册
            </van-button>
          </div>
          <van-button color="var(--theme-color)" block native-type="submit">
            登录
          </van-button>
          <p class="underline">手机验证码登录</p>
        </div>
      </template>
    </zc-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue"
import { contentFormConfig } from "./config/content.config"
import { useStore } from "vuex"
import { useRouter } from "vue-router"
import ZcForm from "@/base-ui/form"
import localCache from "@/utils/cache"
import { resetLoginState } from "@/store"

export default defineComponent({
  components: {
    ZcForm
  },
  setup() {
    const store = useStore()
    const router = useRouter()

    const handleSubmit = (account: any) => {
      store.dispatch("login/accountLoginAction", account)
    }

    const toRegister = () => {
      router.push("/register")
    }

    onMounted(() => {
      localCache.clearCache()
      resetLoginState()
    })

    return {
      contentFormConfig,
      handleSubmit,
      toRegister
    }
  }
})
</script>

<style lang="less" scoped>
.btns {
  width: 5.641rem;
  margin: 0 auto;
  color: #999;
  .two-btns {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.2564rem;
    align-items: center;
    font-size: 0.4103rem;
  }
  .underline {
    width: fit-content;
    margin: 0.2564rem auto;
    border-bottom: 1px solid #999;
    font-size: 0.4103rem;
  }
}
/deep/ .van-field__control {
  border: 1px solid #ddd;
  height: 1.0256rem;
  border-radius: 1px;
  text-align: center;
  // padding: 0.3077rem 0;
  font-size: 0.4615rem;
}
</style>
