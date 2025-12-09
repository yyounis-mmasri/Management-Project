import React, { useState } from "react";
import AuthLayout from "../../../components/AuthLayout/AuthLayout";
import { AUTH_CONSTANTS, createResetPasswordHandler } from "../../../utils/auth";
import { AuthInput, AuthButton, AuthMessage, AuthLink } from "../../../components/shared";
import "./ResetPassword.css";

const ResetPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = createResetPasswordHandler(setError, setSuccess);
  return (
    <AuthLayout>
      <div className="reset-password-container">
        {/* Lock Icon */}
        <div className="reset-icon">
          <div className="lock-container">
            <div className="lock-body"></div>
            <div className="lock-shackle"></div>
            <div className="question-circle">?</div>
          </div>
        </div>

        <h1 className="reset-title">Forgot your password?</h1>
        <p className="reset-subtitle">
          Please enter the email address associated with your account and we'll
          email you a link to reset your password.
        </p>

        <form className="reset-form" onSubmit={(e) => handleSubmit(e, email)}>
          {/* Email Input */}
          <AuthInput
            type="email"
            id="reset-email"
            label="Email address"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {/* Error message */}
          {error && <AuthMessage type="error">{error}</AuthMessage>}
          
          {/* Success message */}
          {success && (
            <AuthMessage type="success">
              {AUTH_CONSTANTS.MESSAGES.RESET_EMAIL_SENT}
            </AuthMessage>
          )}

          {/* Submit Button */}
          <AuthButton type="submit">Send request</AuthButton>

          {/* Return Link */}
          <div className="return-link">
            <AuthLink to="/auth/sign-in">
              <span className="arrow">←</span> Return to sign in
            </AuthLink>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default ResetPassword;
