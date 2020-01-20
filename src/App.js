import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Components/Layout/NavBar";
import Alert from "./Components/Layout/Alert";
import User from "./Components/User/User";
import Search from "./Components/User/Search";
import SingleUser from "./Components/User/SingleUser";
import About from "./Components/Pages/About";
import GithubState from "./Context/Github/GithubState";
import "./App.css";
import DemoUser from "./Components/User/DemoUser";

const App = () => {

  return (
    <GithubState>
      <Router>
        <div className='App'>
          <Nav />
          <Switch>
            <Route
              exact
              path='/'
              render={props => (
                <div className='container'>
                  <Alert />
                  <Search/>
                  <User />
                </div>
              )}
            />
            <Route path='/about' component={About} />
            <Route path='/user/:name' component={SingleUser} />
          </Switch>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
