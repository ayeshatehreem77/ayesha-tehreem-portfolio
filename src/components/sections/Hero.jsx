import { FaGithub, FaLinkedin, FaEnvelope, FaXTwitter, FaArrowUpRightFromSquare } from "react-icons/fa6";
import { HiSparkles } from "react-icons/hi2";

export default function Hero() {
  return (
    <section id="home" className="scroll-mt-24 relative min-h-screen bg-[#0C0C0F] overflow-hidden flex items-center">

      {/* --- BACKGROUND ANIMATIONS & GLOWS --- */}

      {/* Top Left Warm Gold Glow */}
      <div className="absolute -top-10 -left-10 h-[400px] w-[400px] rounded-full bg-[#E2B979]/10 blur-[150px] pointer-events-none" />

      {/* Top Right Main Ambient Rose Gold Glow */}
      <div className="absolute top-1/4 right-10 h-[500px] w-[500px] rounded-full bg-[#A93A5B]/20 blur-[160px] animate-pulse pointer-events-none" />

      {/* Background Animated Floating Gold Stars */}
      <div className="absolute top-35 left-12 text-[#E2B979]/60 animate-pulse text-xl pointer-events-none">✦</div>
      <div className="absolute top-1/3 left-[48%] text-[#F4E3C3]/40 animate-ping text-sm pointer-events-none" />
      <div className="absolute bottom-24 left-1/3 text-[#E2B979]/30 animate-bounce text-xs pointer-events-none">✦</div>

      <div className="max-w-[1500px] w-full mx-auto px-6 sm:px-10 xl:px-16 py-12 z-10">

        <div className="grid lg:grid-cols-[55%_45%] items-center gap-8">

          {/* LEFT CONTENT */}

          <div className="w-full min-w-0">

            <p className="uppercase mt-9 tracking-[8px] text-[#E2B979]/80 text-xs sm:text-sm mb-6 flex items-center gap-2 font-light">
              HELLO, I'M
            </p>

            {/* Main Title with Floating Gold Sparkles */}
            <div className="relative inline-block">
              <HiSparkles className="absolute  -top-6 -left-8 text-[#E2B979] text-2xl animate-spin-slow" />

              <h1 className="font-serif leading-[0.92] tracking-tight">
                <span className="block text-7xl sm:text-8xl lg:text-[110px] xl:text-[125px] font-light bg-gradient-to-r from-[#F4E3C3] via-[#E2B979] to-[#C1934D] bg-clip-text text-transparent">
                  AYESHA
                </span>

                <span className="block text-7xl sm:text-8xl lg:text-[110px] xl:text-[125px] font-light bg-gradient-to-r from-[#B14668] via-[#D46A8C] to-[#E79DB5] bg-clip-text text-transparent">
                  TEHREEM
                </span>
              </h1>

              <HiSparkles className="absolute top-1/2 -right-6 text-[#F4E3C3] text-lg animate-pulse" />
            </div>

            <h2 className="mt-8 uppercase tracking-[6px] sm:tracking-[8px] text-[#D8C7B5] text-sm sm:text-base font-medium">
              Full Stack <span className="text-[#E2B979]">MERN</span> Developer
            </h2>

            <p className="mt-6 max-w-lg text-[#A5A3AA] leading-relaxed text-base sm:text-lg">
              I build scalable, modern and AI-powered web applications with clean architecture, intuitive UI, and robust backend systems.
            </p>

            {/* ADVANCED BUTTONS */}

            <div className="flex flex-wrap items-center gap-5 mt-10">

              <button onClick={() => {
                document.getElementById("projects")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }} className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#A93A5B] via-[#C45173] to-[#E2B979] text-white font-medium overflow-hidden shadow-[0_0_25px_rgba(169,58,91,0.4)] transition-all duration-300 hover:shadow-[0_0_35px_rgba(226,185,121,0.5)] hover:scale-[1.02] active:scale-[0.98]">
                <span className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/25 to-transparent group-hover:left-full transition-all duration-700 ease-in-out" />
                <span>View Projects</span>
                <FaArrowUpRightFromSquare className="text-sm transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <button onClick={() => {
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }} className="relative inline-flex items-center justify-center px-8 py-4 rounded-xl border border-[#E2B979]/30 bg-[#141217]/60 backdrop-blur-md text-[#F4F4F5] font-medium transition-all duration-300 hover:border-[#E2B979] hover:bg-[#1C1A20] hover:shadow-[0_0_20px_rgba(226,185,121,0.2)] active:scale-[0.98]">
                Let's Connect
              </button>

            </div>

            {/* SOCIAL LINKS */}

            <div className="flex items-center gap-6 mt-14 pt-2 border-t border-white/5 max-w-md">
              <span className="uppercase tracking-[3px] text-xs text-[#7A7880]">Find me on</span>

              <div className="flex gap-3">
                {[
                  { icon: <FaGithub />, link: "https://github.com/ayeshatehreem77" },
                  { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/ayesha-tehreem-289346321/" },
                  { icon: <FaEnvelope />, link: "mailto:ayehatehreem556@gmail.com" },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-[#2D2A33] bg-[#121115] flex items-center justify-center text-[#B0B0B0] hover:border-[#E2B979] hover:text-[#E2B979] hover:bg-[#E2B979]/10 hover:shadow-[0_0_15px_rgba(226,185,121,0.3)] transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT HERO IMAGE & SPARKLE ORBIT ANIMATION */}

          <div className="relative flex justify-center items-end min-h-[550px] lg:min-h-[650px] mt-12 lg:mt-0">

            {/* Glowing Backdrop Circle */}
            <div className="absolute bottom-10 w-[380px] h-[380px] sm:w-[480px] sm:h-[480px] rounded-full bg-gradient-to-br from-[#E2B979]/20 via-[#8E3557]/20 to-transparent blur-2xl pointer-events-none" />

            {/* INNER SPARKLE RING (Pulsing Glow) */}
            <div className="absolute bottom-10 w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] rounded-full border border-dashed border-[#E2B979]/40 animate-pulse pointer-events-none" />

            {/* ROTATING SPARKLE ORBIT (Main Animation) */}
            <div className="absolute bottom-10 w-[360px] h-[360px] sm:w-[480px] sm:h-[480px] rounded-full border border-[#E2B979]/20 animate-[spin_30s_linear_infinite] pointer-events-none">

              {/* Sparkle Icon 1 (Gold) */}
              <HiSparkles className="absolute -top-3 left-1/2 -translate-x-1/2 text-[#E2B979] text-2xl filter drop-shadow-[0_0_8px_#E2B979]" />

              {/* Sparkle Icon 2 (Rose) */}
              <HiSparkles className="absolute top-1/2 -right-3 -translate-y-1/2 text-[#D46A8C] text-xl filter drop-shadow-[0_0_8px_#D46A8C]" />

              {/* Sparkle Star 3 */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-[#F4E3C3] text-lg font-bold">✦</div>

              {/* Sparkle Star 4 */}
              <div className="absolute top-1/2 -left-2 -translate-y-1/2 text-[#E2B979] text-base">✦</div>

            </div>

            {/* Image */}
            <img
              src="/images/Ayesha.png"
              alt="Ayesha Tehreem"
              className="relative z-10 h-[480px] sm:h-[580px] w-auto object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
            />

            {/* FLOATING BADGE WITH LIVE INDICATOR */}

            <div className="absolute left-2 sm:left-6 bottom-10 z-20 bg-[#131217]/80 backdrop-blur-md border border-[#E2B979]/30 rounded-2xl p-4 sm:px-6 sm:py-4 shadow-2xl hover:border-[#E2B979]/60 transition-colors duration-300">
              <p className="uppercase tracking-[3px] text-[10px] sm:text-xs text-[#E2B979] font-medium mb-1">
                AVAILABLE FOR
              </p>

              <div className="flex items-center gap-2">
                <h3 className="text-white text-base sm:text-lg font-semibold tracking-wide">
                  FULL-TIME OPPORTUNITIES
                </h3>
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D16A8A] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#A93A5B]"></span>
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}