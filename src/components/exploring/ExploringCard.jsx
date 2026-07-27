import React from 'react';
import { motion } from 'framer-motion';

// Pure Inline SVGs - Zero external hook/package conflicts
const renderIcon = (type) => {
  const props = {
    className: 'w-5 h-5 transition-transform duration-500 group-hover:scale-110',
    fill: 'none',
    viewBox: '0 0 24 24',
    stroke: 'currentColor',
    strokeWidth: '1.75',
  };

  switch (type) {
    case 'sparkles':
      return (
        <svg {...props}>
          <path d="M12 3l1.912 5.813a2 2 0 001.275 1.275L21 12l-5.813 1.912a2 2 0 00-1.275 1.275L12 21l-1.912-5.813a2 2 0 00-1.275-1.275L3 12l5.813-1.912a2 2 0 001.275-1.275L12 3z" />
        </svg>
      );
    case 'layers':
      return (
        <svg {...props}>
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      );
    case 'zap':
      return (
        <svg {...props}>
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      );
    case 'git-branch':
      return (
        <svg {...props}>
          <line x1="6" y1="3" x2="6" y2="15" />
          <circle cx="18" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <path d="M18 9a9 9 0 0 1-9 9" />
        </svg>
      );
    default:
      return <svg {...props}><circle cx="12" cy="12" r="10" /></svg>;
  }
};

export const ExploringCard = ({ topic, index }) => {
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
      className="group relative h-full"
    >
      {/* Soft Hover Background Radial Glow */}
      <div
        className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, ${topic.accent}25 0%, transparent 70%)`,
        }}
      />

      {/* Main Glass Card */}
      <div className="relative h-full p-8 rounded-2xl bg-[#17171D]/80 backdrop-blur-md border border-white/5 group-hover:border-[#D16A8A]/40 transition-all duration-500 ease-out flex flex-col justify-between group-hover:-translate-y-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
        <div>
          {/* Top Bar: Icon & Status Badge */}
          <div className="flex items-center justify-between mb-8">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center bg-[#0C0C0F] border border-white/10 group-hover:border-[#D16A8A]/40 transition-colors duration-500"
              style={{ color: topic.accent }}
            >
              {renderIcon(topic.iconType)}
            </div>

            {/* Status Badge with Subtle Pulse */}
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#0C0C0F]/80 border border-white/10">
              <span
                className="w-1.5 h-1.5 rounded-full group-hover:animate-ping"
                style={{ backgroundColor: topic.accent }}
              />
              <span className="text-[10px] font-mono tracking-wider text-[#F7F2EC]/80 uppercase">
                {topic.status}
              </span>
            </div>
          </div>

          {/* Topic Title */}
          <h3 className="text-xl font-serif font-medium text-[#F7F2EC] tracking-tight mb-3 group-hover:text-white transition-colors">
            {topic.title}
          </h3>

          {/* Description */}
          <p className="text-xs sm:text-sm text-[#F7F2EC]/70 leading-relaxed font-light">
            {topic.description}
          </p>
        </div>

        {/* Bottom Accent Highlight Line */}
        <div
          className="mt-8 h-px w-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(90deg, transparent, ${topic.accent}, transparent)`,
          }}
        />
      </div>
    </motion.div>
  );
};