import { Navigate } from "react-router-dom";
import { useAuth } from "../features/auth/authContext";
import { JSX } from "react/jsx-runtime";

export default function ProtectedRoute({
  children,
  role,
}: {
  children: JSX.Element;
  role?: "admin" | "user";
}) {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" />;

  if (role && user.role !== role) {
    return <Navigate to="/" />;
  }

  return children;
}