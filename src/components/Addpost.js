import React, { Component } from "react";
import { throws } from "assert";

export class Addpost extends Component {
  state = {
    title: "",
    body: "",
    writtenBy: ""
  };
  
  Onsubmit = e => {
    e.preventDefault();
    this.props.addpost(this.state.title,this.state.writtenBy,this.state.body)
    this.setState({ title: "" });
    this.setState({ body: "" });
    this.setState({ writtenBy: "" });
  };
  onChange = e =>
    this.setState({
    [e.target.name]: e.target.value

    });
   
  render() {
    
    return (
      <form onSubmit={this.Onsubmit}>
        <div className="form-group ">
          <label htmlFor="exampleFormControlInput1">
          <h3>Title</h3>
          </label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={this.state.title}
            onChange={this.onChange}
            placeholder="Enter Title"
            required="True"
            maxLength="50"
          />
        </div>
        <div className="form-group ">
          <label htmlFor="exampleFormControlInput1">
          <h3>Written By</h3>
          </label>
          <input
            type="text"
            className="form-control"
            name="writtenBy"
            value={this.state.writtenBy}
            onChange={this.onChange}
            placeholder="Author"
            required="True"
            maxLength="50"
          />
        </div>
       
       

        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">
            <h3>Body</h3>
          </label>
          <textarea
            className="form-control"
            name="body"
            rows="8"
            value={this.state.body}
            onChange={this.onChange}
            required="True"
            maxLength="255"
          />
        </div>
        <div className="well">
          <input
            type="submit"
            name="SignUp"
            id="signup"
            value="Post"
            className="btn btn-primary"
          />
        </div>
      </form>
    );
  }
}

export default Addpost;
