import { SET_USERS, SET_TOTAL } from "./types";
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
