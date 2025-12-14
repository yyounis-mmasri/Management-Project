import { type FC, type ButtonHTMLAttributes } from 'react';
import './AuthButton.css';

interface AuthButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
}

/**
 * Reusable button component for authentication forms
 * Includes ripple effect animation and hover states
 */
const AuthButton: FC<AuthButtonProps> = ({ 
  variant = 'primary', 
  fullWidth = true,
  children, 
  className = '',
  ...buttonProps 
}) => {
  return (
    <button
      className={`auth-button auth-button-${variant} ${fullWidth ? 'auth-button-full' : ''} ${className}`}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default AuthButton;
