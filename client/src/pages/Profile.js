import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import '../index.css';
import Postform from '../components/Postform';
import Postlist from '../components/Postlist';


import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';

const Profile = (props) => {
  const { username: userParam } = useParams();
  
  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};

  // redirect to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/profile" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

 

  return (
    <div>
      <div className="profile-header">
        <h2 className="profile-title">
          Viewing {userParam ? `${user.username}'s` : 'your'} profile.
        </h2>
  
      </div>

      <div className="profile-container">
        <div className="profile-post">
          <Postlist
            posts={user.posts}
            title={`${user.username}'s posts...`}
          />
        </div>

        
      </div>
      <div className="mb-3">{!userParam && <Postform />}</div>
    </div>
  );
};

export default Profile;
