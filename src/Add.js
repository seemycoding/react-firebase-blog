import React, { Component } from "react";
import * as firebase from "firebase";
import Addpost from "./components/Addpost";

class Add extends Component {
  addpost = (title, writtenBy, body) => {
    console.log(title, writtenBy, body);
    firebase
      .database()
      .ref()
      .push()
      .set({
        Title: title,
        Body: body,
        Author: writtenBy
      });
    //const speedref=rootref.child('title');
  };

  render() {
    return (
      <div className="container">
        <Addpost addpost={this.addpost} />
      </div>
    );
  }
}

export default Add;
