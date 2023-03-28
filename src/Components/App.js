import React, { useState } from "react";
import Navbar from "./Navbar";
import DataContext from "../Context/DataContext";
import Home from "./Home";
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
                  <Navbar />
                  <Route exact path="/" component={Home} />
                  <Route path="/graph" component={Graph} />
              </DataContext.Provider>
            </Switch>
        </Router>
      </div>
    );
}