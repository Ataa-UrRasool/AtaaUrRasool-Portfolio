"use client";

import { FC, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "../ui/FadeIn";
import { Experience } from "@/types/experience";
import { MapPin, Calendar, ChevronDown, ChevronUp } from "lucide-react";

const experiences: Experience[] = [
  {
    id: 1,
    title: "Junior Backend Developer",
    company: "SharkStack",
    employmentType: "Full-time",
    startDate: "Apr 2025",
    endDate: "Oct 2025",
    location: "Lahore, Punjab, Pakistan",
    locationType: "Remote",
    current: false,
    description: [
      "Designed scalable RESTful APIs with Node.js & Express.js",
      "Deployed infrastructure on AWS with EC2, S3, Cloudflare R2",
      "Configured Nginx for hosting and load balancing",
      "Implemented Temporal workflows for distributed processing",
      "Integrated LLM via OpenAI & Claude for automation",
      "Built real-time chat with Socket.io",
    ],
    skills: [
      "Node.js",
      "Express.js",
      "AWS",
      "Nginx",
      "Temporal",
      "OpenAI",
      "MongoDB",
      "Socket.io",
    ],
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "Buzz Solutions",
    employmentType: "Contract",
    startDate: "Nov 2024",
    endDate: "Mar 2025",
    location: "Islamabad, Pakistan",
    locationType: "Hybrid",
    description: [
      "Developed Progressive Web App with modern stack",
      "Implemented role-based access control system",
      "Managed JWT authentication and sessions",
      "Designed optimized RESTful APIs",
    ],
    skills: ["PWA", "Node.js", "Express.js", "MongoDB", "JWT"],
  },
  {
    id: 3,
    title: "Back End Developer",
    company: "DSPORTSHUB",
    employmentType: "Internship",
    startDate: "Jun 2024",
    endDate: "Aug 2024",
    location: "Islamabad, Pakistan",
    locationType: "Hybrid",
    description: [
      "Developed backend APIs with Node.js & Express.js",
      "Enhanced MySQL database with new features",
      "Implemented JWT-based authorization system",
      "Integrated projects into new architecture",
    ],
    skills: ["Node.js", "Express.js", "MySQL", "JWT"],
  },
];

const ExperienceSection: FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-5xl font-heading font-bold text-center mb-4 gradient-text">
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-16" />
        </FadeIn>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-accent hidden md:block" />

          {experiences.map((exp, index) => (
            <ExperienceCard
              key={exp.id}
              experience={exp}
              index={index}
              isExpanded={expandedId === exp.id}
              onToggle={() =>
                setExpandedId(expandedId === exp.id ? null : exp.id)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ExperienceCardProps {
  experience: Experience;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}

const ExperienceCard: FC<ExperienceCardProps> = ({
  experience,
  index,
  isExpanded,
  onToggle,
}) => {
  const isEven = index % 2 === 0;

  return (
    <div className="relative mb-12 md:mb-16">
      {/* Timeline dot */}
      <motion.div
        className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-secondary shadow-glow z-10 hidden md:block"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        {experience.current && (
          <motion.div
            className="absolute inset-0 rounded-full bg-secondary"
            animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
      </motion.div>

      {/* Card */}
      <motion.div
        className={`glass-card rounded-2xl p-6 hover:border-primary/50 transition-all cursor-pointer md:w-[calc(50%-2rem)] ${
          isEven ? "md:ml-auto md:text-left" : "md:mr-auto md:text-left"
        }`}
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        whileHover={{ y: -5 }}
        onClick={onToggle}
      >
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <h3 className="text-xl font-heading font-bold text-white">
                {experience.title}
              </h3>
              {experience.current && (
                <span className="px-3 py-1 bg-gradient-to-r from-primary to-secondary text-white text-xs font-medium rounded-full animate-pulse-glow">
                  Current
                </span>
              )}
            </div>
            <p className="text-lg text-gray-200 font-semibold">
              {experience.company} · {experience.employmentType}
            </p>
          </div>
          <button className="text-secondary">
            {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>

        <div className="flex flex-wrap gap-3 text-gray-300 text-sm mb-4">
          <div className="flex items-center gap-1">
            <Calendar size={16} className="text-secondary" />
            <span>
              {experience.startDate} - {experience.endDate}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin size={16} className="text-primary" />
            <span>{experience.locationType}</span>
          </div>
        </div>

        {/* Collapsible description */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <ul className="space-y-2 mb-4">
                {experience.description.map((desc, idx) => (
                  <li key={idx} className="text-gray-300 text-sm flex gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Skills */}
        {experience.skills && experience.skills.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-3 border-t border-white/10">
            {experience.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-primary/10 text-gray-200 rounded-full text-xs border border-primary/30 hover:border-primary transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ExperienceSection;
