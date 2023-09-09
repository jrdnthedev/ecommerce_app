import React, { Component } from "react";
import NavBar from "./NavBar";
import MainContent from "./MainContent";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <MainContent />
      </React.Fragment>
    );
  }
}
