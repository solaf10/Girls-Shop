import { Fragment } from "react";
import "./UserAutherization.css";
import { useIsCustomer } from "../../context/IsCustomerContext";

const UserAutherization = ({ children }) => {
  const isLocked = useIsCustomer();
  return !isLocked && <Fragment>{children}</Fragment>;
};

export default UserAutherization;
