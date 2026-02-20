import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Tech from "./components/Tech";
import Expre from "./components/Expre";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PageNotFound from "./components/PageNotFound";

export default function App() {
  return (
    <BrowserRouter>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        <Navbar />
        {/* Navbar common for all pages */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Profile />
                <Tech />
                <Expre />
                <Project />
                <Contact />
              </>
            }
          />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}