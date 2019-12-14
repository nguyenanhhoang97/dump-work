import { SET_LOADING } from "./types";
import * as getters from "./getters";
import * as actions from "./actions";

const state = {
  loading: false,
  menus: [
    {
      id: 0,
      name: "Dashboard",
      route: "dashboard",
      icon: "tim-icons icon-chart-pie-36",
      roles: ['Admin']
    },
    {
      id: 1,
      name: "Projects",
      route: "projects",
      icon: "tim-icons icon-molecule-40",
      roles: ['Admin', 'User']
    },
    {
      id: 2,
      name: "Users",
      route: "users",
      icon: "tim-icons icon-single-02",
      roles: ['Admin']
    },
    {
      id: 3,
      name: "Roles",
      route: "roles",
      icon: "tim-icons icon-settings-gear-63",
      roles: ['Admin']
    }
  ],
  routes: [
    {
      name: 'dashboard',
      roles: ['Admin']
    },
    {
      name: 'projects',
      roles: ['Admin', 'User']
    },
    {
      name: 'users',
      roles: ['Admin']
    },
    {
      name: 'roles',
      roles: ['Admin']
    },
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
