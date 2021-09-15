import Index from "../pages/index";
import Detail from "../pages/_detail";

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
  }
];
