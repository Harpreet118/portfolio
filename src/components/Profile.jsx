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
          Web Developer & Cyber Security Enthusiast
        </h2>

        <p className="text-gray-400 leading-relaxed max-w-md">
          Passionate about crafting secure, scalable web applications and protecting digital systems.
          Experienced in full-stack development with strong cybersecurity fundamentals.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 pt-4">
          <motion.a
            whileHover={{ scale: 1.1, boxShadow: "0 0 25px rgba(6,182,212,0.8)" }}
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
              whileHover={{ scale: 1.2, rotate: 10, backgroundColor: "rgb(6 182 212 / 0.3)" }}
              className="p-3 bg-gray-800 rounded-full transition-all"
            >
              <Icon className="w-5 h-5" />
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* 💫 Right Section */}
      <motion.div
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0 z-10"
      >
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 1.5, -1.5, 0] }}
          transition={{ repeat: Infinity, duration: 6 }}
          className="relative"
        >
          <motion.img
            src="https://res.cloudinary.com/dzun1wqhd/image/upload/v1768033619/WhatsApp_Image_2026-01-03_at_7.20.21_PM_j32gx8.jpg"
            alt="Profile"
            className="rounded-full w-72 h-72 md:w-80 md:h-80 border-4 border-cyan-400 shadow-[0_0_40px_rgba(6,182,212,0.6)]"
            whileHover={{ scale: 1.08 }}
          />

          <motion.div
            className="absolute inset-0 rounded-full border-4 border-cyan-400 opacity-30"
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.1, 0.3] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
