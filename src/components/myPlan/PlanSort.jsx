export default function PlanSort({ sortBy, onChange }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-gray-400 font-medium">Sort By</span>

      <select
        value={sortBy}
        onChange={(e) => onChange(e.target.value)}
        className="select appearance-none w-36 bg-[#13161c] border border-gray-800/80 text-xs text-white font-medium rounded-lg px-3 py-2 outline-none focus:border-gray-600 cursor-pointer"
      >
        <option value="duration">Duration</option>
        <option value="calories">Calories</option>
        <option value="rating">Rating</option>
      </select>
    </div>
  );
}
