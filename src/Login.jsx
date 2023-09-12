import React, { Component } from "react";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      message: "",
    };
  }
  render() {
    return (
      <div className="col-lg-9">
        <h4 className="m-1 p-2 border-bottom">Login</h4>

        {/* email starts */}
        <div className="form-group form-row">
          <label htmlFor="" className="col-lg-4">
            Email:
          </label>
          <input
            type="text"
            className="form-control"
            value={this.state.email}
            onChange={(event) => {
              this.setState({ email: event.target.value });
            }}
          />
        </div>

        {/* password starts */}
        <div className="form-group form-row">
          <label htmlFor="" className="col-lg-4">
            Password:
          </label>
          <input
            type="password"
            className="form-control"
            value={this.state.password}
            onChange={(event) => {
              this.setState({ password: event.target.value });
            }}
          />
        </div>

        <div className="text-right">
          {this.state.message}
          <button className="btn btn-primary" onClick={this.onLoginClick}>
            Login
          </button>
        </div>
      </div>
    );
  }

  onLoginClick = () => {
    console.log(this.state);
    if (
      this.state.email === "admin@example.com" &&
      this.state.password === "password123"
    ) {
      //show success message
      this.setState({
        message: <span className="text-success">login successful!</span>,
      });
    } else {
      //show error message
      this.setState({
        message: <span className="text-danger">login failed!</span>,
      });
    }
  };
}
