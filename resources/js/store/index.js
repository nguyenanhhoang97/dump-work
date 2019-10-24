import Vue from "vue";
import Vuex from "vuex";

import global from "../modules/global/store";
import projects from "../modules/projects/store";
import users from "../modules/users/store";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    global,
    projects,
    users
  }
});
