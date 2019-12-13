import { SET_USERS, SET_TOTAL, UPDATE_USER, CREATE_NEW_USER } from "./types";
import store from "~/store";
import axios from "axios";

export const getUsers = ({ commit }, params) => {
  return Promise.resolve(store.commit("global/SET_LOADING", true))
    .then(() => axios.get("/api/user/list", { params }))
    .then(res => {
      if (res && res.data) {
        commit(SET_USERS, res.data.users ? res.data.users : []);
        commit(SET_TOTAL, res.data.total ? res.data.total : 0);
      }
      store.commit("global/SET_LOADING", false);
      return res.data ? res.data : {};
    })
    .catch();
};

// export const updateUser = ({ commit }, params) => {
//   return Promise.resolve(store.commit("global/SET_LOADING", true))
//     .then(() => {
//       commit(UPDATE_USER, params);
//       store.commit("global/SET_LOADING", false);
//     })
//     .catch();
// };

export const updateUser = ({ commit }, params) => {
  return Promise.resolve(store.commit("global/SET_LOADING", true))
    .then(() => axios.post("/api/user/update", { ...params }))
    .then(res => {
      if (res && res.data && res.data.user) {
        commit(UPDATE_USER, res.data.user);
        return res.data.user;
      }
      store.commit("global/SET_LOADING", false);
      return res.data ? res.data : {};
    })
    .catch();
};

export const createUser = ({ commit }, params) => {
  return Promise.resolve(store.commit("global/SET_LOADING", true))
    .then(() => {
      commit(CREATE_NEW_USER, params);
      store.commit("global/SET_LOADING", false);
    })
    .catch();
};