import React from 'react';

// Pure Inline SVGs - Zero hook or external package conflicts
const renderIcon = (type) => {
  const props = {
    className: "w-5 h-5 transition-transform duration-500 group-hover:scale-110",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeWidth: "1.75",
  };

  switch (type) {
    case 'mail':
      return (
        <svg {...props}>
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      );
    case 'mapPin':
      return (
        <svg {...props}>
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 transition-transform duration-500 group-hover:scale-110">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2Z" />
        </svg>
      );
    case 'github':
      return (
        <svg {...props}>
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        </svg>
      );
    default:
      return <svg {...props}><circle cx="12" cy="12" r="10" /></svg>;
  }
};

export const ContactCard = ({ info }) => {
  const CardContent = (
    <div className="relative group p-4 rounded-xl bg-[#17171D]/60 backdrop-blur-md border border-white/5 hover:border-[#D16A8A]/40 transition-all duration-500 ease-out flex items-center gap-4 shadow-sm hover:-translate-y-1">
      {/* Background Soft Glow */}
      <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-[#A93A5B]/10 to-[#D16A8A]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-md" />

      {/* Icon Capsule */}
      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#0C0C0F] border border-white/10 text-[#D16A8A] group-hover:border-[#D16A8A]/50 transition-colors duration-500 shrink-0">
        {renderIcon(info.iconType)}
      </div>

      {/* Details */}
      <div className="overflow-hidden">
        <span className="text-[10px] font-mono tracking-widest text-[#F7F2EC]/40 uppercase block">
          {info.label}
        </span>
        <span className="text-xs sm:text-sm font-medium text-[#F7F2EC] group-hover:text-white transition-colors truncate block">
          {info.value}
        </span>
      </div>
    </div>
  );

  if (info.href) {
    return (
      <a href={info.href} target="_blank" rel="noopener noreferrer" className="block focus:outline-none">
        {CardContent}
      </a>
    );
  }

  return CardContent;
};