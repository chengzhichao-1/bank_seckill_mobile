import { nameRule, selectIdTypeRule, IdRule, cardRule } from "./account.config"

export const contentFormConfig = {
  propList: [
    {
      name: "customerName",
      type: "text",
      label: "姓名",
      placeholder: "请输入姓名",
      rules: nameRule
    },
    {
      name: "customerIdType",
      type: "select",
      label: "证件类型",
      placeholder: "请选择证件类型",
      rules: selectIdTypeRule,
      columns: ["身份证", "港澳台居民居住证", "外国人永久居留身份证"]
    },
    {
      name: "customerIdNumber",
      type: "text",
      label: "证件号码",
      placeholder: "请输入证件号码",
      rules: IdRule
    },
    {
      name: "customerAddress",
      type: "text",
      label: "通讯地址",
      placeholder: "请输入通讯地址(可选)"
    },
    {
      name: "customerEmail",
      type: "text",
      label: "邮箱",
      placeholder: "请输入邮箱(可选)"
    },
    {
      name: "customerBankCard",
      type: "number",
      label: "卡号",
      placeholder: "请绑定卡号",
      disabled: true,
      rules: cardRule
    }
    // {
    //   name: "codeButton",
    //   type: "number",
    //   label: "验证码",
    //   placeholder: "请输入验证码"
    // }
  ]
}
