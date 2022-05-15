<template>
  <div class="my-info-base">
    <div class="top">
      <div class="title">完善资料</div>
      <button v-show="!isEdit" class="edit" @click="isEdit = true">编辑</button>
    </div>
    <div class="base-info" v-if="!isEdit">
      <van-cell
        title="手机号码"
        is-link
        :value="
          userBaseInfo.customerPhoneNumber
            ? userBaseInfo.customerPhoneNumber.substring(0, 3) +
              userBaseInfo.customerPhoneNumber.substring(7).padStart(8, '*')
            : '未填写'
        "
      />
      <van-cell
        title="姓名"
        is-link
        required
        :value="
          userBaseInfo.customerName
            ? userBaseInfo.customerName
                .substring(1)
                .padStart(userBaseInfo.customerName.length, '*')
            : '未填写'
        "
      />
      <van-cell
        title="证件类型"
        required
        is-link
        :value="userBaseInfo.customerIdType ?? '未选择'"
      />
      <van-cell
        title="证件号码"
        required
        is-link
        :value="
          userBaseInfo.customerIdNumber
            ? userBaseInfo.customerIdNumber.substring(0, 3) +
              userBaseInfo.customerIdNumber.substring(16).padStart(15, '*')
            : '未填写'
        "
      />

      <van-cell
        title="卡号"
        required
        is-link
        :value="
          userBaseInfo.customerBankCard
            ? userBaseInfo.customerBankCard.substring(0, 4) +
              userBaseInfo.customerBankCard
                .substring(userBaseInfo.customerBankCard.length - 4)
                .padStart(8, '*')
            : '未填写'
        "
      />
      <van-cell
        title="通讯地址"
        is-link
        :value="userBaseInfo.customerAddress ?? '未填写'"
      />
      <van-cell
        title="邮箱"
        is-link
        :value="userBaseInfo.customerEmail ?? '未填写'"
      />
    </div>
    <div class="base-info-edit" v-else>
      <zc-form
        class="my-form"
        :contentFormConfig="contentFormConfig"
        @handleSubmit="handleSubmit"
        v-model="userBaseInfo"
      >
        <template #btns>
          <van-button
            class="my-button"
            round
            color="var(--theme-color)"
            block
            native-type="submit"
          >
            立即修改
          </van-button>
          <van-button
            @click="isEdit = false"
            color="var(--theme-color)"
            block
            plain
            round
          >
            返回
          </van-button>
        </template>
      </zc-form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue"
import { useStore } from "vuex"
import ZcForm from "@/base-ui/form"

import { contentFormConfig } from "../config/content.config"

export default defineComponent({
  components: {
    ZcForm
  },
  setup() {
    const store = useStore()
    const userBaseInfo = computed(() => store.state.login.userBaseInfo)
    const isEdit = ref(false)

    const handleSubmit = (value: any) => {
      store.dispatch("login/refineInformationAction", value)
      console.log(111, value)
    }

    return {
      userBaseInfo,
      isEdit,
      contentFormConfig,
      handleSubmit
    }
  }
})
</script>

<style lang="less" scoped>
.top {
  display: flex;
  padding: 0 0.9231rem;
  justify-content: space-between;
  align-items: center;
  .title {
    font-size: 0.4103rem;
    font-weight: 550;
    padding-left: 0.2051rem;
    border-left: 0.1026rem solid var(--theme-color);
  }
  .edit {
    border: 0;
    padding: 0.1538rem 0.5128rem;
    background-color: var(--theme-color);
    color: #fff;
    font-size: 0.359rem;
  }
}
.base-info {
  padding: 0.5128rem;
}
.my-button {
  margin: 0.3846rem 0;
}
.my-form {
  height: auto;
}
</style>
