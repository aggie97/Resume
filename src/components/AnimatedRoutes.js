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
        <Route path={`${process.env.PUBLIC_URL}/`} element={<></>} />
        <Route
          path={`${process.env.PUBLIC_URL}/portfolio`}
          element={<Portfolio />}
        />
        <Route path={`${process.env.PUBLIC_URL}/resume`} element={<Resume />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
