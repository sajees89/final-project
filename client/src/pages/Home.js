import React from 'react';
import '../index.css';
//import Postlist from '../components/Postlist';

function Home() {
  return (
    <div className='home-title'>Home
      <div className='home-title-wrapper'>
        <h1 className='glow'>UFT</h1>
        <p>Every Little Good Deed Counts</p>
      </div>
      <main>
      
        {/* <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <Postlist
              posts={posts}
              title="Some Feed for Thought(s)..."
            />
          )}
        </div>
        {loggedIn && userData ? (
          <div className="col-12 col-lg-3 mb-3">
            
          </div>
        ) : null} */}
      
    </main>
      
    </div>
  )
}

export default Home