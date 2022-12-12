import { hyhRequest, yhyRequest, czcRequest } from ".."
import md5 from "js-md5"

// 获取秒杀链接
export function getPath(
  phoneNumber: string,
  activityID: string,
  orderChannel: string
) {
  return czcRequest.post<any>({
    url: "/order/getPath",
    data: {
      phoneNumber,
      activityID,
      orderChannel
    }
  })
}

// 获取秒杀结果
export function getSeckillResult(
  phoneNumber: string,
  activityID: string,
  customerNumber: string | number
) {
  return czcRequest.post<any>({
    url: "/order/getSeckillResult",
    data: {
      phoneNumber,
      activityID,
      customerNumber
    }
  })
}

// 秒杀
export function orderSecKill(
  phoneNumber: string,
  activityID: string,
  orderChannel: string,
  path: string,
  customerNumber: string | number
) {
  return czcRequest.post<any>({
    url: "/order/" + path + "/orderSecKill",
    data: {
      phoneNumber,
      activityID,
      orderChannel,
      customerNumber
    }
  })
}

// 获取当前登陆用户
export function getCustomerByPhoneNumber(phoneNumber: string) {
  return czcRequest.post<any>({
    url: "/users/getCustomerByPhoneNumber/" + phoneNumber
  })
}

// 获取当前登陆用户2
export function getMyInfo(phoneNumber: string) {
  return czcRequest.post<any>({
    url: "/users/getMyInfo/" + phoneNumber
  })
}

// 获取我的秒杀
export function getMySecKill(
  customerID: string,
  orderTimeState: string,
  orderPaymentState: string,
  startDate: string,
  endDate: string,
  curPage: number,
  pageSize: number
) {
  return czcRequest.post<any>({
    url: "/order/getMySecKill/",
    data: {
      customerID,
      orderTimeState,
      orderPaymentState,
      startDate,
      endDate,
      curPage,
      pageSize
    }
  })
}

// 通过手机号发送绑定的卡号
// export function sendCardByPhone(customerPhoneNumber: string) {
//   return yhyRequest.post<any>({
//     url: "/sendCard?customerPhoneNumber=" + customerPhoneNumber
//   })
// }

export function payByCard(
  orderID: string,
  phoneNumber: string,
  customerBankCard: string,
  bankCardPassword: string,
  money: string,
  deadLine: string
) {
  return czcRequest.post<any>({
    url: "/order/bankPay",
    data: {
      orderID,
      phoneNumber,
      customerBankCard,
      bankCardPassword,
      money,
      deadLine
    }
  })
}

// 完善信息
export function refineInformation(
  customerPhoneNumber: string,
  customerName: string,
  customerIdType: string,
  customerIdNumber: string,
  customerEmail: string,
  customerAddress: number
) {
  return czcRequest.post<any>({
    // url:
    //   "/refineInfo?customerPhoneNumber=" +
    //   customerPhoneNumber +
    //   "&customerName=" +
    //   customerName +
    //   "&customerIdType=" +
    //   customerIdType +
    //   "&customerIdNumber=" +
    //   customerIdNumber +
    //   "&customerEmail=" +
    //   customerEmail +
    //   "&customerAddress=" +
    //   customerAddress
    url: "/users/refineInfo",
    params: {
      customerPhoneNumber,
      customerName,
      customerIdType,
      customerIdNumber,
      customerEmail,
      customerAddress
    }
  })
}

// 绑定银行卡
export function bindCard(
  customerPhoneNumber: string,
  customerBankCard: string,
  bankCardPassword: string,
  code: string
) {
  return czcRequest.post<any>({
    url: "/users/bindCard",
    data: {
      customerPhoneNumber,
      customerBankCard,
      bankCardPassword: md5(bankCardPassword),
      code
    }
  })
}

// 解绑银行卡
export function unbindCard(
  customerPhoneNumber: string,
  bankCardPassword: string
) {
  return czcRequest.post<any>({
    url: "/users/unBindCard",
    data: {
      customerPhoneNumber,
      bankCardPassword: md5(bankCardPassword)
    }
  })
}

// 绑定银行卡后设置支付密码
// export function setPayPassword(
//   customerBankCard: string,
//   bankCardPassword: string
// ) {
//   return yhyRequest.post<any>({
//     url:
//       "/set?customerBankCard=" +
//       customerBankCard +
//       "&bankCardPassword=" +
//       bankCardPassword
//   })
// }

// 修改登陆密码
// export function modifyLoginPassword(
//   customerPhoneNumber: string,
//   customerPassword: string,
//   oldCustomerPassword: string
// ) {
//   return yhyRequest.post<any>({
//     url:
//       "/revise1?customerPhoneNumber=" +
//       customerPhoneNumber +
//       "&customerPassword=" +
//       customerPassword +
//       "&oldCustomerPassword=" +
//       oldCustomerPassword
//   })
// }

// 修改支付密码
// export function modifyPayPassword(
//   customerBankCard: string,
//   bankCardPassword: string,
//   oldBankCardPassword: string
// ) {
//   return yhyRequest.post<any>({
//     url:
//       "/revise2?customerBankCard=" +
//       customerBankCard +
//       "&bankCardPassword=" +
//       bankCardPassword +
//       "&oldBankCardPassword=" +
//       oldBankCardPassword
//   })
// }
