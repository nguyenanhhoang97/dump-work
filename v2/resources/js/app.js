import Vue from 'vue'
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import locale from "element-ui/lib/locale/lang/en";
import store from '~/store'
import router from '~/router'
import i18n from '~/plugins/i18n'
import App from '~/components/App'

import '~/plugins'
import '~/components'

Vue.config.productionTip = false
Vue.use(ElementUI, { locale });

/* eslint-disable no-new */
new Vue({
  el: "#app",
  i18n,
  store,
  router,
  ...App
})
