import { useContext } from "react";


import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex h-screen justify-center items-center">
        <span className="loading loading-infinity loading-lg"></span>
      </div>
    );
  }

  if (user) {
    return children;
  } else {
    return <Navigate state={location.pathname} to="/login" replace />;
  }
};

export default PrivateRoute;
