import { hyhRequest, czcRequest } from ".."

enum ProductAPI {
  getFutureProduct = "/product/getFutureProduct",
  getProductDetail = "/product/getProductDetail/",
  getProductList = "/product/getProductList",
  getProductInActivity = "/product/getProductInActivity"
}

// 获取未来产品信息
export function getFutureProduct() {
  return czcRequest.post<any>({
    url: ProductAPI.getFutureProduct
  })
}

// 获取产品详细信息
export function getProductDetail(id: string) {
  return czcRequest.post<any>({
    url: ProductAPI.getProductDetail + "/" + id
  })
}

// 获取产品列表
export function getProductList(
  keyWords: string,
  initialAmount: string,
  deadLine: string,
  riskRating: string,
  selectType: string,
  state: number,
  curPage: number,
  pageSize: number
) {
  return czcRequest.post<any>({
    url: ProductAPI.getProductList,
    data: {
      keyWords,
      initialAmount,
      deadLine,
      riskRating,
      selectType,
      state,
      curPage,
      pageSize
    }
  })
}

// 获取当前产品信息
export function getProductInActivity() {
  return czcRequest.post<any>({
    url: ProductAPI.getProductInActivity
  })
}
