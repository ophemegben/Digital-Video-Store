import React, { useState } from "react";
import "../css/Registration.css";
import { InputField, Checkbox, Button } from "./InputFields";

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    agreeTerms: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="layout">
      <div className="registration-container">
        <h1 className="form-header">Create A New Account</h1>

        <form onSubmit={handleSubmit}>
          <div className="name-row">
            <InputField
              type="text"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleInputChange}
              name="firstName"
            />
            <InputField
              type="text"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleInputChange}
              name="lastName"
            />
          </div>

          <InputField
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            name="email"
          />

          <InputField
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            name="password"
          />

          <Checkbox
            id="terms"
            checked={formData.agreeTerms}
            onChange={handleInputChange}
            name="agreeTerms"
            label={
              <span>
                I certify that I am at least 18 years old and that I agree to
                the{" "}
                <a href="#" className="link">
                  Terms and Policies
                </a>{" "}
                and{" "}
                <a href="#" className="link">
                  Privacy Policy
                </a>
                .
              </span>
            }
          />

          <Button
            text="Sign Up"
            className="primary-button"
            type="submit"
          />

          <div className="separator">
            <span>Or Sign Up with</span>
          </div>

          <div className="social-buttons">
            <Button
              text="Google"
              className="google-button"
              onClick={() => console.log("Google sign up")}
            />
            <Button
              text="Facebook"
              className="facebook-button"
              onClick={() => console.log("Facebook sign up")}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;