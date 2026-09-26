"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePlan } from "@/context/PlanContext";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function NavbarInteractive() {
  const router = useRouter();
  const pathname = usePathname();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { planCount, savedCount } = usePlan();

  const handleClick = () => {
    setMobileMenuOpen(false);
    router.push("/my-plan");
  };

  return (
    <>
      {/* Desktop Navigation Links */}
      <nav className="hidden md:flex items-center space-x-1 bg-zinc-900/80 p-1 rounded-full border border-zinc-800">
        <Link
          href="/"
          className={`px-5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
            pathname === "/"
              ? "bg-[#c2f800]/15 text-[#c2f800] border border-[#c2f800]/30 shadow-sm"
              : "text-zinc-400 hover:text-white hover:bg-zinc-800/50"
          }`}
        >
          Workouts
        </Link>

        <Link
          href="/my-plan"
          className={`px-5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
            pathname === "/my-plan"
              ? "bg-[#c2f800]/15 text-[#c2f800] border border-[#c2f800]/30 shadow-sm"
              : "text-zinc-400 hover:text-white hover:bg-zinc-800/50"
          }`}
        >
          My Plan
        </Link>
      </nav>

      {/* Desktop Counters / Badges */}
      <div className="hidden md:flex items-center space-x-6">
        <button
          onClick={() => handleClick("/my-plan")}
          className="flex items-center space-x-2 text-sm font-medium text-zinc-300 cursor-pointer"
        >
          <span>Plan</span>
          <span className="bg-[#c2f800] text-black font-bold h-6 w-6 rounded-full flex items-center justify-center text-xs shadow-sm">
            {planCount.length}
          </span>
        </button>

        <button
          onClick={() => handleClick("/my-plan")}
          className="flex items-center space-x-2 text-sm font-medium text-zinc-300 cursor-pointer"
        >
          <span>Saved</span>
          <span className="bg-zinc-800 text-zinc-300 font-medium h-6 w-6 rounded-full flex items-center justify-center text-xs border border-zinc-700">
            {savedCount.length}
          </span>
        </button>
      </div>

      {/* Mobile Toggle Button */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-800 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-16 left-0 right-0 md:hidden bg-[#0d0d0f] border-b border-zinc-800 px-4 pt-2 pb-6 space-y-4 shadow-xl">
          <div className="flex flex-col space-y-2">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === "/"
                  ? "bg-[#c2f800]/15 text-[#c2f800]"
                  : "text-zinc-300 hover:bg-zinc-800"
              }`}
            >
              Workouts
            </Link>

            <Link
              href="/my-plan"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === "/my-plan"
                  ? "bg-[#c2f800]/15 text-[#c2f800]"
                  : "text-zinc-300 hover:bg-zinc-800"
              }`}
            >
              My Plan
            </Link>
          </div>

          <div className="pt-4 border-t border-zinc-800 flex justify-around">
            <button
              onClick={() => handleClick("/my-plan")}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <span className="text-sm text-zinc-400">Plan</span>
              <span className="bg-[#c2f800] text-black font-bold h-6 w-6 rounded-full flex items-center justify-center text-xs">
                {planCount.length}
              </span>
            </button>

            <button
              onClick={() => handleClick("/my-plan")}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <span className="text-sm text-zinc-400">Saved</span>
              <span className="bg-zinc-800 text-zinc-300 font-medium h-6 w-6 rounded-full flex items-center justify-center text-xs border border-zinc-700">
                {savedCount.length}
              </span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
