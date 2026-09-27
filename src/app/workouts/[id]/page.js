import { notFound } from "next/navigation";
import WorkoutDetails from "@/components/workoutDetails/WorkoutDetails";

async function getWorkout(id) {
  try {
    const response = await fetch(
      `https://api.abcz.workers.dev/api/fitlog/${id}`,
      {
        next: { revalidate: 3600 },
      },
    );

    if (!response.ok) {
      return null;
    }

    const data = await response.json();

    if (!data || Object.keys(data).length === 0) {
      return null;
    }

    return data;
  } catch (error) {
    console.error("Workout fetch error:", error);
    return null;
  }
}

export default async function WorkoutDetailPage({ params }) {
  const { id } = await params;

  const workout = await getWorkout(id);

  if (!workout) {
    notFound();
  }

  return <WorkoutDetails workout={workout} />;
}
