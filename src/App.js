import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";
import styled from "@emotion/styled";

function App() {
  return (
    <Router>
      <Wrapper>
        <AnimatedRoutes />
      </Wrapper>
    </Router>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
`;
