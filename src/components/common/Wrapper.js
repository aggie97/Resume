import React from "react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";

const Container = styled(motion.div)`
  max-width: 65rem;
  margin: 1.5rem 1.5rem 1.5rem 25rem;
  padding: 1.5rem;
  flex: 1;
`;

const Wrapper = ({ children }) => {
  return (
    <Container
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      exit={{ opacity: 0, transition: { delay: 0 } }}
    >
      {children}
    </Container>
  );
};

export default Wrapper;
