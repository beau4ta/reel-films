import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path={["/Login", "/api/movies/Login", "/profile/Login"]} component={Login}/>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/movies/:id" component={Movies} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
