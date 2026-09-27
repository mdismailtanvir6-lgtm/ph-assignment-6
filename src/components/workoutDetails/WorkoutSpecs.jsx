import { Star } from "lucide-react";

export default function WorkoutSpecs({ workout }) {
  const specs = [
    {
      label: "EQUIPMENT",
      value: workout.equipment || "Barbell, Bench",
    },
    {
      label: "DIFFICULTY",
      value: workout.difficulty || "Intermediate",
    },
    {
      label: "SETS",
      value: workout.sets || "4",
    },
    {
      label: "REPS",
      value: workout.reps || "6-8",
    },
    {
      label: "DURATION",
      value: workout.duration || "25 min",
    },
    {
      label: "CALORIES",
      value: workout.caloriesBurned || "180 kcal",
    },
    {
      label: "RATING",
      value: workout.rating || "4.8",
      isRating: true,
    },
  ];

  return (
    <div className="bg-[#1A1D26] border border-gray-800 rounded-xl divide-y divide-gray-800/60 text-xs">
      {specs.map((spec) => (
        <div key={spec.label} className="flex justify-between items-center p-3">
          <span className="text-gray-400 font-bold tracking-wider">
            {spec.label}
          </span>

          <span className="font-medium text-gray-200 flex items-center gap-1">
            {spec.isRating && (
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            )}

            {spec.value}
          </span>
        </div>
      ))}
    </div>
  );
}
