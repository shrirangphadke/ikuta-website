"use client";

import { ArrowRight, Phone } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="py-32 bg-gradient-to-r from-orange-600 to-orange-500 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-white/10 blur-[140px]" />

      <div className="section-container relative z-10 text-center">
        <p className="uppercase tracking-[0.3em] text-white/80 text-sm mb-6">
          Contact Us
        </p>

        <h2 className="text-5xl lg:text-7xl font-black leading-tight max-w-5xl mx-auto">
          Let’s Build the Future of Industrial Manufacturing Together
        </h2>

        <p className="mt-10 text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
          Speak with our engineering specialists about your
          processing requirements and automation goals.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-5">
          <button className="bg-black hover:bg-black/90 transition-all duration-300 px-8 py-4 rounded-md font-medium flex items-center gap-2">
            Request Consultation
            <Phone size={18} />
          </button>

          <button className="border border-white/30 hover:bg-white/10 transition-all duration-300 px-8 py-4 rounded-md font-medium flex items-center gap-2">
            Send Inquiry
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
