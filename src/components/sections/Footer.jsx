import React from 'react';
import { motion } from 'framer-motion';

// --- Footer Data ---
const FOOTER_NAV = [
  { name: 'About', href: '#about' },
  { name: 'Tech Stack', href: '#tech' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const FOOTER_SOCIALS = [
  {
    id: 'github',
    name: 'GitHub',
    href: 'https://github.com/ayeshatehreem77',
    iconType: 'github',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ayesha-tehreem-289346321/',
    iconType: 'linkedin',
  },
  {
    id: 'email',
    name: 'Email',
    href: 'mailto:ayeshatehreem556@gmail.com',
    iconType: 'mail',
  },
];

// --- Helper for Pure Inline SVGs ---
const renderIcon = (type) => {
  const props = {
    className: 'w-4 h-4 transition-transform duration-500 group-hover:scale-110',
    fill: 'none',
    viewBox: '0 0 24 24',
    stroke: 'currentColor',
    strokeWidth: '1.75',
  };

  switch (type) {
    case 'github':
      return (
        <svg {...props}>
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 transition-transform duration-500 group-hover:scale-110">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2Z" />
        </svg>
      );
    case 'mail':
      return (
        <svg {...props}>
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      );
    default:
      return <svg {...props}><circle cx="12" cy="12" r="10" /></svg>;
  }
};

// --- Sub-component: Social Button ---
const FooterSocialButton = ({ social }) => {
  return (
    <a
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={social.name}
      className="group relative flex items-center justify-center w-10 h-10 rounded-xl bg-[#17171D]/80 border border-white/10 text-[#F7F2EC]/70 hover:text-[#D16A8A] hover:border-[#D16A8A]/40 transition-all duration-500 hover:-translate-y-1 hover:rotate-3 shadow-sm focus:outline-none focus:ring-1 focus:ring-[#D16A8A]"
    >
      <div className="absolute -inset-px rounded-xl bg-[#D16A8A]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md pointer-events-none" />
      <span className="relative z-10">{renderIcon(social.iconType)}</span>
    </a>
  );
};

// --- Main Footer Component ---
export default function Footer() {
  return (
    <footer className="relative bg-[#0C0C0F] text-[#F7F2EC] pt-24 pb-12 px-6 lg:px-12 overflow-hidden border-t border-white/5">
      {/* Ambient Radial Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#A93A5B]/10 rounded-full blur-[200px] pointer-events-none" />

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#F7F2EC 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* --- Top 3-Column Grid --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16"
        >
          {/* Column 1: Brand */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <a href="#" className="group inline-block focus:outline-none">
                <h3 className="text-2xl sm:text-3xl font-serif tracking-tight text-[#F7F2EC] group-hover:text-[#D16A8A] transition-colors duration-500">
                  Ayesha Tehreem
                </h3>
              </a>
              <span className="text-xs font-mono tracking-widest text-[#D16A8A] uppercase block mt-1">
                Full Stack MERN Developer
              </span>
              <p className="text-xs sm:text-sm text-[#F7F2EC]/60 leading-relaxed font-light mt-4 max-w-sm">
                Crafting modern, scalable, and meaningful digital experiences through clean code and thoughtful design.
              </p>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="md:col-span-4 flex flex-col justify-start">
            <span className="text-[10px] font-mono tracking-[0.2em] text-[#F7F2EC]/40 uppercase mb-4 block">
              Navigation
            </span>
            <ul className="space-y-3">
              {FOOTER_NAV.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="group relative inline-block text-xs font-mono tracking-wider text-[#F7F2EC]/70 hover:text-[#F7F2EC] transition-colors duration-300 py-0.5 focus:outline-none"
                  >
                    <span>{item.name}</span>
                    <span className="absolute left-0 bottom-0 w-0 h-px bg-[#D16A8A] group-hover:w-full transition-all duration-300 ease-out" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Socials */}
          <div className="md:col-span-3 flex flex-col justify-start">
            <span className="text-[10px] font-mono tracking-[0.2em] text-[#F7F2EC]/40 uppercase mb-4 block">
              Connect
            </span>
            <div className="flex items-center gap-3">
              {FOOTER_SOCIALS.map((social) => (
                <FooterSocialButton key={social.id} social={social} />
              ))}
            </div>
          </div>
        </motion.div>

        {/* --- Gradient Divider Line --- */}
        <div className="relative w-full h-px overflow-hidden my-8">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full bg-gradient-to-r from-transparent via-[#D16A8A]/40 to-transparent origin-center"
          />
        </div>

        {/* --- Bottom Row --- */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-4 text-[11px] font-mono text-[#F7F2EC]/40">
          <div>
            © 2026 Ayesha Tehreem. All Rights Reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Designed & Developed with</span>
            <span className="text-[#F7F2EC]/70">React • Tailwind CSS • Framer Motion</span>
          </div>
        </div>

        {/* --- Signature Statement --- */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="pt-12 pb-4 text-center border-t border-white/[0.03] mt-6"
        >
          <p className="text-xs sm:text-sm font-serif italic text-[#F7F2EC]/50 tracking-wide">
            "Thanks for stopping by. Let's build something meaningful together."
          </p>
        </motion.div>
      </div>
    </footer>
  );
}