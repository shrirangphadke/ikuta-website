"use client";

import {
  ShieldCheck,
  Cog,
  Globe2,
  Cpu,
} from "lucide-react";

import { motion } from "framer-motion";

const features = [
  {
    icon: ShieldCheck,
    title: "Japanese Precision",
    text: "Engineered with exceptional attention to quality, accuracy and long-term reliability.",
  },

  {
    icon: Cog,
    title: "Manufacturing Excellence",
    text: "Decades of industrial engineering expertise across advanced metal processing systems.",
  },

  {
    icon: Cpu,
    title: "Modern Automation",
    text: "Integrated automation technologies designed for productivity and operational efficiency.",
  },

  {
    icon: Globe2,
    title: "Global Standards",
    text: "Trusted internationally by manufacturers requiring high-performance industrial solutions.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-32 bg-[#050505]">
      <div className="section-container">
        {/* Header */}
        <div className="max-w-4xl">
          <p className="uppercase tracking-[0.3em] text-orange-500 text-sm mb-6">
            Why Choose Us
          </p>

          <h2 className="text-5xl lg:text-6xl font-black leading-tight">
            Precision. Reliability. Engineering Excellence.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 hover:border-orange-500/40 transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                  <Icon
                    size={30}
                    className="text-orange-500"
                  />
                </div>

                <h3 className="mt-8 text-2xl font-bold">
                  {feature.title}
                </h3>

                <p className="mt-5 text-zinc-400 leading-relaxed">
                  {feature.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
