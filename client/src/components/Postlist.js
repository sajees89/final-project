import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

const Postlist = ({ posts }) => {
  if (!posts.length) {
    return <h3>No Posts Yet</h3>;
  }

  return (
    <div className="p-listing">
      {posts &&
        posts.map((post) => (
          <div key={post._id} className="card">
            <p className="card-header">
              <Link
                to={`/profile/${post.username}`}
                style={{ fontWeight: 700 }}
                className="text-light"
              >
                {post.username}
              </Link>{" "}
              post on {post.createdAt}
            </p>
            <div className="card-body">
              <Link to={`/post/${post._id}`}>
                <p>{post.postText}</p>
                
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Postlist;
