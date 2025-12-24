"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
}

export default function MobileMenu({
  isOpen,
  onClose,
  activeSection,
}: MobileMenuProps) {
  const menuItems = [
    { name: "About", href: "#about" },
    // { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Certifications", href: "#certifications" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const handleClick = (href: string) => {
    onClose();
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop with enhanced blur */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Menu Panel */}
          <motion.div
            className="fixed top-0 right-0 bottom-0 w-80 z-50 overflow-hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            {/* Gradient background overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-lighter to-dark opacity-95" />
            
            {/* Animated gradient orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <motion.div
                className="absolute -top-20 -right-20 w-40 h-40 bg-primary/30 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute top-1/2 -right-10 w-32 h-32 bg-secondary/30 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.4, 0.3],
                }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              />
            </div>

            {/* Content */}
            <div className="relative h-full flex flex-col p-8 pt-12">
              {/* Close button */}
              <motion.button
                onClick={onClose}
                className="absolute top-8 right-8 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-all border border-white/10 hover:border-white/20"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={20} />
              </motion.button>

              {/* Logo/Brand */}
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <h2 className="text-2xl font-heading font-bold bg-gradient-to-r from-primary via-secondary to-accent text-transparent bg-clip-text">
                  Ataa Ur Rasool
                </h2>
                <p className="text-sm text-gray-400 mt-1">Software Engineer</p>
              </motion.div>

              {/* Menu items */}
              <nav className="flex-1 flex flex-col gap-2">
                {menuItems.map((item, index) => {
                  const isActive = activeSection === item.href.slice(1);
                  return (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleClick(item.href);
                      }}
                      className={`group relative flex items-center gap-4 px-4 py-4 rounded-xl transition-all ${
                        isActive
                          ? "bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30"
                          : "hover:bg-white/5 border border-transparent hover:border-white/10"
                      }`}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      whileHover={{ x: 8 }}
                    >
                      {/* Number */}
                      <span
                        className={`text-sm font-mono ${
                          isActive ? "text-primary" : "text-gray-500 group-hover:text-gray-400"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {/* Name */}
                      <span
                        className={`flex-1 text-lg font-medium transition-colors ${
                          isActive
                            ? "text-white font-semibold"
                            : "text-gray-300 group-hover:text-white"
                        }`}
                      >
                        {item.name}
                      </span>

                      {/* Arrow icon */}
                      <motion.div
                        className={isActive ? "text-primary" : "text-gray-500 group-hover:text-secondary"}
                        animate={{ x: isActive ? [0, 5, 0] : 0 }}
                        transition={{ duration: 1, repeat: isActive ? Infinity : 0 }}
                      >
                        <ChevronRight size={18} />
                      </motion.div>

                      {/* Active indicator dot */}
                      {isActive && (
                        <motion.div
                          className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-primary to-secondary rounded-r-full"
                          layoutId="activeIndicator"
                        />
                      )}
                    </motion.a>
                  );
                })}
              </nav>

              {/* Footer */}
              <motion.div
                className="mt-8 pt-6 border-t border-white/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <p className="text-xs text-gray-500 text-center">
                  © {new Date().getFullYear()} All rights reserved
                </p>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
