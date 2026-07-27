import React from 'react';
import { motion } from 'framer-motion';
import { CONTACT_INFO } from './contactData';
import { ContactCard } from './ContactCard';
import { ContactForm } from './ContactForm';

export default function ContactSection() {
  return (
    <section id='contact' className="scroll-mt-24 relative min-h-screen bg-[#0C0C0F] text-[#F7F2EC] py-28 lg:py-40 px-6 lg:px-12 overflow-hidden flex flex-col justify-center">
      {/* Background Grid Texture */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#F7F2EC 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

      {/* Subtle Ambient Glows */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-[#A93A5B]/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-[#D16A8A]/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* --- LEFT SIDE: Call To Action & Info --- */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              {/* Availability Badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#17171D] border border-white/10 mb-8"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] font-mono tracking-wider text-[#F7F2EC]/80 uppercase">
                  Open to Full-Time Opportunities
                </span>
              </motion.div>

              {/* Small Label */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="flex items-center gap-3 mb-4"
              >
                <span className="h-px w-6 bg-[#A93A5B]" />
                <span className="text-xs font-mono tracking-[0.25em] text-[#D16A8A] uppercase">
                  GET IN TOUCH
                </span>
              </motion.div>

              {/* Large Serif Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-[#F7F2EC] mb-6 leading-[1.1]"
              >
                Let's Build Something Great Together.
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="text-[#F7F2EC]/70 text-base sm:text-lg leading-relaxed font-light mb-10 max-w-xl"
              >
                I'm always open to discussing exciting projects, full-time opportunities, internships, or collaborations. If you have an idea you'd like to bring to life, I'd love to hear from you.
              </motion.p>
            </div>

            {/* Contact Info Grid */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
            >
              {CONTACT_INFO.map((info) => (
                <ContactCard key={info.id} info={info} />
              ))}
            </motion.div>

            {/* Resume Download Button */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <a
                href="/assets/resume.pdf"
                download
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-[#17171D] border border-white/10 hover:border-[#D16A8A]/50 text-xs font-mono tracking-widest text-[#F7F2EC] hover:text-white uppercase transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
              >
                <svg className="w-4 h-4 text-[#D16A8A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </a>
            </motion.div>
          </div>

          {/* --- RIGHT SIDE: Contact Form --- */}
          <div className="lg:col-span-6">
            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  );
}