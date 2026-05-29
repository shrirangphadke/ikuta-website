"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/home-image-1.png"
          alt="Copper sheet processing line"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-65"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 gradient-overlay" />
      </div>

      {/* Copper Glow */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-orange-500/5 blur-[140px]" />

      <div className="section-container relative z-10 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="mb-8 flex items-center gap-5">
            <Image
              src="/images/ikuta-logo.svg"
              alt="IKUTA"
              width={158}
              height={35}
              priority
              className="h-9 w-auto invert"
            />

            <div className="h-8 w-px bg-white/20" />

            <p className="text-xs uppercase tracking-[0.3em] text-zinc-300">
              India Operations
            </p>
          </div>

          <p className="uppercase tracking-[0.35em] text-orange-500 text-sm mb-6">
            Japan Engineering | India Support
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight">
            Japanese Engineering
            <span className="block text-orange-500 mt-4">
              for India&apos;s Metal Industry
            </span>
          </h1>

          <p className="mt-10 text-xl text-zinc-300 leading-relaxed max-w-2xl">
            Bringing Ikuta&apos;s 100+ years of machinery expertise,
            application knowledge, and lifecycle support closer to
            Indian manufacturers.
          </p>

          <div className="mt-12 flex flex-wrap gap-5">
            <button className="bg-orange-600 hover:bg-orange-500 transition-all duration-300 px-8 py-4 rounded-md font-medium flex items-center gap-2">
              Discuss Your Line Requirement
              <ArrowRight size={18} />
            </button>

            <button className="border border-white/15 bg-white/5 hover:bg-white/10 transition-all duration-300 px-8 py-4 rounded-md font-medium">
              Explore Technologies
            </button>
          </div>
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#050505] to-transparent" />
    </section>
  );
}
