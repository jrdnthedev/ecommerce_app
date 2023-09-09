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
        photo: "https://picsum.photos/id/1000/60",
        address: {
          city: "Toronto",
        },
      },
      {
        id: 2,
        name: "john",
        phone: "234-4567",
        photo: "https://picsum.photos/id/1001/60",
        address: {
          city: "Mississauga",
        },
      },
      {
        id: 3,
        name: "jane",
        phone: "456-4567",
        photo: "https://picsum.photos/id/1002/60",
        address: {
          city: "Oshawa",
        },
      },
      {
        id: 4,
        name: "sally",
        phone: null,
        photo: "https://picsum.photos/id/1003/60",
        address: {
          city: "Burlington",
        },
      },
      {
        id: 5,
        name: "ken",
        phone: null,
        photo: "https://picsum.photos/id/1003/60",
        address: {
          city: "Brampton",
        },
      },
    ],
  };

  customerNameStyle = (custName) => {
    if (custName.startsWith("s")) {
      return { backgroundColor: "green" };
    } else if (custName.startsWith("j")) {
      return { backgroundColor: "red" };
    } else if (custName.startsWith("k")) {
      return { backgroundColor: "blue" };
    }
  };

  render() {
    return (
      <div>
        <h4>
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
              <th></th>
              <th>Customer Name</th>
              <th>Phone</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>{this.getCustomerRow()}</tbody>
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

  getCustomerRow = () => {
    return this.state.customers.map((cust) => {
      return (
        <tr key={cust.id}>
          <td>{cust.id}</td>
          <td>
            <img src={cust.photo} alt="Customer" />
          </td>
          <td style={this.customerNameStyle(cust.name)}>{cust.name}</td>
          <td>{this.getPhone(cust.phone)}</td>
          <td>{cust.address.city}</td>
        </tr>
      );
    });
  };
}
