import React from 'react'
import { useState } from "react";

/// update to include Auth n backserver 
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
        <h3>Login</h3>
        <h4>Username</h4>
        <input
                className="form-input"
                placeholder="Your email"
                name="email"
                type="email"
                id="email"
                value={inputs.email}
                onChange={handleChange}
              />
          
          <h4>Password</h4>
          <input
                className="form-input"
                placeholder="******"
                name="password"
                type="password"
                id="password"
                value={inputs.password}
                onChange={handleChange}
              />
        

        <button>Log In</button>
        
    </form>
    </div>
  )
}

export default Login;