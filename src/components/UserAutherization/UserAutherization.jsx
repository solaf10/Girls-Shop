import { Fragment } from "react";
import "./UserAutherization.css";
import { useIsCustomer } from "../../context/IsCustomerContext";

const UserAutherization = ({ children }) => {
  const { isCustomer } = useIsCustomer();
  return !isCustomer && <Fragment>{children}</Fragment>;
};

export default UserAutherization;
