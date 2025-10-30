import React from "react";
import { motion } from "framer-motion";

export default function Profile() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white px-8 md:px-20 py-10 overflow-hidden">
      
      {/* Left Section - Text */}
      <motion.div
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full md:w-1/2 space-y-6"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
          Harpreet Kaur
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-300">
          MERN Stack Developer & Cyber Security Enthusiast
        </h2>
        <p className="text-gray-400 leading-relaxed max-w-md">
          Passionate about crafting secure, scalable web applications and protecting digital systems. 
          Experienced in full-stack development with a strong foundation in cybersecurity principles.
        </p>

        <div className="flex gap-4 pt-4">
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full font-semibold text-white shadow-lg hover:shadow-cyan-500/50 transition"
          >
            View Projects
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 border border-cyan-400 rounded-full font-semibold text-cyan-400 hover:bg-cyan-400 hover:text-black transition"
          >
            Contact Me
          </motion.a>
        </div>
      </motion.div>

      {/* Right Section - Image */}
      <motion.div
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0"
      >
        <motion.img
          src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg?w=2000"
          alt="Profile"
          className="rounded-full w-72 h-72 object-cover border-4 border-cyan-400 shadow-lg hover:shadow-cyan-500/60 transition-all duration-300 hover:scale-105"
          whileHover={{ rotate: 2 }}
        />
      </motion.div>
    </div>
  );
}
