import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Checkout from "./Components/Checkout";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <h1>Login</h1>
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
