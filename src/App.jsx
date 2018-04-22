import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import kitty from "./res/kitty.svg";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="body">
          <p>Welcome to the website of Justin P. Morrow.</p>
          <p>It's currently under construction, but enjoy this spinning cat!</p>
          <img className="kitty" src={kitty} />
        </div>
      </div>
    );
  }
}

export default App;
