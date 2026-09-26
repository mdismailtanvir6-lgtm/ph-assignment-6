import Image from "next/image";

export default function WorkoutImage({ workout }) {
  return (
    <div className="rounded-2xl overflow-hidden bg-[#1A1D26] border border-gray-800 h-80 lg:h-120">
      <Image
        src={workout.image || workout.imageUrl}
        alt={workout.title || workout.name}
        width={600}
        height={400}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        priority
        className="object-cover w-full h-full"
      />
    </div>
  );
}
