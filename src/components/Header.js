import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as firebase from "firebase";

export class Header extends Component {

  constructor(props) {
    super(props);

    firebase.auth().onAuthStateChanged=(user)=> {
      if (user) {
        // User is signed in.
        alert(user);
      } else {
        // No user is signed in.
        alert("not logged");
      }
    }
    this.state = {
      isLoggedin:false
    };
   
    
   
  }

  handlelogout = e => {
    console.log("logout clicked");
    this.setState({
      isLoggedin: false
    });
  };

  render() {
    const isLoggedin = this.state.isLoggedin;
    let login;
    let logout;
    let addpost;
    let viewpost;
    let home;
    let register;
    if (!isLoggedin) {
      login = (
        <a className="nav-link">
          <Link to="/login">Login </Link>
        </a>
      );
      register = (
        <a className="nav-link">
          <Link to="/Registration">Register</Link>
        </a>
      );
    } else {
      logout = (
        <a className="nav-link" onClick={this.handlelogout}>
          <Link to="/login">Log out </Link>
        </a>
      );
      addpost = (
        <a className="nav-link">
          <Link to="/Add">Add Post </Link>
        </a>
      );
      viewpost = <a className="nav-link">View Post</a>;
      home = (
        <a className="nav-link">
          {" "}
          <span className="sr-only">(current)</span>
          <Link to="/">Home</Link>
        </a>
      );
    }
    return (
      <nav className="navbar navbar-expand-md navbar-light bg-dark navbar-static-top">
        <a className="navbar-brand">BlogApp</a>

        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">{home}</li>

            <li className="nav-item">
              <a className="nav-link">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Blog</a>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li className="nav-item">{login}</li>

            <li className="nav-item">{register}</li>

            <li className="nav-item">{addpost}</li>

            <li className="nav-item">{viewpost}</li>

            <li className="nav-item">{logout}</li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default Header;
