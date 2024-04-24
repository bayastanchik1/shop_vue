import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import Home from "./pages/Home.vue";
// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { createRouter, createWebHistory } from "vue-router";
import Basket from "./pages/Basket.vue";
const vuetify = createVuetify({
  components,
  directives,
});
import { createPinia } from "pinia";
const pinia = createPinia();

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/basket",
    component: Basket,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(vuetify).use(router).use(pinia).mount("#app");
