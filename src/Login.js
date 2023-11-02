import React, { useState } from "react";
import "./login.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link className="link" to="/">
        <h1 className="header-logo">Furnisell</h1>
      </Link>

      <div className="login-container">
        <h1>Sign In</h1>

        <form action="">
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" onClick={signIn} className="signin-button">
            Sign In
          </button>
        </form>

        <p>
          By signing in you agree to the Furnisell Conditions of Use and Sale.
          Please see our Private Notice, our Cookies Notice, and our
          Internet-Based Ads Notice.
        </p>

        <button onClick={register} className="register-button">
          Create your Furnisell Account
        </button>
      </div>
    </div>
  );
}

export default Login;
