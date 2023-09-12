import React, { Component } from "react";

export default class Product extends Component {
  constructor(props) {
    super(props);
    //setting state to passed down props allows for manipulation of data
    this.state = {
      product: this.props.prod,
    };
    // console.log("product constructor");
  }

  render() {
    // console.log("product render ");
    return (
      <div className="col-lg-6">
        <div className="card m-2">
          <div className="card-body">
            <p className="text-muted">
              product #{this.state.product.id}{" "}
              <span className="pull-right">
                <i
                  className="fa fa-times"
                  onClick={() => {
                    this.props.onDeleteProduct(this.state.product);
                  }}
                ></i>
              </span>{" "}
            </p>
            <h5 className="pt-2 border-top">
              {this.state.product.productName}
            </h5>
            <p>${this.state.product.price}</p>
          </div>
          <div className="card-footer text-right">
            <div className="float-left">
              <span className="badge">{this.state.product.quantity}</span>
              <div className="btn-group">
                <button
                  className="btn btn-outline-success"
                  onClick={() => {
                    this.props.onIncrement(this.state.product, 10);
                  }}
                >
                  +
                </button>
                <button
                  className="btn btn-outline-success"
                  onClick={() => this.props.onDecrement(this.state.product, 0)}
                >
                  -
                </button>
              </div>
            </div>
            <div className="floar-right">{this.props.children}</div>
          </div>
        </div>
      </div>
    );
  }

  //Executes after constructor and render method (includes life cycle of child components, if any) of current component
  componentDidMount() {
    //fetch data from data source
    // console.log("product componentDidMount...");
  }

  //Http calls should be made here
  componentDidUpdate(prevProps, prevState) {
    // console.log("product componentDidUpdate...");
    //check to make sure there has been a change before making http call
    // if(prevProps.value != this.props.value){ do something...}
  }

  componentWillUnmount() {
    // console.log("componentWillUnmount product");
  }
}
