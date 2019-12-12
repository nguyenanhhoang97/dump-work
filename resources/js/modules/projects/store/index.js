import { SET_PROJECTS, SET_TOTAL, CREATE_NEW_PROJECT } from "./types";
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
  },

  [CREATE_NEW_PROJECT](state, project) {
    const { projects } = state;
    state.projects = [{ ...project }, ...projects];
    state.total++;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
