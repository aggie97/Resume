import React from "react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";

const Container = styled(motion.div)`
  width: calc(100vw - 21.75rem);
  margin: 1.5rem 1.5rem 1.5rem 20.25rem;
  padding: 1.5rem;
  border: 1px solid black;
  flex: 1;
`;

const Wrapper = ({ children }) => {
  return (
    <Container
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2 }}
    >
      {children}
    </Container>
  );
};

export default Wrapper;
