// import { SET_PROFILE } from "./types";
import * as getters from "./getters";
import * as actions from "./actions";

const state = {
  profile: []
};

const mutations = {
  // [SET_PROFILE](state, profile) {
  //   state.profile = profile;
  // }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
