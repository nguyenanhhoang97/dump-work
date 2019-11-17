import { UPDATE_PROFILE, UPDATE_PASSWORD } from "./types";
import store from '~/store'
import axios from "axios";

export const updateProfile = ({ commit }, params) => {
  return Promise.resolve(store.commit("global/LOADING", true))
    .then(() => axios.post("/api/settings/profile", { ...params }))
    .then(res => {
      commit(UPDATE_PROFILE, res);
      store.commit("global/LOADING", false);
      return res;
    })
    .catch();
};

export const updatePassword = ({ commit }, params) => {
  return Promise.resolve(store.commit("global/LOADING", true))
    .then(() => axios.post("/api/settings/password", { ...params }))
    .then(res => {
      commit(UPDATE_PASSWORD, res);
      store.commit("global/LOADING", false);
      return res;
    })
    .catch();
};