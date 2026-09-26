import { Suspense } from "react";
import HeroSection from "@/components/hero/HeroSection";
import WorkoutsWrapper from "@/components/workout/WorkoutsWrapper";

export default function Home() {
  return (
    <div>
      <main>
        <HeroSection />

        <Suspense
          fallback={
            <div className="py-16 text-center text-zinc-400 font-medium">
              Loading library workouts...
            </div>
          }
        >
          <WorkoutsWrapper />
        </Suspense>
      </main>
    </div>
  );
}
