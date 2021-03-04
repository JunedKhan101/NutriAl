import React from "react";
import Main from "./Main";
import Graph from "./Graph";
import "../css/index.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
    return (
      <div className="App">
        <Router>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/graph" component={Graph} />
            </Switch>
        </Router>
      </div>
    );
}