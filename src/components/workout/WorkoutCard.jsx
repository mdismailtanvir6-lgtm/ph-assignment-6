import Image from "next/image";
import Link from "next/link";
import { Clock, Flame, Star } from "lucide-react";

export default function WorkoutCard({ workout }) {
  return (
    <Link
      href={`/workouts/${workout.id}`}
      className="group flex flex-col bg-[#13141c] rounded-xl overflow-hidden border border-zinc-800/80 hover:border-[#c2f800]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#c2f800]/5"
    >
      {/* Illustration / Image Container */}
      <div className="relative w-full aspect-16/10 bg-zinc-900 overflow-hidden">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content Area */}
      <div className="p-5 flex flex-col flex-1 justify-between space-y-4">
        <div className="space-y-2">
          {/* Category Tag Pills */}
          <div className="flex flex-wrap gap-1.5">
            {workout.categories?.map((category, index) => (
              <span
                key={index}
                className="bg-[#c2f800] text-black font-extrabold text-[10px] uppercase px-2 py-0.5 rounded tracking-wider"
              >
                {category}
              </span>
            ))}
          </div>

          {/* Workout Name */}
          <h3 className="text-white font-extrabold text-lg uppercase tracking-tight font-[Oswald],sans-serif group-hover:text-[#c2f800] transition-colors">
            {workout.name}
          </h3>

          {/* Equipment Line */}
          <p className="text-zinc-400 text-xs font-medium">
            {workout.equipment}
          </p>
        </div>

        {/* Stats Row */}
        <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400 font-medium">
          <div className="flex items-center space-x-1">
            <Clock className="w-3.5 h-3.5 text-zinc-500" />
            <span>{workout.duration}</span>
          </div>

          <div className="flex items-center space-x-1">
            <Flame className="w-3.5 h-3.5 text-zinc-500" />
            <span>{workout.calories}</span>
          </div>

          <div className="flex items-center space-x-1">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span className="text-zinc-300">{workout.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}