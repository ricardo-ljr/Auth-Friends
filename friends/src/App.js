import React from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Friends from "./components/FriendsList";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/friends">Friends</Link>
            </li>
          </ul>
        </header>{" "}
        <Switch>
          <Route path="/login" component={Login} />
          <Route exact path="/home" component={Home} />
          <PrivateRoute exact path="/friends" component={Friends} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
