import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

function guardRoute(to, from, next) {
  var isAuthenticated = false;
  if (localStorage.getItem("authenticated") === "true") {
    isAuthenticated = true;
  }
  else {
    isAuthenticated = false;
  }

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
    beforeEnter: guardRoute,
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/welcome",
    name: "welcome",
    component: () => import("../views/WelcomePage.vue"),
    beforeEnter: guardRoute,
  },
  {
    path: "/author",
    name: "author",
    component: () => import("../views/Author.vue"),
    beforeEnter: guardRoute,
  },
  {
    path: "/stockHistory",
    name: "stockHistory",
    component: () => import("../views/StockHistory.vue"),
    beforeEnter: guardRoute,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
