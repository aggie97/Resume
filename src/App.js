import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";
import Main from "./pages/main/main";
import { useState } from "react";
import styled from "@emotion/styled";

function App() {
  const [isNavMode, setIsNavMode] = useState(false);
  return (
    <Router>
      <Wrapper>
        <Main isnavmode={isNavMode} setIsNavMode={setIsNavMode} />
        <AnimatedRoutes />
      </Wrapper>
    </Router>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
`;
