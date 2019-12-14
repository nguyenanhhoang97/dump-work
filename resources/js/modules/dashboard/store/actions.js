import { SET_DASHBOARD_DATA } from "./types";
import store from "~/store";
import axios from "axios";

export const getDashboardData = ({ commit }, params) => {
  return Promise.resolve(store.commit("global/SET_LOADING", true))
    .then(() => axios.get("/api/dashboard", {}))
    .then(res => {
      if (res && res.data) {
        commit(SET_DASHBOARD_DATA, res.data);
      }
      store.commit("global/SET_LOADING", false);
      return res.data ? res.data : {};
    })
    .catch();
};
