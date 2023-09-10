import React, { Component } from "react";

export default class Product extends Component {
  render() {
    return (
      <div className="col-lg-6">
        <div className="card m-2">
          <div className="card-body">
            <p className="text-muted">product #{this.props.prod.id}</p>
            <h5 className="pt-2 border-top">{this.props.prod.productName}</h5>
            <p>${this.props.prod.price}</p>
            {/* <p>qunatity {this.props.prod.quantity}</p> */}
          </div>
        </div>
      </div>
    );
  }
}
