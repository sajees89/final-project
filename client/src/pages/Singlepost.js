import React from 'react';
import { useParams } from 'react-router-dom';

import Commentlist from '../components/Commentlist';
import Commentform from '../components/Commentform';
import '../index.css';

import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_POST } from '../utils/queries';

const SinglePost = () => {
  const { id: postId } = useParams();

  const { loading, data } = useQuery(QUERY_POST, {
    variables: { id: postId },
  });

  const post = data?.post || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
<div class="card">
  {/* <img src="..." class="card-img-top" alt="..."> */}
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    
  </div>
</div>




      <div className="card mb-3">
        <p className="card-header">
          <span style={{ fontWeight: 700 }} className="text-light">
            {post.username}
          </span>{' '}
          post on {post.createdAt}
        </p>
        <div className="card-body">
          <p>{post.postText}</p>
        </div>
       
      </div>

      {post.commentCount > 0 && (
        <Commentlist comments={post.comments} />
      )}

      {Auth.loggedIn() && <Commentform postId={post._id} />}
    </div>
  );
};

export default SinglePost;
