import { SET_PROJECTS, SET_TOTAL } from "./types";
import * as getters from "./getters";
import * as actions from "./actions";

const state = {
  projects: [],
  total: 0
};

const mutations = {
  [SET_PROJECTS](state, projects) {
    state.projects = projects;
  },

  [SET_TOTAL](state, total) {
    state.total = total;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
