import React from "react";
import { Link } from "react-router-dom";
import { InputField } from "./InputFields";
import "../css/Login.css";

const LoginPage = () => {
  return (
    <div className="container">
      <div className="formContainer">
        <h1 className="heading">Sign In to StreamX</h1>

        <form>
          <div>
            <InputField type="email" placeholder="Email" name="email" />
          </div>

          <div>
            <InputField type="password" placeholder="Password" name="password" />
          </div>

          <div className="forgotPassword">
            <Link to="/forgot-password" className="forgotPasswordLink">
              Forgot your StreamX password?
            </Link>
          </div>

          <button type="button" className="signInButton">
            Sign In
          </button>

          <Link to="/register" className="createAccountButton" style={{ textDecoration: "none" }}>
            Create a new StreamX account
          </Link>

          <div className="thirdPartyContainer">
            <button type="button" className="walmartButton">
              <div className="iconContainer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M21.5 10.8H20.25V10.8H12V13.8H17.4C16.8 15.3 15.3 16.3 12 16.3C8.7 16.3 6 13.6 6 10.3C6 7 8.7 4.3 12 4.3C13.8 4.3 15.3 5 16.5 6.1L18.9 3.7C17.1 2 14.7 1 12 1C7.3 1 3 5.3 3 10C3 14.7 7.3 19 12 19C16.7 19 21 15.7 21 11C21 10.9 21 10.8 21.5 10.8Z" />
                </svg>
              </div>
              Google
            </button>
            <button type="button" className="facebookButton">
              <div className="iconContainer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M22.675 0H1.325C0.593 0 0 0.593 0 1.325v21.351C0 23.407 0.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463 0.099 2.795 0.143v3.24l-1.918 0.001c-1.504 0-1.795 0.715-1.795 1.763v2.313h3.587l-0.467 3.622h-3.12V24h6.116c0.73 0 1.323-0.593 1.323-1.325V1.325C24 0.593 23.407 0 22.675 0z" />
                </svg>
              </div>
              Facebook
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
