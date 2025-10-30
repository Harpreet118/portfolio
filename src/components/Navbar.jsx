import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Twitter, Download, Menu, X } from "lucide-react";
import Profile from "./Profile";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Motion variants
  const menuVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 80, damping: 12 },
    },
    exit: {
      y: -40,
      opacity: 0,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  const iconContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0.6, opacity: 0, y: 10 },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120, damping: 10 },
    },
  };

  // Floating idle animation for icons
  const floatingAnimation = {
    y: [0, -4, 0, 4, 0],
    rotate: [0, 3, 0, -3, 0],
    transition: {
      repeat: Infinity,
      duration: 4,
      ease: "easeInOut",
    },
  };

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 70, damping: 12 }}
      className={`fixed w-full z-50 backdrop-blur-md border-b border-emerald-500/30 transition-all duration-500
        ${
          scrolled
            ? "bg-gray-950/90 shadow-[0_4px_30px_rgba(0,0,0,0.6)]"
            : "bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950/80"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-3xl font-extrabold bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 
          bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-move tracking-tight cursor-pointer"
          whileHover={{ scale: 1.1, rotate: 2 }}
        >
          HK<span className="text-white">.</span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {/* Resume Button */}
          <motion.a
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 12px rgba(16,185,129,0.5)",
            }}
            href="#"
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-600 to-cyan-600 
            text-white rounded-md font-semibold shadow-md border border-emerald-500/40 transition-all"
          >
            <Download className="w-5 h-5" /> Resume
          </motion.a>

          {/* Animated Social Icons */}
          <motion.div
            className="flex items-center space-x-6"
            variants={iconContainer}
            initial="hidden"
            animate="visible"
          >
            {[Github, Linkedin, Twitter].map((Icon, i) => (
              <motion.a
                key={i}
                variants={iconVariants}
                animate={floatingAnimation}
                whileHover={{
                  scale: 1.3,
                  color: "#10b981",
                  textShadow: "0 0 10px rgba(16,185,129,0.8)",
                }}
                transition={{ type: "spring", stiffness: 120 }}
                href="#"
                className="text-gray-400 transition"
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 hover:text-emerald-400 transition"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </motion.button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden bg-gray-950/95 border-t border-emerald-500/30 shadow-inner"
          >
            <div className="flex flex-col items-center py-6 space-y-5">
              <motion.a
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 10px rgba(16,185,129,0.4)",
                }}
                href="#"
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white 
                rounded-md font-semibold shadow-md border border-emerald-500/40 transition-all"
              >
                <Download className="w-5 h-5" /> Resume
              </motion.a>

              <motion.div
                className="flex space-x-6 pt-2"
                variants={iconContainer}
                initial="hidden"
                animate="visible"
              >
                {[Github, Linkedin, Twitter].map((Icon, i) => (
                  <motion.a
                    key={i}
                    variants={iconVariants}
                    animate={floatingAnimation}
                    whileHover={{
                      scale: 1.25,
                      color: "#10b981",
                      textShadow: "0 0 10px rgba(16,185,129,0.8)",
                    }}
                    href="#"
                    className="text-gray-400 transition"
                  >
                    <Icon className="w-7 h-7" />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      
      <style>{`
        @keyframes gradient-move {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-move {
          animation: gradient-move 5s ease infinite;
        }
      `}</style>
      
    </motion.nav>
    
  );
}
