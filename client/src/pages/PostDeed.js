import React from 'react';
//import { useState} from "react";


  const PostDeed = () => {
    // const [title, setTitle] = useState("");
    // const [postText, setPostText] = useState("");
  
    return (
      <div className="create-post">
        <div className="post-container">
          <h1>Post A Good Deed</h1>
         
          <div className="post-body">
            <label> Share Your Story :</label>
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