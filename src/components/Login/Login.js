import React, { useState } from "react";
import "./Login.css";
import GoogleLogo from "../../images/google.svg";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const Login = () => {
  const navigate = useNavigate();
  const [SignInWithGoogle, user] = useSignInWithGoogle(auth);
  return (
    <Container className="f-container">
      <div className="container-fm  ">
        <div className="signin-container">
          <h1>Longin</h1>
          <div>
            <form className="form-container">
              <input
                className="input-email"
                type="text"
                name="email"
                id="email"
                placeholder="Email"
                required
              />
              <input
                className="input-password"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />{" "}
              <span className="reset">Forget Password</span>
              <button type="submit" className="form-submit">
                Login
              </button>
              <p>
                Dalta Dental ?
                <span className="toggle" onClick={() => navigate("/SignUp")}>
                  Create New Account
                </span>
              </p>
            </form>

            <div className="divider">
              <div className="line-left"></div>
              <p>or</p>

              <div className="line-right"></div>
            </div>
            <div className="google-logo">
              <button className="btn-google" onClick={() => SignInWithGoogle()}>
                <img src={GoogleLogo} alt="" />
                <p> Continue with Google </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Login;
