import React, { Component } from "react";

export default class MainContent extends Component {
  state = {
    pageTitle: "Customers",
    customersCount: 5,
    customers: [
      {
        id: 1,
        name: "scott",
        phone: null,
        address: {
          city: "Toronto",
        },
      },
      {
        id: 2,
        name: "john",
        phone: "234-4567",
        address: {
          city: "Mississauga",
        },
      },
      {
        id: 3,
        name: "jane",
        phone: "456-4567",
        address: {
          city: "Oshawa",
        },
      },
      {
        id: 4,
        name: "sally",
        phone: null,
        address: {
          city: "Burlington",
        },
      },
    ],
  };

  render() {
    return (
      <div>
        <h4 className="App-link">
          {this.state.pageTitle}
          <span className="badge badge-secondary m-2">
            {this.state.customersCount}
          </span>
          <button className="btn btn-info" onClick={this.onRefreshClick}>
            Refresh
          </button>
        </h4>

        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Customer Name</th>
              <th>Phone</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {this.state.customers.map((cust) => {
              return (
                <tr key={cust.id}>
                  <td>{cust.id}</td>
                  <td>{cust.name}</td>
                  <td>{this.getPhone(cust.phone)}</td>
                  <td>{cust.address.city}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

  //Executes when the user clicks on Refresh button
  onRefreshClick = () => {
    this.setState({ customersCount: 7 });
  };

  getPhone = (phone) => {
    return phone ? phone : <span className="bg-warning">N/A</span>;
  };
}
