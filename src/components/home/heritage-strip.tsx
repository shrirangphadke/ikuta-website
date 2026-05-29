"use client";

import { motion } from "framer-motion";

const milestones = [
  {
    year: "1919",
    label: "Founded in Kyoto",
  },
  {
    year: "1955",
    label: "First Milling Machine",
  },
  {
    year: "2019",
    label: "100 Years of Manufacturing",
  },
];

export default function HeritageStrip() {
  return (
    <section className="bg-[#050505] border-y border-white/10">
      <div className="section-container py-16">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="uppercase tracking-[0.3em] text-orange-500 text-sm mb-4">
              Since 1919
            </p>

            <h2 className="text-3xl md:text-4xl font-black leading-tight">
              Kyoto-born manufacturing expertise, now supporting India&apos;s
              next generation of metal processing.
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-4">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                className="border border-white/10 bg-white/[0.03] rounded-2xl p-6"
              >
                <p className="text-4xl font-black text-orange-500">
                  {milestone.year}
                </p>

                <p className="mt-3 text-sm uppercase tracking-[0.16em] text-zinc-400">
                  {milestone.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
