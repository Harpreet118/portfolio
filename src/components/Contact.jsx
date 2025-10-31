import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => setIsSubmitting(false), 2000);
  };

  // Parent animation container for staggered children
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.25, delayChildren: 0.3 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white overflow-hidden px-6">

      {/* Soft Floating Orbs Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-600/10 blur-2xl"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.8 + 0.4,
            }}
            animate={{
              y: [0, 50, -50, 0],
              x: [0, -30, 30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
            style={{
              width: Math.random() * 120 + 80,
              height: Math.random() * 120 + 80,
            }}
          />
        ))}
      </div>

      {/* Animated Heading */}
      <motion.h1
        variants={item}
        initial="hidden"
        animate="show"
        className="text-5xl md:text-6xl font-extrabold mb-10 text-center bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(56,189,248,0.4)]"
      >
       Get in <span className="text-white">Touch</span>
      </motion.h1>

      {/* Contact Card */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        whileHover={{
          rotateX: 5,
          rotateY: -5,
          scale: 1.03,
          transition: { type: "spring", stiffness: 120 },
        }}
        className="relative bg-gray-900/70 border border-gray-800 backdrop-blur-xl rounded-3xl p-8 md:p-12 w-full max-w-md shadow-2xl overflow-hidden"
      >
        {/* Glowing Gradient Border Animation */}
        <motion.div
          className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 opacity-50"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ backgroundSize: "200% 200%" }}
        />

        {/* Inner Content */}
        <motion.div
          variants={item}
          className="relative z-10 space-y-6 text-center"
        >
          <motion.h2
            variants={item}
            className="text-2xl font-semibold text-cyan-400"
          >
            Harpreet Kaur
          </motion.h2>

          <motion.p variants={item} className="text-gray-300">
            Email:{" "}
            <a
              href="mailto:itsharpreet118@gmail.com"
              className="text-blue-400 hover:text-purple-400 transition-all duration-300 underline-offset-4 hover:underline"
            >
              itsharpreet118@gmail.com
            </a>
          </motion.p>

          {/* Message Box */}
          <motion.div variants={item} className="flex flex-col gap-3 mt-6">
            <label className="text-sm text-gray-400 tracking-wide">
              Your Message
            </label>
            <motion.textarea
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              placeholder="Type your message..."
              className="bg-gray-800/80 border border-gray-700 rounded-xl p-3 text-gray-200 resize-none h-28 focus:outline-none focus:ring-2 focus:ring-cyan-500/70 placeholder-gray-500"
            ></motion.textarea>
          </motion.div>

          {/* Animated Submit Button */}
          <motion.button
            onClick={handleSubmit}
            variants={item}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 25px rgba(56,189,248,0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={`mt-4 w-full font-semibold py-3 rounded-xl transition-all duration-300 relative overflow-hidden ${
              isSubmitting
                ? "bg-gradient-to-r from-purple-600 to-blue-600 cursor-not-allowed"
                : "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-blue-500 hover:to-purple-600"
            }`}
          >
            {isSubmitting ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                className="border-2 border-white/60 border-t-transparent w-6 h-6 rounded-full mx-auto"
              ></motion.div>
            ) : (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="tracking-wide"
              >
                Send Message
              </motion.span>
            )}

            {/* Pulsing Glow Effect */}
            {!isSubmitting && (
              <motion.div
                className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/40 to-blue-600/30 opacity-0"
                whileHover={{
                  opacity: 0.4,
                  scale: 1.1,
                  transition: { duration: 0.5 },
                }}
              />
            )}
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}
