import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  return <>{token !== null ? <Outlet /> : <Navigate to="/login" />}</>;
};

export default PrivateRoute;
