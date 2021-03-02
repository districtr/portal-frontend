import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Home from "./components/home";
import Start from "./components/start";
import CommentList from "./components/comment-list";
import CommentForm from "./components/comment-form";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/" className="navbar-brand">
            State Portal
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/start"} className="nav-link">
                Getting Started
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/comment"} className="nav-link">
                Submit Comments
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path={["/start"]} component={Start} />
            <Route exact path={["/comment"]} component={CommentList} />
            <Route exact path={["/upload"]} component={CommentForm} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
