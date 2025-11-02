import React from "react";
import { motion } from "framer-motion";
import { Github, Globe } from "lucide-react";

export default function Project() {
  const ProjectData = [
    {
      projectName: "PortFolio",
      img: "https://www.aimshop.com/cdn/shop/products/LinkAirTempSensor_IAT1-8.png?v=1617964837&width=416",
      des: "A modern portfolio website built with React and TailwindCSS to showcase my projects and skills.",
      tech: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Lucide Icons"],
      startDate: "02-Oct-2025",
      endDate: "31-Oct-2025",
      info: "Frontend Project",
      githubLink: "https://github.com/Manoj-Dev/Portfolio",
      deploymentLink: "https://manoj-dev.github.io/Portfolio/",
    },
    {
      projectName: "E-Book",
      des: "An online eBook platform allowing users to browse, read, and manage digital books with cloud storage.",
      tech: [
        "React",
        "NodeJs",
        "ExpressJs",
        "MongoDB",
        "Cloudinary",
        "Framer Motion",
      ],
      img: "https://www.aimshop.com/cdn/shop/products/LinkAirTempSensor_IAT1-8.png?v=1617964837&width=416",
      startDate: "05-Nov-2025",
      endDate: "07-April-2026",
      deploymentLink: "https://manoj-dev.github.io/Portfolio/",
      info: "MERN Stack Project",
      githubLink: "https://github.com/Manoj-Dev/Portfolio",
    },
    {
      projectName: "Messenger App",
      img: "https://www.aimshop.com/cdn/shop/products/LinkAirTempSensor_IAT1-8.png?v=1617964837&width=416",
      deploymentLink: "https://manoj-dev.github.io/Portfolio/",
      des: "Real-time chat application with user authentication and media sharing.",
      tech: [
        "React",
        "NodeJs",
        "ExpressJs",
        "MongoDB",
        "Socket.io",
        "Tailwind CSS",
      ],
      startDate: "02-May-2026",
      info: "Full Stack Project",
      githubLink: "https://github.com/Manoj-Dev/Portfolio",
      endDate: "19-Sep-2026",
    },
    {
      projectName: "Task Manager",
      img: "https://www.aimshop.com/cdn/shop/products/LinkAirTempSensor_IAT1-8.png?v=1617964837&width=416",
      des: "A task management app that helps users create, assign, and track daily tasks efficiently.",
      tech: [
        "React",
        "NodeJs",
        "ExpressJs",
        "MongoDB",
        "Tailwind CSS",
        "Framer Motion",
      ],
      startDate: "15-Sep-2026",
      endDate: "10-Nov-2026",
      info: "MERN Stack Project",
      githubLink: "https://github.com/Manoj-Dev/Portfolio",
      deploymentLink: "https://manoj-dev.github.io/Portfolio/",
    },
  ];

  // Animation Variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80 } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white px-6 md:px-20 py-16 overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
      >
        My Projects
      </motion.h1>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10"
      >
        {ProjectData.map((proj, index) => (
          <motion.div
            key={index}
            variants={card}
            whileHover={{ scale: 1.05, rotateY: 3 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-gray-900/60 backdrop-blur-md border border-gray-700 hover:border-cyan-400 rounded-2xl overflow-hidden shadow-lg hover:shadow-cyan-500/20 transition-all duration-500"
          >
            <motion.img
              src={proj.img}
              alt={proj.projectName}
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
            />

            <div className="p-6 space-y-3">
              <h2 className="text-2xl font-semibold text-cyan-400">
                {proj.projectName}
              </h2>
              <p className="text-gray-300 text-sm">{proj.des}</p>

              <div className="flex flex-wrap gap-2 mt-2">
                {proj.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-cyan-500/10 border border-cyan-500/30 px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center mt-4 text-sm text-gray-400">
                <span>{proj.startDate}</span>
                <span>→ {proj.endDate}</span>
              </div>

              <div className="flex justify-between mt-4">
                <a
                  href={proj.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  <Github size={18} /> Code
                </a>
                <a
                  href={proj.deploymentLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <Globe size={18} /> Live
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
