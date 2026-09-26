export default function PlanToast({ message }) {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 bg-[#1f242d] text-white border border-[#ccff00]/40 px-5 py-3 rounded-xl shadow-2xl text-sm font-medium flex items-center gap-3 animate-bounce">
      <span className="w-2 h-2 rounded-full bg-[#ccff00]" />
      {message}
    </div>
  );
}