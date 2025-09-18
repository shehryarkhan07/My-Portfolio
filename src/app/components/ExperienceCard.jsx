"use client";

import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    date: "2024 — Intern at Section Soft",
    imageSrc: "/Internship_certificate.jpeg",
    title: "Frontend React Intern.",
    description:
      "This is the 5-month internship certificate from Section Soft, where I worked as a frontend React developer. During my internship, I developed around 5 to 6 real-world projects, which helped strengthen my skills in React, Tailwind CSS, and responsive web design. I also learned how to collaborate in a team environment, follow modern development workflows, and build user-friendly interfaces from scratch.",
  },
  {
    date: "2023 — Mobile App Certification",
    imageSrc: "/MobApp_certificate.jpeg",
    title: "Mobile App Development (ICP Institute)",
    description:
      "This is the certification of mobile app development achieved in 2023 at ICP Institute Islamabad. I developed a small E-commerce mobile application during the program, which helped me understand the fundamentals of app development and UI/UX structure.",
  },
];

const ExperienceCard = () => {
  return (
    <div className="space-y-8 z-10">
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
          viewport={{ once: false, amount: 0.2 }}
          className="text-white rounded-lg max-w-6xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-start gap-6">
            {/* Left Column - Date and Image */}
            <div className="w-full md:w-48">
              <div className="text-slate-400 text-sm font-medium mb-4">
                {exp.date}
              </div>
              <div className="w-full h-36 bg-slate-800 rounded-lg flex items-center justify-center border border-slate-700 overflow-hidden">
                <a
                  href={exp.imageSrc}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={exp.imageSrc}
                    alt={exp.title}
                    width={160}
                    height={100}
                    className="object-contain cursor-pointer w-auto h-auto max-h-full"
                  />
                </a>
              </div>
            </div>

            {/* Right Column - Title and Description */}
            <div className="flex-1">
              <h2 className="text-white text-lg md:text-xl font-medium mb-2">
                {exp.title}
              </h2>
              <p className="text-slate-400 leading-relaxed text-sm">
                {exp.description}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ExperienceCard;
