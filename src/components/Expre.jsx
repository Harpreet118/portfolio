import React from "react";
import { motion } from "framer-motion";

export default function Expre() {
  const data = [
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Google_Play_2022_logo.svg",
      CompanyName: "Sqilco",
      StartDate: "12-March-2024",
      EndDate: "27-Feb-2025",
      Posti: "Internship - MERN Stack Developer",
      Des: "Worked on full-stack web development using MongoDB, Express, React, and Node.js. Developed responsive UI components and optimized backend APIs.",
    },
    {
      logo: "https://hasc.ai/assets/images/logo.png",
      CompanyName: "Hartron Advance Skill Centre",
      StartDate: "04-June-2025",
      EndDate: "Present",
      Posti: "Cyber Secured Web Development Associate",
      Des: "Focused on secure full-stack applications using the MERN stack. Implemented authentication, authorization, and encryption techniques.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white px-6 md:px-20 py-12">
      {/* Header Animation */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"
      >
        Experience
      </motion.h1>

      {/* Cards Section */}
      <div className="flex flex-col space-y-10">
        {data.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative overflow-hidden bg-gray-900/70 backdrop-blur-lg rounded-3xl shadow-xl border border-gray-800 flex flex-col md:flex-row items-center md:items-start gap-8 p-8 hover:shadow-cyan-500/30 hover:-translate-y-2 transition-all duration-500"
          >
            {/* Animated Glow Border */}
            <motion.div
              className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 opacity-0 blur-xl"
              whileHover={{ opacity: 0.25, scale: 1.05 }}
              transition={{ duration: 0.5 }}
            ></motion.div>

            {/* Logo */}
            <motion.img
              src={item.logo}
              alt={item.CompanyName}
              className="w-24 h-24 object-contain z-10"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />

            {/* Text Info */}
            <div className="z-10">
              <h2 className="text-2xl font-bold text-cyan-400 mb-1">
                {item.CompanyName}
              </h2>
              <p className="text-sm text-gray-400 mb-2">
                {item.StartDate} — {item.EndDate}
              </p>
              <p className="text-lg font-medium text-white mb-3">
                {item.Posti}
              </p>
              <p className="text-gray-300 leading-relaxed">{item.Des}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
