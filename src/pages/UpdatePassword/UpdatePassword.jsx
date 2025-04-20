import { Outlet } from "react-router";
import "./UpdatePassword.css";

const UpdatePassword = () => {
  return (
    <div className="password">
      <Outlet />
    </div>
  );
};

export default UpdatePassword;
