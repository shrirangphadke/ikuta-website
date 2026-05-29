"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "1919",
    label: "Founded",
  },
  {
    number: "1953",
    label: "Incorporated",
  },
  {
    number: "94",
    label: "Employees",
  },
  {
    number: "¥20M",
    label: "Capital",
  },
];

export default function Stats() {
  return (
    <section className="border-y border-white/10 bg-[#0a0a0a]">
      <div className="section-container py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-5xl md:text-6xl font-black text-orange-500">
                {stat.number}
              </h3>

              <p className="mt-4 text-zinc-400 uppercase tracking-[0.2em] text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
