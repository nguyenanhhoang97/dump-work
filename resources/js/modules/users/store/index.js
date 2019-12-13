import * as getters from "./getters";
import * as actions from "./actions";
import { SET_USERS, SET_TOTAL, UPDATE_USER, CREATE_NEW_USER } from "./types";

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
  },
  [UPDATE_USER](state, user) {
    const { users } = state;
    const idx = users.findIndex(elm => elm.id === user.id);
    users[idx].name = user.name;
    users[idx].email = user.email;
    state.users = [...users];
  },
  [CREATE_NEW_USER](state, user) {
    let { users } = state;
    if (users.length > 9) {
      users.splice(9, 1);
    }
    users = [{ ...user }, ...users];
    state.users = [...users];
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
