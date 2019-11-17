import { SET_PROJECTS, SET_TOTAL } from "./types";
import store from "~/store";
import axios from "axios";

export const getProjects = ({ commit }, params) => {
  const { pageIndex, pageSize, search } = params;
  return Promise.resolve(store.commit("global/SET_LOADING", true))
    .then(() => axios.get("/api/project/list", { pageIndex, pageSize, search }))
    .then(res => {
      if (res && res.data) {
        commit(SET_PROJECTS, res.data.projects ? res.data.projects : []);
        commit(SET_TOTAL, res.data.total ? res.data.total : 0);
      }
      store.commit("global/SET_LOADING", false);
      return res.data ? res.data : {};
    })
    .catch();
};
