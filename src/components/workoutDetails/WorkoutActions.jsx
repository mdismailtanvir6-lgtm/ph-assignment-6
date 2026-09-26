"use client";

import { CalendarPlus, Bookmark } from "lucide-react";
import { usePlan } from "@/context/PlanContext";

export default function WorkoutActions({ workout, showToast }) {
  const {
    setPlanCount,
    setSavedCount,
  } = usePlan();

  const handleAddToPlan = () => {
    setPlanCount((prev) => [...prev, workout]);
    showToast("Added to today's plan");
  };

  const handleSaveForLater = () => {
    setSavedCount((prev) => [...prev, workout]);
    showToast("Saved for later");
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
      <button
        onClick={handleAddToPlan}
        className="flex items-center justify-center gap-2 bg-[#CCFF00] hover:bg-[#b8e600] text-black font-extrabold py-3 rounded-xl text-xs uppercase tracking-wider transition active:scale-95"
      >
        <CalendarPlus className="w-4 h-4" />
        Add to today&apos;s plan
      </button>

      <button
        onClick={handleSaveForLater}
        className="flex items-center justify-center gap-2 bg-[#1A1D26] hover:bg-gray-800 text-gray-300 border border-gray-700 font-bold py-3 rounded-xl text-xs uppercase tracking-wider transition active:scale-95"
      >
        <Bookmark className="w-4 h-4 text-gray-400" />
        Save for later
      </button>
    </div>
  );
}