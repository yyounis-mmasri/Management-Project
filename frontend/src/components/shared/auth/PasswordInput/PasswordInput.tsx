import { type FC, type InputHTMLAttributes, useState } from 'react';
import './PasswordInput.css';

interface PasswordInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'className'> {
  label?: string;
  error?: string;
}

/**
 * Reusable password input component with show/hide toggle
 * Includes label, error handling, and eye icon toggle
 */
const PasswordInput: FC<PasswordInputProps> = ({ label, error, ...inputProps }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword(!showPassword);

  return (
    <div className="password-input-group">
      {label && (
        <label className="password-input-label" htmlFor={inputProps.id}>
          {label}
        </label>
      )}
      <div className="password-input-wrapper">
        <input
          type={showPassword ? 'text' : 'password'}
          className={`password-input ${error ? 'password-input-error' : ''}`}
          {...inputProps}
        />
        <button
          type="button"
          className="password-toggle"
          onClick={togglePassword}
          aria-label="Toggle password visibility"
        >
          {showPassword ? '👁️' : '🔒'}
        </button>
      </div>
      {error && <span className="password-input-error-text">{error}</span>}
    </div>
  );
};

export default PasswordInput;
