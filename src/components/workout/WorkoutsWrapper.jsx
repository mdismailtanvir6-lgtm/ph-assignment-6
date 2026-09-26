import LibrarySection from "./LibrarySection";

async function getWorkouts() {
  try {
    const response = await fetch("https://api.abcz.workers.dev/api/fitlog", {
      next: { revalidate: 3600 }, // Caches data for 1 hour
    });

    if (!response.ok) {
      throw new Error("Failed to fetch workout data");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching workout data:", error);
    return [];
  }
}

export default async function WorkoutsWrapper() {
  const workouts = await getWorkouts();

  return <LibrarySection workouts={workouts} />;
}
