import React, { useState } from "react";
import "./Login.css";
import GoogleLogo from "../../images/google.svg";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const Login = () => {
  const navigate = useNavigate();
  const [SignInWithGoogle] = useSignInWithGoogle(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  if (user) {
    navigate("/");
  }
  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    return (
      <div>
        <p>Signed In User: {user.email}</p>
      </div>
    );
  }
  const handleEmailLogin = (e) => {
    const email = e.target.email.value;
    const password = e.targe.email.value;
    signInWithEmailAndPassword(email, password);
  };
  return (
    <Container className="f-container">
      <div className="container-fm  ">
        <div className="signin-container">
          <h1>Longin</h1>
          <div>
            <form className="form-container" onSubmit={handleEmailLogin}>
              <input
                className="input-email"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                className="input-password"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="reset">Forget Password</span>
              <button
                type="submit"
                className="form-submit"
                onClick={() => signInWithEmailAndPassword(email, password)}
              >
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