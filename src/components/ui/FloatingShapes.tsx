"use client";

import { motion } from "framer-motion";

export default function FloatingShapes() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Circle 1 */}
      <motion.div
        className="absolute w-64 h-64 rounded-full border-2 border-primary/20"
        style={{ top: "10%", left: "10%" }}
        animate={{
          y: [0, -30, 0],
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Circle 2 */}
      <motion.div
        className="absolute w-96 h-96 rounded-full border-2 border-secondary/10"
        style={{ top: "60%", right: "5%" }}
        animate={{
          y: [0, 40, 0],
          rotate: [0, -360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Triangle */}
      <motion.div
        className="absolute w-0 h-0 border-l-[100px] border-r-[100px] border-b-[150px] border-l-transparent border-r-transparent border-b-accent/10"
        style={{ top: "40%", left: "70%" }}
        animate={{
          y: [0, -25, 0],
          rotate: [0, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Small Circle */}
      <motion.div
        className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-2xl"
        style={{ top: "25%", right: "30%" }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Square rotated as diamond */}
      <motion.div
        className="absolute w-40 h-40 border-2 border-accent/20"
        style={{ top: "70%", left: "15%", rotate: "45deg" }}
        animate={{
          y: [0, 30, 0],
          rotate: [45, 405],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}
