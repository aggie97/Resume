import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";
import { ThemeProvider } from "@emotion/react";
import { createContext, useContext, useState } from "react";
import ThemeWrapper from "./components/common/ThemeWrapper";

const theme = {
  lightModeColor: "#111",
  lightModeBackgroundColor: "#fff",

  darkModeColor: "#efefef",
  darkModeBackgroundColor: "#333",
};
const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
  const isDarkMode = useState(
    `${
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    }`
  );

  return (
    <DarkModeContext.Provider value={isDarkMode}>
      {children}
    </DarkModeContext.Provider>
  );
}

export function useDarkMode() {
  const value = useContext(DarkModeContext);
  return value;
}

function App() {
  return (
    <DarkModeProvider>
      <ThemeProvider theme={theme}>
        <Router basename={"/Resume"}>
          <ThemeWrapper>
            <AnimatedRoutes />
          </ThemeWrapper>
        </Router>
      </ThemeProvider>
    </DarkModeProvider>
  );
}

export default App;
