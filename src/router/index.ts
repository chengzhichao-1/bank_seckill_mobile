import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import Home from "../views/home/home.vue"

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
    path: "/myinfo",
    name: "MyInfo",
    component: () => import("@/views/my-info/my-info.vue")
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

export default router
