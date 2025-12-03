import { Link } from "react-router-dom";
import AuthLayout from "../../../components/AuthLayout/AuthLayout";
import "./ResetPassword.css";

const ResetPassword: React.FC = () => {
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

        <form className="reset-form">
          {/* Email Input */}
          <div className="form-group">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-input"
              placeholder="example@gmail.com"
              required
            />
          </div>

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
