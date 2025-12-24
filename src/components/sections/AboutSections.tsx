"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import FadeIn from "../ui/FadeIn";
import BentoCard from "../ui/BentoCard";
import { Code2, Zap, GraduationCap, Briefcase, Server } from "lucide-react";

const AboutSection: FC = () => {
  const techStack = [
    "Node.js", "Express.js", "React", "Next.js", "TypeScript", "Java",
    "Spring Boot", "Python", "FastAPI", "MongoDB", "PostgreSQL", "AWS",
    "Docker", "Nginx", "Temporal", "OpenAI",
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-5xl font-heading font-bold text-center mb-4 gradient-text">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-16" />
        </FadeIn>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {/* Large intro card - spans 2 columns */}
          <BentoCard className="md:col-span-2 lg:col-span-2" delay={0.1}>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20">
                <Code2 className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold mb-3 text-white">
                  Full Stack Developer
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Computer Science student at FAST NUCES passionate about Backend Development. 
                  Building scalable systems with modern tools and frameworks.
                </p>
              </div>
            </div>
          </BentoCard>

          {/* Backend Specialist */}
          <BentoCard className="md:col-span-1" delay={0.2}>
            <div className="flex flex-col items-center text-center gap-3">
              <div className="p-4 rounded-full bg-gradient-to-br from-secondary/20 to-accent/20">
                <Server className="w-10 h-10 text-secondary" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-white">
                Backend Specialist
              </h3>
              <p className="text-sm text-gray-400">Node.js · Express.js · APIs</p>
            </div>
          </BentoCard>

          {/* Quick fact - Education */}
          <BentoCard className="md:col-span-1" delay={0.3}>
            <div className="flex flex-col items-center text-center gap-3">
              <div className="p-4 rounded-full bg-gradient-to-br from-accent/20 to-primary/20">
                <GraduationCap className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-white">
                FAST NUCES
              </h3>
              <p className="text-sm text-gray-400">Computer Science</p>
            </div>
          </BentoCard>

          {/* Quick fact - Experience */}
          <BentoCard className="md:col-span-1" delay={0.4}>
            <div className="flex flex-col items-center text-center gap-3">
              <div className="p-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20">
                <Briefcase className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-white">
                2+ Experiences
              </h3>
              <p className="text-sm text-gray-400">Industry Projects</p>
            </div>
          </BentoCard>

          {/* Quick fact - Performance */}
          <BentoCard className="md:col-span-1" delay={0.5}>
            <div className="flex flex-col items-center text-center gap-3">
              <div className="p-4 rounded-full bg-gradient-to-br from-secondary/20 to-accent/20">
                <Zap className="w-10 h-10 text-secondary" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-white">
                Fast Learner
              </h3>
              <p className="text-sm text-gray-400">Adaptable & Efficient</p>
            </div>
          </BentoCard>

          {/* Tech Stack Grid - spans 2 columns */}
          <BentoCard className="md:col-span-2 lg:col-span-2" delay={0.6}>
            <h3 className="text-xl font-heading font-semibold mb-4 text-white">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30 rounded-full text-sm text-gray-200 font-medium hover:border-primary hover:shadow-glow transition-all cursor-default"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
