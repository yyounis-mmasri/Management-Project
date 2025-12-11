import { type ReactElement } from "react";
import AuthLayout from "../../../components/AuthLayout/AuthLayout";
import { AuthLink } from "../../../components/shared/auth";
import SignUpForm from "../../../components/shared/auth/forms/FormSignUp/SignUpForm";

export default function SignUp(): ReactElement {
  return (
    <AuthLayout>
      <div className="form-wrapper">
        <div className="form-header">
          <h1>Get started absolutely free</h1>
          <p>
            Already have an account?{" "}
            <AuthLink to="/auth/sign-in">Sign in</AuthLink>
          </p>
        </div>

        <SignUpForm />

        <p className="terms-text">
          By signing up, I agree to <a href="#">Terms of service</a> and{" "}
          <a href="#">Privacy policy</a>.
        </p>
      </div>
    </AuthLayout>
  );
}
