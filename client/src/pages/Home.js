import React from "react";
import "../index.scss";
import "../stars.scss";
//import Postlist from '../components/Postlist';

function Home() {
  return (
    <div className="home-title">
      <div className="home-title-wrapper">
        <h3 className="intro">Anonymous Acts of Awesomeness by</h3>
        <hr className="hr1"></hr>
        <h2 className="subtitle1">UNIDENTIFIED</h2>
        <h2 className="subtitle2">FUTURE TEENS</h2>
        <hr className="hr2"></hr>
        <hr className="hr3"></hr>
        <h2 className="subtitle3">UFT</h2>

        <h4 className="tagline">
          a win-win social good contest for high school students
        </h4>

        {/* <p className="homeinfo">
          An annual contest to recognize positivity and the everyday good deeds
          by high school students who take initiative to make the world better
          in all sorts of ways. If you want a happy read, check out these good
          deeds!
        </p> */}

        {/* <p className="sightings">recent sightings</p> */}

        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
      </div>

      <main className="bubblezone">
        {/* <!-- Bubble 1 --> */}
        <div className="bubble1 bubble-bottom-left">
          <div className="post1">
            <p className="details1">
              Picked up five big garbage bags full of litter along the Little
              River and at the playground next to it. 10% of it were Covid
              masks.
            </p>
            <hr className="bubblehr1"></hr>
            <div className="post_info">
              <p className="author1">Posted by Eleven</p>
              <p className="date1">Apr 25, 2022</p>
            </div>
            <p className="stars1"></p>
          </div>
        </div>

        {/* <!-- Bubble 2 --> */}

        <div className="post1">
          <p className="details2">
            In a seniors building, I spent six hours making windows spotless
            inside and out for springtime the old fashioned way, with vinegar
            and newspaper for my grandparents and their friends apartments. They
            were so grateful, they made me the best homeade food ever!
          </p>
          <hr className="bubblehr2"></hr>
          <div className="post_info">
            <p className="author2">Posted by Lone Starr</p>
            <p className="date2">March 20,2022</p>
          </div>
          <p className="stars2"></p>
        </div>
        {/* <div className="bubble2 bubble-bottom-left"></div> */}

        {/* <!-- Bubble 3 --> */}
        <div className="bubble3 bubble-bottom-right">
          <div className="post1">
            <p className="details3">
              It was more snow than we all expected. I could have stayed inside
              nice and warm playing XBox, instead I got my gear and clearing
              snow for three hours for a single mom and other neighbors.
            </p>
            <hr className="bubblehr3"></hr>
            <div className="post_info">
              <p className="author3">Posted by Spock</p>
            </div>
            <p className="date3">January 18, 2022</p>
          </div>
          <div className="post_comments">
            <p className="stars3"></p>
          </div>
        </div>
        {/* </div> */}

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
  );
}

export default Home;
