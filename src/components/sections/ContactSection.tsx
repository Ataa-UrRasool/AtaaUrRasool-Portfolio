"use client";

import { FC, useState } from "react";
import { motion } from "framer-motion";
import FadeIn from "../ui/FadeIn";
import { Download, Mail, Phone, MapPin, Github, Linkedin, Instagram, Copy, Check } from "lucide-react";

const ContactSection: FC = () => {
  const [emailCopied, setEmailCopied] = useState(false);

  const contactInfo = {
    email: "mataaurrasool@gmail.com",
    phone: "+923405883200",
    location: "Islamabad, Pakistan",
    github: "https://github.com/ataa-urrasool",
    linkedin: "https://linkedin.com/in/ataa-urrasool",
    instagram: "https://instagram.com/ataa_urrasool",
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactInfo.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <footer id="contact" className="py-20 relative">
      {/* Wave separator */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-12"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-primary/10"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 mt-12">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="text-5xl font-heading font-bold text-center mb-4 gradient-text">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12" />
          </FadeIn>

          {/* Contact cards grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Email card */}
            <motion.button
              onClick={handleCopyEmail}
              className="glass-card rounded-2xl p-6 hover:border-primary/50 transition-all group text-center cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -5, scale: 1.05 }}
            >
              <motion.div
                className="inline-block p-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 mb-4 group-hover:scale-110 transition-transform"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {emailCopied ? (
                  <Check className="w-8 h-8 text-secondary" />
                ) : (
                  <Mail className="w-8 h-8 text-primary" />
                )}
              </motion.div>
              <h3 className="font-heading font-semibold text-white mb-2">Email</h3>
              <p className="text-sm text-gray-300 mb-2">{contactInfo.email}</p>
              <span className="text-xs text-secondary flex items-center justify-center gap-1">
                <Copy size={12} />
                {emailCopied ? "Copied!" : "Click to copy"}
              </span>
            </motion.button>

            {/* Phone card */}
            <motion.a
              href={`tel:${contactInfo.phone}`}
              className="glass-card rounded-2xl p-6 hover:border-secondary/50 transition-all group text-center block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -5, scale: 1.05 }}
            >
              <motion.div
                className="inline-block p-4 rounded-full bg-gradient-to-br from-secondary/20 to-accent/20 mb-4 group-hover:scale-110 transition-transform"
                whileHover={{ rotate: 15, scale: 1.2 }}
                transition={{ duration: 0.3 }}
              >
                <Phone className="w-8 h-8 text-secondary" />
              </motion.div>
              <h3 className="font-heading font-semibold text-white mb-2">Phone</h3>
              <p className="text-sm text-gray-300">{contactInfo.phone}</p>
            </motion.a>

            {/* Location card */}
            <motion.div
              className="glass-card rounded-2xl p-6 hover:border-accent/50 transition-all group text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -5, scale: 1.05 }}
            >
              <motion.div
                className="inline-block p-4 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 mb-4 group-hover:scale-110 transition-transform"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <MapPin className="w-8 h-8 text-accent" />
              </motion.div>
              <h3 className="font-heading font-semibold text-white mb-2">Location</h3>
              <p className="text-sm text-gray-300">{contactInfo.location}</p>
            </motion.div>
          </div>

          {/* Download Resume Button */}
          {/* <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <motion.button
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-full font-heading font-semibold text-lg shadow-glow hover:shadow-glow-lg transition-all relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open("/resume@AtaaUrRasool.pdf", "_blank")}
            >
              <span className="relative z-10">Download Resume</span>
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="relative z-10"
              >
                <Download size={20} />
              </motion.div>
              
              <motion.div
                className="absolute inset-0 bg-white/20 rounded-full"
                initial={{ scale: 0, opacity: 1 }}
                whileTap={{ scale: 2, opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            </motion.button>
          </motion.div> */}

          {/* Social Links */}
          <motion.div
            className="flex justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <SocialButton href={contactInfo.github} icon={Github} label="GitHub" color="text-purple-400" />
            <SocialButton href={contactInfo.linkedin} icon={Linkedin} label="LinkedIn" color="text-blue-400" />
            <SocialButton href={contactInfo.instagram} icon={Instagram} label="Instagram" color="text-pink-400" />
          </motion.div>

          {/* Copyright */}
          <div className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Ataa Ur Rasool
          </div>
        </div>
      </div>
    </footer>
  );
};

interface SocialButtonProps {
  href: string;
  icon: React.ElementType;
  label: string;
  color: string;
}

const SocialButton: FC<SocialButtonProps> = ({ href, icon: Icon, label, color }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group p-4 rounded-full glass-card hover:border-primary/50 transition-all ${color}`}
      whileHover={{ y: -5, scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      aria-label={label}
    >
      <Icon className="w-6 h-6" />
    </motion.a>
  );
};

export default ContactSection;
