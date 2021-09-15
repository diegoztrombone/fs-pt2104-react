import App from "../pages";
import Country from "../pages/_country";
import Error from "../pages/error"

export default [
  {
    path: "/",
    component: App,
    exact: true
  },
  {
    path: "/country/:country",
    component: Country,
    exact: true
  },
  {
    path: "/error",
    component: Error,
    exact: true
  }
];
