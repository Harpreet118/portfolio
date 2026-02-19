import React from "react";
import { motion } from "framer-motion";
import { Github, Globe } from "lucide-react";

export default function Project() {
  const ProjectData = [
    {
      projectName: "PortFolio",
      img: "https://res.cloudinary.com/dzun1wqhd/image/upload/v1771461718/project1_c9vgty.jpg",
      des: "A modern portfolio website built with React and TailwindCSS to showcase my projects and skills.",
      tech: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Lucide Icons"],
      startDate: "02-Sep-2025",
      endDate: "31-Sep-2025",
      info: "Frontend Project",
      githubLink: "https://github.com/Harpreet118/portfolio.git",
      deploymentLink: "https://harpreet2004.vercel.app/",
    },
    {
      projectName: "Quantum",
      des: "A modern tuition center web application designed to help students navigate classes, access subject content, and enroll in courses with a seamless and responsive learning experience.",
      tech: [
        "React",
        "NodeJs",
        "Swiper",
        "ExpressJs",
        "MongoDB",
        "Cloudinary",
        "Framer Motion",
      ],
      img: "https://res.cloudinary.com/dzun1wqhd/image/upload/v1771462486/WhatsApp_Image_2026-01-31_at_7.12.59_PM_1_fehswk.jpg",
      startDate: "05-Nov-2025",
      endDate: "07-Jan-2026",
      deploymentLink: "https://quantum-client-orpin.vercel.app/",
      info: "MERN Stack Project",
      githubLink: "https://github.com/Harpreet118/quantum_client.git",
    },
    {
      projectName: "glamnest",
      img: "https://res.cloudinary.com/dzun1wqhd/image/upload/v1771462621/project2_ixi9j6.jpg",
      des: "A stylish beauty product website designed to present makeup collections, product details, and seamless navigation with a responsive and engaging user experience.",
      tech: [
        "React",
        "NodeJs",
        "Framer-Motion",
        "yup",
        "Formik",
        "Tailwind CSS",
      ],
      startDate: "15-Jan-2026",
      endDate: "17-Feb-2026",
      info: "Frontend Project",
      githubLink: "https://github.com/Harpreet118/glamnest.git",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 90 } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white px-6 md:px-20 py-20">

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
      >
        My Projects
      </motion.h1>

      {/* Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center"

      >
        {ProjectData.map((proj, index) => (
          <motion.div
            key={index}
            variants={card}
            whileHover={{ y: -8, scale: 1.03 }}
            className="group bg-gray-900/60 backdrop-blur-md border border-gray-700 hover:border-cyan-400 rounded-2xl overflow-hidden shadow-lg hover:shadow-cyan-500/20 transition-all duration-500 flex flex-col"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={proj.img}
                alt={proj.projectName}
                className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">

              {/* Title + Badge */}
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-semibold text-cyan-400">
                  {proj.projectName}
                </h2>

                <span className="text-[10px] px-2 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300">
                  {proj.info}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed flex-grow">
                {proj.des}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-4">
                {proj.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-cyan-500/10 border border-cyan-500/30 px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Dates */}
              <div className="flex justify-between items-center mt-5 text-xs text-gray-400 border-t border-gray-700 pt-3">
                <span>{proj.startDate}</span>
                <span>→ {proj.endDate}</span>
              </div>

              {/* Links */}
              <div className="flex justify-between mt-5">

                <a
                  href={proj.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition"
                >
                  <Github size={18} /> Code
                </a>

                {proj.deploymentLink && (
                  <a
                    href={proj.deploymentLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition"
                  >
                    <Globe size={18} /> Live
                  </a>
                )}

              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
