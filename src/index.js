import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as firebase from "firebase";
import * as serviceWorker from "./serviceWorker";

var config = {
  apiKey: "AIzaSyCBu7DxtlVXVWhzNRVg-0cdnE2RkdfCzNI",
  authDomain: "react-blog-app-25beb.firebaseapp.com",
  databaseURL: "https://react-blog-app-25beb.firebaseio.com",
  projectId: "react-blog-app-25beb",
  storageBucket: "react-blog-app-25beb.appspot.com",
  messagingSenderId: "1008115208608"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
