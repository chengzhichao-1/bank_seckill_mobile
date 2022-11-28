<template>
  <div class="zc-form">
    <template v-if="contentFormConfig.imgUrl">
      <div
        class="bgc"
        :style="{
          background: `url(${contentFormConfig.imgUrl}) no-repeat fixed center`,
          'background-size': '100% 100%'
        }"
      ></div>
    </template>

    <div class="content">
      <template v-if="contentFormConfig.title">
        <h3>{{ contentFormConfig.title }}</h3>
      </template>

      <van-form class="my-form" @submit="handleSubmit" ref="formRef">
        <van-cell-group v-if="contentFormConfig.propList" inset>
          <template
            v-for="(item, index) in contentFormConfig.propList"
            :key="index"
          >
            <template v-if="item.type === 'select'">
              <van-field
                v-bind="item"
                v-model="formData[`${item.name}`]"
                readonly
                @click="showPicker = true"
              />
              <van-popup v-model:show="showPicker" round position="bottom">
                <van-picker
                  :columns="item.columns"
                  @cancel="showPicker = false"
                  @confirm="(value) => handleSelectConfirm(value, item.name)"
                />
              </van-popup>
            </template>

            <van-field v-else v-bind="item" v-model="formData[`${item.name}`]">
              <template v-if="item.name === 'codeButton'" #button>
                <van-button size="small" type="primary">发送验证码</van-button>
              </template>
            </van-field>
          </template>
        </van-cell-group>
        <slot name="btns"></slot>
      </van-form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue"

export default defineComponent({
  emits: ["handleSubmit"],
  props: {
    modelValue: {
      type: Object,
      default: () => null
    },
    contentFormConfig: {
      type: Object,
      require: true
    }
  },
  setup(props, { emit }) {
    let formData: any = null
    watch(
      () => props.modelValue,
      () => {
        if (!props.modelValue) {
          const formItems = props.contentFormConfig?.propList ?? []
          const formOriginData: any = {}

          for (const item of formItems) {
            formOriginData[item.name] = ""
          }
          formData = ref(formOriginData)
        } else {
          formData = ref({ ...props.modelValue })
        }
      },
      {
        deep: true,
        immediate: true
      }
    )

    const showPicker = ref(false)

    const handleSubmit = () => {
      console.log("handleSubmit", formData.value)
      emit("handleSubmit", formData.value)
    }
    const handleSelectConfirm = (value: any, name: any) => {
      formData.value[name] = value
      console.log(value, name, formData)
      showPicker.value = false
    }
    return {
      formData,
      handleSubmit,
      handleSelectConfirm,
      showPicker
    }
  }
})
</script>

<style lang="less" scoped>
.zc-form {
  display: flex;
  align-items: center;
  height: calc(100vh - 1.5385rem);
  .bgc {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    // background: url(~@/assets/img/bg2.jpg) no-repeat fixed center;
    background-size: 100% 100%;
  }
  .content {
    // width: 10rem;
    // box-sizing: border-box;
    padding: 0.5128rem 0.7692rem;
    background-color: #fff;
    h3 {
      position: relative;
      color: var(--theme-color);
      font-size: 0.5128rem;
      text-align: center;
      margin: 0;
      width: calc(10rem - 1.5385rem);
      &::after {
        position: absolute;
        bottom: 0;
        left: 50%;
        content: "";
        width: 1.1538rem;
        height: 0.0513rem;
        background-color: var(--theme-color);
        transform: translate(-50%, 0.2564rem);
      }
    }
    .my-form {
      margin: 0.4615rem auto;
    }
  }
}
</style>
