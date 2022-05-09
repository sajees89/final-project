import React, { useState } from "react";
import styled from "styled-components";
import RightNav from "./RightNav";

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;
  @media (max-width: 820px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.3rem;
    background-color: ${({ open }) => (open ? "#ccc" : "#000")};
    border-radius: 10px;
    border-top: 1.5px solid #ccc;
    border-left: 1.5px solid #ccc;
    border-right: 1.5px solid #ccc;
    border-bottom: 1.5px solid #ccc;
    border-image: ${({ open }) =>
      open ? "#ccc" : "linear-gradient(45deg, #800e0b, #ff0000, #800e0b) 1"};
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Burger = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open} />
    </>
  );
};

export default Burger;