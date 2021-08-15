import React,{useEffect} from "react";
import "./App.css";
import Header from "./Header.js";
import Home from "./Home.js";
import Home2 from "./Home2.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout.js";
import Login from "./Login.js";
import {useStateValue} from "./StateProvider"
import {auth} from "./firebase.js"
import Payment from "./Payment.js"

function App() {
  const [{basket},dispatch]=useStateValue();


  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
      console.log("The User is", authUser)

      if (authUser){
        dispatch({
          type:"SET_USER",
          user:authUser,
        })

      }
      else{
        dispatch({
          type:"SET_USER",
          user:null
        })

      }
    })
  },[])
  return (
    <Router>
      <div className="app">
      <Header />

        <Switch>

        
        <Route path="/checkout">
        <Checkout/>

        </Route>

        <Route path="/login">
          <Login/>
        </Route>

        <Route path="/payment">
        <Payment/>
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
