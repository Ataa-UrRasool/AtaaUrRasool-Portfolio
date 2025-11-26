"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import FadeIn from "../ui/FadeIn";
import { Download } from "lucide-react";

const ContactSection: FC = () => {
  const contactInfo = {
    email: "mataaurrasool@gmail.com",
    phone: "+923405883200",
    github: "https://github.com/ataa-urrasool",
    linkedin: "https://linkedin.com/in/ataa-urrasool",
    instagram: "https://instagram.com/ataa_ur_rasool",
  };

  return (
    <footer id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto mb-12"></div>
          </FadeIn>

          {/* Resume Download Button */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="group flex items-center gap-2 mx-auto px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 
                         rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open("/resume@AtaaUrRasool.pdf", "_blank")}
            >
              <span>Download Resume</span>
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Download size={18} />
              </motion.div>
            </motion.button>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="flex flex-col gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center justify-center gap-2">
              <span className="font-medium text-gray-200">Email:</span>
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                {contactInfo.email}
              </a>
            </div>

            <div className="flex items-center justify-center gap-2">
              <span className="font-medium text-gray-200">Phone:</span>
              <a
                href={`tel:${contactInfo.phone}`}
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                {contactInfo.phone}
              </a>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <SocialLink href={contactInfo.github} label="GitHub" />
            <SocialLink href={contactInfo.linkedin} label="LinkedIn" />
            <SocialLink href={contactInfo.instagram} label="Instagram" />
          </motion.div>

          {/* Copyright */}
          <div className="mt-12 text-gray-400 text-sm">
            © {new Date().getFullYear()} Ataa Ur Rasool. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

// Social Link Component
interface SocialLinkProps {
  href: string;
  label: string;
}

const SocialLink: FC<SocialLinkProps> = ({ href, label }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="px-4 py-2 rounded-full backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/20 hover:border-cyan-400/50
                 transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/20"
    >
      {label}
    </a>
  );
};

export default ContactSection;
