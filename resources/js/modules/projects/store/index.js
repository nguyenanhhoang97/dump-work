import { SET_PROJECTS } from "./types";
import * as getters from "./getters";
import * as actions from "./actions";

const state = {
  projects: []
};

const mutations = {
  [SET_PROJECTS](state, projects) {
    state.projects = projects;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
