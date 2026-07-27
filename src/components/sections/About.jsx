import React from 'react';

export default function About() {
    const stats = [
        {
            number: "3+",
            label: "Projects",
            subtitle: "Completed",
        },
        {
            number: "6+",
            label: "Technologies",
            subtitle: "Production Stack",
        },
        {
            number: "AI",
            label: "Development",
            subtitle: "Modern Workflow",
        },
        {
            number: "Open",
            label: "Availability",
            subtitle: "Full-Time Roles",
        },
    ];

    return (
        <section id="about" className="scroll-mt-24 relative w-full min-h-screen bg-[#0C0C0F] text-[#F7F2EC] py-28 px-6 md:px-16 lg:px-24 flex items-center justify-center overflow-hidden font-sans">

            {/* Subtle Ambient Radial Glow (5-8% Opacity) */}
            <div className="absolute top-1/3 left-[-5%] w-[500px] h-[500px] bg-[#A93A5B]/[0.07] rounded-full blur-[160px] pointer-events-none" />
            <div className="absolute bottom-10 right-[-5%] w-[450px] h-[450px] bg-[#D16A8A]/[0.05] rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start relative z-10">

                {/* LEFT COLUMN: Editorial Typography */}
                <div className="lg:col-span-5 lg:sticky lg:top-32 self-start flex flex-col justify-start lg:pt-2">
                    {/* Subtle Decorative Accent */}
                    <div className="flex items-center gap-3 mb-8">
                        <span className="h-[1px] w-10 bg-gradient-to-r from-[#A93A5B] to-transparent"></span>
                        <span className="text-xs uppercase tracking-[0.35em] text-[#D16A8A] font-semibold">
                            Who I am
                        </span>
                    </div>

                    {/* Large Editorial Serif Title */}
                    <h2 className="font-serif text-6xl sm:text-7xl lg:text-[5.5rem] tracking-tight leading-[0.88] text-[#F7F2EC] mb-8">
                        ABOUT <br />
                        <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#F7F2EC] via-[#D16A8A] to-[#A93A5B]">
                            ME.
                        </span>
                    </h2>

                    {/* Enhanced Readability Subtext */}
                    <p className="text-[#F7F2EC]/70 text-base sm:text-lg font-light leading-relaxed tracking-wide max-w-md">
                        Transforming ideas into elegant digital products through clean code, thoughtful design, and scalable architecture.
                    </p>
                </div>

                {/* RIGHT COLUMN: Premium Glassmorphism Card + Stats */}
                <div className="lg:col-span-7 flex flex-col gap-10">

                    {/* Main Content Glass Card (48px+ Padding & Subtle Hairline Border) */}
                    <div className="bg-[#17171D]/50 backdrop-blur-2xl border border-white/[0.08] rounded-[32px] p-10 sm:p-14 shadow-[0_30px_100px_rgba(0,0,0,0.6)] relative overflow-hidden transition-all duration-500 hover:border-[#D16A8A]/30 group">

                        {/* Top Border Highlight Glow */}
                        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D16A8A]/30 to-transparent opacity-80" />

                        {/* Concise Bio Content (~90 Words) */}
                        <p className="text-[#F7F2EC]/90 text-base sm:text-lg leading-relaxed font-light tracking-wide">
                            I'm a <span className="text-[#F7F2EC] font-medium">Full-Stack MERN Developer</span> passionate about building scalable, modern, and user-focused web applications. I enjoy transforming ideas into intuitive digital experiences by combining clean frontend design with robust backend architecture. With experience in <span className="text-[#F7F2EC] font-medium">React, Node.js, NestJS, MongoDB, TypeScript</span>, and modern AI-assisted workflows, I'm constantly learning, improving, and creating solutions that are both practical and impactful.
                        </p>

                        {/* Editorial Quote Section */}
                        <div className="mt-10 pt-8 border-t border-white/[0.08] flex items-start gap-4">
                            <span className="text-5xl font-serif text-[#A93A5B] leading-none -mt-1">
                                “
                            </span>

                            <p className="font-serif italic text-lg text-[#F7F2EC]/75 leading-relaxed">
                                Building software that is elegant, scalable, and meaningful—one project at a time.
                            </p>
                        </div>
                    </div>

                    {/* REDESIGNED STATISTICS CARDS */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="bg-[#17171D]/40 backdrop-blur-lg border border-white/[0.06] rounded-[24px] p-6 min-h-[145px] flex flex-col justify-between transition-all duration-300 hover:bg-[#17171D]/80 hover:border-[#A93A5B]/40 hover:-translate-y-1 shadow-lg group"
                            >
                                {/* Large Stat Number */}
                                <span className="text-3xl sm:text-4xl font-bold font-serif tracking-tight text-[#F7F2EC] group-hover:text-[#D16A8A] transition-colors duration-300">
                                    {stat.number}
                                </span>

                                {/* Labels & Subtitle Below */}
                                <div>
                                    <h4 className="text-sm font-medium text-[#F7F2EC] tracking-wide">
                                        {stat.label}
                                    </h4>
                                    <p className="text-[11px] text-[#F7F2EC]/40 font-light mt-0.5 tracking-wider uppercase">
                                        {stat.subtitle}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
}