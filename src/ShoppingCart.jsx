import React, { Component } from "react";
import Product from "./Product";

export default class ShoppingCart extends Component {
  constructor() {
    super();
    //initilaization of the state
    this.state = {
      products: [],
    };
  }

  render() {
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
  async componentDidMount() {
    //fetch data from data source
    var response = await fetch("http://localhost:5000/product", {
      method: "GET",
    });
    //promise executed by response.json and after completion response is assigned to products
    let products = await response.json();
    //setting the state to the list of products returned from the db
    this.setState({ products: products });

    console.log("componentDidMount ", this.state.products);
    //alternate approach without async/await
    // promise.then((response) => {
    //   console.log(response);

    //   let promise2 = response.json();
    //   promise2.then((products) => {
    //     console.log(products);
    //     this.setState({ products: products });
    //   });
    // });

    //check to make sure there has been a change before making http call
    // if(prevProps.value != this.props.value){ do something...}
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
    if (allProducts[index].quantity < maxValue) {
      //use the index of the product to update its quantity
      allProducts[index].quantity++;
      //update products quantity using setstate
      this.setState({ products: allProducts });
    }
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
      //update products quantity using setstate
      this.setState({ products: allProducts });
    }
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
