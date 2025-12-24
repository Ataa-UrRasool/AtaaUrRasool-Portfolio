"use client";

import { FC, useState } from "react";
import { motion } from "framer-motion";
import FadeIn from "../ui/FadeIn";

interface Skill {
  name: string;
  category: string;
  level: number;
}

const SkillsSection: FC = () => {
  const [filter, setFilter] = useState("All");

  const skills: Skill[] = [
    { name: "Node.js", category: "Backend", level: 90 },
    { name: "Express.js", category: "Backend", level: 90 },
    { name: "MongoDB", category: "Backend", level: 85 },
    { name: "PostgreSQL", category: "Backend", level: 85 },
    { name: "React", category: "Frontend", level: 85 },
    { name: "Next.js", category: "Frontend", level: 80 },
    { name: "TypeScript", category: "Frontend", level: 85 },
    { name: "Tailwind CSS", category: "Frontend", level: 90 },
    { name: "AWS S3", category: "Cloud", level: 75 },
    { name: "Docker", category: "Cloud", level: 70 },
    { name: "Nginx", category: "Cloud", level: 75 },
    { name: "OpenAI API", category: "AI", level: 80 },
    { name: "LangChain", category: "AI", level: 75 },
  ];

  const categories = ["All", "Frontend", "Backend", "Cloud", "AI"];

  const filteredSkills =
    filter === "All" ? skills : skills.filter((s) => s.category === filter);

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-5xl font-heading font-bold text-center mb-4 gradient-text">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12" />
        </FadeIn>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium text-sm transition-all ${
                filter === category
                  ? "bg-gradient-to-r from-primary to-secondary text-white shadow-glow"
                  : "glass-card text-gray-300 hover:text-white"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          layout
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="glass-card rounded-2xl p-6 hover:border-primary/50 transition-all group"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: index * 0.05 }}
              layout
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-heading font-semibold text-white text-lg">
                  {skill.name}
                </h3>
                <span className="text-sm font-medium text-secondary">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.05 }}
                />
              </div>

              {/* Category Badge */}
              <div className="mt-3">
                <span className="text-xs px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30">
                  {skill.category}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
