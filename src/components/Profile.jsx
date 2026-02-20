import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white px-6 md:px-20 py-10 overflow-hidden">

      {/* Animated Gradient Blobs */}
      <motion.div
        className="absolute top-0 left-0 w-72 h-72 md:w-96 md:h-96 bg-cyan-500/20 rounded-full blur-3xl"
        animate={{ x: [0, 80, 0], y: [0, 60, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-72 h-72 md:w-96 md:h-96 bg-blue-600/20 rounded-full blur-3xl"
        animate={{ x: [0, -60, 0], y: [0, -80, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* LEFT SECTION */}
<motion.div
  initial={{ x: -80, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 1 }}
  className="w-full md:w-1/2 flex flex-col justify-start items-center md:items-start text-center md:text-left space-y-6 px-4 md:px-0 pt-20 md:pt-0"
>
  {/* Name */}
  <motion.h1
    className="text-3xl sm:text-8xl md:text-6xl lg:text-7xl font-extrabold leading-snug break-words bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent"
  >
    Harpreet Kaur
  </motion.h1>

  {/* Title */}
  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-300">
    Full Stack Developer
  </h2>

  {/* Description */}
  <p className="text-gray-400 leading-relaxed max-w-md mx-auto md:mx-0 text-base sm:text-lg md:text-lg lg:text-xl">
    I am a passionate and detail-oriented Full Stack Developer with strong expertise in building scalable, high-performance web applications. I specialize in designing responsive frontends and developing secure, optimized backends.
  </p>

  {/* Buttons */}
  <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start w-full">
    <Link to="/projects" className="w-full sm:w-auto">
      <motion.button
        whileHover={{ scale: 1.1, boxShadow: "0 0 25px rgba(6,182,212,0.6)" }}
        className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full font-semibold w-full sm:w-auto"
      >
        View Projects
      </motion.button>
    </Link>

    <Link to="/contact" className="w-full sm:w-auto">
      <motion.button
        whileHover={{ scale: 1.1, backgroundColor: "rgb(34 211 238)", color: "#000" }}
        className="px-6 py-3 border border-cyan-400 rounded-full font-semibold text-cyan-400 w-full sm:w-auto"
      >
        Contact Me
      </motion.button>
    </Link>
  </div>

  {/* Social Icons */}
  <div className="flex gap-5 pt-6 justify-center md:justify-start">
    {[Github, Linkedin, Mail].map((Icon, i) => (
      <motion.a
        key={i}
        whileHover={{ scale: 1.2 }}
        className="p-3 bg-gray-800 rounded-full transition-all"
      >
        <Icon className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
      </motion.a>
    ))}
  </div>
</motion.div>

      {/* RIGHT IMAGE */}
      <motion.div
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0 z-10"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 5 }}
          className="relative flex items-center justify-center"
        >
          <motion.div
            className="relative z-10 w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full p-2 bg-gradient-to-br from-cyan-400 to-blue-600"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="https://res.cloudinary.com/dzun1wqhd/image/upload/v1769776641/WhatsApp_Image_2026-01-03_at_7.20.21_PM_oevkt6.jpg"
              alt="Profile"
              className="w-full h-full object-cover rounded-full border-4 border-gray-900"
            />
          </motion.div>

          <motion.div
            className="absolute w-72 h-72 md:w-80 md:h-80 rounded-full border border-cyan-400/30"
            animate={{ scale: [1, 1.12, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}