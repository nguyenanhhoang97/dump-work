import Vue from "vue";
import store from "../store";
import Meta from "vue-meta";
import routes from "./routes";
import Router from "vue-router";
import { sync } from "vuex-router-sync";

Vue.use(Meta);
Vue.use(Router);

const router = createRouter();

sync(store, router);

export default router;

/**
 * Create a new router instance.
 *
 * @return {Router}
 */
function createRouter() {
  const router = new Router({
    mode: "history",
    routes
  });

  // router.beforeEach(beforeEach)
  // router.afterEach(afterEach)

  return router;
}
