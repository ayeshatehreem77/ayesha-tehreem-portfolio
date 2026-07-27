import React from 'react';
import { motion } from 'framer-motion';

// SVG Icons
const WorkIcon = () => (
  <svg className="w-5 h-5 text-[#D16A8A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20.25 14.15v4.25c0 .414-.336.75-.75.75H4.5a.75.75 0 01-.75-.75v-4.25m16.5 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 14.15m16.5 0V8.25a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 8.25v5.9M12 3v3m-3-3h6" />
  </svg>
);

const AcademicIcon = () => (
  <svg className="w-5 h-5 text-[#D16A8A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.26 10.147L12 14.6l7.74-4.453a1 1 0 000-1.748L12 3.946 4.26 8.399a1 1 0 000 1.748z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 12v4.126c0 .634.356 1.217.916 1.506l4.226 2.183a1.99 1.99 0 001.716 0l4.226-2.183a1.75 1.75 0 00.916-1.506V12" />
  </svg>
);

const FutureIcon = () => (
  <svg className="w-5 h-5 text-[#D16A8A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.011-8.54a6 6 0 00-7.38 5.84h4.8m2.58-5.84a14.927 14.927 0 00-2.58 5.84m2.69-2.7c.103-.01.207-.015.311-.015a3.5 3.5 0 013.5 3.5c0 .104-.005.208-.015.311" />
  </svg>
);

const SparklesIcon = () => (
  <svg className="w-4 h-4 text-[#D16A8A] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
  </svg>
);

export function ExperienceCard({ data, index, isEven }) {
  const isFutureCard = data.id === 'looking-ahead';
  const isEducationCard = data.id === 'mnsuam-degree';

  const getIcon = () => {
    if (isFutureCard) return <FutureIcon />;
    if (isEducationCard) return <AcademicIcon />;
    return <WorkIcon />;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20 lg:mb-32"
    >
      {/* 1. STICKY ICON NODE ON SPINE */}
      <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 pointer-events-none z-30">
        <div className="sticky top-32 flex items-center justify-center">
          <div className="relative group pointer-events-auto">
            <div className="relative z-20 w-12 h-12 rounded-full bg-[#17171D] border border-[#A93A5B]/50 flex items-center justify-center shadow-[0_0_20px_rgba(169,58,91,0.35)] transition-all duration-500 group-hover:scale-110 group-hover:border-[#D16A8A]">
              {getIcon()}
            </div>
            <span className="absolute inset-0 rounded-full bg-[#D16A8A]/20 animate-ping opacity-25 pointer-events-none z-10" />
          </div>
        </div>
      </div>

      {/* 2. STICKY SIDE INFO (Number, Badge & Highlights) */}
      <div
        className={`hidden lg:block lg:col-span-5 self-stretch ${
          isEven
            ? 'lg:order-1 lg:pr-12 text-right'
            : 'lg:order-2 lg:col-start-8 lg:pl-12 text-left'
        }`}
      >
        <div className="sticky top-32 space-y-3 pt-1">
          <div className="text-5xl font-serif text-white/10 font-bold tracking-tight">
            0{index + 1}
          </div>
          <div className="text-xs font-mono text-[#D16A8A] tracking-[0.2em] uppercase">
            {data.badge}
          </div>
          <div className={`flex flex-wrap gap-2 pt-2 ${isEven ? 'justify-end' : 'justify-start'}`}>
            {data.highlights?.map((h, i) => (
              <span
                key={i}
                className="text-[11px] font-mono text-[#F7F2EC]/40 px-2.5 py-0.5 rounded border border-white/5 bg-white/[0.01]"
              >
                #{h}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 3. MAIN SCROLLING CONTENT CARD */}
      <div
        className={`lg:col-span-6 ${
          isEven
            ? 'lg:order-2 lg:col-start-7 lg:pl-12 text-left'
            : 'lg:order-1 lg:col-start-1 lg:pr-12 text-left'
        }`}
      >
        <motion.article
          whileHover={{ y: -4 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className={`group relative overflow-hidden rounded-3xl backdrop-blur-xl p-8 lg:p-10 transition-all duration-500 border ${
            isFutureCard
              ? 'bg-[#17171D]/95 border-[#D16A8A]/40 shadow-[0_20px_50px_rgba(209,106,138,0.12)]'
              : 'bg-[#17171D]/90 border-white/10 hover:border-[#A93A5B]/40 hover:shadow-[0_20px_50px_rgba(169,58,91,0.15)]'
          }`}
        >
          {/* Ambient Glow */}
          <div className="absolute -top-24 -right-24 w-60 h-60 bg-[#A93A5B]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#D16A8A]/20 transition-all duration-700" />

          {/* Metadata Row */}
          <div className="flex flex-wrap items-center gap-3 mb-6 justify-start">
            <span className="text-[10px] font-mono tracking-[0.2em] text-[#D16A8A] uppercase px-3 py-1 rounded-full bg-[#A93A5B]/10 border border-[#A93A5B]/20">
              {data.type}
            </span>
            <span className="text-xs font-mono text-[#F7F2EC]/40 border border-white/10 px-3 py-1 rounded-full">
              {data.period}
            </span>
          </div>

          {/* Title & Company */}
          <h3 className="text-2xl lg:text-3xl font-serif text-[#F7F2EC] mb-2 group-hover:text-white transition-colors duration-300">
            {data.role}
          </h3>
          <h4 className="text-sm font-mono text-[#D16A8A]/90 mb-6 tracking-wide">
            {data.company}
          </h4>

          {/* Description */}
          <p className="text-[#F7F2EC]/70 text-sm leading-relaxed font-light mb-6">
            {data.description}
          </p>

          {/* Final Year Project Box */}
          {data.fyp && (
            <div className="mb-6 p-5 rounded-2xl bg-white/[0.02] border border-[#A93A5B]/30 text-left">
              <div className="flex items-center gap-2 mb-2">
                <SparklesIcon />
                <span className="text-xs font-mono tracking-wider text-[#D16A8A] uppercase">
                  Final Year Project
                </span>
              </div>
              <h5 className="text-base font-serif text-[#F7F2EC] mb-1">
                {data.fyp.title}
              </h5>
              <p className="text-xs text-[#F7F2EC]/60 font-light leading-relaxed">
                {data.fyp.description}
              </p>
            </div>
          )}

          {/* Responsibilities */}
          {data.responsibilities && data.responsibilities.length > 0 && (
            <div className="mb-8 text-left">
              <span className="text-xs font-mono text-[#F7F2EC]/40 tracking-wider uppercase block mb-3">
                Key Contributions & Workflow
              </span>
              <ul className="space-y-2.5">
                {data.responsibilities.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs text-[#F7F2EC]/80 font-light leading-normal">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A93A5B] mt-1.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Skills Badges */}
          <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5 justify-start">
            {data.skills?.map((skill) => (
              <span
                key={skill}
                className="text-xs px-3 py-1 rounded-md bg-white/[0.03] border border-white/5 text-[#F7F2EC]/80 font-mono tracking-wide"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.article>
      </div>
    </motion.div>
  );
}