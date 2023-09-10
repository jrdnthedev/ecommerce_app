import React, { Component } from "react";

export default class Product extends Component {
  state = {
    product: this.props.prod,
  };
  render() {
    return (
      <div className="col-lg-6">
        <div className="card m-2">
          <div className="card-body">
            <p className="text-muted">product #{this.state.product.id}</p>
            <h5 className="pt-2 border-top">
              {this.state.product.productName}
            </h5>
            <p>${this.state.product.price}</p>
            {/* <p>qunatity {this.props.prod.quantity}</p> */}
          </div>
        </div>
      </div>
    );
  }
}
