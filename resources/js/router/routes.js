const Dashboard = () =>
  import("../modules/dashboard/index").then(m => m.default || m);

export default [
  { path: "/", redirect: { name: "dashboard" } },
  { path: "/dashboard", name: "dashboard", component: Dashboard },
  // { path: '*', component: NotFound },
];
