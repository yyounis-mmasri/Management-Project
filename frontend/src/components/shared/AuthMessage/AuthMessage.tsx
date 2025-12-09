import { type FC, type ReactNode } from 'react';
import { AUTH_MESSAGE_ICONS } from '../../../constants/authMessageIcons';
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
  return (
    <div className={`auth-message auth-message-${type}`}>
      <span className="auth-message-icon">{AUTH_MESSAGE_ICONS[type]}</span>
      <span className="auth-message-text">{children}</span>
    </div>
  );
};

export default AuthMessage;
