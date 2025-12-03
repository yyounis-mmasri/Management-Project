import { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; //  added Link
import { useAuth } from "../../../context/AuthContext";
import AuthLayout from "../../../components/AuthLayout/AuthLayout";
import "./SignIn.css";
import FormSignIn from "./FormSignIn";

const SignIn: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  // Hardcoded credentials
  const VALID_EMAIL = "demo@minimals.cc";
  const VALID_PASSWORD = "@2Minimal";

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (email === VALID_EMAIL && password === VALID_PASSWORD) {
      login();
      navigate("/kanban", { replace: true });
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <AuthLayout>
      <div className="signin-container">
        <h1 className="signin-title">Sign in to your account</h1>
        <p className="signin-subtitle">
          Don't have an account?{" "}
          <Link to="/auth/sign-up" className="signup-link">
            Get started
          </Link>
        </p>

        <div className="demo-info">
          <div className="info-icon">ℹ️</div>
          <div className="info-text">
            Use <strong>demo@minimals.cc</strong> with password{" "}
            <strong>@2Minimal</strong>
          </div>
        </div>

        <FormSignIn
          email={email}
          password={password}
          showPassword={showPassword}
          error={error}
          onEmailChange={setEmail}
          onPasswordChange={setPassword}
          onToggleShow={() => setShowPassword((v) => !v)}
          onSubmit={handleSubmit}
        />
      </div>
    </AuthLayout>
  );
};

export default SignIn;
