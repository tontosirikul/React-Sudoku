/* eslint-disable no-template-curly-in-string */
import React, { Component } from "react";
import "./App.css";
import Board from "./Board.js";

//component นี้ return หน้า webpage
class App extends Component {
  render() {
    return (
      <div className="App">
        <Board></Board>
      </div>
    );
  }
}

export default App;
