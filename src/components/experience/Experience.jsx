import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { experienceData } from './experienceData';
import { ExperienceCard } from './ExperienceCard';

export default function Experience() {
  const containerRef = useRef(null);

  // Scroll Progress Line calculation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 70%', 'end 90%'],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section id="experience"
      ref={containerRef}
      className="scroll-mt-24 relative min-h-screen bg-[#0C0C0F] text-[#F7F2EC] py-24 lg:py-36 px-6 lg:px-12 overflow-x-clip"
    >
      {/* Background Ambient Spheres */}
      <div className="absolute top-1/3 -left-64 w-[500px] h-[500px] bg-[#A93A5B]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-64 w-[600px] h-[600px] bg-[#D16A8A]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Editorial Section Header */}
        <header className="mb-20 lg:mb-32 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <span className="h-px w-8 bg-[#A93A5B]" />
            <span className="text-xs font-mono tracking-[0.25em] text-[#D16A8A] uppercase">
              PROFESSIONAL JOURNEY
            </span>
            <span className="h-px w-8 bg-[#A93A5B]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-[#F7F2EC] mb-6"
          >
            Experience & Growth.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[#F7F2EC]/70 text-base sm:text-lg leading-relaxed font-light"
          >
            Every opportunity has shaped the way I approach software engineering, collaboration, and continuous learning.
          </motion.p>
        </header>

        {/* Roadmap Spine Timeline Container */}
        <div className="relative">
          {/* Central Vertical Line (Desktop Background Track) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-white/5" />

          {/* Animated Glowing Foreground Spine Line (Desktop) */}
          <motion.div
            style={{ scaleY, transformOrigin: 'top' }}
            className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-[#A93A5B] via-[#D16A8A] to-[#A93A5B] shadow-[0_0_12px_rgba(209,106,138,0.8)] z-0"
          />

          {/* Cards Stack */}
          <div className="space-y-16 lg:space-y-24">
            {experienceData.map((item, index) => (
              <ExperienceCard
                key={item.id}
                data={item}
                index={index}
                isEven={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}