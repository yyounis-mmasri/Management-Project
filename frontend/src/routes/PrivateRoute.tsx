import { type ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children: ReactNode;
  isAuthenticated: boolean;
}

const PrivateRoute = ({ children, isAuthenticated }: PrivateRouteProps) => {
  return isAuthenticated ? (
    <>{children}</>
  ) : (
    <Navigate to="/auth/sign-in" replace />
  );
};

export default PrivateRoute;
