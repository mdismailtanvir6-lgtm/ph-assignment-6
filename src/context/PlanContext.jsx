"use client";

import { createContext, useContext, useState } from "react";

const PlanContext = createContext();

export function PlanProvider({ children }) {
  const [planCount, setPlanCount] = useState([]);
  const [savedCount, setSavedCount] = useState([]);

  return (
    <PlanContext.Provider
      value={{ planCount, setPlanCount, savedCount, setSavedCount }}
    >
      {children}
    </PlanContext.Provider>
  );
}

export function usePlan() {
  const context = useContext(PlanContext);
  if (!context) {
    throw new Error("usePlan must be used within a PlanProvider");
  }
  return context;
}
