import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const auth = JSON.parse(localStorage.getItem("WAITER_AUTH"));
  if (!auth) return <Navigate to="/" replace />;
  return children;
}
