import React, { Component } from "react";
import NavBar from "./NavBar";
import "./App.css";
import Dashboard from "./Dashboard";
import Login from "./Login";
import ShoppingCart from "./ShoppingCart";
import CustomersList from "./CustomersList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "./404";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/dashboard" exact element={<Dashboard />} />
          <Route path="/cart" exact element={<ShoppingCart />} />
          <Route path="/customers" exact element={<CustomersList />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
