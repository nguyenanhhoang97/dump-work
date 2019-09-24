import { SET_LOADING } from "./types";
import * as getters from "./getters";
import * as actions from "./actions";

const state = {
  loading: false,
  menus: [
    {
      id: 0,
      name: "Dashboard",
      route: "Dashboard",
      icon: "tim-icons icon-chart-pie-36"
    },
    {
      id: 1,
      name: "Projects",
      route: "Projects",
      icon: "tim-icons icon-molecule-40"
    }
  ]
};

const mutations = {
  [SET_LOADING](state, flag) {
    state.loading = flag;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
