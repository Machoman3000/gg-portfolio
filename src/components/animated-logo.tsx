"use client";

import { motion, useReducedMotion } from "motion/react";

export function AnimatedLogo() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center cursor-pointer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: prefersReducedMotion ? 0.1 : 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={prefersReducedMotion ? {} : { scale: 1.1 }}
    >
      {/* Outer rotating diamond */}
      <motion.div
        className="absolute inset-0 border-[6px] border-primary"
        style={{ rotate: 45 }}
        animate={
          prefersReducedMotion
            ? {}
            : {
                rotate: [45, 405],
              }
        }
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Inner diamond */}
      <motion.div
        className="absolute inset-6 border-2 border-primary opacity-50"
        style={{ rotate: -12 }}
        animate={
          prefersReducedMotion
            ? {}
            : {
                rotate: [-12, -372],
              }
        }
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Center triangle */}
      <div
        className="w-0 h-0 animate-pulse-slow"
        style={{
          borderLeft: "40px solid transparent",
          borderRight: "40px solid transparent",
          borderBottom: "70px solid var(--color-primary)",
        }}
      />

      {/* Glow effect on hover */}
      <motion.div
        className="absolute inset-0 bg-primary/5 blur-xl -z-10"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: prefersReducedMotion ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}
