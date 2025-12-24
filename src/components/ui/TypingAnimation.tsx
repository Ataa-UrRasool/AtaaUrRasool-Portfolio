"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypingAnimationProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function TypingAnimation({
  text,
  className = "",
  delay = 0,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }
    }, delay + currentIndex * 50); // Reduced from 100ms to 50ms per character

    return () => clearTimeout(timer);
  }, [currentIndex, text, delay]);


  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <motion.p
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: delay / 1000 }}
      suppressHydrationWarning
    >
      {displayedText}
      <span
        className="inline-block w-0.5 h-6 ml-1 bg-secondary"
        style={{ opacity: showCursor ? 1 : 0 }}
      />
    </motion.p>
  );
}
