"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const navItems = [
  "Home",
  "About",
  "Products",
  "Industries",
  "Technology",
  "Contact",
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="backdrop-blur-xl bg-black/40 border-b border-white/10">
        <div className="section-container h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Image
              src="/images/ikuta-logo.svg"
              alt="IKUTA"
              width={158}
              height={35}
              priority
              className="h-8 w-auto invert"
            />

            <div className="hidden h-8 w-px bg-white/15 sm:block" />

            <p className="hidden text-[10px] tracking-[0.35em] text-zinc-400 sm:block">
              INDIA OPERATIONS
            </p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item}
                href="#"
                className="text-sm text-zinc-300 hover:text-white transition-colors duration-300"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <button className="hidden md:flex items-center gap-2 bg-orange-600 hover:bg-orange-500 transition-all duration-300 px-5 py-3 rounded-md text-sm font-medium">
            Talk to Ikuta India
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </header>
  );
}
