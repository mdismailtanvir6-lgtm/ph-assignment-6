"use client";

import { useEffect, useMemo, useState } from "react";
import { usePlan } from "@/context/PlanContext";

import MyPlanHeader from "@/components/myPlan/MyPlanHeader";
import PlanStats from "@/components/myPlan/PlanStats";
import PlanControls from "@/components/myPlan/PlanControls";
import WorkoutPlanCard from "@/components/myPlan/WorkoutPlanCard";
import EmptyPlan from "@/components/myPlan/EmptyPlan";
import PlanToast from "@/components/myPlan/PlanToast";

export default function MyPlanPage() {
  const { planCount, setPlanCount, savedCount, setSavedCount } = usePlan();

  const [activeTab, setActiveTab] = useState("today");
  const [sortBy, setSortBy] = useState("duration");
  const [loading, setLoading] = useState(true);
  const [toastMessage, setToastMessage] = useState(null);

  // Simulated initial loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const showToast = (message) => {
    setToastMessage(message);

    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  /*
   * Determine which list is currently active.
   */
  const currentList = activeTab === "today" ? planCount : savedCount;

  const setCurrentList = activeTab === "today" ? setPlanCount : setSavedCount;

  /*
   * Today's plan metrics.
   */
  const stats = useMemo(() => {
    return {
      totalExercises: planCount.length,

      totalMinutes: planCount.reduce(
        (sum, item) => sum + (Number(item.duration) || 0),
        0,
      ),

      totalCalories: planCount.reduce(
        (sum, item) => sum + (Number(item.calories) || 0),
        0,
      ),
    };
  }, [planCount]);

  /*
   * Sort current list.
   */
  const sortedWorkouts = useMemo(() => {
    return [...currentList].sort((a, b) => {
      if (sortBy === "duration") {
        return Number(b.duration || 0) - Number(a.duration || 0);
      }

      if (sortBy === "calories") {
        return Number(b.calories || 0) - Number(a.calories || 0);
      }

      if (sortBy === "rating") {
        return Number(b.rating || 0) - Number(a.rating || 0);
      }

      return 0;
    });
  }, [currentList, sortBy]);

  const handleRemove = (workout) => {
    setCurrentList((prev) => prev.filter((item) => item.id !== workout.id));

    showToast(
      `Removed "${workout.title || workout.name}" from ${
        activeTab === "today" ? "Today's Plan" : "Saved"
      }`,
    );
  };

  const handleMarkAsDone = (workout) => {
    setPlanCount((prev) => prev.filter((item) => item.id !== workout.id));

    showToast(`Completed "${workout.title || workout.name}"! Great job! 🎉`);
  };

  return (
    <main className="min-h-screen bg-[#0b0d10] text-white px-4 sm:px-6 lg:px-8 py-6 md:py-10 font-sans">
      <div className="container mx-auto">
        <PlanToast message={toastMessage} />

        <MyPlanHeader />

        <PlanStats
          totalExercises={stats.totalExercises}
          totalMinutes={stats.totalMinutes}
          totalCalories={stats.totalCalories}
        />

        <PlanControls
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />

        {loading ? (
          <div className="flex justify-center items-center py-24 text-gray-400 text-sm font-medium">
            Loading workouts…
          </div>
        ) : sortedWorkouts.length === 0 ? (
          <EmptyPlan activeTab={activeTab} />
        ) : (
          <div className="space-y-4">
            {sortedWorkouts.map((workout) => (
              <WorkoutPlanCard
                key={workout.id}
                workout={workout}
                isTodayTab={activeTab === "today"}
                onRemove={() => handleRemove(workout)}
                onMarkAsDone={() => handleMarkAsDone(workout)}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
