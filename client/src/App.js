import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Nav from '../src/components/Nav/Nav';
import Login from '../src/components/Login/Login';
import Signup from '../src/components/Signup/Signup';
import Jumbotron from '../src/components/Jumbotron/Jumbotron';
import Home from '../src/pages/home';
import Profile from '../src/pages/profile';




function App() {
  const [auth, setAuth] = useState({
    isAuthenticated: false,
    signin() {
      setAuth({...auth, isAuthenticated: true}) 
    },
    signout() {
      setAuth({...auth, isAuthenticated: false}) 
    }
  })
  
  return (

    <Router>
      <div className="App image">
        <Jumbotron />
        <Nav />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/profile' component={Profile} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
