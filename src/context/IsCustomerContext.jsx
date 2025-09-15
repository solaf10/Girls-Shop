import { createContext, useContext, useState, useEffect } from "react";

const IsCustomerContext = createContext();

function IsCustomerProvider({ children }) {
  const [isCustomer, setIsCustomer] = useState(
    () =>
      localStorage.getItem("role") == "customer" &&
      localStorage.getItem("role")?.includes("customer")
  );

  useEffect(() => {
    const handleStorageChange = () => {
      setIsCustomer(
        localStorage.getItem("role") != null &&
          localStorage.getItem("role")?.toLowerCase()?.includes("customer")
      );
    };

    window.addEventListener("storage", handleStorageChange);

    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <IsCustomerContext.Provider value={isCustomer}>
      {children}
    </IsCustomerContext.Provider>
  );
}

function useIsCustomer() {
  const context = useContext(IsCustomerContext);
  if (context === undefined) {
    throw new Error("useIsCustomer must be used within an IsCustomerProvider");
  }
  return context;
}

export { IsCustomerProvider, useIsCustomer };
