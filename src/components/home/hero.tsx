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
      src="/images/hero-industrial-copper-processing.jpg"
      alt="Industrial Factory"
      fill
      priority
      sizes="100vw"
      className="object-cover opacity-40"
    />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 gradient-overlay" />
      </div>

      {/* Copper Glow */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-orange-500/10 blur-[140px]" />

      <div className="section-container relative z-10 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <p className="uppercase tracking-[0.35em] text-orange-500 text-sm mb-6">
            Japanese Engineering Excellence
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight">
            Precision Metal Processing Solutions
            <span className="block text-orange-500 mt-4">
              from Japan
            </span>
          </h1>

          <p className="mt-10 text-xl text-zinc-300 leading-relaxed max-w-2xl">
            Premium industrial machinery, automation systems and
            advanced processing technologies engineered for global
            manufacturing excellence.
          </p>

          <div className="mt-12 flex flex-wrap gap-5">
            <button className="bg-orange-600 hover:bg-orange-500 transition-all duration-300 px-8 py-4 rounded-md font-medium flex items-center gap-2">
              Explore Products
              <ArrowRight size={18} />
            </button>

            <button className="border border-white/15 bg-white/5 hover:bg-white/10 transition-all duration-300 px-8 py-4 rounded-md font-medium">
              Company Profile
            </button>
          </div>
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#050505] to-transparent" />
    </section>
  );
}
