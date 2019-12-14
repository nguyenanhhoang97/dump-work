import { SET_DASHBOARD_DATA } from "./types";
import * as getters from "./getters";
import * as actions from "./actions";

const state = {
  totalProject: 0,
  totalUser: 0
};

const mutations = {
  [SET_DASHBOARD_DATA](state, data) {
    state.totalProject = data.totalProject;
    state.totalUser = data.totalUser;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
