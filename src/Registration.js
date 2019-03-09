import React, { Component } from "react";
import * as firebase from "firebase";
import Modal from "./components/Modal";

export class Registration extends Component {
  state = {
    Name: "",
    Email: "",
    Password: ""
  };

  onSubmit = e => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.Email, this.state.Password)
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorCode, errorMessage);
      }).then(this.props.history.push("/Login"));
      
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="container mt-5">
        <h1>User Registration</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email Name</label>
            <input
              type="text"
              name="Name"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={this.state.Name}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email Address</label>
            <input
              type="email"
              name="Email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={this.props.Email}
              onChange={this.onChange}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Password</label>
            <input
              type="password"
              name="Password"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={this.props.Password}
              onChange={this.onChange}
            />
          </div>
          <div className="well">
            <input
              type="submit"
              name="SignUp"
              id="signup"
              value="Post"
              className="btn btn-primary"
              data-toggle="modal"
              data-target="#exampleModal"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Registration;
