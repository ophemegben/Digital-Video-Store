import React from "react";
import "../css/Registration.css";
import { InputField, Checkbox, Button } from "./InputFields";
import { useNavigate } from "react-router-dom";

const RegistrationPage = () => {
  const navigate = useNavigate();
  const baseURL = process.env.REACT_APP_API_URL;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;

    const formData = {
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      email: event.target.email.value,
      password: event.target.password.value,
      agreeTerms: event.target.agreeTerms.checked,
    };

    const res = await fetch(`${baseURL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await res.json();
    if (res.ok) {
      alert(`Registration successful, please log in`);
      form.reset();
      navigate("/login");
    } else {
      alert(`Registration failed:, ${result.message}`);
    }
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

          <Button text="Sign Up" className="primary-button" type="submit" />

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
