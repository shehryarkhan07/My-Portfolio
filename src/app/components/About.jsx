"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }} // triggers on scroll, and again when re-entering view
      className="max-w-6xl px-3 z-10 md:px-20 md:mt-12"
    >
      <div className="md:text-lg text-md text-gray-400 flex flex-col gap-4">
        <h2 className="md:hidden block text-white text-lg font-bold ">
          About Me
        </h2>
        <p>
          I graduated with a Bachelor's degree in{" "}
          <span className="text-white font-bold">
            Computer Science from UET Mardan in 2025.
          </span>{" "}
          Along the way, I’ve continuously expanded my skills—recently diving
          into Node.js to grow as a full-stack developer.
        </p>

        <p>
          I’ve also developed several practice projects to sharpen my skills and
          explore new design patterns and frameworks.
        </p>

        <p>
          Currently, I’m working on a large-scale{" "}
          <span className="text-white font-bold">
            Fashion Aggregation Website{" "}
          </span>{" "}
          as part of my{" "}
          <span className="text-white font-bold">Final Year Project (FYP)</span>{" "}
          —a collaborative e-commerce-style platform that brings together
          products from multiple brands. This project is being built using
          Next.js, React, and Tailwind CSS.
        </p>

        <p>
          I'm always eager to{" "}
          <span className="text-white font-bold">learn, grow, </span> and take
          on new <span className="text-white font-bold">challenges </span> in
          web development.
        </p>
      </div>
    </motion.section>
  );
}
