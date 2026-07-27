import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Sample Project Data Structure ---
const DEFAULT_PROJECT = {
    id: 'future-capsule',
    title: 'TimeCapsule - Digital Memory Locker',
    badge: 'Featured Project',
    summary:
        'A full-stack MERN application allowing users to preserve digital memories, encrypted messages, and media in time-locked capsules that automatically unlock on specified future dates.',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    media: {
        desktop: [
            {
                url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200',
                caption: 'Dashboard view displaying active and locked time capsules.',
            },
            {
                url: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200',
                caption: 'Interactive creation wizard with end-to-end encryption setup.',
            },
        ],
        mobile: [
            {
                url: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=600',
                caption: 'Responsive mobile memory timeline feed.',
            },
        ],
    },
    overview:
        'TimeCapsule was engineered to offer a seamless and secure digital archive experience. Designed for individuals and teams, it bridges personal nostalgia with modern cryptographic security.',
    problem:
        'Traditional cloud storage lacks automated time-based release mechanisms and granular encryption for future-dated access, leaving scheduled digital handovers unreliable.',
    solution:
        'Built a event-driven MERN backend paired with cryptographic hashing and server-side background schedulers that securely hold and auto-release assets only when unlock conditions are met.',
    features: [
        { title: 'Secure Encrypted Auth', desc: 'JWT & OAuth2 authentication with refresh tokens.', icon: 'shield' },
        { title: 'Time-Locked Engine', desc: 'Background jobs that continuously validate unlock timestamps.', icon: 'clock' },
        { title: 'Automated Mailers', desc: 'Instant email notifications sent upon memory unlocks.', icon: 'mail' },
        { title: 'Cloud Media Storage', desc: 'Optimized media delivery via Cloudinary CDN.', icon: 'cloud' },
        { title: 'Admin Analytics', desc: 'Comprehensive telemetry on active capsules and traffic.', icon: 'chart' },
        { title: 'Responsive Design', desc: 'Tailored pixel-perfect UI across all viewports.', icon: 'layout' },
    ],
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'TypeScript', 'Tailwind CSS', 'JWT', 'Cloudinary'],
    architecture: [
        { title: 'Frontend', desc: 'React with Framer Motion and Tailwind CSS for ultra-smooth dynamic state rendering.', icon: 'code' },
        { title: 'Backend', desc: 'Node.js & Express API using modular controllers and middleware pipeline.', icon: 'server' },
        { title: 'Database', desc: 'MongoDB Atlas with optimized indexing for rapid query evaluation on unlock times.', icon: 'database' },
        { title: 'Authentication', desc: 'Stateless JWT with HTTP-only cookies and bcrypt password hashing.', icon: 'lock' },
        { title: 'Cloud Storage', desc: 'Direct stream uploads to Cloudinary with secure signature validation.', icon: 'cloud' },
        { title: 'Email Service', desc: 'Nodemailer with custom HTML templates triggered on scheduled jobs.', icon: 'mail' },
    ],
    challenges: [
        {
            challenge: 'Scheduling future unlocks securely without relying on continuous client polling.',
            solution: 'Implemented backend validation paired with background cron scheduler tasks to verify release dates independently of client requests.',
        },
        {
            challenge: 'Handling large media uploads seamlessly on serverless/limited memory environments.',
            solution: 'Configured direct client-to-cloud signed upload streams, bypassing backend bandwidth bottlenecks.',
        },
    ],
    results: [
        'Production-ready scalable architecture',
        'Sub-200ms API response latency',
        '100% automated secure unlock verification',
        'Pixel-perfect responsive UX across devices',
    ],
    nextProject: { title: 'Aether - Design System', id: 'aether' },
    prevProject: { title: 'SaaS Metrics Dashboard', id: 'saas-dashboard' },
};

