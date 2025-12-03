import { type ReactNode } from "react";
import "./AuthLayout.css";
import logo from "../../assets/signup-logo.svg";
import { providers } from "../../constants/providers";

interface AuthLayoutProps {
  children: ReactNode;
  illustration?: string;
}

export default function AuthLayout({
  children,
  illustration = "https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/illustrations/illustration-dashboard.webp",
}: AuthLayoutProps) {
  return (
    <div className="auth-container">
      {/* Left Section - Branding */}
      <div className="auth-left">
        <div className="auth-header">
          <div className="auth-logo">
            <img src={logo} alt="Logo" width={100} height={100} />
          </div>
          <h1>Manage the job</h1>
          <p>More effectively with optimized workflows.</p>
        </div>

        <div className="illustration-container">
          <img
            src={illustration}
            alt="Dashboard illustration"
            className="illustration"
          />
        </div>

        <div className="features">
          {providers.map((provider) => (
            <img
              key={provider.name}
              src={provider.icon}
              alt={provider.name}
              className="feature-icon"
              title={provider.name}
            />
          ))}
        </div>
      </div>

      {/* Right Section - Form Content */}
      <div className="auth-right">{children}</div>
    </div>
  );
}
