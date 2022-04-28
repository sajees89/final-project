import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import "../index.scss";
//import Auth from "../utils/auth";
import { QUERY_POST } from "../utils/queries";
import Likebutton from "../components/Likebutton";


const SinglePost = () => {
  const { id: postId } = useParams();

  const { loading, data } = useQuery(QUERY_POST, {
    variables: { id: postId },
  });

  const post = data?.post || [];

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div class="card mb-3">
        <div class="row no-gutters">
     
          <div class="col-md-8">
            <div className="card-body">
              <h5 className="card-title">
                <span style={{ fontWeight: 700 }} className="text-light">
                  {post.username}
                </span>
              </h5>
              <p className="card-text">{post.postText}</p>
              <p className="card-text">
                <small class="text-muted">{post.createdAt}</small>
              </p>
              <div>
              <Likebutton/>
              </div>
              <div>
              <Deletebutton/>
              </div>
            </div>
          </div>
        </div>
      </div>

      {post.likeCount > 0}

      {Auth.loggedIn() && <Likebutton postId={post._id} /> && <Deletebutton postId={post._id}/> } */}
    </div>
  );
};

export default SinglePost;