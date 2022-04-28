import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/uft.svg";
import { Navigate } from "react-router";

import Auth from "../../utils/auth";

console.log(Logo);

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className="header">
      <div>
        <a href="/">
          <img
            className="logo"
            src={Logo}
            width={150}
            height={150}
            alt="UFT Logo"
          />
        </a>
        ;
        <nav className="nav">
          {Auth.loggedIn() ? (
            <>
              <Navigate to="/mypost" />
              <a href="/" onClick={logout}>
                Exit
              </a>
              <Link to="/profile">User</Link>
              <Link to="/mypost">Post</Link>
            </>
          ) : (
            <>
              <Link to="/">Why?</Link>
              <Link to="/">Win!</Link>
              <Link to="/signup">Join</Link>
              <Link to="/login">Post</Link>
              <Link to="/read">Read</Link>
              <Link to="/">Home</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
