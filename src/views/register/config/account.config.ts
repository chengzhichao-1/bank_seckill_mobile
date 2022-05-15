export const telRule = [
  {
    required: true,
    message: "手机号是必填内容~",
    trigger: "onBlur"
  },
  {
    pattern: /^[0-9]{11}$/,
    message: "请填写11位手机号~",
    trigger: "onBlur"
  }
]

export const passwordRule = [
  {
    required: true,
    message: "密码是必传内容~",
    trigger: "onBlur"
  },
  {
    pattern: /^[a-zA-Z0-9]{8,16}$/,
    message: "密码必须是8到16位的字母或者数字~",
    trigger: "onBlur"
  }
]

export const codeRule = [
  {
    required: true,
    message: "短信验证码是必传内容~",
    trigger: "onBlur"
  },
  {
    pattern: /^[0-9]{4}$/,
    message: "短信验证码4位的数字~",
    trigger: "onBlur"
  }
]
