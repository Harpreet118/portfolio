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
    <div className="relative min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white flex flex-col items-center justify-center px-6 py-20 overflow-hidden">

      {/* Floating Animated Gradient Background Layers */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,255,255,0.15),transparent_50%),radial-gradient(circle_at_bottom_right,rgba(128,0,255,0.15),transparent_50%)]"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "linear",
        }}
      />

      {/* Glowing Floating Blobs */}
      <motion.div
        className="absolute top-10 left-10 w-56 h-56 bg-cyan-500 opacity-20 blur-3xl rounded-full"
        animate={{ y: [0, 40, 0], x: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-64 h-64 bg-purple-600 opacity-20 blur-3xl rounded-full"
        animate={{ y: [0, -40, 0], x: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
      />

      {/* Animated Title */}
      <motion.h1
        initial={{ opacity: 0, y: -60, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-5xl md:text-7xl font-extrabold mb-16 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent tracking-wide drop-shadow-lg"
      >
        Technology Stack
      </motion.h1>

      {/* Grid of Animated Tech Cards */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 z-10"
      >
        {techStack.map((tech, index) => (
          <motion.div
            key={tech}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            whileHover={{
              scale: 1.1,
              rotate: 2,
              boxShadow: "0 0 25px rgba(0, 255, 255, 0.7)",
            }}
            className="relative group p-[2px] rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:shadow-cyan-400/50 transition-all duration-500"
          >
            <div className="bg-gray-900 rounded-2xl py-8 text-center font-semibold text-xl text-gray-200 group-hover:text-cyan-300 transition-all duration-300">
              {/* Ripple / Floating Text Animation */}
              <motion.span
                animate={{ y: [0, -8, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 3 + index * 0.3,
                  ease: "easeInOut",
                }}
              >
                {tech}
              </motion.span>

              {/* Subtle glow ring */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 blur-md"
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(0,255,255,0.4), transparent 70%)",
                }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Floating particles for depth effect */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-cyan-400 rounded-full opacity-10"
          style={{
            width: Math.random() * 8 + 4,
            height: Math.random() * 8 + 4,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 6 + Math.random() * 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  );
}
