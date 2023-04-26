import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Resume from "../pages/resume/resume";
import Portfolio from "../pages/portfolio/portfolio";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();
  console.log(location);
  console.log(process.env.REACT_APP_PUBLIC_URL);

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path={`${process.env.REACT_APP_PUBLIC_URL}/`} element={<></>} />
        <Route
          path={`${process.env.REACT_APP_PUBLIC_URL}/portfolio`}
          element={<Portfolio content={location.pathname} />}
        />
        <Route
          path={`${process.env.REACT_APP_PUBLIC_URL}/resume`}
          element={<Resume content={location.pathname} />}
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
