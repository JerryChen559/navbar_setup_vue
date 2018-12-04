import Vue from "vue";
import Router from "vue-router";
import Dashboard from "./views/Dashboard.vue";
import Tournaments from "./views/Tournaments.vue";
import Friends from "./views/Friends.vue";
import Players from "./views/Players.vue";
import Chat from "./views/Chat.vue";
import Account from "./views/Account.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: Dashboard
    },
    {
      path: "/tournaments",
      name: "tournaments",
      component: Tournaments
    },
    {
      path: "/friends",
      name: "Friends",
      component: Friends
    },
    {
      path: "/players",
      name: "Players",
      component: Players
    },
    {
      path: "/chat",
      name: "Chat",
      component: Chat
    },
    {
      path: "/account",
      name: "Account",
      component: Account
    }

    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "./views/About.vue")
    // }
  ]
});
