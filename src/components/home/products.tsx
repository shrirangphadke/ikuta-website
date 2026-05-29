"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const products = [
  {
    title: "Milling / Scalping Lines",
    description:
      "Custom surface milling systems for copper and non-ferrous strip quality control.",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1600&auto=format&fit=crop",
  },

  {
    title: "Tension Leveler Lines",
    description:
      "Advanced leveling technology for strip flatness, stability and processing consistency.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600&auto=format&fit=crop",
  },

  {
    title: "Degreasing, Pickling & Buffing",
    description:
      "Surface treatment lines for cleaning, finishing and preparing advanced metal strip.",
    image: "/images/factory-about.jpg",
  },

  {
    title: "Automation & Lifecycle Support",
    description:
      "Automation, software, maintenance, modification and overhaul support for production lines.",
    image:
      "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function Products() {
  return (
    <section className="py-32 bg-[#050505]">
      <div className="section-container">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-20">
          <div className="max-w-3xl">
            <p className="uppercase tracking-[0.3em] text-orange-500 text-sm mb-6">
              Core Technologies
            </p>

            <h2 className="text-5xl lg:text-6xl font-black leading-tight">
              Production Lines for Advanced Metal Processing
            </h2>
          </div>

          <button className="flex items-center gap-2 text-zinc-300 hover:text-white transition">
            View Technology Range
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white/[0.03] border border-white/10 rounded-3xl overflow-hidden hover:border-orange-500/40 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(max-width: 768px) 100vw,
                        (max-width: 1280px) 50vw,
                        25vw"
                  className="object-cover group-hover:scale-105 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold">
                  {product.title}
                </h3>

                <p className="mt-5 text-zinc-400 leading-relaxed">
                  {product.description}
                </p>

                <button className="mt-8 flex items-center gap-2 text-orange-500 font-medium">
                  Learn More
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
