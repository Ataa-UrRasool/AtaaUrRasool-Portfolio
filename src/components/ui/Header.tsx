"use client";

import { motion } from "framer-motion";
import { useScroll } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { useActiveSection } from "@/hooks/useActiveSection";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setScrolled(latest > 50);
    });
  }, [scrollY]);

  const menuItems = [
    { name: "About", href: "#about" },
    // { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Certifications", href: "#certifications" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-lg bg-dark/80 border-b border-white/10 shadow-lg"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <nav
          className={`container mx-auto px-4 transition-all duration-300 ${
            scrolled ? "py-3" : "py-6"
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo/Name */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: scrolled ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="font-heading font-bold text-xl bg-gradient-to-r from-primary via-secondary to-accent text-transparent bg-clip-text"
            >
              Ataa
            </motion.div>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex gap-8">
              {menuItems.map((item) => (
                <li key={item.name} className="relative">
                  <a
                    href={item.href}
                    onClick={(e) => handleClick(e, item.href)}
                    className={`text-sm font-medium transition-colors duration-300 ${
                      activeSection === item.href.slice(1)
                        ? "text-secondary"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {item.name}
                    {/* Underline animation */}
                    <motion.span
                      className="absolute left-0 -bottom-1 h-0.5 bg-gradient-to-r from-primary to-secondary"
                      initial={{ width: 0 }}
                      animate={{
                        width: activeSection === item.href.slice(1) ? "100%" : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        activeSection={activeSection}
      />
    </>
  );
}
