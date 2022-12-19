import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.js";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  FaFlag,
  RiZhihuFill,
  CoSearch,
  CoLocationPin,
  IoSearchOutline,
  LaShippingFastSolid,
  LaUser,
  IoGitCompareOutline,
  CoHeart,
} from "oh-vue-icons/icons";
window.$ = window.jQuery = require("jquery");

addIcons(
  FaFlag,
  RiZhihuFill,
  CoSearch,
  CoLocationPin,
  IoSearchOutline,
  LaShippingFastSolid,
  LaUser,
  IoGitCompareOutline,
  CoHeart
);
createApp(App)
  .component("v-icon", OhVueIcon)
  .use(router, bootstrap)
  .mount("#app");
