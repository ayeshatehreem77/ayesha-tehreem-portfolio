import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion, useMotionValue, useAnimationFrame } from 'framer-motion';
import { TECH_CATEGORIES, TECH_NODES } from './techData.jsx';
import OrbitNode from './OrbitNode.jsx';

const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredNodeId, setHoveredNodeId] = useState(null);
  const [viewportWidth, setViewportWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );

  // Dynamic Responsive Resize Handler
  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Compute adaptive orbit radii based on viewport width
  const orbitRadii = useMemo(() => {
    if (viewportWidth < 480) {
      return { inner: 70, middle: 115, outer: 155 };
    } else if (viewportWidth < 768) {
      return { inner: 90, middle: 145, outer: 200 };
    } else if (viewportWidth < 1024) {
      return { inner: 115, middle: 185, outer: 255 };
    } else {
      return { inner: 135, middle: 215, outer: 295 };
    }
  }, [viewportWidth]);

  // Dynamic Center Card Dimensions
  const centerSizeClass = useMemo(() => {
    if (viewportWidth < 480) return "w-28 h-28 p-2";
    if (viewportWidth < 768) return "w-36 h-36 p-3";
    if (viewportWidth < 1024) return "w-40 h-40 p-3";
    return "w-44 h-44 p-4";
  }, [viewportWidth]);

  // Framer Motion Rotation Controls
  const innerRotation = useMotionValue(0);
  const middleRotation = useMotionValue(0);
  const outerRotation = useMotionValue(0);

  // Smooth Rotation Loop (Pauses on hover)
  useAnimationFrame((time, delta) => {
    if (hoveredNodeId !== null) return;
    
    const deltaSeconds = delta / 1000;
    innerRotation.set(innerRotation.get() - deltaSeconds * 12);
    middleRotation.set(middleRotation.get() + deltaSeconds * 8);
    outerRotation.set(outerRotation.get() - deltaSeconds * 5);
  });

  // Group Nodes by Orbit
  const innerNodes = useMemo(() => TECH_NODES.filter(n => n.orbit === 'inner'), []);
  const middleNodes = useMemo(() => TECH_NODES.filter(n => n.orbit === 'middle'), []);
  const outerNodes = useMemo(() => TECH_NODES.filter(n => n.orbit === 'outer'), []);

  return (
    <section id="tech" className="scroll-mt-24 relative w-full min-h-screen bg-[#0C0C0F] text-[#F7F2EC] py-16 md:py-24 px-4 overflow-hidden flex flex-col items-center justify-center selection:bg-[#A93A5B] selection:text-[#F7F2EC]">
      
      {/* BACKGROUND AMBIENCE */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] md:w-[700px] md:h-[700px] rounded-full opacity-20 blur-[120px]"
          style={{ background: "radial-gradient(circle, #A93A5B 0%, #D16A8A 35%, transparent 70%)" }}
        />
        <div className="absolute inset-0 opacity-[0.12] bg-[radial-gradient(#F7F2EC_1px,transparent_1px)] [background-size:28px_28px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-[#F7F2EC]/15 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-xl mx-auto mb-8 md:mb-10"
        >
          <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] font-mono font-medium text-[#D16A8A] mb-2 block">
            ENGINEERING ECOSYSTEM
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-normal tracking-tight text-[#F7F2EC] mb-3">
            Technology Universe<span className="text-[#A93A5B]">.</span>
          </h2>
          <p className="text-xs md:text-sm font-sans font-light text-[#F7F2EC]/60 leading-relaxed">
            I build scalable, maintainable and high-performance applications using carefully selected modern technologies.
          </p>
        </motion.div>

        {/* CATEGORY FILTER PILLS */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-1.5 md:gap-2 mb-8 md:mb-12 max-w-2xl px-2"
        >
          {TECH_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="relative px-3 py-1 rounded-full text-[11px] md:text-xs font-sans tracking-wide transition-colors duration-300 focus:outline-none"
              >
                {isActive && (
                  <motion.div
                    layoutId="activeCategoryIndicator"
                    className="absolute inset-0 rounded-full border border-[#D16A8A]/40 bg-[#17171D]"
                    style={{
                      boxShadow: "0 4px 15px -2px rgba(169, 58, 91, 0.25)"
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className={`relative z-10 ${isActive ? "text-[#F7F2EC] font-medium" : "text-[#F7F2EC]/50 hover:text-[#F7F2EC]/80"}`}>
                  {cat}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* ORBIT UNIVERSE CONTAINER */}
        <div 
          className="relative w-full flex items-center justify-center"
          style={{ height: orbitRadii.outer * 2 + 80 }}
        >
          
          {/* 1. INNER ORBIT RING */}
          <div
            className="absolute rounded-full border border-[#F7F2EC]/[0.08] pointer-events-none"
            style={{ width: orbitRadii.inner * 2, height: orbitRadii.inner * 2 }}
          />
          <motion.div className="absolute inset-0 pointer-events-none" style={{ rotate: innerRotation }}>
            {innerNodes.map((node, idx) => (
              <OrbitNode
                key={node.id}
                node={node}
                angle={(360 / innerNodes.length) * idx}
                radius={orbitRadii.inner}
                orbitRotation={innerRotation}
                isHovered={hoveredNodeId === node.id}
                onHoverStart={() => setHoveredNodeId(node.id)}
                onHoverEnd={() => setHoveredNodeId(null)}
                isFilteredOut={activeCategory !== "All" && node.category !== activeCategory}
              />
            ))}
          </motion.div>

          {/* 2. MIDDLE ORBIT RING */}
          <div
            className="absolute rounded-full border border-[#F7F2EC]/[0.06] pointer-events-none"
            style={{ width: orbitRadii.middle * 2, height: orbitRadii.middle * 2 }}
          />
          <motion.div className="absolute inset-0 pointer-events-none" style={{ rotate: middleRotation }}>
            {middleNodes.map((node, idx) => (
              <OrbitNode
                key={node.id}
                node={node}
                angle={(360 / middleNodes.length) * idx}
                radius={orbitRadii.middle}
                orbitRotation={middleRotation}
                isHovered={hoveredNodeId === node.id}
                onHoverStart={() => setHoveredNodeId(node.id)}
                onHoverEnd={() => setHoveredNodeId(null)}
                isFilteredOut={activeCategory !== "All" && node.category !== activeCategory}
              />
            ))}
          </motion.div>

          {/* 3. OUTER ORBIT RING */}
          <div
            className="absolute rounded-full border border-[#F7F2EC]/[0.04] pointer-events-none"
            style={{ width: orbitRadii.outer * 2, height: orbitRadii.outer * 2 }}
          />
          <motion.div className="absolute inset-0 pointer-events-none" style={{ rotate: outerRotation }}>
            {outerNodes.map((node, idx) => (
              <OrbitNode
                key={node.id}
                node={node}
                angle={(360 / outerNodes.length) * idx}
                radius={orbitRadii.outer}
                orbitRotation={outerRotation}
                isHovered={hoveredNodeId === node.id}
                onHoverStart={() => setHoveredNodeId(node.id)}
                onHoverEnd={() => setHoveredNodeId(null)}
                isFilteredOut={activeCategory !== "All" && node.category !== activeCategory}
              />
            ))}
          </motion.div>

          {/* CENTER CARD */}
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-20 pointer-events-auto"
          >
            <motion.div
              animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.55, 0.35] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-3 rounded-full blur-xl pointer-events-none"
              style={{
                background: "radial-gradient(circle, #A93A5B 0%, #D16A8A 50%, transparent 75%)"
              }}
            />

            <div
              className={`relative ${centerSizeClass} rounded-full border flex flex-col items-center justify-center text-center backdrop-blur-2xl transition-all duration-500 overflow-hidden group`}
              style={{
                backgroundColor: "rgba(23, 23, 29, 0.8)",
                borderColor: "rgba(247, 242, 23C, 0.15)",
                boxShadow: "0 20px 40px -10px rgba(0,0,0,0.8), inset 0 1px 1px rgba(255,255,255,0.15)"
              }}
            >
              <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.2em] font-mono font-medium text-[#D16A8A] mb-0.5">
                Software Engineer
              </span>

              <h3 className="text-xs sm:text-sm md:text-base font-serif text-[#F7F2EC] font-normal tracking-tight mb-0.5">
                Ayesha Tehreem
              </h3>

              <p className="text-[9px] sm:text-[10px] md:text-xs font-sans text-[#F7F2EC]/50 font-light mb-1.5 leading-tight">
                Full Stack MERN Developer
              </p>

              <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#17171D] border border-[#F7F2EC]/10">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10A37F] animate-pulse" />
                <span className="text-[8px] sm:text-[9px] font-mono text-[#F7F2EC]/70 tracking-wider">
                  AVAILABLE
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default TechStack;