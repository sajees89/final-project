import React from 'react'
import { useState } from "react";


function Login() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  };
  return (
    <div>
    <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
    </div>
    <form onSubmit={handleSubmit}
    className="login-form">
        <h3>Login Here</h3>

        <label for="username">Username</label>
        <input type="text" value={inputs.name || ""}
            onChange={handleChange}
          />
          

        <label for="password">Password</label>
        <input type="password" value={inputs.password || ""}
            onChange={handleChange}
          />
        

        <button>Log In</button>
        
    </form>
    </div>
  )
}

export default Login;