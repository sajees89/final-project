import React from "react";
import { Link } from "react-router-dom";
import Postform from "../components/Postform";
import Auth from "../utils/auth";

function Postdata() {
  return (
    <div>
      <Link to="/login">Login</Link>
      <Link to="/signup">SignUp</Link>

      <div>
        {Auth.loggedIn() && <Postform />}
        <Postform />
      </div>
    </div>
  );
}

export default Postdata;
