import React from "react";
import { motion } from "framer-motion";

export default function Tech() {
  const techStack = [
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "Docker",
    "Git",
    "Postman",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white flex flex-col items-center justify-center px-6 py-16 overflow-hidden">
      
      {/* Animated Title */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl md:text-6xl font-extrabold mb-12 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent"
      >
        Technology Stack
      </motion.h1>

      {/* Tech Cards Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        {techStack.map((tech, index) => (
          <motion.div
            key={tech}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index, duration: 0.5 }}
            whileHover={{
              scale: 1.1,
              rotate: 2,
              boxShadow: "0px 0px 20px rgba(0, 255, 255, 0.6)",
            }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-lg p-6 text-center font-semibold text-lg cursor-pointer border border-gray-700 hover:border-cyan-400 transition-all duration-300"
          >
            <motion.span
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 3 + index * 0.2,
                ease: "easeInOut",
              }}
              className="block"
            >
              {tech}
            </motion.span>
          </motion.div>
        ))}
      </motion.div>

      {/* Floating Glowing Circles for Background Effect */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-cyan-500 rounded-full opacity-20 blur-3xl"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 bg-purple-600 rounded-full opacity-20 blur-3xl"
        animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
      />
    </div>
  );
}
