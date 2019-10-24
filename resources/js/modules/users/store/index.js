import * as getters from "./getters";
import * as actions from "./actions";
import { SET_USERS } from "./types";

const state = {
  users: []
};

const mutations = {
  [SET_USERS](state, users) {
    state.users = users;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
