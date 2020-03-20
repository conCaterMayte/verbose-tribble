import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import HomePage from "../components/HomePage";
import Play from "../components/Play";
import HighScores from "../components/HighScores";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="nav-bar">
          <h1></h1>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Play">Play</Link>
            </li>
            <li>
              <Link to="/HighScores">High Scores</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/Play">
            <Play />
          </Route>
          <Route path="/HighScores">
            <HighScores />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
