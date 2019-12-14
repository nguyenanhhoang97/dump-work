import * as getters from "./getters";
import * as actions from "./actions";
import { SET_ROLES, SET_TOTAL } from "./types";

const state = {
  roles: [],
  total: 0
};

const mutations = {
  [SET_ROLES](state, roles) {
    state.roles = roles;
  },
  [SET_TOTAL](state, total) {
    state.total = total;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
