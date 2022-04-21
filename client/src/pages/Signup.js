import React from 'react'
import { useState } from "react";


function Signup() {
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
    className="signup-form">
        <h3>Sign Up Here</h3>

        <label for="firstname">First Name </label>
        <input type="text" value={inputs.firstname || ""}
            onChange={handleChange}
          />
         

          <label for="lastname">Last Name</label>
        <input type="text" value={inputs.lastname || ""}
            onChange={handleChange}
          />
          

        <label for="username">Username</label>
        <input type="text" value={inputs.name || ""}
            onChange={handleChange}
          />
          

          <label for="email">Email</label>
        <input type="email" value={inputs.email || ""}
            onChange={handleChange}
          />
          

        <label for="password">Password</label>
        <input type="password" value={inputs.password || ""}
            onChange={handleChange}
          />
        

        <button onClick={Signup}>Sign Up</button>
        
    </form>
    </div>
  )
}

export default Signup