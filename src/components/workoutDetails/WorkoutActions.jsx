"use client";

import { CalendarPlus, Bookmark, Check } from "lucide-react";
import { usePlan } from "@/context/PlanContext";

export default function WorkoutActions({ workout, showToast }) {
  const { planCount, setPlanCount, savedCount, setSavedCount } = usePlan();

  const isAdded = planCount.some((item) => item.id === workout.id);
  const isSaved = savedCount.some((item) => item.id === workout.id);

  const handleAddToPlan = () => {
    if (isAdded) return;

    if (planCount.length >= 5) {
      showToast("You can only add up to 5 workouts to today's plan");
      return;
    }

    setPlanCount((prev) => [...prev, workout]);
    showToast("Added to today's plan");
  };

  const handleSaveForLater = () => {
    if (isSaved) return;

    setSavedCount((prev) => [...prev, workout]);
    showToast("Saved for later");
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
      {/* Add to Plan */}
      <button
        type="button"
        onClick={handleAddToPlan}
        disabled={isAdded}
        className={`flex items-center justify-center gap-2 font-extrabold py-3 rounded-xl text-xs uppercase tracking-wider transition ${
          isAdded
            ? "bg-[#1f242d] text-[#CCFF00] border border-[#CCFF00]/30 cursor-not-allowed"
            : "bg-[#CCFF00] hover:bg-[#b8e600] text-black active:scale-95 cursor-pointer"
        }`}
      >
        {isAdded ? (
          <>
            <Check className="w-4 h-4" />
            Added
          </>
        ) : (
          <>
            <CalendarPlus className="w-4 h-4" />
            Add to today&apos;s plan
          </>
        )}
      </button>

      {/* Save for Later */}
      <button
        type="button"
        onClick={handleSaveForLater}
        disabled={isSaved}
        className={`flex items-center justify-center gap-2 font-bold py-3 rounded-xl text-xs uppercase tracking-wider transition ${
          isSaved
            ? "bg-[#1f242d] text-[#CCFF00] border border-[#CCFF00]/30 cursor-not-allowed"
            : "bg-[#1A1D26] hover:bg-gray-800 text-gray-300 border border-gray-700 active:scale-95 cursor-pointer"
        }`}
      >
        {isSaved ? (
          <>
            <Check className="w-4 h-4" />
            Saved
          </>
        ) : (
          <>
            <Bookmark className="w-4 h-4 text-gray-400" />
            Save for later
          </>
        )}
      </button>
    </div>
  );
}
