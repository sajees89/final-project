import React from 'react';
//import { useState} from "react";


  const PostDeed = () => {
    // const [title, setTitle] = useState("");
    // const [postText, setPostText] = useState("");
  
    return (
      <div className="create-post">
        <div className="post-container">
          <h1>Post A Good Deed</h1>
          <div className="post-title">
            <label> Title:</label>
            <input
              placeholder="Title..."
              // onChange={(event) => {
              //   setTitle(event.target.value);
              // }}
            />
          </div>
          <div className="post-body">
            <label> Share the Story :</label>
            <textarea
              placeholder="Post..."
              // onChange={(event) => {
              //   setPostText(event.target.value);
              // }}
            />
          </div>
          <button onClick={PostDeed}> Submit Post</button>
        </div>
      </div>
    );
  }
  

export default PostDeed;