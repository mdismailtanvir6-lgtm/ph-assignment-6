import Link from "next/link";
import { Dumbbell, ArrowLeft } from "lucide-react";

export default function WorkoutNotFound() {
  return (
    <main className="min-h-screen bg-[#0F1117] text-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-[#1A1D26] border border-gray-800">
          <Dumbbell className="h-9 w-9 text-[#CCFF00]" />
        </div>

        <p className="text-[#CCFF00] text-sm font-bold uppercase tracking-widest mb-3">
          Workout Not Found
        </p>

        <h1 className="text-4xl md:text-5xl font-black text-white mb-4">404</h1>

        <p className="text-gray-400 text-sm leading-6 mb-8">
          Sorry, we couldn&apos;t find the workout you&apos;re looking for. It may have
          been removed or the workout ID may be invalid.
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 bg-[#CCFF00] hover:bg-[#b8e600] text-black font-extrabold px-5 py-3 rounded-xl text-sm uppercase tracking-wider transition active:scale-95"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>
      </div>
    </main>
  );
}
