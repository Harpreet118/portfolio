import React, { useState } from "react";
import { Github, Linkedin, Twitter, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-950/80 backdrop-blur-md fixed w-full z-50 shadow-lg border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl merriweather font-bold text-emerald-400 tracking-tight">
          HK
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <button className="px-4 py-2 bg-emerald-600 text-white merriweather rounded-md hover:bg-emerald-500 transition transform hover:scale-105">
            Download Resume
          </button>

          <div className="flex items-center space-x-4">
            <a
              href="https://github.com"
              className="text-gray-400 hover:text-emerald-400 transition"
            >
              <Github className="w-7 h-7" />
            </a>
            <a
              href="https://linkedin.com"
              className="text-gray-400 hover:text-emerald-400 transition"
            >
              <Linkedin className="w-7 h-7" />
            </a>
            <a
              href="https://twitter.com"
              className="text-gray-400 hover:text-emerald-400 transition"
            >
              <Twitter className="w-7 h-7" />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 hover:text-emerald-400 transition"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-950 border-t border-gray-800 shadow-inner">
          <div className="flex flex-col items-center py-4 space-y-4">
            <button className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-500 transition transform hover:scale-105">
              Download Resume
            </button>

            <div className="flex space-x-6">
              <a
                href="https://github.com"
                className="text-gray-400 hover:text-emerald-400 transition"
              >
                <Github className="w-7 h-7" />
              </a>
              <a
                href="https://linkedin.com"
                className="text-gray-400 hover:text-emerald-400 transition"
              >
                <Linkedin className="w-7 h-7" />
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-400 hover:text-emerald-400 transition"
              >
                <Twitter className="w-7 h-7" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
