import React, { Component } from "react";
import * as firebase from "firebase";

export class Login extends Component {
  state = {
    Email: "",
    Password: "",
    
  };

  onSubmit = e => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.Email, this.state.Password)
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorCode, errorMessage);
        
        // ...
      })
      .then(this.props.history.push("/"));
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="container mt-5">
        <h1>User Login</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email Address</label>
            <input
              type="email"
              name="Email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={this.state.Email}
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
              value={this.state.Password}
              onChange={this.onChange}
            />
          </div>

          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
