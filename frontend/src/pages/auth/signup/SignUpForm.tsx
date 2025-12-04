import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import { createSignUpHandler } from "../../../utils/auth";
import { AuthInput, AuthButton, AuthMessage, PasswordInput } from "../../../components/shared";
import handleChange from "../../../utils/handleChange";
import type { SignUpFormData } from "../../../types/auth";
import "./SignUp.css";

export default function SignUpForm() {
  const [formData, setFormData] = useState<SignUpFormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const { login } = useAuth();
  const navigate = useNavigate();
  
  const handleSubmit = createSignUpHandler(login, navigate, setErrors);

  return (
    <form onSubmit={(e) => handleSubmit(e, formData)} className="auth-form">
      {Object.keys(errors).length > 0 && (
        <AuthMessage type="error">
          {Object.values(errors)[0]}
        </AuthMessage>
      )}
      <div className="form-row">
        <AuthInput
          type="text"
          id="firstName"
          name="firstName"
          placeholder="First name"
          value={formData.firstName}
          onChange={(e) => handleChange(e, setFormData)}
          required
        />

        <AuthInput
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Last name"
          value={formData.lastName}
          onChange={(e) => handleChange(e, setFormData)}
          required
        />
      </div>

      <AuthInput
        type="email"
        id="email"
        name="email"
        placeholder="Email address"
        value={formData.email}
        onChange={(e) => handleChange(e, setFormData)}
        required
      />

      <PasswordInput
        id="password"
        name="password"
        placeholder="6+ characters"
        value={formData.password}
        onChange={(e) => handleChange(e, setFormData)}
        required
      />

      <AuthButton type="submit">Create account</AuthButton>
    </form>
  );
}
