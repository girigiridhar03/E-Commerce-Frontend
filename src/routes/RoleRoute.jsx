import { jwtDecode } from "jwt-decode";
import { Navigate } from "react-router-dom";

const RoleRoute = ({ allowedRoles = [], children }) => {
  const token = sessionStorage.getItem("token");

  if (token === "null" || token === "undefined" || !token) {
    return <Navigate to="/signin" />;
  }

  let decodedToken;

  try {
    decodedToken = jwtDecode(token);
  } catch (error) {
    return <Navigate to="/signin" replace />;
  }

  if (!allowedRoles.includes(decodedToken?.role)) {
    return <Navigate to="/signin" replace />;
  }

  return children;
};

export default RoleRoute;
