import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { IsCustomerProvider } from "./context/IsCustomerContext";

const AppWrapper = () => {
  return (
    <IsCustomerProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </IsCustomerProvider>
  );
};

export default AppWrapper;
