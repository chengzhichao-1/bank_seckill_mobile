import { yhyRequest } from ".."

enum LoginAPI {
  enroll = "/enroll", // 注册
  sendCode = "/code", // 发送验证码
  codeCheck = "/login2", // 验证码校验
  loginByPassword = "/login" // 密码登录
}

export function enroll(customerPhoneNumber: string, customerPassword: string) {
  return yhyRequest.post<any>({
    url: LoginAPI.enroll,
    params: {
      customerPhoneNumber,
      customerPassword
    }
  })
}

export function sendCode(customerPhoneNumber: string) {
  return yhyRequest.post<any>({
    url: LoginAPI.sendCode,
    params: {
      customerPhoneNumber
    }
  })
}

export function loginByPassword(
  customerPhoneNumber: string,
  customerPassword: string
) {
  return yhyRequest.post<any>({
    url: LoginAPI.loginByPassword,
    data: {
      customerPhoneNumber,
      customerPassword
    }
  })
}

export function codeCheck(customerPhoneNumber: string, code: string) {
  return yhyRequest.post<any>({
    url: LoginAPI.codeCheck,
    params: {
      customerPhoneNumber,
      code
    }
  })
}
