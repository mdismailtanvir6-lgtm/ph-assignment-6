import Link from "next/link";

export default function EmptyPlan({ activeTab }) {
  const isSaved = activeTab === "saved";

  return (
    <div className="border border-dashed border-gray-800/80 rounded-2xl py-20 px-4 text-center bg-[#13161c]/30 flex flex-col items-center justify-center">
      <h2 className="text-xl font-black tracking-wide uppercase mb-2">
        NOTHING HERE YET
      </h2>

      <p className="text-xs text-gray-400 mb-6">
        {isSaved
          ? "Save workouts from the library to see them here."
          : "Browse the library and add a lift to get today moving."}
      </p>

      <Link
        href="/"
        className="bg-[#ccff00] text-black font-bold text-xs px-6 py-3 rounded-full hover:bg-[#b8e600] transition-colors shadow-lg shadow-[#ccff00]/10"
      >
        Go to workouts
      </Link>
    </div>
  );
}