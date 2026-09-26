import WorkoutCard from "@/components/workout/WorkoutCard";

export default function LibrarySection({ workouts = [] }) {
  return (
    <section
      id="library"
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 scroll-mt-6"
    >
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight font-[Oswald],sans-serif">
          THE LIBRARY
        </h2>
        <p className="mt-1 text-sm sm:text-base text-zinc-400 font-normal">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      {/* 3x4 Grid on Large Screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {workouts.length === 0 ? (
          <p className="text-zinc-400 font-medium">No workouts available.</p>
        ) : (
          workouts.map((workout) => (
            <WorkoutCard key={workout.id} workout={workout} />
          ))
        )}
      </div>
    </section>
  );
}
