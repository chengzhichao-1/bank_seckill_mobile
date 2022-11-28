import { Module } from "vuex"
import { IHomeState } from "./types"
import { IRootState } from "../types"

import { getAllAnnouncements, loadAllImages } from "@/service/other/other"
import {
  getFutureProduct,
  getProductInActivity
} from "@/service/product/product"

const homeModule: Module<IHomeState, IRootState> = {
  namespaced: true,
  state() {
    return {
      swiperImages: [],
      currentProducts: [],
      futureProducts: [],
      announcements: []
    }
  },
  getters: {},
  mutations: {
    changeSwipeImages(state, swipeImages) {
      state.swiperImages = swipeImages
    },
    changeCurrentProducts(state, currentProducts) {
      const newCurrentProducts = [...currentProducts]
      newCurrentProducts.sort((p1: any, p2: any) => {
        const getHHMMSS = (product: any) => {
          const time = new Date(product.activityStartTime).getTime()
          const HH = parseInt(((time / 1000 / 60 / 60 + 8) % 24) + "")
          const MM = parseInt(((time / 1000 / 60) % 60) + "")
          const SS = parseInt(((time / 1000) % 60) + "")
          const HHStr = HH < 10 ? "0" + HH : HH
          const MMStr = MM < 10 ? "0" + MM : MM
          product["time"] = `${HHStr}:${MMStr}`
          return SS + MM * 60 + HH * 60 * 60
        }
        return getHHMMSS(p1) - getHHMMSS(p2)
      })
      state.currentProducts = newCurrentProducts
    },
    changeFutureProducts(state, futureProducts) {
      state.futureProducts = futureProducts
    },
    changeAnnouncements(state, announcements) {
      state.announcements = announcements
    }
  },
  actions: {
    async getSwipeImagesAction({ commit }) {
      const swipeImages = await loadAllImages()
      console.log(swipeImages)
      commit("changeSwipeImages", swipeImages.message)
    },
    async getCurrentProductsAction({ commit }) {
      const currentProducts = await getProductInActivity()
      console.log(currentProducts)
      commit("changeCurrentProducts", currentProducts.message)
    },
    async getFutureProductsAction({ commit }) {
      const futureProducts = await getFutureProduct()
      console.log(futureProducts)
      commit("changeFutureProducts", futureProducts.message)
    },
    async getAnnouncementsActions({ commit }) {
      const announcements = await getAllAnnouncements()
      console.log(announcements)
      commit("changeAnnouncements", announcements.message)
    }
  }
}

export default homeModule
