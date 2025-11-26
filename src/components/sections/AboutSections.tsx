"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import FadeIn from "../ui/FadeIn";

const AboutSection: FC = () => {
  const skills = [
    {
      category: "Programming Languages",
      techs: [
        "Java",
        "JavaScript",
        "TypeScript",
        "Python",
        "C/C++",
        "C#",
        "SQL",
      ],
    },
    {
      category: "Frontend & UI Development",
      techs: [
        "React",
        "Next.js",
        "JavaFX",
        "shadcn/ui",
        "Tailwind CSS",
        "Bootstrap",
        "SASS",
        "WinForms",
      ],
    },
    {
      category: "Backend Development & Databases",
      techs: [
        "Spring Boot",
        "FastAPI",
        "Node.js",
        "Express.js",
        "MySQL",
        "PostgreSQL",
        "SQL Server",
        "MongoDB",
        "Cloudinary",
      ],
    },
    {
      category: "Cloud, DevOps & Infrastructure",
      techs: [
        "AWS S3",
        "AWS Aurora",
        "AWS CLI",
        "Cloudflare R2",
        "Docker",
        "Nginx",
        "Jenkins",
        "Grafana",
        "Prometheus",
        "Temporal",
      ],
    },
    {
      category: "AI Tools, APIs",
      techs: [
        "OpenAI API",
        "Claude",
        "LangChain",
        "RESTful APIs",
        "JWT",
        "Socket.io",
        "Stripe",
        "Git",
        "Postman",
      ],
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto mb-12"></div>
        </FadeIn>

        {/* Bio */}
        <FadeIn delay={0.2}>
          <div className="max-w-3xl mx-auto mb-16">
            <p className="text-gray-200 text-lg mb-6 leading-relaxed">
              As an undergraduate Computer Science student at FAST NUCES, I am driven by a passion for Backend Development. With a strong foundation in software engineering and experience in Java, JavaScript, Node.js, and Express.js, I continuously explore modern tools and frameworks to improve my development workflow.

              <br />
              <br />
              I actively engage in real-world projects and internships, applying theoretical concepts to practical solutions. These experiences have strengthened my technical understanding and expanded my ability to design scalable and efficient systems.

              <br />
              <br />
              I enjoy collaborating on innovative projects and thrive in environments where challenges fuel creativity and growth. My goal is to contribute meaningfully to impactful, user‑centered applications through both backend and full‑stack development.
            </p>
          </div>
        </FadeIn>

        {/* Skills */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
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
          {skills.map((skillGroup) => (
            <motion.div
              key={skillGroup.category}
              className="backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white/5 backdrop-blur-sm text-gray-200 rounded-full text-sm font-medium border border-white/10 hover:border-purple-400/50 hover:bg-white/10 transition-all"
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
