import { useState } from "react";
import { useNavigate } from "react-router-dom";

const usePrivateRoute = (eventHandler) => {
  const [token] = useState(() => localStorage.getItem("token"));
  const navigate = useNavigate();

  const handlePrivateRoute = () => {
    if (token == null) navigate("/login");
    else eventHandler();
  };
  return handlePrivateRoute;
};

export default usePrivateRoute;
