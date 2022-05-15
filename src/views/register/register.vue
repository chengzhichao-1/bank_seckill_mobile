<template>
  <div class="register">
    <zc-form
      @handleSubmit="handleSubmit"
      :contentFormConfig="contentFormConfig"
      ref="ZcFormRef"
    >
      <template #btns>
        <div class="btns">
          <div class="getCode">
            <van-button
              plain
              size="small"
              color="var(--theme-color)"
              @click="getCode"
              :disabled="cnt !== 0"
              >{{ cnt === 0 ? "获取验证码" : cnt }}</van-button
            >
          </div>
          <van-checkbox v-model="checked" shape="square"
            >阅读并同意<span style="color: #b3b3f7"
              >《三湘银行个人网银开户协议》</span
            ></van-checkbox
          >
          <div class="two-btns">
            <van-button @click="toFront" plain color="var(--theme-color)"
              >返回</van-button
            >
            <van-button color="var(--theme-color)" native-type="submit">
              确定
            </van-button>
          </div>
        </div>
      </template>
    </zc-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import { contentFormConfig } from "./config/content.config"
import { useStore } from "vuex"
import { useRouter } from "vue-router"
import ZcForm from "@/base-ui/form"
import { Toast } from "vant"

export default defineComponent({
  components: {
    ZcForm
  },
  setup() {
    const store = useStore()
    const router = useRouter()

    const checked = ref(false)
    const ZcFormRef = ref<InstanceType<typeof ZcForm>>()

    let cnt = ref(0)
    let timer: number | null = null

    const getCode = () => {
      if (ZcFormRef.value?.formData?.tel.length !== 11) {
        Toast.fail("请填写正确的手机号")
        return
      }
      if (!timer) {
        cnt.value = 60
        console.log(ZcFormRef.value?.formData?.tel)

        store.dispatch("login/getCodeAction", {
          phone: ZcFormRef.value?.formData?.tel
        })
        timer = setInterval(() => {
          cnt.value--
          if (cnt.value === 0) clearTimeout(timer as number)
        }, 1000)
      }
    }

    const handleSubmit = () => {
      if (!checked.value) {
        Toast.fail("请先勾选协议")
        return
      }
      console.log(ZcFormRef.value?.formData)

      if (
        ZcFormRef.value?.formData.passwordCheck !==
        ZcFormRef.value?.formData.password
      ) {
        Toast.success("两次输入的密码不一致")
        return
      }
      store.dispatch("login/accountRegisterAction", ZcFormRef.value?.formData)
    }

    const toFront = () => {
      router.back()
    }

    return {
      checked,
      contentFormConfig,
      handleSubmit,
      toFront,
      getCode,
      cnt,
      ZcFormRef
    }
  }
})
</script>

<style lang="less" scoped>
.btns {
  .getCode {
    display: flex;
    margin: 0.2564rem 0;
    flex-direction: row-reverse;
  }
  .two-btns {
    margin-top: 0.7692rem;
    display: flex;
    justify-content: space-between;
    /deep/ .van-button--normal {
      width: 3.0769rem;
      height: 1.0256rem;
    }
  }
}
/deep/ .van-button--small {
  width: 2.6923rem;
}
/deep/ .van-checkbox {
  font-size: 0.359rem;
}
/deep/ .van-cell-group--inset {
  margin: 0;
}
/deep/ .van-field__label {
  font-weight: 600;
}
/deep/ .van-cell {
  display: block;
  padding: 0.2051rem 0;
}
/deep/ .van-field__control {
  margin-top: 0.2564rem;
  border: 1px solid #ddd;
  height: 1.0256rem;
  padding: 0.2564rem;
}
</style>
