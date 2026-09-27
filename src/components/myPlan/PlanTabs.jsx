export default function PlanTabs({ activeTab, onChange }) {
  return (
    <div className="inline-flex bg-[#13161c] p-1 rounded-xl border border-gray-800/80">
      <button
        onClick={() => onChange("today")}
        className={`px-5 py-2 text-xs font-bold rounded-lg transition-colors ${
          activeTab === "today"
            ? "bg-[#1f242d] text-white"
            : "text-gray-400 hover:text-white cursor-pointer"
        }`}
      >
        Today&apos;s Plan
      </button>

      <button
        onClick={() => onChange("saved")}
        className={`px-5 py-2 text-xs font-bold rounded-lg transition-colors ${
          activeTab === "saved"
            ? "bg-[#1f242d] text-white"
            : "text-gray-400 hover:text-white cursor-pointer"
        }`}
      >
        Saved
      </button>
    </div>
  );
}