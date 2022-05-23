import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import Home from "../views/home/home.vue"
import localCache from "@/utils/cache"
import { Toast } from "vant"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(
        /* webpackChunkName: "register" */ "../views/register/register.vue"
      )
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/login/login.vue")
  },
  {
    path: "/guide",
    name: "Guide",
    component: () => import("@/views/guide/guide.vue")
  },
  {
    path: "/productlist",
    name: "ProductList",
    component: () => import("@/views/product-list/product-list.vue")
  },
  {
    path: "/myinformation",
    name: "MyInfo",
    component: () => import("@/views/my-info/my-info.vue")
  },
  {
    path: "/myseckill",
    name: "MyProduct",
    component: () => import("@/views/my-product/my-product.vue")
  },
  {
    path: "/productdetail/:id",
    name: "ProductDetail",
    component: () => import("@/views/product-detail/product-detail.vue")
  },
  {
    path: "/pay",
    name: "Pay",
    component: () => import("@/views/pay/pay.vue")
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    component: () => import("@/views/not-found/not-found.vue")
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to) => {
  // chrome
  document.body.scrollTop = 0
  // firefox
  document.documentElement.scrollTop = 0
  // safari
  // window.pageYOffset = 0
  if (to.path === "/myinformation" || to.path === "/myseckill") {
    const phone = localCache.getCache("phone")
    if (!phone) {
      Toast.fail("请先登录")
      return "/login"
    }
  }
})

export default router
