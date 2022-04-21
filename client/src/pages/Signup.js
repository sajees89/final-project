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

        <label for="firstname">First Name
        <input type="text" value={inputs.firstname || ""}
            onChange={handleChange}
          />
          </label>

          <label for="lastname">Last Name
        <input type="text" value={inputs.lastname || ""}
            onChange={handleChange}
          />
          </label>

        <label for="username">Username
        <input type="text" value={inputs.name || ""}
            onChange={handleChange}
          />
          </label>

          <label for="email">Email
        <input type="email" value={inputs.email || ""}
            onChange={handleChange}
          />
          </label>

        <label for="password">Password
        <input type="password" value={inputs.password || ""}
            onChange={handleChange}
          />
        </label>

        <button>Sign Up</button>
        
    </form>
    </div>
  )
}

export default Signup