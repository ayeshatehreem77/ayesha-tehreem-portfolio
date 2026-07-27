import React from 'react';
import { motion } from 'framer-motion';
import { PROCESS_STEPS } from './processData';
import { ProcessCard } from './ProcessCard';

export default function ProcessSection() {
    return (
        <section className="scroll-mt-24 relative min-h-screen bg-[#0C0C0F] text-[#F7F2EC] py-28 lg:py-40 px-6 lg:px-12 overflow-hidden flex flex-col justify-center">
            {/* Ambient Background Lights */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#A93A5B]/5 rounded-full blur-[180px] pointer-events-none" />

            <div className="max-w-7xl mx-auto w-full relative z-10">
                {/* --- Section Header --- */}
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
                            WORKFLOW
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
                        How I Build Digital Products.
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[#F7F2EC]/70 text-base sm:text-lg leading-relaxed font-light mx-auto max-w-2xl"
                    >
                        Every project follows a structured process—from understanding the problem to delivering a polished, production-ready solution.
                    </motion.p>
                </header>

                {/* --- Process Timeline Layout --- */}
                <div className="relative">
                    {/* Animated Connecting Line (Desktop Horizontal) */}
                    <div className="hidden lg:block absolute top-[28px] left-8 right-8 h-px bg-white/5 z-0">
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="h-full bg-gradient-to-r from-[#A93A5B] via-[#D16A8A] to-[#A93A5B] origin-left"
                        />
                    </div>

                    {/* Animated Connecting Line (Mobile Vertical) */}
                    <div className="block lg:hidden absolute top-8 bottom-8 left-[38px] w-px bg-white/5 z-0">
                        <motion.div
                            initial={{ scaleY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="w-full h-full bg-gradient-to-b from-[#A93A5B] via-[#D16A8A] to-[#A93A5B] origin-top"
                        />
                    </div>

                    {/* 5-Column Desktop Horizontal / 1-Column Mobile Vertical Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-5 relative z-10">
                        {PROCESS_STEPS.map((step, index) => (
                            <ProcessCard
                                key={step.number}
                                step={step}
                                index={index}
                                total={PROCESS_STEPS.length}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}