import React from "react";
import art from "../../assets/images/art.svg";

const Footer = () => {
  return (
    <div className="footer">
      <p className="copyright">&#169; 2022 Abi, Constance, Irene, Sajees</p>
      <img className="art" src={art} alt="Footer Artwork" />
    </div>
  );
};

export default Footer;
