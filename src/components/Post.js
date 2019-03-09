import React, { Component } from 'react';
import * as firebase from 'firebase';


export class Post extends Component {
   
    
  render() {
  
    return Object.values(this.props.postsData).map((data) => (
        <main role="main" class="container">
        <div className="jumbotron">
            <h1>{data.Title}</h1>
            <p>{data.Body}</p>
            <small>{data.Author}</small>
    
    
         </div>
    </main>

    ));
  }
}

export default Post;
