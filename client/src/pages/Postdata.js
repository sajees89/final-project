import React from 'react';
import { Link } from "react-router-dom";

function Postdata() {
  return (
    <div className='singlepost'>To post a good deed you must sign in
    
    <Link to="/login">Login</Link>
    <Link to="/signup">Sign up</Link>
    
    </div>
  )
}

export default Postdata