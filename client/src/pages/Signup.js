import React from "react";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import "../index.scss";

import Auth from "../utils/auth";

const Signup = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addUser, { error }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      if (error) {
        throw new Error("something went wrong!");
      }

      console.log(data.user);
      Auth.login(data.addUser.token);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div className="background"></div>
      <form onSubmit={handleFormSubmit} className="signup-form">
        <h3>Teacher Sign Up</h3>

        <h4 className="form-heading">Username</h4>
        <p className="small-print">Keep it Fun! Keep it Sci-Fi!</p>
        <input
          className="form-input"
          placeholder="Your username"
          name="username"
          type="username"
          id="username"
          value={formState.username}
          onChange={handleChange}
        />
        <h4>OCT Registration Number</h4>
        <p className="small-print">
          We will follow up with your principal to confirm.
        </p>
        <input
          className="form-input"
          placeholder="Your OCT Number"
          name="oct"
          type="oct"
          id="oct"
          value={formState.username}
          onChange={handleChange}
        />
        <h4>Email</h4>
        <p className="small-print">
          Our contact info and follow-up will be sent by email.
        </p>
        <input
          className="form-input"
          placeholder="Your email"
          name="email"
          type="email"
          id="email"
          value={formState.email}
          onChange={handleChange}
        />
        <h4>Password</h4>
        <input
          className="form-input"
          placeholder="******"
          name="password"
          type="password"
          id="password"
          value={formState.password}
          onChange={handleChange}
        />

        <button className="btn" type="submit">
          JOIN!
        </button>
      </form>
      {error && <div>Signup failed</div>}
    </div>
  );
};

export default Signup;
