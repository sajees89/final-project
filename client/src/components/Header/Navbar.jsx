import React from "react";
import Burger from "./Burger";
import styled from "styled-components";
import Logo from "../../assets/images/uft.svg";

const Nav = styled.nav`
  padding-top: 20px;
  padding-right: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  .logo {
    padding: 15px 0;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      {/* <a href="/"> */}
      <img className="logo" src={Logo} alt="UFT Logo" />
      {/* </a> */}
      <Burger />
    </Nav>
  );
};

export default Navbar;
