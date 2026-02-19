import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Profile() {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white px-8 md:px-20 py-10 overflow-hidden">

      {/* 🌌 Animated Gradient Blobs */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
        animate={{ x: [0, 80, 0], y: [0, 60, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"
        animate={{ x: [0, -60, 0], y: [0, -80, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ✨ Left Section */}
      <motion.div
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 space-y-6 z-10"
      >
        <motion.h1
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent bg-[length:200%_200%]"
        >
          Harpreet Kaur
        </motion.h1>

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-300">
          Full Stack Developer
        </h2>

        <p className="text-gray-400 leading-relaxed max-w-md">
          I am a passionate and detail-oriented Full Stack Developer with strong expertise in building scalable, high-performance web applications. I specialize in designing responsive frontends and developing secure, optimized backends that deliver seamless user experiences.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 pt-4">
          <motion.a
            whileHover={{ scale: 1.1, boxShadow: "0 0 25px rgba(6,182,212,0.6)" }}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full font-semibold"
          >
            View Projects
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.1, backgroundColor: "rgb(34 211 238)", color: "#000" }}
            className="px-6 py-3 border border-cyan-400 rounded-full font-semibold text-cyan-400"
          >
            Contact Me
          </motion.a>
        </div>

        {/* 🌐 Social Icons */}
        <div className="flex gap-5 pt-6">
          {[Github, Linkedin, Mail].map((Icon, i) => (
            <motion.a
              key={i}
              whileHover={{ scale: 1.2 }}
              className="p-3 bg-gray-800 rounded-full transition-all"
            >
              <Icon className="w-5 h-5" />
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* 💼 RIGHT SECTION – CLEAN CIRCULAR OFFICE IMAGE */}
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
          {/* Gradient Circular Frame */}
          <motion.div
            className="relative z-10 w-72 h-72 md:w-80 md:h-80 rounded-full p-2 bg-gradient-to-br from-cyan-400 to-blue-600"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="https://res.cloudinary.com/dzun1wqhd/image/upload/v1769776641/WhatsApp_Image_2026-01-03_at_7.20.21_PM_oevkt6.jpg"
              alt="Profile"
              className="w-full h-full object-cover rounded-full border-4 border-gray-900"
            />
          </motion.div>

          {/* Soft Professional Glow */}
          <motion.div
            className="absolute w-80 h-80 rounded-full border border-cyan-400/30"
            animate={{ scale: [1, 1.12, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
