import { SET_PROFILE } from "./types";
// import store from "store";
// import axios from "axios";

export const getProfile = ({ commit }, params) => {
  // return Promise.resolve(store.commit('global/LOADING', true))
  //   .then(() => axios.get("/api/account", { params }))
  //   .catch()
  //   .then(data => {
  //     commit(CHANGE_ACCOUNT_LIST, data.data);
  //     store.commit('global/LOADING', false);
  //   });
  // store.commit("global/LOADING", true);
  const profile = {}
  commit(SET_PROFILE, profile);
  // store.commit("global/LOADING", false);
};
