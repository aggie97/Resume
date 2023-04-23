import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Resume from "../pages/resume/resume";
import Portfolio from "../pages/portfolio/portfolio";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<></>} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
