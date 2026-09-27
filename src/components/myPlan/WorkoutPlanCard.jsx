"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock, Flame, Star, X, Check } from "lucide-react";

export default function WorkoutPlanCard({
  workout,
  isTodayTab,
  onRemove,
  onMarkAsDone,
}) {
  const { id, title, name, equipment, duration, caloriesBurned, rating, image } =
    workout;

  const workoutTitle = title || name;

  return (
    <div className="bg-[#13161c] border border-gray-800/80 rounded-2xl p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 hover:border-gray-700/80 transition-all">
      {/* Workout Info */}
      <div className="flex items-center gap-4">
        <div className="relative w-24 h-16 rounded-xl overflow-hidden bg-gray-800 shrink-0">
          <Image
            src={image || "/placeholder-workout.jpg"}
            alt={workoutTitle}
            fill
            sizes="96px"
            className="object-cover"
          />
        </div>

        <div>
          <h3 className="font-black uppercase text-base tracking-wide">
            {workoutTitle}
          </h3>

          <p className="text-xs text-gray-400 mb-2">{equipment}</p>

          <div className="flex items-center gap-3 text-xs text-gray-300">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-gray-400" />
              {duration} min
            </span>

            <span className="flex items-center gap-1">
              <Flame className="w-3.5 h-3.5 text-[#ccff00]" />
              {caloriesBurned} kcal
            </span>

            <span className="flex items-center gap-1">
              <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
              {rating}
            </span>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3 w-full md:w-auto justify-end border-t md:border-t-0 pt-3 md:pt-0 border-gray-800">
        <Link
          href={`/workouts/${id}`}
          className="text-xs font-semibold text-gray-200 border border-gray-700 hover:border-gray-500 rounded-full px-4 py-2 transition-colors"
        >
          View Details
        </Link>

        {isTodayTab && (
          <button
            type="button"
            onClick={onMarkAsDone}
            className="flex items-center gap-1.5 text-xs font-bold bg-[#ccff00] text-black hover:bg-[#b8e600] rounded-full px-4 py-2 transition-colors cursor-pointer"
          >
            <Check className="w-3.5 h-3.5" />
            Mark as Done
          </button>
        )}

        <button
          type="button"
          onClick={onRemove}
          className="text-gray-400 hover:text-white p-1 rounded-lg transition-colors ml-1 cursor-pointer"
          aria-label={`Remove ${workoutTitle}`}
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
