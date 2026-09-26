import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0d0d0f] border-t border-zinc-800/80 py-8 px-6 md:px-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo Section with Rotated Image */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative w-7 h-7 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
            <Image
              src={logo}
              alt="FITLOG Logo"
              fill
              className="object-contain -rotate-45 transition-transform duration-300"
              /* -rotate-45 turns */
            />
          </div>
          <span className="text-white font-extrabold tracking-wider text-lg uppercase font-sans">
            FITLOG
          </span>
        </Link>

        {/* Copyright & Tagline */}
        <div className="text-xs text-zinc-500 font-normal tracking-wide text-center md:text-right">
          © {currentYear} FitLog — Workout Library. Train hard, log honest.
        </div>
      </div>
    </footer>
  );
}
