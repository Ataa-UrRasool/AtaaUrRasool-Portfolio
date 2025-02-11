"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import FadeIn from "../ui/FadeIn";

const AboutSection: FC = () => {
  const skills = [
    {
      category: "Languages",
      techs: ["Java", "JavaScript", "C#", "C/C++", "SQL", "TypeScript"],
    },
    {
      category: "Frontend & UI",
      techs: [
        "React",
        "JavaFX",
        "Next.js",
        "WinForms",
        "Bootstrap",
        "SASS",
        "Tailwind CSS",
      ],
    },
    {
      category: "Backend & DB",
      techs: [
        "Spring Boot",
        "Node.js",
        "Express.js",
        "MySQL",
        "SQL Server",
        "MongoDB",
      ],
    },
    {
      category: "Tools & Others",
      techs: [
        "RESTful APIs",
        "JWT",
        "Git",
        "Postman",
        "IntelliJ IDEA",
        "Visual Studio Code",
      ],
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            About Me
          </h2>
        </FadeIn>

        {/* Bio */}
        <FadeIn delay={0.2}>
          <div className="max-w-3xl mx-auto mb-16">
            <p className="text-gray-300 text-lg mb-6">
              I am a Computer Science student at FAST NUCES with a passion for
              full-stack development and a strong foundation in building
              scalable applications. My experience spans across both frontend
              and backend technologies, with a particular focus on Java, Spring
              Boot, and Javascript ecosystems.
            </p>
            <p className="text-gray-300 text-lg">
              Through my internships at Dsportshub and Switch Communications, I
              have gained practical experience in developing robust backend
              APIs, implementing secure authentication systems, and working with
              automated testing frameworks. I am particularly interested in
              creating efficient, user-friendly solutions that solve real-world
              problems.
            </p>
          </div>
        </FadeIn>

        {/* Skills */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {" "}
          {skills.map((skillGroup) => (
            <motion.div
              key={skillGroup.category}
              className="bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-700"
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <h3 className="text-xl font-semibold mb-4 text-white">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-700 text-gray-200 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
