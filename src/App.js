import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as firebase from "firebase";
import Header from "./components/Header";
import Post from "./components/Post";
import Login from "./components/Login";
import Registration from "./Registration";
import Add from "./Add";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postsData: []
    };
  }

  componentDidMount() {
    var self = this;
    const rootref = firebase.database().ref();
    //const speedref=rootref.child('title');
    rootref.on("value", snap => {
      self.setState({
        postsData: snap.val()
      });
    });
  }
  render() {
    console.log(this.state.postsData);
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/login" component={Login} />
          <Route exact path="/Registration" component={Registration} />

          <Route
            exact
            path="/"
            render={props => <Post postsData={this.state.postsData} />}
          />

          <Route path="/Add" component={Add} />
        </div>
      </Router>
    );
  }
}

export default App;
