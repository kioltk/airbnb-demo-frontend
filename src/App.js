import React, { Component } from "react";
import "./App.css";
import "normalize.css";
import Header from "./ui/header/Header";
import "flexboxgrid2";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
