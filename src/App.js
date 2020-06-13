import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import History from "./pages/History";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/history" component={History} />
      </Switch>
    </div>
  );
}

export default App;
