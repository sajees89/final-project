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
            {/* <h2 className="post_title1">Get that Garbage Outta Here</h2> */}
            <p className="details1">
              Picked up five big garbage bags full of litter along the Little
              River and at the playground next to it. 10% of it were Covid
              masks!
            </p>
            {/* <hr className="bubblehr"></hr> */}
            <div className="post_info">
              {/* <span className="author">Posted by Eleven</span> */}
              {/* <div className="date">Apr 25, 2022</div> */}
            </div>
            <div className="post_comments">
              {/* <div className="number">9</div> */}
              {/* <div className="comments">High Fives</div> */}
            </div>
          </div>
        </div>

        {/* <!-- Bubble 2 --> */}

        <div className="post1">
          {/* <h2 className="post_title">Nonna's Meatballs</h2> */}
          <p className="details2">
            My Nonna and two of her friends in a seniors building needed help
            cleaning all of the windows in their apartments for springtime. I
            spent six hours making them spotless inside and out the old
            fashioned way with vinegar and newspaper. They were so grateful,
            they made me the best meatballs ever and other delicious food!
          </p>
          {/* <hr className="bubblehr"></hr> */}
          <div className="post_info">
            {/* <span className="author">Posted by Lone Starr</span> */}
            {/* <div className="date">March 20,2022</div> */}
          </div>
          <div className="post_comments">
            {/* <div className="number">12</div> */}
            {/* <div className="comments">High Fives</div> */}
          </div>
        </div>
        <div className="bubble2 bubble-bottom-left"></div>

        {/* <!-- Bubble 3 --> */}
        <div className="bubble3 bubble-bottom-right">
          <div className="post1">
            {/* <h2 className="post_title">41 Centimeters</h2> */}
            <p className="details3">
              It was more snow than we all expected. I could have stayed inside
              nice and warm playing XBox, instead I got my gear and shoveled for
              three hours clearing snow for a single mom and others who needed
              help.
            </p>
            {/* <hr className="bubblehr"></hr> */}
            <div className="post_info">
              {/* <span className="author">Posted by Spock</span> */}
            </div>
            {/* <div className="date">January 18, 2022</div> */}

            <div className="post_comments">
              {/* <div className="number">25</div> */}
              {/* <div className="comments">High Fives</div> */}
            </div>
          </div>
        </div>

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
