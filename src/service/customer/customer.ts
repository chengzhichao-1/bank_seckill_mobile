import { hyhRequest, yhyRequest } from ".."

// 获取秒杀链接
export function getPath(
  phoneNumber: string,
  activityID: string,
  orderChannel: string
) {
  return hyhRequest.post<any>({
    url: "/order/getPath",
    data: {
      phoneNumber,
      activityID,
      orderChannel
    }
  })
}

// 获取秒杀结果
export function getSeckillResult(phoneNumber: string, activityID: string) {
  return hyhRequest.post<any>({
    url: "/order/getSeckillResult",
    data: {
      phoneNumber,
      activityID
    }
  })
}

// 秒杀
export function orderSecKill(
  phoneNumber: string,
  activityID: string,
  orderChannel: string,
  path: string
) {
  return hyhRequest.post<any>({
    url: "/order/" + path + "/orderSecKill",
    data: {
      phoneNumber,
      activityID,
      orderChannel
    }
  })
}

// 获取当前登陆用户
export function getCustomerByPhoneNumber(phoneNumber: string) {
  return hyhRequest.post<any>({
    url: "/customer/getCustomerByPhoneNumber/" + phoneNumber
  })
}

// 获取当前登陆用户2
export function getMyInfo(phoneNumber: string) {
  return hyhRequest.post<any>({
    url: "/customer/getMyInfo/" + phoneNumber
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
  return hyhRequest.post<any>({
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
export function sendCardByPhone(customerPhoneNumber: string) {
  return yhyRequest.post<any>({
    url: "/sendCard?customerPhoneNumber=" + customerPhoneNumber
  })
}

export function payByCard(
  orderID: string,
  phoneNumber: string,
  customerBankCard: string,
  bankCardPassword: string,
  money: string
) {
  return hyhRequest.post<any>({
    url: "/order/bankPay",
    data: {
      orderID,
      phoneNumber,
      customerBankCard,
      bankCardPassword,
      money
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
  return yhyRequest.post<any>({
    url:
      "/refine?customerPhoneNumber=" +
      customerPhoneNumber +
      "&customerName=" +
      customerName +
      "&customerIdType=" +
      customerIdType +
      "&customerIdNumber=" +
      customerIdNumber +
      "&customerEmail=" +
      customerEmail +
      "&customerAddress=" +
      customerAddress
  })
}

// 绑定银行卡
export function bindCard(
  customerPhoneNumber: string,
  customerBankCard: string,
  code: string
) {
  return yhyRequest.post<any>({
    url:
      "/bind?customerPhoneNumber=" +
      customerPhoneNumber +
      "&customerBankCard=" +
      customerBankCard +
      "&code=" +
      code
  })
}

// 解绑银行卡
export function unbindCard(customerBankCard: string, bankCardPassword: string) {
  return yhyRequest.post<any>({
    url:
      "/UnbindBankCard?customerBankCard=" +
      customerBankCard +
      "&bankCardPassword=" +
      bankCardPassword
  })
}

// 绑定银行卡后设置支付密码
export function setPayPassword(
  customerBankCard: string,
  bankCardPassword: string
) {
  return yhyRequest.post<any>({
    url:
      "/set?customerBankCard=" +
      customerBankCard +
      "&bankCardPassword=" +
      bankCardPassword
  })
}

// 修改登陆密码
export function modifyLoginPassword(
  customerPhoneNumber: string,
  customerPassword: string,
  oldCustomerPassword: string
) {
  return yhyRequest.post<any>({
    url:
      "/revise1?customerPhoneNumber=" +
      customerPhoneNumber +
      "&customerPassword=" +
      customerPassword +
      "&oldCustomerPassword=" +
      oldCustomerPassword
  })
}

// 修改支付密码
export function modifyPayPassword(
  customerBankCard: string,
  bankCardPassword: string,
  oldBankCardPassword: string
) {
  return yhyRequest.post<any>({
    url:
      "/revise2?customerBankCard=" +
      customerBankCard +
      "&bankCardPassword=" +
      bankCardPassword +
      "&oldBankCardPassword=" +
      oldBankCardPassword
  })
}
