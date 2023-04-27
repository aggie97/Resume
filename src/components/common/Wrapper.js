import React from "react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";

const Container = styled(motion.div)`
  width: 80rem;

  margin: 1.5rem;
  padding: 1.5rem 1.5rem 1.5rem 25rem;

  @media (max-width: 1029px) {
    max-width: 100%;
    padding-left: 20rem;
    transition: padding 0.5s ease;
  }

  @media (max-width: 859px) {
    margin: 0.5rem;
    padding: 1.5rem;
    transition: padding 0.5s ease;
  }
  transition: padding 0.5s ease;
`;

const Wrapper = ({ children }) => {
  return (
    <Container
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      exit={{ opacity: 0, y: -50, transition: { delay: 0 } }}
    >
      {children}
    </Container>
  );
};

export default Wrapper;
