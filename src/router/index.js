import Vue from "vue";
import VueRouter from "vue-router";
import LoginComponent from "../views/login.vue";

Vue.use(VueRouter);

function guardMyroute(to, from, next) {
  var isAuthenticated = false;
  //this is just an example. You will have to find a better or
  // centralised way to handle you localstorage data handling
  if (localStorage.getItem("authenticated") === "true") isAuthenticated = true;
  else isAuthenticated = false;
  if (isAuthenticated) {
    next(); // allow to enter route
  } else {
    next("/login"); // go to '/login';
  }
}

const routes = [
  {
    path: "/",
    redirect: {
      name: "welcome",
    },
    beforeEnter : guardMyroute,
  },
  {
    path: "/login",
    name: "login",
    component: LoginComponent,
  },
  {
    path: "/welcome",
    name: "welcome",
    component: () => import("../views/WelcomePage.vue"),
    beforeEnter : guardMyroute,

  },
  {
    path: "/author",
    name: "author",
    component: () => import("../views/Author.vue"),
    beforeEnter : guardMyroute,
  },
  {
    path: "/stockHistory",
    name: "stockHistory",
    component: () => import("../views/StockHistory.vue"),
    beforeEnter : guardMyroute,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
