import { SET_ROLES, SET_TOTAL } from "./types";
import store from "~/store";
import axios from "axios";

export const getRoles = ({ commit }, params) => {
  return Promise.resolve(store.commit("global/SET_LOADING", true))
    .then(() => axios.get("/api/role/list", { params }))
    .then(res => {
      if (res && res.data) {
        commit(SET_ROLES, res.data.roles ? res.data.roles : []);
        commit(SET_TOTAL, res.data.total ? res.data.total : 0);
      }
      store.commit("global/SET_LOADING", false);
      return res.data ? res.data : {};
    })
    .catch();
};
