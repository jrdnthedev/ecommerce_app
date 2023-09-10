import React, { Component } from "react";
import Product from "./Product";

export default class ShoppingCart extends Component {
  state = {
    products: [
      { id: 1, productName: "Iphone X", price: 2000, quantity: 0 },
      { id: 2, productName: "Samsung Galaxy", price: 2000, quantity: 0 },
      { id: 3, productName: "Samsung Note", price: 2000, quantity: 0 },
      { id: 4, productName: "Iphone 12", price: 1600, quantity: 0 },
      { id: 5, productName: "Google Pixel", price: 1500, quantity: 0 },
      { id: 6, productName: "Iphone 13", price: 1700, quantity: 0 },
    ],
  };
  render() {
    return (
      <div className="container-fluid">
        <h4>Shopping Cart</h4>
        <div className="row">
          {this.state.products.map((prod) => {
            return <Product key={prod.id} prod={prod} />;
          })}
        </div>
      </div>
    );
  }
}
