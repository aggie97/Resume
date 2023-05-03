import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const Wrapper = ({ children }) => {
  return (
    <>
      <Container
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75 }}
        exit={{
          opacity: 0,
          transition: { delay: 0 },
        }}
      >
        {children}
      </Container>
    </>
  );
};

const Container = styled(motion.div)`
  max-width: 80rem;
  min-width: 80rem;
  width: 100%;
  margin: 1.5rem;
  padding: 1.5rem 1.5rem 1.5rem 25rem;

  @media (max-width: 80rem) {
    min-width: 100%;
    width: calc(100vw - 21.5rem);
    margin: 1.5rem auto;
    padding-left: 20rem;
    transition: padding 0.5s ease;
  }

  @media (max-width: 859px) {
    width: 100%;

    padding: 1.5rem;
    transition: padding 0.5s ease;
  }
  transition: padding 0.5s ease;
`;

export default Wrapper;
