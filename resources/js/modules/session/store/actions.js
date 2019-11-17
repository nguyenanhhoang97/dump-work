import { UPDATE_PROFILE, UPDATE_PASSWORD } from "./types";
import store from "~/store";
import axios from "axios";

export const updateProfile = ({ commit }, params) => {
  const { email, name } = params;
  return Promise.resolve(store.commit("global/SET_LOADING", true))
    .then(() => axios.patch("/api/settings/profile", { email, name }))
    .then(res => {
      store.commit("global/SET_LOADING", false);
      return res;
    })
    .catch();
};

export const updatePassword = ({ commit }, params) => {
  const { password, confirmPass } = params;
  return Promise.resolve(store.commit("global/SET_LOADING", true))
    .then(() =>
      axios.patch("/api/settings/password", {
        password,
        password_confirmation: confirmPass
      })
    )
    .then(res => {
      store.commit("global/SET_LOADING", false);
      return res;
    })
    .catch();
};
