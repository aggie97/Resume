import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Resume from "../pages/resume/resume";
import Portfolio from "../pages/portfolio/portfolio";
import { AnimatePresence } from "framer-motion";
import Main from "../pages/main/main";

const AnimatedRoutes = () => {
  const location = useLocation();
  const [isNavMode, setIsNavMode] = useState(false);

  const handleNavMode = React.useCallback(() => {
    setIsNavMode(location.pathname !== "/");
  }, [location]);

  return (
    <AnimatePresence>
      <Main
        isnavmode={isNavMode ? "true" : "false"}
        setIsNavMode={handleNavMode}
      />
      <Routes location={location} key={location.pathname}>
        <Route path={"/"} element={<></>} />
        <Route
          path={`/portfolio`}
          element={<Portfolio content={location.pathname} />}
        />
        <Route
          path={`/resume`}
          element={<Resume content={location.pathname} />}
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
