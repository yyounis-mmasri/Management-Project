import { Suspense, lazy } from "react";
import type { ReactElement } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import { Layout } from "../components/layout/Layout";
import { useAuth } from "../context/AuthContext";

const SignIn = lazy(() => import("../pages/auth/signin/SignIn"));
const SignUp = lazy(() => import("../pages/auth/signup/SignUp"));
const ResetPassword = lazy(
  () => import("../pages/auth/resetpassword/ResetPassword")
);
const Kanban = lazy(() => import("../pages/kanban/Kanban"));
const NotFound = lazy(() => import("../pages/notfound/NotFound"));

const LoadingFallback = (): ReactElement => (
  <div>
    <h4>Loading...</h4>
  </div>
);

const AppRoute = () => {
  const { currentAuth } = useAuth();
  const isAuthenticated = currentAuth;
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        <Route path="/" element={<Navigate to="/auth/sign-in" replace />} />

        {/* Public Routes */}
        <Route
          path="/auth/sign-in"
          element={
            <PublicRoute isAuthenticated={isAuthenticated}>
              <SignIn />
            </PublicRoute>
          }
        />
        <Route
          path="/auth/sign-up"
          element={
            <PublicRoute isAuthenticated={isAuthenticated}>
              <SignUp />
            </PublicRoute>
          }
        />
        <Route
          path="/auth/reset-password"
          element={
            <PublicRoute isAuthenticated={isAuthenticated}>
              <ResetPassword />
            </PublicRoute>
          }
        />

        {/* Private Routes */}
        <Route
          path="/kanban"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Layout>
                <Kanban />
              </Layout>
            </PrivateRoute>
          }
        />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoute;
