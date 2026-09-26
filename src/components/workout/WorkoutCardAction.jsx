// import { usePlan } from "@/context/PlanContext";
// import React from "react";

// const WorkoutCardAction = ({ workout }) => {
//   const { setPlanCount, setSavedCount } = usePlan();

//   const handleAddToPlan = () => {
//     setPlanCount((prev) => [...prev, workout]);
//     showToast("Added to today's plan");
//   };

//   const handleSaveForLater = () => {
//     setSavedCount((prev) => [...prev, workout]);
//     showToast("Saved for later");
//   };
//   return (
//     <div>
//       {/* ==== just for practice ==== */}
//       <div>
//         <button onClick={handleAddToPlan}>Add to Plan</button>
//         <button onClick={handleSaveForLater}>Save for Later</button>
//       </div>
//     </div>
//   );
// };

// export default WorkoutCardAction;

"use client";

import React from "react";
import { usePlan } from "@/context/PlanContext";

const WorkoutCardAction = ({ workout }) => {
  const { setPlanCount, setSavedCount } = usePlan();

  const handleAddToPlan = (e) => {
    e.stopPropagation();

    setPlanCount((prev) => [...prev, workout]);
  };

  const handleSaveForLater = (e) => {
    e.stopPropagation();

    setSavedCount((prev) => [...prev, workout]);
  };

  return (
    <div className="grid grid-cols-2 gap-2">
      <button
        type="button"
        onClick={handleAddToPlan}
        className="bg-[#c2f800] text-black font-bold text-xs py-2.5 rounded-lg hover:bg-[#b8eb00] transition"
      >
        Add to Plan
      </button>

      <button
        type="button"
        onClick={handleSaveForLater}
        className="bg-zinc-800 text-white font-bold text-xs py-2.5 rounded-lg border border-zinc-700 hover:bg-zinc-700 transition"
      >
        Save for Later
      </button>
    </div>
  );
};

export default WorkoutCardAction;
