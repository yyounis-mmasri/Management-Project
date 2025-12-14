import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import { createSignInHandler } from "../../../utils/auth";
import { createPasswordToggleHandler } from "../../../utils/auth";
import { AUTH_CONSTANTS } from "../../../utils/auth";
import AuthLayout from "../../../components/AuthLayout/AuthLayout";
import FormSignIn from "../../../components/shared/auth/forms/FormSignIn/FormSignIn";
import "./SignIn.css";
import { AuthLink } from "../../../components/shared/auth";

const SignIn: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = createSignInHandler(login, navigate, setError);
  const togglePassword = createPasswordToggleHandler(setShowPassword);

  return (
    <AuthLayout>
      <div className="signin-container">
        <h1 className="signin-title">Sign in to your account</h1>
        <p className="signin-subtitle">
          Don't have an account?{" "}
          <AuthLink to="/auth/sign-up">Get started</AuthLink>
        </p>

        <div className="demo-info">
          <div className="info-icon">ℹ️</div>
          <div className="info-text">
            Use <strong>{AUTH_CONSTANTS.DEMO_EMAIL}</strong> with password{" "}
            <strong>{AUTH_CONSTANTS.DEMO_PASSWORD}</strong>
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
          onSubmit={(e) => handleSubmit(e, email, password)}
        />
      </div>
    </AuthLayout>
  );
};

export default SignIn;
