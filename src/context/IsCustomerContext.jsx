// IsCustomerContext.js
import { createContext, useContext, useState, useEffect } from "react";

const IsCustomerContext = createContext();

function IsCustomerProvider({ children }) {
  const [isCustomer, setIsCustomer] = useState(() => {
    const role = localStorage.getItem("role");
    return role?.toLowerCase()?.includes("customer") || false;
  });

  // دالة لتحديث الدور
  const updateRole = (role) => {
    if (role) {
      localStorage.setItem("role", role);
    } else {
      localStorage.removeItem("role");
    }
    setIsCustomer(role?.toLowerCase()?.includes("customer") || false);
  };

  // تحديث إذا تغير الـ localStorage من تاب آخر
  useEffect(() => {
    const handleStorageChange = () => {
      const role = localStorage.getItem("role");
      setIsCustomer(role?.toLowerCase()?.includes("customer") || false);
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <IsCustomerContext.Provider value={{ isCustomer, updateRole }}>
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

/* import { createContext, useContext, useState, useEffect } from "react";

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
 */
