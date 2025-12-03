import { type FC } from "react";
import { Link } from "react-router-dom";
import "./SignIn.css";

interface Props {
  email: string;
  password: string;
  showPassword: boolean;
  error?: string;
  onEmailChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
  onToggleShow: () => void;
  onSubmit: (e: React.FormEvent) => void;
}

const FormSignIn: FC<Props> = ({
  email,
  password,
  showPassword,
  error,
  onEmailChange,
  onPasswordChange,
  onToggleShow,
  onSubmit,
}) => {
  return (
    <form className="signin-form" onSubmit={onSubmit}>
      {/* Email Input */}
      <div className="form-group">
        <label className="form-label">Email address</label>
        <input
          type="email"
          className="form-input"
          value={email}
          onChange={(e) => onEmailChange(e.target.value)}
          placeholder="demo@minimals.cc"
        />
      </div>

      {/* Password Input */}
      <div className="form-group">
        <div className="password-header">
          <label className="form-label">Password</label>
          <Link to="/auth/reset-password" className="forgot-link">
            Forgot password?
          </Link>
        </div>
        <div className="password-input-wrapper">
          <input
            type={showPassword ? "text" : "password"}
            className="form-input"
            value={password}
            onChange={(e) => onPasswordChange(e.target.value)}
            placeholder="••••••••"
          />
          <button
            type="button"
            className="password-toggle"
            onClick={onToggleShow}
            aria-label="Toggle password visibility"
          >
            {showPassword ? "👁️" : "👁️‍🗨️"}
          </button>
        </div>
      </div>

      {/* Error message */}
      {error && <div className="error-message">{error}</div>}

      {/* Submit Button */}
      <button type="submit" className="submit-button">
        Sign in
      </button>
    </form>
  );
};

export default FormSignIn;
