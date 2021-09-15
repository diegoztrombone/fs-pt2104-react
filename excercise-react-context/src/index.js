import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Provider from "./state/Provider";
import routes from "./routes";

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <Router>
        <Switch>
          {routes.map((route, i) => {
            return <Route {...route} key={i} />;
          })}
          <Redirect to="/" />
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
