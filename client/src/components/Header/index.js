import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/uft.svg";

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
              <Link to="/profile">Me</Link>
              <Link to="/mypost">Post</Link>
              <a href="/" onClick={logout}>
                Logout
              </a>
            </>
          ) : (
            <>
              <Link to="/login">Why?</Link>
              <Link to="/login">Win!</Link>
              <Link to="/signup">Join</Link>
              <Link to="/read">Read</Link>
              <Link to="/postdata">Post</Link>
              <Link to="/">Home</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
