import React from "react";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import "../index.scss";

const Login = (props) => {
  const [formState, setFormState] = useState({ username: "", password: "" });
  const [login, { error }] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };
  //submit form
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      username: "",
      password: "",
    });
  };

  return (
    <div>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form onSubmit={handleSubmit} className="login-form">
        <h3>Login to Post</h3>
        <h4>Username</h4>
        <input
          className="form-input"
          placeholder="Your username"
          name="username"
          type="username"
          id="username"
          value={formState.username}
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
          ENTER
        </button>

        {error && <div>Login failed</div>}
      </form>
    </div>
  );
};

export default Login;
