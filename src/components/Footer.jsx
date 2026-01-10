import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/itsharpreet118", color: "hover:text-gray-300" },
    { icon: Linkedin, href: "https://linkedin.com/in/itsharpreet118", color: "hover:text-blue-400" },
    { icon: Mail, href: "mailto:itsharpreet118@gmail.com", color: "hover:text-red-400" },
  ];

  return (
    <footer className="relative bg-gradient-to-t from-neutral-950 via-black to-neutral-950 text-gray-300 py-16 px-8 overflow-hidden border-t border-gray-800">
      {/* Glowing Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_10%,rgba(59,130,246,0.15),rgba(255,255,255,0))] blur-2xl" />

      {/* Floating Gradient Orbs */}
      <motion.div
        className="absolute top-10 left-10 w-40 h-40 rounded-full bg-cyan-500/20 blur-3xl"
        animate={{ x: [0, 50, -30, 0], y: [0, -40, 30, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-purple-500/20 blur-3xl"
        animate={{ x: [0, -60, 40, 0], y: [0, 30, -40, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />

      {/* Moving Glow Lines */}
      <motion.div
        className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-40"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-10 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-40"
        animate={{ x: ["100%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
      />

      {/* Content Section */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center text-center gap-8">
        {/* Floating "Let's Connect" Text */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-3xl font-bold tracking-wide"
        >
          Let’s Connect & Collaborate 🤝
        </motion.h2>

        {/* Quote Section */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="max-w-2xl text-gray-400 leading-relaxed text-sm md:text-base"
        >
          “Every line of code is a brushstroke on the canvas of innovation. Let’s create something beautiful together.”
        </motion.p>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex gap-6 mt-6"
        >
          {socialLinks.map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.3,
                rotate: [0, 10, -10, 0],
                boxShadow: "0 0 25px rgba(59,130,246,0.8)",
              }}
              whileTap={{ scale: 0.9 }}
              className={`p-4 rounded-full bg-gray-900/60 border border-gray-700 text-gray-400 transition-all duration-500 shadow-[0_0_10px_rgba(0,0,0,0.5)] ${social.color}`}
            >
              <social.icon className="w-6 h-6" />
            </motion.a>
          ))}
        </motion.div>

        {/* Name & Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-8 text-gray-400 text-sm"
        >
          <p className="font-medium text-white">Harpreet Kaur</p>
          <p className="text-gray-500 mt-1">
            © {new Date().getFullYear()} Crafted with 💜 passion and precision.
          </p>
        </motion.div>
      </div>

      {/* Animated Bottom Border Glow */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-indigo-500"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        style={{ backgroundSize: "200% 200%" }}
      />
    </footer>
  );
}
