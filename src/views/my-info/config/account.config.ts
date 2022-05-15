export const nameRule = [
  {
    required: true,
    message: "姓名是必填内容~",
    trigger: "onBlur"
  },
  {
    pattern: /^.{2,}$/,
    message: "请填写正确的姓名~",
    trigger: "onBlur"
  }
]

export const selectIdTypeRule = [
  {
    required: true,
    message: "证件类型是必填内容~",
    trigger: "onBlur"
  }
]

export const IdRule = [
  {
    required: true,
    message: "身份证号码是必填内容~",
    trigger: "onBlur"
  },
  {
    pattern: /^[0-9X]{18}$/,
    message: "请填写正确的身份证~",
    trigger: "onBlur"
  }
]

export const cardRule = [
  {
    required: true,
    message: "卡号是必填内容~",
    trigger: "onBlur"
  },
  {
    pattern: /^([0-9]{16,17}|[0-9]{19})$/,
    message: "请填写正确的银行卡号~",
    trigger: "onBlur"
  }
]
