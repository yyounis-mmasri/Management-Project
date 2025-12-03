import { useState } from "react";
import { createPasswordToggleHandler } from "../../../utils/auth";
import handleChange from "../../../utils/handleChange";
import handleSubmit from "../../../utils/handleSubmit";
import type { SignUpFormData } from "../../../types/auth";
import "./SignUp.css";

export default function SignUpForm() {
  const [formData, setFormData] = useState<SignUpFormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const togglePassword = createPasswordToggleHandler(setShowPassword);

  return (
    <form onSubmit={(e) => handleSubmit(e, formData)} className="auth-form">
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="firstName">First name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={(e) => handleChange(e, setFormData)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={(e) => handleChange(e, setFormData)}
            required
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={(e) => handleChange(e, setFormData)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <div className="password-input-wrapper">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            placeholder="6+ characters"
            value={formData.password}
            onChange={(e) => handleChange(e, setFormData)}
            required
          />
          <button
            type="button"
            className="password-toggle"
            onClick={togglePassword}
            aria-label="Toggle password visibility"
          >
            {showPassword ? "👁️" : "🔒"}
          </button>
        </div>
      </div>

      <button type="submit" className="submit-button">
        Create account
      </button>
    </form>
  );
}
