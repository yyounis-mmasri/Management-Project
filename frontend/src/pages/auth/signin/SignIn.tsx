import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import AuthLayout from '../../../components/AuthLayout/AuthLayout';
import { 
  validateCredentials, 
  AUTH_CONSTANTS,
  createPasswordToggleHandler 
} from '../../../utils/auth';
import './SignIn.css';
import FormSignIn from './FormSignIn';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (validateCredentials(email, password)) {
      login();
      navigate('/kanban', { replace: true });
    } else {
      setError(AUTH_CONSTANTS.MESSAGES.INVALID_CREDENTIALS);
    }
  };

  const togglePassword = createPasswordToggleHandler(setShowPassword);

  return (
    <AuthLayout>
      <div className="signin-container">
        <h1 className="signin-title">Sign in to your account</h1>
        <p className="signin-subtitle">
          Don't have an account?{' '}
          <Link to="/auth/sign-up" className="signup-link"> 
            Get started
          </Link>
        </p>

        <div className="demo-info">
          <div className="info-icon">ℹ️</div>
          <div className="info-text">
            Use <strong>{AUTH_CONSTANTS.DEMO_EMAIL}</strong> with password <strong>{AUTH_CONSTANTS.DEMO_PASSWORD}</strong>
          </div>
        </div>

        <FormSignIn
          email={email}
          password={password}
          showPassword={showPassword}
          error={error}
          onEmailChange={setEmail}
          onPasswordChange={setPassword}
          onToggleShow={togglePassword}
          onSubmit={handleSubmit}
        />
      </div>
    </AuthLayout>
  );
};

export default SignIn;