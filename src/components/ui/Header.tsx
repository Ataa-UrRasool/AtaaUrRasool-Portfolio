"use client";

import { motion } from "framer-motion";
import { useScroll } from "framer-motion";
import { useState, useEffect } from "react";

export default function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      const previous = scrollY.getPrevious() ?? 0;
      if (latest > previous && latest > 150) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    });
  }, [scrollY]);

  return (
    <motion.header
      className="fixed top-0 w-full backdrop-blur-md bg-white/10 border-b border-white/10 z-50"
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
    >
      <nav className="container mx-auto px-4 py-4">
        <ul className="flex gap-6 justify-end">
          <li>
            <a href="#about" className="text-gray-200 hover:text-cyan-400 transition-colors font-medium">
              About
            </a>
          </li>
          <li>
            <a href="#experience" className="text-gray-200 hover:text-cyan-400 transition-colors font-medium">
              Experience
            </a>
          </li>
          <li>
            <a href="#certifications" className="text-gray-200 hover:text-cyan-400 transition-colors font-medium">
              Certifications
            </a>
          </li>
          <li>
            <a href="#projects" className="text-gray-200 hover:text-cyan-400 transition-colors font-medium">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="text-gray-200 hover:text-cyan-400 transition-colors font-medium">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
}
