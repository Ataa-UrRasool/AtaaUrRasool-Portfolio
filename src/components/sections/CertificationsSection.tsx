"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import FadeIn from "../ui/FadeIn";
import { Certification } from "@/types/certification";
import { ExternalLink, Award, Calendar } from "lucide-react";

const certifications: Certification[] = [
  {
    id: 1,
    title: "AWS Academy Graduate - Cloud Foundations",
    issuer: "Amazon Web Services (AWS)",
    issueDate: "Nov 2025",
    credentialUrl:
      "https://www.credly.com/badges/c19685a5-d794-477a-958e-45a9daed2ff1/linked_in_profile",
    skills: ["AWS Cloud", "Cloud Foundations"],
  },
  {
    id: 2,
    title: "Android Jetpack Compose Bootcamp",
    issuer: "Udemy",
    issueDate: "May 2025",
    credentialId: "UC-2ed8db66-5a0a-428f-8c34-e494c5f7c94f",
    credentialUrl:
      "https://www.udemy.com/certificate/UC-2ed8db66-5a0a-428f-8c34-e494c5f7c94f/",
    skills: ["Android", "Jetpack Compose"],
  },
];

const CertificationsSection: FC = () => {
  return (
    <section id="certifications" className="py-20 relative">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-5xl font-heading font-bold text-center mb-4 gradient-text">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-16" />
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <CertificationCard key={cert.id} certification={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface CertificationCardProps {
  certification: Certification;
  index: number;
}

const CertificationCard: FC<CertificationCardProps> = ({
  certification,
  index,
}) => {
  return (
    <motion.div
      className="glass-card rounded-3xl p-8 hover:border-primary/50 transition-all group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      whileHover={{ y: -10, scale: 1.02 }}
    >
      {/* Icon */}
      <div className="mb-6 flex justify-center">
        <div className="p-5 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:scale-110 transition-transform">
          <Award className="w-12 h-12 text-primary" />
        </div>
      </div>

      {/* Title and issuer */}
      <div className="text-center mb-4">
        <h3 className="font-heading font-bold text-xl text-white mb-2">
          {certification.title}
        </h3>
        <p className="text-secondary font-semibold text-lg">
          {certification.issuer}
        </p>
      </div>

      {/* Date */}
      <div className="flex items-center justify-center gap-2 text-gray-400 text-sm mb-4">
        <Calendar className="w-4 h-4" />
        <span>Issued {certification.issueDate}</span>
      </div>

      {/* Skills */}
      {certification.skills && certification.skills.length > 0 && (
        <div className="flex flex-wrap gap-2 justify-center mb-6">
          {certification.skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-primary/10 text-gray-200 rounded-full text-xs border border-primary/30"
            >
              {skill}
            </span>
          ))}
        </div>
      )}

      {/* View credential button */}
      {certification.credentialUrl && (
        <motion.a
          href={certification.credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary hover:from-primary-dark hover:to-secondary-dark text-white rounded-full transition-all font-medium shadow-glow"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>View Credential</span>
          <ExternalLink size={16} />
        </motion.a>
      )}

      {/* Gradient glow effect on hover */}
      <div className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-2xl" />
      </div>
    </motion.div>
  );
};

export default CertificationsSection;
