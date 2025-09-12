import { createContext, useContext, useState, useEffect } from "react";

const DesignTypeContext = createContext();

function DesignTypeProvider({ children }) {
  const [designType, setDesignType] = useState("");

  return (
    <DesignTypeContext.Provider value={{ designType, setDesignType }}>
      {children}
    </DesignTypeContext.Provider>
  );
}

function useDesignType() {
  const context = useContext(DesignTypeContext);
  if (context === undefined) {
    throw new Error("useDesignType must be used within an DesignTypeProvider");
  }
  return context;
}

export { DesignTypeProvider, useDesignType };
