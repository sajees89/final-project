import React from 'react';
import Postlist from '../components/Postlist';
import Postform from '../components/Postform';


import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_POSTS } from '../utils/queries';

const ReadAll = () => {
  const { loading, data } = useQuery(QUERY_POSTS);
  
  const posts = data?.posts || [];

  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <div className="flex-row justify-space-between">
        {loggedIn && (
          <div className="col-12 mb-3">
            <Postform />
          </div>
        )}
        <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <Postlist
              posts={posts}
              title="Some Feed for Post(s)..."
            />
          )}
        </div>
        
      </div>
    </main>
  );
};

export default ReadAll;
