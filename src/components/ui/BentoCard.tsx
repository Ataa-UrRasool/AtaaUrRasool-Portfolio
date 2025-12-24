"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function BentoCard({
  children,
  className = "",
  delay = 0,
}: BentoCardProps) {
  return (
    <motion.div
      className={`glass-card rounded-3xl p-6 hover:border-primary/50 transition-all duration-300 relative overflow-hidden group ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -5, scale: 1.02 }}
    >
      {/* Gradient border effect on hover */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl" />
      <div className="relative z-10">{ children}</div>
    </motion.div>
  );
}
