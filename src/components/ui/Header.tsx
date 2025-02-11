"use client";

import { motion } from "framer-motion";
import { useScroll } from "framer-motion";
import { useState, useEffect } from "react";

export default function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      const previous = scrollY.getPrevious();
      if (latest > previous && latest > 150) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    });
  }, [scrollY]);

  return (
    <motion.header
      className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-sm z-50"
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
            <a href="#about" className="text-gray-300 hover:text-white">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="text-gray-300 hover:text-white">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="text-gray-300 hover:text-white">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
}
