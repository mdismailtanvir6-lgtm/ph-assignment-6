import Link from "next/link";
import NavbarInteractive from "./NavbarInteractive";
import Image from "next/image";
import logo from "@/assets/logo.png";


export default function Navbar() {
  return (
    <header className="sticky top-0 w-full bg-[#0d0d0f] text-white border-b border-zinc-800 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left: Brand Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <Image src={logo} alt="Fitlog Logo" width={32} height={32} />
          <span className="font-extrabold tracking-wider text-xl text-white uppercase">
            Fitlog
          </span>
        </Link>

        {/* Client Rendered Navigation & Dynamic Context Data */}
        <NavbarInteractive />
      </div>
    </header>
  );
}
