import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import Vant from "vant"
import { setupStore } from "@/store/index"
import { globalRegister } from "./global"
import "vant/lib/index.css"
import "normalize.css"
import "./assets/css/index.css"
import "amfe-flexible/index.js"

const app = createApp(App)

// 注册vant/其他
app.use(Vant)
app.use(globalRegister)

// store
app.use(store)
setupStore()

app.use(router)

app.mount("#app")
