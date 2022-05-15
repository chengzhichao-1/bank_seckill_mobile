import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import Vant from "vant"
import "vant/lib/index.css"
import "normalize.css"
import "./assets/css/index.css"
import "amfe-flexible/index.js"
import { setupStore } from "@/store/index"

const app = createApp(App)

// 注册vant
app.use(Vant)

app.use(store)
// 初始化store
setupStore()

app.use(router)

app.mount("#app")
