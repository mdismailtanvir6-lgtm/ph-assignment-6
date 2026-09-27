"use client";

import { createContext, useContext, useEffect, useState } from "react";

const PlanContext = createContext();

export function PlanProvider({ children }) {
  const [planCount, setPlanCount] = useState(() => {
    if (typeof window === "undefined") return [];
    try {
      return JSON.parse(localStorage.getItem("planCount") || "[]");
    } catch {
      return [];
    }
  });
  const [savedCount, setSavedCount] = useState(() => {
    if (typeof window === "undefined") return [];
    try {
      return JSON.parse(localStorage.getItem("savedCount") || "[]");
    } catch {
      return [];
    }
  });

  // Save planCount to localStorage
  useEffect(() => {
    localStorage.setItem("planCount", JSON.stringify(planCount));
  }, [planCount]);

  // Save savedCount to localStorage
  useEffect(() => {
    localStorage.setItem("savedCount", JSON.stringify(savedCount));
  }, [savedCount]);

  return (
    <PlanContext.Provider
      value={{
        planCount,
        setPlanCount,
        savedCount,
        setSavedCount,
      }}
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