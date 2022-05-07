import React from "react";
import GoogleLogo from "../../images/google.svg";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
const Register = () => {
  const navigate = useNavigate();
  return (
    <Container className="f-container">
      <div className="container-fm ">
        <div className="signin-container">
          <h1>SignUp</h1>
          <div>
            <form className="form-container">
              <input
                className="input-email"
                type="text"
                name="name"
                id="name"
                placeholder="name"
              />
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
                SignUp
              </button>
              <p>
                Dalta Dental ?
                <span className="toggle" onClick={() => navigate("/Login")}>
                  Already Have Account
                </span>
              </p>
            </form>

            <div className="divider">
              <div className="line-left"></div>
              <p>or</p>

              <div className="line-right"></div>
            </div>
            <div className="google-logo">
              <button className="btn-google">
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

export default Register;
<h1>Register</h1>;
