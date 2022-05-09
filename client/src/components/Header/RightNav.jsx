import React from "react";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 820px) {
    flex-flow: column nowrap;
    background-color: #08070f;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const logout = (event) => {
  event.preventDefault();
  Auth.logout();
};

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <div>
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
      </div>
    </Ul>
  );
};

export default RightNav;
