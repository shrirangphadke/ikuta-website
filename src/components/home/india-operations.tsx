"use client";

import {
  ClipboardCheck,
  Handshake,
  Settings,
  Workflow,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Handshake,
    title: "Local Technical Coordination",
    text: "Faster communication for Indian customers, from requirements study to installation planning.",
  },
  {
    icon: ClipboardCheck,
    title: "Application Support",
    text: "Guidance for copper, brass, stainless, steel, and advanced strip processing applications.",
  },
  {
    icon: Settings,
    title: "Lifecycle Service",
    text: "Support for maintenance, modification, overhaul, relocation, and production line upgrades.",
  },
  {
    icon: Workflow,
    title: "Japan-India Engineering Bridge",
    text: "Direct coordination with Ikuta Japan for custom machinery, spare parts, and technical expertise.",
  },
];

export default function IndiaOperations() {
  return (
    <section className="py-32 bg-white text-black">
      <div className="section-container">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-16 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="uppercase tracking-[0.3em] text-orange-600 text-sm mb-6">
              India Operations
            </p>

            <h2 className="text-5xl lg:text-6xl font-black leading-tight">
              Japanese Engineering,
              <br />
              Local Support
            </h2>

            <p className="mt-8 text-zinc-700 text-lg leading-relaxed">
              Ikuta India connects Indian manufacturers with Ikuta&apos;s
              Kyoto-born machinery expertise, application knowledge, and
              lifecycle support for advanced metal processing lines.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="rounded-2xl border border-black/10 bg-zinc-50 p-7"
                >
                  <div className="h-14 w-14 rounded-xl bg-orange-600 text-white flex items-center justify-center">
                    <Icon size={26} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-zinc-600 leading-relaxed">
                    {service.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
