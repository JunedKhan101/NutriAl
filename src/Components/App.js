import React, { useState } from "react";
import DataContext from "../Context/DataContext";
import Main from "./Main";
import Graph from "./Graph";
import "../css/index.css";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default function App() {
  const [context, setContext] = useState({});
    return (
      <div className="app">
        <Router>
            <Switch>
              <DataContext.Provider value={[context, setContext]}>
                  <Route exact path="/" component={Main} />
                  <Route path="/graph" component={Graph} />
              </DataContext.Provider>
            </Switch>
        </Router>
      </div>
    );
}