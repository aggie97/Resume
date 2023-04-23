import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";
import Main from "./pages/main/main";
import { useState } from "react";
import styled from "@emotion/styled";

function App() {
  const [isNavMode, setIsNavMode] = useState(false);
  return (
    <Wrapper>
      <Router>
        <Main isNavMode={isNavMode} setIsNavMode={setIsNavMode} />
        <AnimatedRoutes />
      </Router>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
`;
