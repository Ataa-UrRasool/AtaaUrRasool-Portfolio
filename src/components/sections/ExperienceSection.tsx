"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import FadeIn from "../ui/FadeIn";
import { Experience } from "@/types/experience";
import { MapPin, Calendar } from "lucide-react";

const experiences: Experience[] = [
    {
        id: 1,
        title: "Junior Backend Developer",
        company: "SharkStack",
        employmentType: "Full-time",
        startDate: "Apr 2025",
        endDate: "Present",
        location: "Lahore, Punjab, Pakistan",
        locationType: "Remote",
        current: true,
        description: [
            "Designed and maintained scalable RESTful APIs using Node.js and Express.js",
            "Deployed and managed infrastructure on AWS using EC2, S3, and Cloudflare R2, with AWS CLI for command-line operations",
            "Configured Nginx for hosting management, reverse proxy, SSL termination, and load balancing of backend services",
            "Orchestrated server-side tasks with Temporal workflows, enabling reliable distributed background processing",
            "Integrated LLM via OpenAI, Claude, and for data parsing, contextual response generation, and workflow automation",
            "Implemented secure JWT-based authentication, email flows, and Stripe payment processing",
            "Built a real-time chat system with Socket.io and collaborated with frontend for seamless integration",
            "Authored clear documentation, promoted clean code practices, and participated in daily scrums for team alignment",
        ],
        skills: ["Node.js", "Express.js", "Cloudflare R2", "Nginx", "Temporal", "OpenAI", "Claude", "LLM Integration", "MongoDB", "PostgreSQL", "JWT", "Socket.io", "Stripe"],
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
            "Developed a Progressive Web Application (PWA) using HTML, CSS, and JavaScript for the frontend and Node.js, Express.js, and MongoDB for the backend",
            "Implemented role-based access control for Admin, Silver, and Gold users, each with specific permissions and limitations",
            "Managed user authentication and session handling using JWT tokens and authentication IDs for secure access",
            "Designed and optimized RESTful APIs to handle user interactions, data management, and role-based restrictions",
            "Ensured PWA performance and responsiveness, making it installable and accessible across multiple devices",
            "Offline functionality using service workers and IndexedDB for a smoother PWA experience",
        ],
        skills: ["Server Side Programming", "Progressive Web Applications (PWAs)"],
    },
    {
        id: 3,
        title: "Back End Developer",
        company: "DSPORTSHUB",
        employmentType: "Internship",
        startDate: "Jun 2024",
        endDate: "Aug 2024",
        location: "Islamabad, Islamabad, Pakistan",
        locationType: "Hybrid",
        description: [
            "Developed and maintained backend APIs using JavaScript, Node.js, and Express.js, integrating with a React frontend",
            "Enhanced the existing MySQL database by adding new tables and columns to support new features",
            "Utilized transactions for efficient database interactions and ensured optimal performance through API testing with Postman and MySQL Bench",
            "Implemented JWT-based authorization, email verification, and session control to secure user authentication across multiple application modules",
            "Integrated existing projects into new backend architecture to improve functionality and scalability",
        ],
        skills: ["Back-End Web Development", "Server Side Programming"],
    },
];

const ExperienceSection: FC = () => {
    return (
        <section id="experience" className="py-20 relative">
            <div className="container mx-auto px-4">
                <FadeIn>
                    <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text">
                        Experience
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto mb-12"></div>
                </FadeIn>

                <motion.div
                    className="max-w-4xl mx-auto space-y-8"
                    variants={{
                        hidden: { opacity: 0 },
                        show: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.2,
                            },
                        },
                    }}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    {experiences.map((exp) => (
                        <ExperienceCard key={exp.id} experience={exp} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

interface ExperienceCardProps {
    experience: Experience;
}

const ExperienceCard: FC<ExperienceCardProps> = ({ experience }) => {
    return (
        <motion.div
            className="backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20"
            variants={{
                hidden: { opacity: 0, x: -20 },
                show: { opacity: 1, x: 0 },
            }}
            whileHover={{ x: 5 }}
        >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-2xl font-bold text-white">{experience.title}</h3>
                        {experience.current && (
                            <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-medium rounded-full">
                                Current
                            </span>
                        )}
                    </div>
                    <p className="text-xl text-gray-200 font-semibold mb-2">
                        {experience.company} · {experience.employmentType}
                    </p>

                    <div className="flex flex-wrap gap-4 text-gray-300 text-sm">
                        <div className="flex items-center gap-1">
                            <Calendar size={16} className="text-cyan-400" />
                            <span>{experience.startDate} - {experience.endDate}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <MapPin size={16} className="text-purple-400" />
                            <span>{experience.location} · {experience.locationType}</span>
                        </div>
                    </div>
                </div>
            </div>

            <ul className="space-y-2 mb-4">
                {experience.description.map((desc, index) => (
                    <li key={index} className="text-gray-200 text-sm flex gap-2">
                        <span className="text-cyan-400 mt-1">•</span>
                        <span>{desc}</span>
                    </li>
                ))}
            </ul>

            {experience.skills && experience.skills.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                    {experience.skills.map((skill, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 bg-white/5 text-gray-200 rounded-full text-xs font-medium border border-white/10 backdrop-blur-sm"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            )}
        </motion.div>
    );
};

export default ExperienceSection;
