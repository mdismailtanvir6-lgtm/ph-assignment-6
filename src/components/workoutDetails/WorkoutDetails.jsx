"use client";

import { useState } from "react";

import WorkoutImage from "./WorkoutImage";
import WorkoutSpecs from "./WorkoutSpecs";
import WorkoutInstructions from "./WorkoutInstructions";
import WorkoutActions from "./WorkoutActions";
import WorkoutToast from "./WorkoutToast";

export default function WorkoutDetails({ workout }) {
  const [toast, setToast] = useState(null);

  const showToast = (message) => {
    setToast(message);

    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  const title = workout?.title || workout?.name;
  const categories = workout?.categories || workout?.tags || [];

  return (
    <div className="min-h-screen bg-[#0F1117] text-gray-100 p-4 md:p-8 font-sans flex justify-center items-center">
      <main className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Image */}
        <WorkoutImage workout={workout} />

        {/* Details */}
        <div className="space-y-5">
          {/* Header */}
          <div>
            <h1 className="text-2xl md:text-3xl font-black uppercase text-white tracking-wide">
              {title}
            </h1>

            <p className="text-gray-400 text-sm mt-1 italic">
              {workout.description}
            </p>

            {categories.length > 0 && (
              <div className="flex gap-2 mt-3 flex-wrap">
                {categories.map((category, index) => (
                  <span
                    key={index}
                    className="bg-[#CCFF00] text-black text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase"
                  >
                    {category}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Specs */}
          <WorkoutSpecs workout={workout} />

          {/* Instructions */}
          <WorkoutInstructions
            instructions={workout.instructions}
          />

          {/* Actions */}
          <WorkoutActions
            workout={workout}
            showToast={showToast}
          />
        </div>
      </main>

      {/* Toast */}
      <WorkoutToast message={toast} />
    </div>
  );
}