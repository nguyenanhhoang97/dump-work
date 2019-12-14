import Vue from "vue";
import Vuex from "vuex";
import global from "~/modules/global/store";
import projects from "~/modules/projects/store";
import users from "~/modules/users/store";
import session from "~/modules/session/store";
import dashboard from "~/modules/dashboard/store";
import roles from "~/modules/roles/store";

Vue.use(Vuex);

// Load store modules dynamically.
const requireContext = require.context("./modules", false, /.*\.js$/);

const modules = requireContext
  .keys()
  .map(file => [file.replace(/(^.\/)|(\.js$)/g, ""), requireContext(file)])
  .reduce((modules, [name, module]) => {
    if (module.namespaced === undefined) {
      module.namespaced = true;
    }

    return { ...modules, [name]: module };
  }, {});

export default new Vuex.Store({
  modules: {
    ...modules,
    global,
    projects,
    users,
    session,
    dashboard,
    roles
  }
});
