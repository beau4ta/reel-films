import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Nav from '../src/components/Nav/Nav';
import Login from '../src/components/Login/Login';
import Signup from '../src/components/Signup/Signup';
import Jumbotron from '../src/components/Jumbotron/Jumbotron';
import Home from '../src/pages/home';

function App() {
  return (
    <Router>
      <div className="App image">
        <Jumbotron />
        <Nav />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
