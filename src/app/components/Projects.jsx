"use client";

import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    imageSrc: "/disect360.png",
    title: "Gaming Website",
    link: "https://update-disect360.surge.sh/",
    description:
      "I developed a fully functional and responsive website for a client during my internship. The website introduces the company and showcases the games they’ve created, along with their work in modern technologies.",
  },
  {
    imageSrc: "/awow.png",
    title: "A Company website they offer there services",
    link: "https://updateawow.surge.sh/",
    description:
      "This was my first project during my internship. I learned a lot of new things while working on it. The website is for a company called Awow, where they introduce themselves and showcase the services they offer",
  },
  {
    imageSrc: "/sectionsoft.png",
    title: "Section Soft website",
    link: "https://sectionsoft-webs.surge.sh",
    description:
      "This is the SectionSoft personal website, which I developed during my internship. Currently, only the homepage is fully functional and visible. I stopped working on the other pages, so they are not linked or complete. I’m showcasing only the homepage to highlight the part I personally designed and built.",
  },
  {
    isVideo: true,
    videoSrc: "/landing.mp4", // store video in /public folder
    title: "Landing Page of Quiz Game",
    description:
      "This is the landing page of a quiz game project. I developed most of the front-end interface during my internship. Unfortunately, I lost some of the project data and no longer have a working link to the full website. However, I’ve kept some screen records and page components to showcase the design and layout work I personally created.",
  },
  {
    isVideo: true,
    videoSrc: "/full.mp4", // store video in /public folder
    title: "Some Front End of Quiz Game",
    description:
      "This is the Front End of a quiz game project. I developed most of the front-end interface during my internship.",
  },
  {
    isVideo: true,
    videoSrc: "/todo.mp4", // store video in /public folder
    title: "First Practice Projects",
    description:
      "These are my first practice projects that I created while learning React. Some of them are built using React and Tailwind CSS, while others use simple CSS. They were developed as part of my practice to improve my frontend skills.",
  },
  {
    isVideo: true,
    videoSrc: "/crudapp.mp4", // store video in /public folder
    title: "Practice Crud Operation With Axios",
    description:
      "I practiced CRUD operations using Axios in this project. It includes a simple UI where you can see how Create, Read, Update, and Delete functionalities work. You can check the video demonstration for a better understanding.",
  },
  {
    isVideo: true,
    videoSrc: "/sundown.mp4", // store video in /public folder
    title: "I Clone Sundown Website",
    description:
      "I cloned the Sundown Studio website during my practice journey. It’s most of the animation website I've worked on, built using React and CSS. This project helped me understand advanced animations and smooth user interactions.",
  },
  {
    isVideo: true,
    videoSrc: "/recipe.mp4", // store video in /public folder
    title: "Search Recipe",
    description:
      "This is a recipe search app that I developed using React, HTML, and CSS during my practice journey. Users can search for recipes and view their details. The recipe data is fetched from a dummy API to simulate real-world data fetching and API integration.",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="space-y-8 max-w-6xl px-3 md:px-20 mx-auto z-50"
    >
      <h2 className="block text-white text-lg font-bold">Projects</h2>

      {projects.map((exp, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
          viewport={{ once: false, amount: 0.2 }}
          className="bg-slate-900 text-white rounded-lg z-10"
        >
          <div className="flex flex-col md:flex-row items-start gap-6">
            {/* Media Section */}
            <div className="w-full md:w-48 z-50">
              <div className="w-full h-36 bg-slate-800 rounded-lg flex items-center justify-center border border-slate-700 overflow-hidden">
                {exp.isVideo ? (
                  <video
                    controls
                    src={exp.videoSrc}
                    className="w-full h-full max-h-36 rounded-md object-contain"
                  />
                ) : (
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
                )}
              </div>
            </div>

            {/* Text Section */}
            <div className="flex-1">
              <h2 className="text-white text-lg md:text-xl font-medium mb-2">
                {exp.title}
              </h2>

              {exp.link && (
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline text-sm mb-2 block"
                >
                  Visit Project
                </a>
              )}

              <p className="text-slate-400 leading-relaxed text-sm">
                {exp.description}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default Projects;
