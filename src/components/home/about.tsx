"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-32 bg-white text-black">
      <div className="section-container grid lg:grid-cols-2 gap-20 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-[0.3em] text-orange-600 text-sm mb-6">
            About Our Company
          </p>

          <h2 className="text-5xl lg:text-6xl font-black leading-tight">
            100+ Years of Japanese
            <br />
            Engineering Heritage
          </h2>

          <p className="mt-10 text-zinc-700 text-lg leading-relaxed">
            Founded in Kyoto in 1919, IKUTA SANKIKOGYO CO., LTD.
            began as a small iron machinery workshop serving local
            industry. Across more than a century, IKUTA has grown
            into a specialized engineering company for advanced
            non-ferrous metal production equipment.
          </p>

          <p className="mt-6 text-zinc-700 text-lg leading-relaxed">
            From copper strip processing and milling technologies
            to surface treatment, automation, software, and lifecycle
            support, IKUTA continues to carry forward Japanese
            manufacturing discipline through practical innovation.
            The India branch brings this heritage closer to Indian
            manufacturers with reliable machinery, technical know-how,
            and long-term service commitment.
          </p>

          <div className="mt-10 flex gap-10">
            <div>
              <h3 className="text-4xl font-black text-orange-600">
                1919
              </h3>

              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-zinc-500">
                Founded in Kyoto
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-black text-orange-600">
                1953
              </h3>

              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-zinc-500">
                Incorporated
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative h-[650px] rounded-3xl overflow-hidden"
        >
        <Image
          src="/images/factory-about.jpg"
          alt="Industrial Factory"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
