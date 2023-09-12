import React, { Component } from "react";
import Product from "./Product";

export default class ShoppingCart extends Component {
  constructor() {
    super();
    //initilaization of the state
    this.state = {
      products: [
        { id: 1, productName: "Iphone X", price: 2000, quantity: 0 },
        { id: 2, productName: "Samsung Galaxy", price: 2000, quantity: 0 },
        { id: 3, productName: "Samsung Note", price: 2000, quantity: 0 },
        { id: 4, productName: "Iphone 12", price: 1600, quantity: 0 },
        { id: 5, productName: "Google Pixel", price: 1500, quantity: 0 },
        { id: 6, productName: "Iphone 13", price: 1700, quantity: 0 },
      ],
    };
    console.log("shopping cart constructor");
  }

  render() {
    console.log("shopping cart render ");
    return (
      <div className="container-fluid">
        <h4>Shopping Cart</h4>
        <div className="row">
          {this.state.products.map((prod) => {
            return (
              <Product
                key={prod.id}
                prod={prod}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDeleteProduct={this.deleteProduct}
              >
                <button className="btn btn-primary">Buy Now</button>
              </Product>
            );
          })}
        </div>
      </div>
    );
  }

  //Executes after constructor and render method (includes life cycle of child components, if any) of current component
  componentDidMount() {
    //fetch data from data source
    // console.log("componentDidMount...");
  }

  //Http calls should be made here
  componentDidUpdate(prevProps, prevState) {
    // console.log(
    //   "componentDidUpdate...",
    //   prevProps,
    //   prevState,
    //   this.props,
    //   this.state
    // );
    //check to make sure there has been a change before making http call
    // if(prevProps.value != this.props.value){ do something...}
  }

  //cleanup code to cancel http request etc... goes in here
  componentWillUnmount() {
    // console.log("componentWillUnmount");
  }

  componentDidCatch(error, info) {
    // console.log("componentDidCatch shopping cart", error, info);
  }

  handleIncrement = (product, maxValue) => {
    //copy products array to local variable
    let allProducts = [...this.state.products];
    //find the index of the selected product
    let index = allProducts.indexOf(product);
    console.log(allProducts[index]);
    if (allProducts[index].quantity < maxValue) {
      //use the index of the product to update its quantity
      allProducts[index].quantity++;
    }
    //update products quantity using setstate
    this.setState({ products: allProducts });
  };

  handleDecrement = (product, minValue) => {
    //copy products array to local variable
    let allProducts = [...this.state.products];
    //find the index of the selected product
    let index = allProducts.indexOf(product);
    console.log(allProducts[index]);
    if (allProducts[index].quantity > minValue) {
      //use the index of the product to update its quantity
      allProducts[index].quantity--;
    }
    //update products quantity using setstate
    this.setState({ products: allProducts });
  };

  deleteProduct = (product) => {
    //copy products array to local variable
    let allProducts = [...this.state.products];
    //find the index of the selected product
    let index = allProducts.indexOf(product);

    //delete product based on index
    allProducts.splice(index, 1);

    //update products quantity using setstate
    this.setState({ products: allProducts });
  };
}
