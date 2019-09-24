import { SET_PROJECTS } from "./types";
// import store from "store";
// import axios from "axios";

export const getListAccounts = ({ commit }, params) => {
  // return Promise.resolve(store.commit('global/LOADING', true))
  //   .then(() => axios.get("/api/account", { params }))
  //   .catch()
  //   .then(data => {
  //     commit(CHANGE_ACCOUNT_LIST, data.data);
  //     store.commit('global/LOADING', false);
  //   });
  // store.commit("global/LOADING", true);
  const projects = [
    {
      id: 0,
      project_name: "HoTroVay247",
      project_description: "Laravel MVC",
      team_size: "1",
      git_url: "https://github.com/nguyenanhhoang97/hotrovay247",
      execution_time: 0.5,
      cost: 817300.0,
      incom: 4000000.0,
      guarantee: 3.0,
      is_deleted: false
    },
    {
      id: 0,
      project_name: "dump-work",
      project_description: "Laravel Mix - VueJS",
      team_size: "2",
      git_url: "https://github.com/nguyenanhhoang97/dump-work",
      execution_time: 1.0,
      cost: 0.0,
      incom: 0.0,
      guarantee: 0.0,
      is_deleted: false
    }
  ];
  commit(SET_PROJECTS, projects);
  // store.commit("global/LOADING", false);
};
