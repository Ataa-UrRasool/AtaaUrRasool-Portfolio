"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import FadeIn from "../ui/FadeIn";
import { Certification } from "@/types/certification";
import { ExternalLink } from "lucide-react";

const certifications: Certification[] = [
    {
        id: 1,
        title: "AWS Academy Graduate - Cloud Foundations",
        issuer: "Amazon Web Services (AWS)",
        issueDate: "Nov 2025",
        credentialUrl: "https://www.credly.com/badges/c19685a5-d794-477a-958e-45a9daed2ff1/linked_in_profile",
        skills: ["Amazon Web Services (AWS)", "AWS Cloud", "Cloud Foundations"],
    },
    {
        id: 2,
        title: "Android Jetpack Compose: The Comprehensive Bootcamp",
        issuer: "Udemy",
        issueDate: "May 2025",
        credentialId: "UC-2ed8db66-5a0a-428f-8c34-e494c5f7c94f",
        credentialUrl: "https://www.udemy.com/certificate/UC-2ed8db66-5a0a-428f-8c34-e494c5f7c94f/",
        skills: ["Android Studio", "Jetpack Compose"],
    },
];

const CertificationsSection: FC = () => {
    return (
        <section id="certifications" className="py-20 relative">
            <div className="container mx-auto px-4">
                <FadeIn>
                    <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text">
                        Licenses & Certifications
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto mb-12"></div>
                </FadeIn>

                <motion.div
                    className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
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
                    {certifications.map((cert) => (
                        <CertificationCard key={cert.id} certification={cert} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

interface CertificationCardProps {
    certification: Certification;
}

const CertificationCard: FC<CertificationCardProps> = ({ certification }) => {
    return (
        <motion.div
            className="backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20"
            variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
            }}
            whileHover={{ y: -5 }}
        >
            <div className="flex flex-col h-full">
                <div className="mb-4">
                    <h3 className="text-xl font-semibold text-white mb-2">
                        {certification.title}
                    </h3>
                    <p className="text-gray-300 font-medium">{certification.issuer}</p>
                    <p className="text-gray-400 text-sm mt-1">
                        Issued {certification.issueDate}
                    </p>
                </div>

                {certification.credentialId && (
                    <p className="text-gray-400 text-sm mb-4">
                        Credential ID: {certification.credentialId}
                    </p>
                )}

                {certification.skills && certification.skills.length > 0 && (
                    <div className="mb-4">
                        <p className="text-gray-300 text-sm mb-2">Skills:</p>
                        <div className="flex flex-wrap gap-2">
                            {certification.skills.map((skill, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 bg-white/5 text-gray-200 rounded-full text-xs border border-white/10 backdrop-blur-sm"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {certification.credentialUrl && (
                    <motion.a
                        href={certification.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white rounded-full transition-all text-sm font-medium w-fit hover:shadow-lg hover:shadow-purple-500/50"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span>Show credential</span>
                        <ExternalLink size={16} />
                    </motion.a>
                )}
            </div>
        </motion.div>
    );
};

export default CertificationsSection;
