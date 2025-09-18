"use client";
import { motion } from "framer-motion";

export default function Hero() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      className="md:hidden flex flex-col justify-center items-start px-3 z-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.p className="text-teal-400" variants={itemVariants}>
        Hi, my name is
      </motion.p>

      <motion.h1
        className="text-xl font-bold text-white mt-1"
        variants={itemVariants}
      >
        Shehryar Khan
      </motion.h1>

      <motion.h2
        className="text-lg font-semibold text-gray-400 mt-1"
        variants={itemVariants}
      >
        I build things for the web.
      </motion.h2>

      <motion.p className="mt-4 max-w-md text-gray-300" variants={itemVariants}>
        I'm a frontend developer focused on building responsive web applications
        with great user experiences.
      </motion.p>

      {/* Uncomment this if needed */}
      {/* 
      <motion.a
        href="/myresume.pdf"
        download
        className="inline-block mt-4 px-4 py-2 rounded bg-white text-black font-semibold hover:bg-gray-300 transition z-10"
        variants={itemVariants}
      >
        Download CV
      </motion.a> 
      */}
    </motion.section>
  );
}
