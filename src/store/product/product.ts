import { getProductDetail, getProductList } from "@/service/product/product"
import { Module } from "vuex"
import { IRootState } from "../types"
import { IProductState } from "./types"

const productModule: Module<IProductState, IRootState> = {
  namespaced: true,
  state: {
    productList: []
  },
  mutations: {
    changeProductList(state, productList) {
      state.productList = productList
    }
  },
  actions: {
    async getProductListAction({ commit }, payload) {
      const {
        keyWords,
        initialAmount,
        deadLine,
        riskRating,
        selectType,
        state,
        curPage,
        pageSize
      } = payload
      const productList = await getProductList(
        keyWords,
        initialAmount,
        deadLine,
        riskRating,
        selectType,
        state,
        curPage,
        pageSize
      )
      console.log(productList)
      commit("changeProductList", productList)
    },
    async getProductDetailAction(context, payload) {
      const res = await getProductDetail(payload.id)
      return res
    }
  }
}
export default productModule
