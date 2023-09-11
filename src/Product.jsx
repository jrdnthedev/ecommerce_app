import React, { Component } from "react";

export default class Product extends Component {
  //setting state to passed down props allows for manipulation of data
  state = {
    product: this.props.prod,
  };
  render() {
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
}
