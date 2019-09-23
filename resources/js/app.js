import Vue from "vue";
import router from "./router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import locale from "element-ui/lib/locale/lang/en";
import App from "./components/App";

Vue.use(ElementUI, { locale });

new Vue({
  el: "#app",
  components: { App },
  router
});
