import { useState, useEffect } from "react";
import { HiArrowDownTray, HiBars3, HiXMark } from "react-icons/hi2";

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Tech", href: "#tech" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
        ? "bg-[#0C0C0F]/85 backdrop-blur-xl border-b border-white/5 py-4"
        : "bg-transparent py-6"
        }`}
    >
      <div className="max-w-[1500px] mx-auto px-6 sm:px-10 xl:px-16 flex items-center justify-between">

        {/* --- PERFECT MATCH LOGO --- */}
        <a href="#home" className="relative group flex items-center py-1">
          <img src="/images/logo.png" alt="Ayesha Tehreem Logo" className="h-10 w-auto" />
        </a>

        {/* --- CENTER: DESKTOP NAV LINKS --- */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => {
            const isActive = activeTab === link.name;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveTab(link.name)}
                className={`relative text-sm tracking-wide font-medium transition-colors duration-300 py-1 ${isActive
                  ? "text-white"
                  : "text-[#A5A3AA] hover:text-[#F4F4F5]"
                  }`}
              >
                {link.name}

                {/* Active Indicator Line */}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-[2.5px] bg-gradient-to-r from-[#D46A8C] to-[#E2B979] rounded-full shadow-[0_0_8px_#D46A8C]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* --- RIGHT: BUTTON --- */}
        <div className="hidden sm:flex items-center">
          <a
            href="/assets/resume.pdf"
            download
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[#E2B979]/30 bg-[#141217]/60 backdrop-blur-md text-xs sm:text-sm font-medium text-[#F4F4F5] transition-all duration-300 hover:border-[#E2B979] hover:bg-[#1C1A20] hover:shadow-[0_0_20px_rgba(226,185,121,0.25)] active:scale-[0.97]"
          >
            <HiArrowDownTray className="text-base text-[#E2B979] transition-transform duration-300 group-hover:-translate-y-0.5" />
            <span>Download Resume</span>
          </a>
        </div>

        {/* --- MOBILE HAMBURGER BUTTON --- */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-2xl text-[#E8E8E8] hover:text-[#E2B979] focus:outline-none"
        >
          {mobileMenuOpen ? <HiXMark /> : <HiBars3 />}
        </button>

      </div>

      {/* MOBILE DRAWER */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#121116]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 transition-all">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveTab(link.name);
                  setMobileMenuOpen(false);
                }}
                className={`text-base font-medium transition-colors ${activeTab === link.name
                  ? "text-[#E2B979] font-semibold"
                  : "text-[#A5A3AA]"
                  }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}