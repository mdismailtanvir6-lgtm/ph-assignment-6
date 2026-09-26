export default function WorkoutInstructions({ instructions }) {
  if (!instructions?.length) return null;

  return (
    <div>
      <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
        Instructions
      </h3>

      <ol className="space-y-2 text-xs text-gray-300">
        {instructions.map((step, index) => (
          <li key={index} className="flex gap-2">
            <span className="text-[#CCFF00] font-bold">
              {index + 1}.
            </span>

            <span>{step}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}