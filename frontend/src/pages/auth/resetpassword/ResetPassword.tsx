import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../../../components/AuthLayout/AuthLayout";
import { validateEmail, AUTH_CONSTANTS } from "../../../utils/auth";
import "./ResetPassword.css";

const ResetPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    // In production, this would call an API
    console.log('Password reset requested for:', email);
    setSuccess(true);
  };
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

        <form className="reset-form" onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="form-group">
            <label className="form-label" htmlFor="reset-email">Email address</label>
            <input
              type="email"
              id="reset-email"
              className="form-input"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Error message */}
          {error && <div className="error-message">{error}</div>}
          
          {/* Success message */}
          {success && (
            <div className="success-message">
              {AUTH_CONSTANTS.MESSAGES.RESET_EMAIL_SENT}
            </div>
          )}

          {/* Submit Button */}
          <button type="submit" className="submit-button">
            Send request
          </button>

          {/* Return Link */}
          <div className="return-link">
            <Link to="/auth/sign-in">
              <span className="arrow">←</span> Return to sign in
            </Link>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default ResetPassword;
