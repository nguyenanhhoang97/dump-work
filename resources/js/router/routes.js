const HelloWorld = () =>
  import("../modules/hello-world/Hello").then(m => m.default || m);
const Home = () => import("../modules/home/Home").then(m => m.default || m);

export default [
  { path: "/", redirect: { name: "home" } },
  { path: "/home", name: "home", component: Home },
  { path: "/hello-world", name: "hello-world", component: HelloWorld }
  // { path: '*', component: NotFound },
];
