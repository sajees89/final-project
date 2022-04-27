import React from "react";
import { Link } from "react-router-dom";
// import Logo from "./client/public/";

import Auth from "../../utils/auth";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className="header">
      <div className="header-title">
        {/* <Link>
          <a href="/" className="header h1">
            <h1>
              UFT
              <img
                src={Logo}
                className="logo"
                style={{ width: "8%" }}
                alt="UFT Logo"
              />
            </h1>
          </a>
        </Link> */}

        <nav className="nav">
          {Auth.loggedIn() ? (
            <>
              <Link to="/profile">Me</Link>
              <a href="/" onClick={logout}>
                Logout
              </a>
            </>
          ) : (
            <>
              <Link to="/login">Why?</Link>
              <Link to="/login">Win!</Link>
              <Link to="/signup">Join</Link>
              <Link to="/login">Read</Link>
              <Link to="/login">Post</Link>
              <Link to="/">Home</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
