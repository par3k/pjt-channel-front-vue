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
    redirect: "/zipsa/"
  },
  {
    path: "/zipsa/",
    name: "Main",
    component: Main
  },
  {
    path: "/zipsa/user/login",
    name: "Login",
    component: Login
  },
  {
    path: "/zipsa/user/regist",
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
