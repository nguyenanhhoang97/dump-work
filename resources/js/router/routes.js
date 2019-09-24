const Dashboard = () =>
  import("../modules/dashboard/index").then(m => m.default || m);
const Projects = () =>
  import("../modules/projects/index").then(m => m.default || m);

export default [
  { path: "/", redirect: { name: "Dashboard" } },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/projects", name: "Projects", component: Projects }
  // { path: '*', component: NotFound },
];
