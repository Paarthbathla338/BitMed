import React from "react";
import "./App.css";
import Header from "./Header.js";
import Home from "./Home.js";
import Home2 from "./Home2.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout.js";

function App() {
  return (
    <Router>
      <div className="app">
      <Header />

        <Switch>

        
        <Route path="/checkout">
        <Checkout/>

        </Route>
        
        <Route path="/">
          <Home />
          <br />
          <Home2 />
          </Route>

        
        </Switch>
      </div>
    </Router>
  );
}

export default App;
