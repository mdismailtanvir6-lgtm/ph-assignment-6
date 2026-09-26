import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/banner.png";

export default function HeroSection() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="relative overflow-hidden rounded-2xl bg-[#13141c] border border-zinc-800/60 p-8 sm:p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Content */}
        <div className="flex-1 max-w-xl z-10">
          {/* Eyebrow Text */}
          <span className="text-[#c2f800] text-xs sm:text-sm font-bold tracking-widest uppercase">
            WORKOUT LIBRARY
          </span>

          {/* Main Heading */}
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase leading-[1.05] tracking-tight font-[Oswald],sans-serif">
            TRAIN WITH INTENT. LOG EVERY SET.
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-zinc-400 text-base sm:text-lg font-normal leading-relaxed">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          {/* Primary CTA Button with Anchor Link & Icon */}
          <div className="mt-8">
            <Link
              href="#library"
              className="inline-flex items-center space-x-2 bg-[#c2f800] hover:bg-[#b2e600] text-black font-extrabold text-sm uppercase px-7 py-3.5 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>BROWSE WORKOUTS</span>
              <ArrowDown className="w-4 h-4 stroke-3" />
            </Link>
          </div>
        </div>

        {/* Right Side Banner/Hero Image */}
        <div className="flex-1 w-full flex justify-center md:justify-end z-10">
          <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg aspect-square">
            <Image
              src={heroImage}
              alt="FitLog Hero"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
