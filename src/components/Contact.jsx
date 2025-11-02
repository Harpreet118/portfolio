import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

export default function Contact() {
  const [data, setData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const ContactData = [
    { label: "Name", placeholder: "Enter your name", type: "text", icon: User, keyName: "name" },
    { label: "Email Id", placeholder: "Enter your email", type: "email", icon: Mail, keyName: "email" },
    { label: "Mobile No", placeholder: "Enter your mobile number", type: "tel", icon: Phone, keyName: "mobile" },
    { label: "Message", placeholder: "Enter your message...", type: "textarea", icon: MessageCircle, keyName: "message" },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/itsharpreet118", color: "hover:text-gray-300" },
    { icon: Linkedin, href: "https://linkedin.com/in/itsharpreet118", color: "hover:text-blue-400" },
    { icon: Twitter, href: "https://twitter.com/", color: "hover:text-sky-400" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setData({ name: "", email: "", mobile: "", message: "" });
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-neutral-950 text-white px-6 py-16 overflow-hidden relative">
      {/* Floating background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(56,189,248,0.15),rgba(255,255,255,0))] blur-3xl" />

      {/* LEFT SECTION (Info Table) */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 space-y-8 px-4 md:px-12 z-10"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
          Let’s Connect
        </h1>

        <p className="text-gray-300 text-lg leading-relaxed">
          Have a project or just want to say hi? Fill out the form or reach out directly.
        </p>

        {/* Info "Table" */}
        <div className="bg-gray-900/60 rounded-2xl border border-gray-800 p-6 backdrop-blur-md shadow-xl space-y-4">
          <div className="flex items-center gap-3">
            <Mail className="text-cyan-400 w-5 h-5" />
            <span>itsharpreet118@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="text-cyan-400 w-5 h-5" />
            <span>+91 98126 63301</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="text-cyan-400 w-5 h-5" />
            <span>Haryana, India</span>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-5 mt-6">
          {socialLinks.map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 8 }}
              whileTap={{ scale: 0.9 }}
              className={`p-3 rounded-full bg-gray-800/60 border border-gray-700 text-gray-400 transition-all duration-300 ${social.color}`}
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* RIGHT SECTION (Form) */}
      <motion.form
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        onSubmit={handleSubmit}
        className="w-full md:w-1/2 bg-gray-900/70 border border-gray-800 rounded-3xl p-8 md:p-12 mt-10 md:mt-0 backdrop-blur-2xl shadow-2xl relative z-10 overflow-hidden"
      >
        {/* Animated Gradient Border */}
        <motion.div
          className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 opacity-40"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          style={{ backgroundSize: "200% 200%" }}
        />

        <div className="relative z-10 space-y-6">
          {ContactData.map((field, index) => (
            <motion.div key={index} whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
              <label className="text-sm text-gray-400">{field.label}</label>
              <div className="flex items-center gap-3 bg-gray-800/80 border border-gray-700 rounded-xl px-4 py-3 mt-2 focus-within:ring-2 focus-within:ring-cyan-500 transition-all duration-300">
                <field.icon className="text-cyan-400 w-5 h-5" />
                {field.type === "textarea" ? (
                  <textarea
                    name={field.keyName}
                    placeholder={field.placeholder}
                    value={data[field.keyName]}
                    onChange={handleChange}
                    className="bg-transparent w-full text-gray-200 outline-none resize-none h-24 placeholder-gray-500"
                  />
                ) : (
                  <input
                    type={field.type}
                    name={field.keyName}
                    placeholder={field.placeholder}
                    value={data[field.keyName]}
                    onChange={handleChange}
                    className="bg-transparent w-full text-gray-200 outline-none placeholder-gray-500"
                  />
                )}
              </div>
            </motion.div>
          ))}

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 25px rgba(56,189,248,0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            className="relative w-full mt-6 py-3 font-semibold rounded-xl flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-blue-500 hover:to-purple-600 transition-all"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                className="border-2 border-white/60 border-t-transparent w-6 h-6 rounded-full"
              ></motion.div>
            ) : (
              <>
                <Send className="w-5 h-5" /> Send Message
              </>
            )}
          </motion.button>

          {isSubmitted && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-green-400 font-medium mt-4"
            >
              ✅ Message Sent Successfully!
            </motion.p>
          )}
        </div>
      </motion.form>
    </div>
  );
}
