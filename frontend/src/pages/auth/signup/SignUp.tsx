import { type ReactElement } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../../../components/AuthLayout/AuthLayout";
import SignUpForm from "./SignUpForm";

export default function SignUp(): ReactElement {
  return (
    <AuthLayout>
      <div className="form-wrapper">
        <div className="form-header">
          <h1>Get started absolutely free</h1>
          <p>
            Already have an account?{" "}
            <Link to="/auth/sign-in" className="auth-link">
              Sign in
            </Link>
          </p>
        </div>

        <SignUpForm />

        <p className="terms-text">
          By signing up, I agree to{" "}
          <a href="#">Terms of service</a> and{" "}
          <a href="#">Privacy policy</a>.
        </p>
      </div>
    </AuthLayout>
  );
}