// --- Helper Inline Icons ---
const RenderIcon = ({ name, className = 'w-5 h-5' }) => {
    const props = { className, fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', strokeWidth: '1.75' };
    switch (name) {
        case 'shield': return <svg {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>;
        case 'clock': return <svg {...props}><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>;
        case 'mail': return <svg {...props}><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>;
        case 'cloud': return <svg {...props}><path d="M175 19a6 6 0 0 0-12 0c-1.7 0-3 1.3-3 3a3 3 0 0 0 6 0" /><path d="M18 10h-1.26A8 8 0 1 0 3 16.3h15a5 5 0 0 0 0-10z" /></svg>;
        case 'chart': return <svg {...props}><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>;
        case 'layout': return <svg {...props}><rect x="3" y="3" width="18" height="18" rx="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>;
        case 'code': return <svg {...props}><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>;
        case 'server': return <svg {...props}><rect x="2" y="2" width="20" height="8" rx="2" /><rect x="2" y="14" width="20" height="8" rx="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" /></svg>;
        case 'database': return <svg {...props}><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></svg>;
        case 'lock': return <svg {...props}><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>;
        case 'close': return <svg {...props}><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>;
        case 'external': return <svg {...props}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>;
        default: return <svg {...props}><circle cx="12" cy="12" r="10" /></svg>;
    }
};

export default function ProjectModal({ isOpen = true, onClose, project = DEFAULT_PROJECT }) {
    const [deviceTab, setDeviceTab] = useState('desktop');
    const [activeMediaIndex, setActiveMediaIndex] = useState(0);
    const [lightboxImg, setLightboxImg] = useState(null);
    const [openChallenge, setOpenChallenge] = useState(0);

    // Lock Body Scroll on Mount & Handle ESC key
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            const handleKeyDown = (e) => {
                if (e.key === 'Escape') onClose && onClose();
            };
            window.addEventListener('keydown', handleKeyDown);
            return () => {
                document.body.style.overflow = 'unset';
                window.removeEventListener('keydown', handleKeyDown);
            };
        }
    }, [isOpen, onClose]);

    // Guard clause if modal is not open or project is null/undefined
    if (!isOpen || !project) return null;

    // Safe navigation for media array
    const currentMediaList = project?.media?.[deviceTab] || [];
    const activeMedia = currentMediaList[activeMediaIndex] || currentMediaList[0];

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden">
                {/* Blurred Glass Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="fixed inset-0 bg-[#0C0C0F]/80 backdrop-blur-xl z-0"
                />

                {/* Modal Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 30 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 220 }}
                    className="relative z-10 w-full h-full max-w-6xl max-h-[92vh] my-auto mx-4 sm:mx-6 bg-[#0C0C0F] border border-white/10 rounded-3xl overflow-y-auto custom-scrollbar text-[#F7F2EC] shadow-[0_25px_60px_rgba(0,0,0,0.8)] flex flex-col"
                >
                    {/* Ambient Background Lighting */}
                    <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-[#A93A5B]/10 rounded-full blur-[160px] pointer-events-none" />
                    <div className="absolute bottom-1/3 left-10 w-[400px] h-[400px] bg-[#D16A8A]/5 rounded-full blur-[180px] pointer-events-none" />

                    {/* Sticky Header */}
                    <div className="sticky top-0 z-30 flex items-center justify-between px-6 py-4 bg-[#0C0C0F]/80 backdrop-blur-md border-b border-white/5">
                        <div className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-[#D16A8A]" />
                            <span className="text-xs font-mono tracking-widest text-[#F7F2EC]/60 uppercase">
                                Case Study
                            </span>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 rounded-full bg-[#17171D] border border-white/10 text-[#F7F2EC]/70 hover:text-white hover:border-[#D16A8A]/50 transition-all focus:outline-none"
                            aria-label="Close modal"
                        >
                            <RenderIcon name="close" className="w-4 h-4" />
                        </button>
                    </div>

                    <div className="p-6 sm:p-12 lg:p-16 space-y-20 max-w-5xl mx-auto w-full">

                        {/* --- HERO SECTION --- */}
                        <header className="text-center max-w-3xl mx-auto">
                            {project?.badge && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#17171D] border border-white/10 mb-6"
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#D16A8A]" />
                                    <span className="text-[10px] font-mono tracking-widest text-[#D16A8A] uppercase">
                                        {project.badge}
                                    </span>
                                </motion.div>
                            )}

                            <h1 className="text-3xl sm:text-5xl font-serif text-[#F7F2EC] tracking-tight mb-6 leading-[1.15]">
                                {project?.title}
                            </h1>

                            <p className="text-sm sm:text-base text-[#F7F2EC]/70 leading-relaxed font-light mb-8">
                                {project?.summary}
                            </p>

                            <div className="flex items-center justify-center gap-4">
                                {project?.liveUrl && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#A93A5B] to-[#D16A8A] text-xs font-mono tracking-widest uppercase text-white font-medium hover:opacity-90 transition-opacity flex items-center gap-2 shadow-lg shadow-[#A93A5B]/20"
                                    >
                                        Live Demo <RenderIcon name="external" className="w-3.5 h-3.5" />
                                    </a>
                                )}
                                {project?.githubUrl && (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-6 py-3 rounded-xl bg-[#17171D] border border-white/10 text-xs font-mono tracking-widest uppercase text-[#F7F2EC] hover:border-[#D16A8A]/50 transition-colors flex items-center gap-2"
                                    >
                                        GitHub Repo
                                    </a>
                                )}
                            </div>
                        </header>

                        {/* --- INTERACTIVE SHOWCASE --- */}
                        <section className="space-y-6">
                            <div className="flex items-center justify-center gap-2">
                                <button
                                    onClick={() => { setDeviceTab('desktop'); setActiveMediaIndex(0); }}
                                    className={`px-5 py-2 rounded-full text-xs font-mono tracking-wider transition-all ${deviceTab === 'desktop'
                                            ? 'bg-[#17171D] text-[#D16A8A] border border-[#D16A8A]/40 shadow-sm'
                                            : 'text-[#F7F2EC]/50 hover:text-[#F7F2EC]'
                                        }`}
                                >
                                    Desktop Preview
                                </button>
                                <button
                                    onClick={() => { setDeviceTab('mobile'); setActiveMediaIndex(0); }}
                                    className={`px-5 py-2 rounded-full text-xs font-mono tracking-wider transition-all ${deviceTab === 'mobile'
                                            ? 'bg-[#17171D] text-[#D16A8A] border border-[#D16A8A]/40 shadow-sm'
                                            : 'text-[#F7F2EC]/50 hover:text-[#F7F2EC]'
                                        }`}
                                >
                                    Mobile View
                                </button>
                            </div>

                            <div className="relative mx-auto max-w-4xl">
                                <div
                                    onClick={() => activeMedia?.url && setLightboxImg(activeMedia.url)}
                                    className={`relative cursor-pointer overflow-hidden rounded-2xl bg-[#17171D] border border-white/10 group shadow-2xl transition-all duration-500 ${deviceTab === 'mobile' ? 'max-w-xs mx-auto aspect-[9/16]' : 'aspect-[16/10]'
                                        }`}
                                >
                                    {deviceTab === 'desktop' && (
                                        <div className="h-7 bg-[#0C0C0F] border-b border-white/5 flex items-center px-4 gap-1.5">
                                            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                                            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                                            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                                        </div>
                                    )}

                                    {activeMedia?.url ? (
                                        <img
                                            src={activeMedia.url}
                                            alt="Project Screenshot"
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-xs font-mono text-[#F7F2EC]/40">
                                            No media available
                                        </div>
                                    )}

                                    {activeMedia?.url && (
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                            <span className="px-4 py-2 rounded-full bg-[#0C0C0F]/90 text-xs font-mono text-[#F7F2EC] border border-white/20">
                                                Click to Enlarge
                                            </span>
                                        </div>
                                    )}
                                </div>

                                {activeMedia?.caption && (
                                    <p className="text-center text-xs font-mono text-[#F7F2EC]/50 mt-4">
                                        {activeMedia.caption}
                                    </p>
                                )}

                                {currentMediaList.length > 1 && (
                                    <div className="flex justify-center gap-3 mt-4">
                                        {currentMediaList.map((item, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => setActiveMediaIndex(idx)}
                                                className={`w-16 h-10 rounded-lg overflow-hidden border transition-all ${activeMediaIndex === idx ? 'border-[#D16A8A] opacity-100 scale-105' : 'border-white/10 opacity-40 hover:opacity-80'
                                                    }`}
                                            >
                                                <img src={item.url} alt="" className="w-full h-full object-cover" />
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </section>

                        {/* --- STORY SECTIONS --- */}
                        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="p-6 rounded-2xl bg-[#17171D]/60 border border-white/5 backdrop-blur-md">
                                <span className="text-[10px] font-mono tracking-widest text-[#D16A8A] uppercase block mb-2">01 · Overview</span>
                                <h3 className="text-lg font-serif mb-2">Project Vision</h3>
                                <p className="text-xs text-[#F7F2EC]/70 leading-relaxed font-light">{project?.overview}</p>
                            </div>

                            <div className="p-6 rounded-2xl bg-[#17171D]/60 border border-white/5 backdrop-blur-md">
                                <span className="text-[10px] font-mono tracking-widest text-[#A93A5B] uppercase block mb-2">02 · The Challenge</span>
                                <h3 className="text-lg font-serif mb-2">The Problem</h3>
                                <p className="text-xs text-[#F7F2EC]/70 leading-relaxed font-light">{project?.problem}</p>
                            </div>

                            <div className="p-6 rounded-2xl bg-[#17171D]/60 border border-white/5 backdrop-blur-md">
                                <span className="text-[10px] font-mono tracking-widest text-[#D16A8A] uppercase block mb-2">03 · Architectural Design</span>
                                <h3 className="text-lg font-serif mb-2">The Solution</h3>
                                <p className="text-xs text-[#F7F2EC]/70 leading-relaxed font-light">{project?.solution}</p>
                            </div>
                        </section>

                        {/* --- KEY FEATURES --- */}
                        {project?.features?.length > 0 && (
                            <section className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <span className="h-px w-6 bg-[#A93A5B]" />
                                    <h2 className="text-xs font-mono tracking-[0.25em] text-[#D16A8A] uppercase">KEY CAPABILITIES</h2>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {project.features.map((feat, idx) => (
                                        <div key={idx} className="p-5 rounded-2xl bg-[#17171D]/80 border border-white/5 hover:border-[#D16A8A]/30 transition-colors">
                                            <div className="w-9 h-9 rounded-xl bg-[#0C0C0F] border border-white/10 flex items-center justify-center text-[#D16A8A] mb-4">
                                                <RenderIcon name={feat.icon} />
                                            </div>
                                            <h3 className="text-sm font-medium mb-1">{feat.title}</h3>
                                            <p className="text-xs text-[#F7F2EC]/60 font-light leading-relaxed">{feat.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* --- TECH STACK CHIPS --- */}
                        {project?.techStack?.length > 0 && (
                            <section className="space-y-4">
                                <h2 className="text-xs font-mono tracking-[0.25em] text-[#D16A8A] uppercase">TECHNOLOGY STACK</h2>
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-4 py-2 rounded-xl bg-[#17171D] border border-white/10 text-xs font-mono text-[#F7F2EC]/80 hover:border-[#D16A8A]/50 transition-colors"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* --- ARCHITECTURE HIGHLIGHTS --- */}
                        {project?.architecture?.length > 0 && (
                            <section className="space-y-6">
                                <h2 className="text-xs font-mono tracking-[0.25em] text-[#D16A8A] uppercase">ARCHITECTURE HIGHLIGHTS</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {project.architecture.map((arch, idx) => (
                                        <div key={idx} className="p-5 rounded-2xl bg-[#17171D]/40 border border-white/5">
                                            <div className="flex items-center gap-3 mb-3">
                                                <div className="text-[#D16A8A]">
                                                    <RenderIcon name={arch.icon} />
                                                </div>
                                                <h3 className="text-sm font-medium">{arch.title}</h3>
                                            </div>
                                            <p className="text-xs text-[#F7F2EC]/60 font-light leading-relaxed">{arch.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* --- CHALLENGES & SOLUTIONS ACCORDION --- */}
                        {project?.challenges?.length > 0 && (
                            <section className="space-y-6">
                                <h2 className="text-xs font-mono tracking-[0.25em] text-[#D16A8A] uppercase">ENGINEERING CHALLENGES</h2>
                                <div className="space-y-3">
                                    {project.challenges.map((item, idx) => (
                                        <div
                                            key={idx}
                                            className="rounded-2xl bg-[#17171D]/80 border border-white/5 overflow-hidden transition-all"
                                        >
                                            <button
                                                onClick={() => setOpenChallenge(openChallenge === idx ? null : idx)}
                                                className="w-full p-5 text-left flex items-center justify-between focus:outline-none"
                                            >
                                                <span className="text-xs sm:text-sm font-medium pr-4">{item.challenge}</span>
                                                <span className="text-xs font-mono text-[#D16A8A]">
                                                    {openChallenge === idx ? '−' : '+'}
                                                </span>
                                            </button>
                                            {openChallenge === idx && (
                                                <div className="px-5 pb-5 text-xs text-[#F7F2EC]/70 leading-relaxed font-light border-t border-white/5 mt-2 pt-4">
                                                    <span className="text-[10px] font-mono text-[#D16A8A] uppercase block mb-1">Solution Applied:</span>
                                                    {item.solution}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* --- RESULTS / ACHIEVEMENTS --- */}
                        {project?.results?.length > 0 && (
                            <section className="p-8 rounded-3xl bg-gradient-to-br from-[#17171D] to-[#0C0C0F] border border-white/10 space-y-4">
                                <h2 className="text-xs font-mono tracking-[0.25em] text-[#D16A8A] uppercase">MEASURABLE RESULTS</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {project.results.map((res, idx) => (
                                        <div key={idx} className="flex items-center gap-3">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#D16A8A]" />
                                            <span className="text-xs text-[#F7F2EC]/80 font-light">{res}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* --- CLOSING CTA --- */}
                        <section className="text-center pt-8 border-t border-white/5 space-y-4">
                            <p className="text-xs sm:text-sm text-[#F7F2EC]/70 font-light">
                                Interested in how this project was built or have a similar idea in mind? Let's connect.
                            </p>
                            <button
                                onClick={() => {
                                    onClose();

                                    setTimeout(() => {
                                        document.getElementById("contact")?.scrollIntoView({
                                            behavior: "smooth",
                                        });
                                    }, 300);
                                }}
                                className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#A93A5B] to-[#D16A8A] text-xs font-mono tracking-widest uppercase text-white font-medium hover:opacity-90 transition-opacity"
                            >
                                Get in Touch
                            </button>
                        </section>

                    </div>
                </motion.div>

                {/* --- LIGHTBOX MODAL --- */}
                <AnimatePresence>
                    {lightboxImg && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setLightboxImg(null)}
                            className="fixed inset-0 z-60 bg-black/90 backdrop-blur-2xl flex items-center justify-center p-4 cursor-zoom-out"
                        >
                            <img src={lightboxImg} alt="Enlarged preview" className="max-w-full max-h-[90vh] rounded-xl object-contain" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </AnimatePresence>
    );
}