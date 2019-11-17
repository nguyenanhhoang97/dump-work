import Vue from "vue";
import Vuetify from "vuetify";
import vuetify from '~/plugins/vuetify' // path to vuetify export
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import locale from "element-ui/lib/locale/lang/en";
import store from "~/store";
import router from "~/router";
import i18n from "~/plugins/i18n";
import App from "~/components/App";

import "~/plugins";
import "~/components";

Vue.config.productionTip = false;
Vue.use(ElementUI, { locale });
Vue.use(Vuetify);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  i18n,
  vuetify,
  store,
  router,
  ...App
});
