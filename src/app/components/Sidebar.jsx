"use client";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";
import useActiveSection from "../useHook/usehook";

const navItems = [
  { name: "about", href: "#about" },
  { name: "experience", href: "#experience" },
  { name: "projects", href: "#projects" },
];

export default function Sidebar() {
  const activeSection = useActiveSection(navItems.map((item) => item.name));

  return (
    <div className="flex flex-col p-8 justify-start gap-12 min-h-screen text-gray-300 md:mt-12">
      {/* Top Section */}
      <div>
        <h1 className="text-4xl font-bold text-white">Shehryar Khan</h1>
        <h2 className="text-xl mt-2 font-medium text-gray-200">
          Front End Engineer
        </h2>
        <p className="mt-4 text-gray-400 2xl:text-lg">
          I'm a frontend developer focused on building responsive web
          applications with great user experiences.
        </p>

        {/* Nav Links */}
        <nav className="mt-10 space-y-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center group"
            >
              <span
                className={`mr-4 h-px flex-shrink-0 transition-all duration-300
                  ${
                    activeSection === item.name
                      ? "bg-white w-10"
                      : "bg-gray-600 w-6 group-hover:w-5"
                  }`}
              ></span>
              <span
                className={`text-sm font-semibold tracking-wide uppercase transition-colors duration-300
                  ${
                    activeSection === item.name
                      ? "text-white"
                      : "text-gray-400 group-hover:text-white"
                  }`}
              >
                {item.name}
              </span>
            </a>
          ))}
        </nav>
      </div>

      {/* Bottom Section - Social Icons with Animation */}
      <div className="flex space-x-4">
        {[
          {
            href: "https://github.com/shehryarkhan07",
            icon: <FaGithub size={20} />,
          },
          {
            href: "https://www.linkedin.com/in/shehryar-khan-905127287/",
            icon: <FaLinkedin size={20} />,
          },
          {
            href: "https://wa.me/923481989604",
            icon: <FaWhatsapp size={20} className="text-green-500" />,
          },
          {
            href: "mailto:shehryarkhann7@gmail.com",
            icon: <FaEnvelope size={20} className="text-white" />,
          },
        ].map((item, index) => (
          <motion.a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            {item.icon}
          </motion.a>
        ))}
      </div>
    </div>
  );
}
