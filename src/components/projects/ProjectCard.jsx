import React from 'react';
import { motion } from 'framer-motion';

// External SVG Icons
const ExternalLinkIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
    />
  </svg>
);

const GithubIcon = () => (
  <svg
    className="w-4 h-4"
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

const BookOpenIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
    />
  </svg>
);

export function HeroProjectCard({ project, onOpenModal }) {
  // Check if this project is TimeCapsule
  const isTimeCapsule = project.id === 'time-capsule' || project.title?.toLowerCase().includes('Time Capsule');

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="group relative w-full overflow-hidden rounded-3xl bg-[#17171D]/90 border border-white/5 backdrop-blur-md transition-all duration-700 hover:border-[#A93A5B]/40 hover:shadow-[0_20px_50px_rgba(169,58,91,0.15)]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[520px]">
        {/* Left Column: Media Section */}
        <div className="lg:col-span-7 relative min-h-[320px] lg:min-h-full overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center transform transition-transform duration-1000 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#17171D] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-[#17171D]/40 lg:to-[#17171D]" />
          <div className="absolute inset-0 bg-[#0C0C0F]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        </div>

        {/* Right Column: Content Section */}
        <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-between relative z-10">
          <div>
            <div className="flex items-center justify-between gap-4 mb-6">
              <span className="text-[11px] font-mono tracking-[0.2em] text-[#D16A8A] uppercase">
                {project.category}
              </span>
              <span className="text-xs font-mono text-[#F7F2EC]/40 border border-white/10 px-2.5 py-0.5 rounded-full">
                {project.year}
              </span>
            </div>

            <h3 className="text-3xl lg:text-4xl font-serif tracking-tight text-[#F7F2EC] mb-4 group-hover:text-white transition-colors duration-300">
              {project.title}
            </h3>

            <p className="text-[#F7F2EC]/70 text-sm leading-relaxed font-light mb-8">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-10">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-md bg-white/[0.03] border border-white/5 text-[#F7F2EC]/80 font-mono tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-white/5">
            {/* Case Study Button: Sirf TimeCapsule ke liye render hoga */}
            {isTimeCapsule && (
              <button
                onClick={onOpenModal}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.08] hover:bg-white/[0.15] border border-white/10 text-[#F7F2EC] text-xs font-medium tracking-wider transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <BookOpenIcon />
                <span>CASE STUDY</span>
              </button>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#A93A5B] hover:bg-[#D16A8A] text-[#F7F2EC] text-xs font-medium tracking-wider transition-all duration-300 shadow-lg shadow-[#A93A5B]/20 hover:shadow-[#D16A8A]/30 transform hover:-translate-y-0.5"
              >
                <span>LIVE DEMO</span>
                <ExternalLinkIcon />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-[#F7F2EC] text-xs font-medium tracking-wider transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <GithubIcon />
                <span>GITHUB</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function StandardProjectCard({ project, onOpenModal }) {
  // Check if this project is TimeCapsule
  const isTimeCapsule = project.id === 'timecapsule' || project.title?.toLowerCase().includes('timecapsule');

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-[#17171D]/90 border border-white/5 backdrop-blur-md transition-all duration-700 hover:border-[#A93A5B]/40 hover:shadow-[0_20px_50px_rgba(169,58,91,0.15)] h-full"
    >
      <div>
        <div className="relative h-64 overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center transform transition-transform duration-1000 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#17171D] via-transparent to-transparent" />
        </div>

        <div className="p-8">
          <div className="flex items-center justify-between gap-4 mb-4">
            <span className="text-[10px] font-mono tracking-[0.2em] text-[#D16A8A] uppercase">
              {project.category}
            </span>
            <span className="text-xs font-mono text-[#F7F2EC]/40 border border-white/10 px-2.5 py-0.5 rounded-full">
              {project.year}
            </span>
          </div>

          <h3 className="text-2xl font-serif text-[#F7F2EC] mb-3 group-hover:text-white transition-colors duration-300">
            {project.title}
          </h3>

          <p className="text-[#F7F2EC]/70 text-sm leading-relaxed font-light mb-6">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] px-2.5 py-1 rounded bg-white/[0.03] border border-white/5 text-[#F7F2EC]/70 font-mono"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="p-8 pt-0 flex flex-wrap items-center gap-3">
        {/* Case Study Button: Sirf TimeCapsule ke liye render hoga */}
        {isTimeCapsule && (
          <button
            onClick={onOpenModal}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.08] hover:bg-white/[0.15] border border-white/10 text-[#F7F2EC] text-xs font-medium tracking-wider transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <BookOpenIcon />
            <span>CASE STUDY</span>
          </button>
        )}

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#A93A5B] hover:bg-[#D16A8A] text-[#F7F2EC] text-xs font-medium tracking-wider transition-all duration-300 shadow-lg shadow-[#A93A5B]/20 transform hover:-translate-y-0.5"
          >
            <span>LIVE DEMO</span>
            <ExternalLinkIcon />
          </a>
        )}

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-[#F7F2EC] text-xs font-medium tracking-wider transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <GithubIcon />
            <span>GITHUB</span>
          </a>
        )}
      </div>
    </motion.article>
  );
}

export function CurrentlyBuildingCard() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-[#17171D]/40 border border-white/10 backdrop-blur-xl p-8 lg:p-10 transition-all duration-700 hover:border-[#D16A8A]/50 hover:shadow-[0_20px_50px_rgba(209,106,138,0.12)] h-full"
    >
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#A93A5B]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#D16A8A]/20 transition-all duration-700" />

      <div>
        <div className="flex items-center justify-between mb-8">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-[#A93A5B]/10 border border-[#A93A5B]/30 text-[#D16A8A] text-xs font-mono">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D16A8A] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#A93A5B]"></span>
            </span>
            IN DEVELOPMENT
          </div>
          <span className="text-xs font-mono text-[#F7F2EC]/30">ACTIVE</span>
        </div>

        <h3 className="text-2xl font-serif text-[#F7F2EC] mb-4">
          Currently Building
        </h3>

        <p className="text-[#F7F2EC]/70 text-sm leading-relaxed font-light mb-6">
          Always exploring new ideas, learning modern technologies, and building thoughtful digital experiences.
        </p>

        <p className="text-[#F7F2EC]/50 text-xs leading-relaxed font-mono">
          The next project is already in progress.
        </p>
      </div>

      <div className="pt-8 mt-8 border-t border-white/5">
        <div className="flex items-center justify-between text-xs font-mono text-[#F7F2EC]/40 mb-3">
          <span>SYSTEM_INIT</span>
          <span className="text-[#D16A8A]">78%</span>
        </div>
        <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-[#A93A5B] to-[#D16A8A]"
            initial={{ width: '0%' }}
            whileInView={{ width: '78%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeOut', delay: 0.5 }}
          />
        </div>
      </div>
    </motion.article>
  );
}