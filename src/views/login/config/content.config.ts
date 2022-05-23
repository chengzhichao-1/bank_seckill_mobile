import { telRule, passwordRule } from "./account.config"

export const contentFormConfig = {
  title: "个人账号登录",
  propList: [
    {
      name: "tel",
      type: "tel",
      placeholder: "手机号",
      rules: telRule
    },
    {
      name: "password",
      type: "password",
      placeholder: "密码",
      rules: passwordRule
    }
  ],
  imgUrl: require("@/assets/img/bg2.jpg")
}
