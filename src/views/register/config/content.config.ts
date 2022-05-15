import { telRule, passwordRule, codeRule } from "./account.config"

export const contentFormConfig = {
  title: "注册",
  propList: [
    {
      name: "tel",
      type: "tel",
      label: "手机号码",
      placeholder: "请输入手机号",
      rules: telRule
    },
    {
      name: "password",
      type: "password",
      label: "设置密码",
      placeholder: "请输入8~16位包含字母和数字",
      rules: passwordRule
    },
    {
      name: "passwordCheck",
      type: "password",
      label: "确认密码",
      placeholder: "请确认",
      rules: passwordRule
    },
    {
      name: "code",
      type: "number",
      label: "短信验证码",
      placeholder: "请输入手机验证码",
      rules: codeRule
    }
  ],
  imgUrl: require("@/assets/img/bg2.jpg")
}
