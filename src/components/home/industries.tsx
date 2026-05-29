"use client";

import {
  Factory,
  Cpu,
  Car,
  Cable,
  Shield,
  Building2,
} from "lucide-react";

import { motion } from "framer-motion";

const industries = [
  {
    title: "Copper",
    icon: Cable,
  },
  {
    title: "Steel",
    icon: Shield,
  },
  {
    title: "Aluminum",
    icon: Factory,
  },
  {
    title: "Automotive",
    icon: Car,
  },
  {
    title: "Electronics",
    icon: Cpu,
  },
  {
    title: "Industrial Manufacturing",
    icon: Building2,
  },
];

export default function Industries() {
  return (
    <section className="py-32 bg-[#0a0a0a] border-y border-white/10">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto">
          <p className="uppercase tracking-[0.3em] text-orange-500 text-sm mb-6">
            Industries Served
          </p>

          <h2 className="text-5xl lg:text-6xl font-black leading-tight">
            Supporting Advanced Global Manufacturing
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6 mt-20">
          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group bg-white/[0.03] border border-white/10 rounded-3xl p-8 hover:border-orange-500/40 transition-all duration-500 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mx-auto">
                  <Icon
                    size={30}
                    className="text-orange-500"
                  />
                </div>

                <h3 className="mt-6 font-medium text-lg">
                  {industry.title}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
