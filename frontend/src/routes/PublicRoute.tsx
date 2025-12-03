import { type ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface PublicRouteProps {
  children: ReactNode;
  isAuthenticated: boolean;
}

const PublicRoute = ({ children, isAuthenticated }: PublicRouteProps) => {
  return isAuthenticated ? <Navigate to="/kanban" replace /> : <>{children}</>;
};

export default PublicRoute;
