import React from 'react'
import { Link } from "react-router-dom";
import Postform from '../components/Postform'
import Auth from "../utils/auth";

const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

function Postdata() {
  return (
    <div>
  

    <div className='postdata'>
    {Auth.loggedIn()? (
            <div className='profile-container'>
              <Link to="/profile">Me</Link>
              <a href="/" onClick={logout}>
                Logout
              </a>
            </div>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">SignUp</Link>
              <Postform/>
            </>
          )}
    </div>
    </div>
  )
}

export default Postdata