import React from "react";
import { motion } from "framer-motion";

export default function Expre() {
  const data = [
    {
      logo: "https://play-lh.googleusercontent.com/tjk2NFXnJBYHe7a0DDJw_6w3YkMYdMxqtP5RUTXw7OOCXmTUhNR5re7zkV0GEY-CRy6p=w240-h480-rw",
      CompanyName: "Sqilco",
      StartDate: "12-March-2024",
      EndDate: "27-Feb-2025",
      Posti: "Internship - MERN Stack Developer",
      Des: "Worked on full-stack web development using MongoDB, Express, React, and Node.js. Developed responsive UI components and optimized backend APIs.",
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYAsEIiuTpq2VKL32QrfBpW22sLlMH5tY3pg&s",
      CompanyName: "Hartron Advance Skill Centre",
      StartDate: "04-June-2025",
      EndDate: "Present",
      Posti: "Cyber Secured Web Development Associate",
      Des: "Focused on secure full-stack applications using the MERN stack. Implemented authentication, authorization, and encryption techniques.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white px-6 md:px-20 py-16 overflow-hidden">
      {/* Floating Circles Animation */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl"
        animate={{ x: [0, 30, -30, 0], y: [0, 20, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl"
        animate={{ x: [0, -40, 40, 0], y: [0, -30, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"
      >
        Experience
      </motion.h1>

      {/* Experience Timeline Layout */}
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {data.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
            viewport={{ once: true }}
            className="relative bg-gray-900/70 backdrop-blur-xl rounded-3xl border border-gray-800 shadow-xl hover:shadow-cyan-500/30 transition-all duration-500 flex flex-col md:flex-row items-center md:items-start overflow-hidden"
          >
            {/* Left Side - Logo & Circle Connector */}
            <div className="flex flex-col items-center justify-center p-8 md:w-1/3 relative">
              {/* Animated rotating circle around logo */}
              <motion.div
                className="absolute w-28 h-28 rounded-full border-2 border-cyan-500/40"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
              />
              <motion.img
                src={item.logo}
                alt={item.CompanyName}
                className="w-20 h-20 object-contain relative z-10"
                whileHover={{ scale: 1.15, rotate: 15 }}
                transition={{ duration: 0.4 }}
              />

              {/* Vertical timeline line */}
              <div className="hidden md:block absolute right-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-600 opacity-50" />
            </div>

            {/* Right Side - Details */}
            <div className="p-8 md:w-2/3 relative z-10">
              <h2 className="text-2xl font-bold text-cyan-400 mb-1">
                {item.CompanyName}
              </h2>
              <p className="text-sm text-gray-400 mb-2">
                {item.StartDate} — {item.EndDate}
              </p>
              <p className="text-lg font-semibold text-white mb-3">
                {item.Posti}
              </p>
              <p className="text-gray-300 leading-relaxed">{item.Des}</p>

              {/* Animated line highlight under text */}
              <motion.div
                className="h-[2px] mt-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1.2, delay: 0.3 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
