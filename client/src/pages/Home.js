import React from 'react';
import '../index.css';
import Postlist from '../components/Postlist';
import Postform from '../components/Postform';

import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_POSTS } from '../utils/queries';

function Home() {
  const { loading, data } = useQuery(QUERY_POSTS);
  
  const posts = data?.posts || [];

  const loggedIn = Auth.loggedIn();
  return (
    <div className='home-title'>Home
      <div className='home-title-wrapper'>
        <h1 className='glow'>UFT</h1>
        <p>Every Little Good Deed Counts</p>
      </div>
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
      
    </div>
  )
}

export default Home