import PlanTabs from "./PlanTabs";
import PlanSort from "./PlanSort";

export default function PlanControls({
  activeTab,
  setActiveTab,
  sortBy,
  setSortBy,
}) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
      <PlanTabs
        activeTab={activeTab}
        onChange={setActiveTab}
      />

      <PlanSort
        sortBy={sortBy}
        onChange={setSortBy}
      />
    </div>
  );
}