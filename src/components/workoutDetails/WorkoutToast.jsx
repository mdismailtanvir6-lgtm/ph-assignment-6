import { Check } from "lucide-react";

export default function WorkoutToast({ message }) {
  if (!message) return null;

  return (
    <div className="fixed bottom-5 right-5 bg-[#1A1D26] border border-[#CCFF00] text-white text-xs px-4 py-3 rounded-xl shadow-xl flex items-center gap-2 animate-bounce">
      <Check className="w-4 h-4 text-[#CCFF00]" />
      <span>{message}</span>
    </div>
  );
}