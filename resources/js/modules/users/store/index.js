import * as getters from "./getters";
import * as actions from "./actions";
import { SET_USERS, SET_TOTAL } from "./types";

const state = {
  users: [],
  total: 0
};

const mutations = {
  [SET_USERS](state, users) {
    state.users = users;
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
