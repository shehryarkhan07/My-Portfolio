"use client";

import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      className="md:text-lg text-md text-gray-400 flex flex-col gap-4 max-w-6xl px-3 md:px-20 z-10"
    >
      <h2 className="md:hidden block text-white text-lg font-bold ">
        Experience
      </h2>

      <p className="md:mt-5">
        I'm a Frontend Developer with nearly{" "}
        <span className="text-white font-bold">
          2 years of hands-on experience
        </span>{" "}
        in building responsive, user-centric web applications. I specialize in
        React, Next.js, Tailwind CSS, and Redux Toolkit.
      </p>

      <p>
        My journey began during my academic years, where I developed a strong
        foundation in frontend development and later secured a{" "}
        <span className="text-white font-bold">
          frontend internship at Section Soft
        </span>
        . During this internship, I contributed to multiple internal projects
        and improved my ability to build real-world interfaces and implement
        functional, modern features.
      </p>

      <p>
        I’ve worked on crafting clean UIs with intuitive UX, ensuring
        accessibility, performance, and responsiveness across devices.
      </p>

      <h1 className="text-white text-lg md:text-xl font-bold ">
        "My Journey into Development — From Beginner to Developer"
      </h1>

      <p className="text-slate-400 leading-relaxed mb-6 text-sm">
        I started my development journey with mobile app development after my
        4th semester during summer vacations in Islamabad, where I built a small
        e-commerce app and earned a certificate. I continued working on mobile
        apps during my 4th and 5th semesters but later realized my true interest
        was in web development.
        <br />
        <br />
        In my 6th semester, I shifted focus to web development and started
        learning frontend technologies. After the semester ended, I joined
        Section Soft Islamabad as a frontend React web developer intern. I
        completed a 5-month internship — 3 months on-site and 2 months remote —
        and received a certificate for my work.
      </p>

      <ExperienceCard />
    </motion.section>
  );
}
