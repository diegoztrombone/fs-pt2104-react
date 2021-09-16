import Index from "../pages/index";
import Detail from "../pages/_detail";
import Error from "../pages/error";

export default [
  {
    path: "/",
    component: Index,
    exact: true
  },
  {
    path: "/detail/:pokemon",
    component: Detail,
    exact: true
  },
  {
    path: "/error/:pokemon",
    component: Error,
    exact: true
  }
];
