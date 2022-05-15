import { createStore } from "vuex"
import { IRootState } from "./types"

import login from "./login/login"
import home from "./home/home"
import guide from "./guide/guide"
import product from "./product/product"

const store = createStore<IRootState>({
  state: {
    phone: ""
  },
  mutations: {
    changePhone(state, phone: string) {
      state.phone = phone
    }
  },
  actions: {},
  modules: {
    login,
    home,
    guide,
    product
  }
})

export function setupStore(): void {
  store.dispatch("login/loadLocalLogin")
}

export default store
