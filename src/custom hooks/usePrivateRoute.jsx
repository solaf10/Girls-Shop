import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const usePrivateRoute = (eventHandler) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const navigate = useNavigate();

  useEffect(() => {
    const handleStorageChange = () => {
      setToken(localStorage.getItem("token"));
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handlePrivateRoute = (e) => {
    e.preventDefault();
    if (!token) navigate("/login");
    else eventHandler();
  };

  return handlePrivateRoute;
};

export default usePrivateRoute;
