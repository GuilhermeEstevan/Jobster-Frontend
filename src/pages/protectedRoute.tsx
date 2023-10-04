import { Navigate } from "react-router-dom";
import { useUserContext } from "../Context/User/UserContext";
import { TProtectedRouteProps } from "../interface/routes";

const ProtectedRoute = ({ children }: TProtectedRouteProps) => {
  const { user } = useUserContext();

  if (!user) {
    return <Navigate to="/landing" />;
  }

  return children;
};

export default ProtectedRoute;
