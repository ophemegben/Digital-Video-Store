import React from "react";
import "../css/Registration.css";
import { InputField, Checkbox, Button } from "./InputFields";

const RegistrationPage = () => {
  return (
    <div className="layout">
      <div className="registration-container">
        <h1 className="form-header">Create A New Account</h1>

        <form>
          <div className="name-row">
            <InputField
              type="text"
              placeholder="First name"
              name="firstName"
            />
            <InputField
              type="text"
              placeholder="Last name"
              name="lastName"
            />
          </div>

          <InputField type="email" placeholder="Email" name="email" />

          <InputField type="password" placeholder="Password" name="password" />

          <Checkbox
            id="terms"
            name="agreeTerms"
            label={
              <span>
                I certify that I am at least 18 years old and that I agree to
                the{" "}
                <a href="/termsconditions" className="link">
                  Terms and Policies
                </a>{" "}
                and{" "}
                <a href="/policy" className="link">
                  Privacy Policy
                </a>
                .
              </span>
            }
          />

          <Button text="Sign Up" className="primary-button" />

          <div className="separator">
            <span>Or Sign Up with</span>
          </div>

          <div className="social-buttons">
            <Button text="Google" className="google-button" />
            <Button text="Facebook" className="facebook-button" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
