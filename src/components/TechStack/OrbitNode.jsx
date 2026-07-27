import React, { useMemo } from 'react';
import { motion, useTransform, AnimatePresence } from 'framer-motion';

// Icons Mapping
import * as SiIcons from 'react-icons/si';
import * as VscIcons from 'react-icons/vsc';
import * as TbIcons from 'react-icons/tb';
import * as FaIcons from 'react-icons/fa';

const OrbitNode = ({
  node,
  angle,
  radius,
  orbitRotation,
  isHovered,
  onHoverStart,
  onHoverEnd,
  isFilteredOut
}) => {
  const IconComponent = useMemo(() => {
    let iconModule;
    switch (node.iconLib) {
      case 'si':
        iconModule = SiIcons;
        break;
      case 'vsc':
        iconModule = VscIcons;
        break;
      case 'tb':
        iconModule = TbIcons;
        break;
      case 'fa':
        iconModule = FaIcons;
        break;
      default:
        iconModule = SiIcons;
    }
    return iconModule[node.iconName] || SiIcons.SiCodefactor;
  }, [node.iconLib, node.iconName]);

  const x = useMemo(() => radius * Math.cos((angle * Math.PI) / 180), [radius, angle]);
  const y = useMemo(() => radius * Math.sin((angle * Math.PI) / 180), [radius, angle]);

  const counterRotation = useTransform(orbitRotation, (r) => -r);

  return (
    <div
      aria-label={`Technology node: ${node.name}`}
      className="absolute top-1/2 left-1/2 pointer-events-none"
      style={{
        transform: `translate3d(${x}px, ${y}px, 0px) translate3d(-50%, -50%, 0px)`
      }}
    >
      <motion.div style={{ rotate: counterRotation }} className="relative pointer-events-auto">
        <AnimatePresence>
          {!isFilteredOut && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              onMouseEnter={onHoverStart}
              onMouseLeave={onHoverEnd}
              className="relative group cursor-pointer"
            >
              {/* Outer Ambient Glowing Halo */}
              <div
                className="absolute -inset-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md pointer-events-none"
                style={{ backgroundColor: `${node.color}35` }}
              />

              {/* Glassmorphic Node Shell */}
              <motion.div
                whileHover={{ scale: 1.15 }}
                transition={{ type: "spring", stiffness: 400, damping: 22 }}
                className="relative w-8 h-8 sm:w-9 sm:h-9 md:w-11 md:h-11 rounded-full flex items-center justify-center border backdrop-blur-md transition-colors duration-300"
                style={{
                  backgroundColor: isHovered ? "rgba(23, 23, 29, 0.95)" : "rgba(23, 23, 29, 0.75)",
                  borderColor: isHovered ? node.color : "rgba(247, 242, 23C, 0.12)",
                  boxShadow: isHovered
                    ? `0 0 18px -3px ${node.color}40, inset 0 1px 1px rgba(255,255,255,0.2)`
                    : "0 4px 15px -2px rgba(0,0,0,0.5), inset 0 1px 1px rgba(255,255,255,0.05)"
                }}
              >
                <IconComponent
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:scale-105"
                  style={{ color: isHovered ? node.color : "#F7F2EC" }}
                />
              </motion.div>

              {/* Precision Tooltip */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.92 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 4, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 450, damping: 28 }}
                    className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-3 w-48 sm:w-56 pointer-events-none"
                  >
                    <div
                      className="p-3 rounded-xl border backdrop-blur-xl shadow-2xl relative overflow-hidden"
                      style={{
                        backgroundColor: "rgba(23, 23, 29, 0.95)",
                        borderColor: "rgba(247, 242, 23C, 0.15)",
                        boxShadow: `0 15px 30px -10px rgba(0,0,0,0.8), 0 0 15px -5px ${node.color}30`
                      }}
                    >
                      <div
                        className="absolute top-0 left-0 right-0 h-[1px]"
                        style={{
                          background: `linear-gradient(90deg, transparent, ${node.color}, transparent)`
                        }}
                      />

                      <div className="flex items-center justify-between mb-1">
                        <span className="font-sans font-semibold text-xs tracking-wider text-[#F7F2EC]">
                          {node.name}
                        </span>
                        <span
                          className="text-[8px] sm:text-[9px] uppercase tracking-widest px-1.5 py-0.5 rounded-full font-mono border"
                          style={{
                            color: node.color,
                            borderColor: `${node.color}40`,
                            backgroundColor: `${node.color}12`
                          }}
                        >
                          {node.category}
                        </span>
                      </div>

                      <p className="text-[10px] sm:text-[11px] text-[#F7F2EC]/70 leading-relaxed font-sans font-light">
                        {node.description}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default React.memo(OrbitNode);