import { type FC, type InputHTMLAttributes } from 'react';
import './AuthInput.css';

interface AuthInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'className'> {
  label?: string;
  error?: string;
}

/**
 * Reusable input component for authentication forms
 * Includes label, error handling, and consistent styling
 */
const AuthInput: FC<AuthInputProps> = ({ label, error, ...inputProps }) => {
  return (
    <div className="auth-input-group">
      {label && (
        <label className="auth-input-label" htmlFor={inputProps.id}>
          {label}
        </label>
      )}
      <input
        className={`auth-input ${error ? 'auth-input-error' : ''}`}
        {...inputProps}
      />
      {error && <span className="auth-input-error-text">{error}</span>}
    </div>
  );
};

export default AuthInput;
