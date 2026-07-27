import React from 'react';
import { motion } from 'framer-motion';
import { EXPLORING_TOPICS } from './exploringData';
import { ExploringCard } from './ExploringCard';

export default function ExploringSection() {
  return (
    <section className="scroll-mt-24 relative min-h-screen bg-[#0C0C0F] text-[#F7F2EC] py-28 lg:py-40 px-6 lg:px-12 overflow-hidden flex flex-col justify-center">
      {/* Soft Ambient Background Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#A93A5B]/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[450px] h-[450px] bg-[#D16A8A]/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* --- Section Header (Center Aligned) --- */}
        <header className="max-w-3xl mx-auto text-center mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center justify-center gap-3 mb-4"
          >
            <span className="h-px w-6 bg-[#A93A5B]" />
            <span className="text-xs font-mono tracking-[0.25em] text-[#D16A8A] uppercase">
              CONTINUOUS LEARNING
            </span>
            <span className="h-px w-6 bg-[#A93A5B]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-[#F7F2EC] mb-6 leading-[1.1]"
          >
            Currently Exploring.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[#F7F2EC]/70 text-base sm:text-lg leading-relaxed font-light mx-auto max-w-2xl"
          >
            Technology evolves every day, and I'm constantly expanding my knowledge to build smarter, faster, and more scalable digital experiences.
          </motion.p>
        </header>

        {/* --- 2×2 Responsive Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {EXPLORING_TOPICS.map((topic, index) => (
            <ExploringCard key={topic.id} topic={topic} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}