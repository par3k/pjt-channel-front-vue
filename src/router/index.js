import Vue from "vue";
import VueRouter from "vue-router";
import Main from "@/pages/Main.vue";
import Login from "@/components/user/Login.vue";
import Regist from "@/components/user/Regist.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    namd: "Main",
    redirect: "/zipsin"
  },
  {
    path: "/zipsin",
    name: "Main",
    component: Main
  },
  {
    path: "/zipsin/user/login",
    name: "Login",
    component: Login
  },
  {
    path: "/zipsin/user/regist",
    name: "Regist",
    component: Regist
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
