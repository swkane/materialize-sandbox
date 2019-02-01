import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./Button";
import "materialize-css/dist/css/materialize.min.css";

import M from "materialize-css/dist/js/materialize.min.js";

class App extends Component {
  componentDidMount() {
    if (typeof M === "object" && M.AutoInit) {
      M.AutoInit();
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Button />
        </header>
      </div>
    );
  }
}

export default App;
