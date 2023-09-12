import React, { Component } from "react";
import NavBar from "./NavBar";
import "./App.css";
import ShoppingCart from "./ShoppingCart";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <ShoppingCart x="10" />
      </React.Fragment>
    );
  }
}
