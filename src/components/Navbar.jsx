import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Download, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const socialLinks = [
    {
      icon: Github,
      url: "https://github.com/YOUR_USERNAME",
    },
    {
      icon: Linkedin,
      url: "https://linkedin.com/in/YOUR_USERNAME",
    },
  ];

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed w-full z-50 backdrop-blur-md border-b border-emerald-500/30 transition-all duration-500
      ${scrolled ? "bg-gray-950/90 shadow-xl" : "bg-gray-950/70"}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-emerald-400">HK.</h1>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">

          {/* Resume */}
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 
            text-white rounded-lg transition"
          >
            <Download size={18} /> Resume
          </a>

          {/* Social */}
          {socialLinks.map((item, i) => (
            <a
              key={i}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-emerald-400 transition"
            >
              <item.icon size={22} />
            </a>
          ))}
        </div>

        {/* Mobile button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="md:hidden bg-gray-950"
          >
            <div className="flex flex-col items-center gap-5 py-6">

              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-2 px-4 py-2 bg-emerald-500 text-white rounded-lg"
              >
                <Download size={18} /> Resume
              </a>

              <div className="flex gap-6">
                {socialLinks.map((item, i) => (
                  <a
                    key={i}
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-400 hover:text-emerald-400"
                  >
                    <item.icon size={26} />
                  </a>
                ))}
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
