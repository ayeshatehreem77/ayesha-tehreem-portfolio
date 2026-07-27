import React from 'react';
import { motion } from 'framer-motion';

// Pure Inline SVGs - Guaranteed zero hook or module conflicts
const renderIcon = (type) => {
  const props = {
    className: "w-5 h-5",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeWidth: "1.75",
  };

  switch (type) {
    case 'search':
      return (
        <svg {...props}>
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      );
    case 'layout':
      return (
        <svg {...props}>
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="9" y1="21" x2="9" y2="9" />
        </svg>
      );
    case 'code':
      return (
        <svg {...props}>
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
    case 'shield':
      return (
        <svg {...props}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      );
    case 'rocket':
      return (
        <svg {...props}>
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
          <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-3.05 11a22.35 22.35 0 0 1-3.95 2z" />
        </svg>
      );
    default:
      return <svg {...props}><circle cx="12" cy="12" r="10" /></svg>;
  }
};

export const ProcessCard = ({ step, index, total }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative flex-1 flex flex-col justify-between"
    >
      {/* Soft Hover Radial Glow */}
      <div
        className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, ${step.accent}20 0%, transparent 70%)`,
        }}
      />

      {/* Main Glass Card */}
      <div className="relative h-full p-7 lg:p-8 rounded-2xl bg-[#17171D]/80 backdrop-blur-md border border-white/5 group-hover:border-[#D16A8A]/40 transition-all duration-500 ease-out flex flex-col justify-between group-hover:-translate-y-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
        <div>
          {/* Card Top Row: Step Number & Icon */}
          <div className="flex items-center justify-between mb-8">
            <span
              className="text-2xl font-mono font-light tracking-tight"
              style={{ color: step.accent }}
            >
              {step.number}
            </span>

            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#0C0C0F] border border-white/10 group-hover:border-[#D16A8A]/40 transition-colors duration-500"
              style={{ color: step.accent }}
            >
              {renderIcon(step.iconType)}
            </div>
          </div>

          {/* Title & Category */}
          <div className="mb-3">
            <span className="text-[10px] font-mono tracking-widest text-[#F7F2EC]/40 uppercase block mb-1">
              {step.category}
            </span>
            <h3 className="text-xl font-serif font-medium text-[#F7F2EC] tracking-tight group-hover:text-white transition-colors">
              {step.title}
            </h3>
          </div>

          {/* Description */}
          <p className="text-xs text-[#F7F2EC]/70 leading-relaxed font-light">
            {step.description}
          </p>
        </div>

        {/* Bottom Subtle Accent Bar */}
        <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
          <span className="text-[10px] font-mono text-[#F7F2EC]/30 group-hover:text-[#D16A8A] transition-colors">
            Phase {step.number} of 0{total}
          </span>
          <span
            className="w-1.5 h-1.5 rounded-full opacity-30 group-hover:opacity-100 transition-opacity"
            style={{ backgroundColor: step.accent }}
          />
        </div>
      </div>
    </motion.div>
  );
};