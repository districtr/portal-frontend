import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// import AddTutorial from "./components/add-tutorial.component";
// import Tutorial from "./components/tutorial.component";
import TutorialsList from "./components/tutorials-list";

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
                Share Comments
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/tutorials"]} component={TutorialsList} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
