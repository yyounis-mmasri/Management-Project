import { type FC, type ReactNode } from 'react';
import './AuthMessage.css';

interface AuthMessageProps {
  type: 'error' | 'success' | 'info' | 'warning';
  children: ReactNode;
}

/**
 * Reusable message component for authentication forms
 * Supports error, success, info, and warning states with animations
 */
const AuthMessage: FC<AuthMessageProps> = ({ type, children }) => {
  const icons = {
    error: '⚠️',
    success: '✓',
    info: 'ℹ️',
    warning: '⚠️',
  };

  return (
    <div className={`auth-message auth-message-${type}`}>
      <span className="auth-message-icon">{icons[type]}</span>
      <span className="auth-message-text">{children}</span>
    </div>
  );
};

export default AuthMessage;
