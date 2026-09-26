export default function PlanStats({
  totalExercises,
  totalMinutes,
  totalCalories,
}) {
  return (
    <div className="grid grid-cols-3 bg-[#13161c] border border-gray-800/80 rounded-2xl p-6 mb-8 shadow-sm">
      <div className="space-y-1">
        <p className="text-xs font-medium text-gray-400">
          Exercises
        </p>

        <p className="text-5xl font-black text-[#ccff00] tracking-tight">
          {totalExercises}
        </p>
      </div>

      <div className="space-y-1 border-l border-gray-800/60 pl-6">
        <p className="text-xs font-medium text-gray-400">
          Minutes
        </p>

        <p className="text-5xl font-black text-white tracking-tight">
          {totalMinutes}
        </p>
      </div>

      <div className="space-y-1 border-l border-gray-800/60 pl-6">
        <p className="text-xs font-medium text-gray-400">
          Calories
        </p>

        <p className="text-5xl font-black text-white tracking-tight">
          {totalCalories}
        </p>
      </div>
    </div>
  );
}