import { type FC } from 'react';
import type { SignInFormProps } from '../../../types/auth';
import { AuthInput, AuthButton, AuthMessage, AuthLink } from '../../../components/shared';
import './SignIn.css';

const FormSignIn: FC<SignInFormProps> = ({
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
      <AuthInput
        type="email"
        id="email"
        label="Email address"
        value={email}
        onChange={(e) => onEmailChange(e.target.value)}
        placeholder="example@gmail.com"
        required
      />

      {/* Password Input */}
      <div className="password-field-wrapper">
        <div className="password-header">
          <span className="password-label">Password</span>
          <AuthLink to="/auth/reset-password" variant="secondary">
            Forgot password?
          </AuthLink>
        </div>
        <div className="password-input-wrapper">
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            className="form-input"
            value={password}
            onChange={(e) => onPasswordChange(e.target.value)}
            placeholder="6+ characters"
            required
          />
          <button
            type="button"
            className="password-toggle"
            onClick={onToggleShow}
            aria-label="Toggle password visibility"
          >
            {showPassword ? '👁️' : '🔒'}
          </button>
        </div>
      </div>

      {/* Error message */}
      {error && <AuthMessage type="error">{error}</AuthMessage>}

      {/* Submit Button */}
      <AuthButton type="submit">Sign in</AuthButton>
    </form>
  );
};

export default FormSignIn;
