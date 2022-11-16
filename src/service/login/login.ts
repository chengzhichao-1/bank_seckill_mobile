import { yhyRequest, czcRequest } from ".."
import md5 from "js-md5"

enum LoginAPI {
  enroll = "/enroll", // 注册
  sendCode = "/code", // 发送验证码
  codeCheck = "/login2", // 验证码校验
  loginByPassword = "/login" // 密码登录
}

enum LoginAPI2 {
  enroll = "/users/register", // 注册
  sendCode = "/users/sendMessage", // 发送验证码
  codeCheck = "/login2", // 验证码校验
  loginByPassword = "/users/login" // 密码登录
}

// export function enroll(customerPhoneNumber: string, customerPassword: string) {
//   return yhyRequest.post<any>({
//     url: LoginAPI.enroll,
//     params: {
//       customerPhoneNumber,
//       customerPassword: md5(customerPassword)
//     }
//   })
// }

export function enroll(customerPhoneNumber: string, customerPassword: string) {
  return czcRequest.post<any>({
    url: LoginAPI2.enroll,
    params: {
      customerPhoneNumber,
      customerPassword: md5(customerPassword)
    }
  })
}

// export function sendCode(customerPhoneNumber: string) {
//   return yhyRequest.post<any>({
//     url: LoginAPI.sendCode,
//     params: {
//       customerPhoneNumber
//     }
//   })
// }

export function sendCode(customerPhoneNumber: string) {
  return czcRequest.post<any>({
    url: LoginAPI2.sendCode,
    params: {
      customerPhoneNumber
    }
  })
}

// export function loginByPassword(
//   customerPhoneNumber: string,
//   customerPassword: string
// ) {
//   return yhyRequest.post<any>({
//     url: LoginAPI.loginByPassword,
//     data: {
//       customerPhoneNumber,
//       customerPassword: md5(customerPassword)
//     }
//   })
// }

export function loginByPassword(
  customerPhoneNumber: string,
  customerPassword: string
) {
  return czcRequest.post<any>({
    url: LoginAPI2.loginByPassword,
    data: {
      customerPhoneNumber,
      customerPassword: md5(customerPassword)
      // customerPassword
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
