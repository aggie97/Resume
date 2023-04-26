import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
const Main = ({ isnavmode: isNavMode, setIsNavMode }) => {
  const location = useLocation();

  useEffect(() => {
    setIsNavMode(() => location.pathname !== "/");
  }, [location.pathname, setIsNavMode]);

  return (
    <Wrappper isnavmode={isNavMode}>
      <Content>
        <Intro isnavmode={isNavMode}>
          안녕하세요!
          <br /> 프론트 엔드 개발자 김민겸입니다.
        </Intro>
        <Nav>
          <LinkTo to="/resume">Resume</LinkTo>
          <LinkTo to="/portfolio">Portfolio</LinkTo>
        </Nav>
        <Footer>
          <Link to="https://velog.io/@4ggie97" title="Blog" target="_blank">
            Velog
          </Link>
          <Link to="https://github.com/aggie97" title="Github" target="_blank">
            Github
          </Link>
          <Link to="https://velog.io/@4ggie97" title="Gmail" target="_blank">
            Gmail
          </Link>
        </Footer>
      </Content>
    </Wrappper>
  );
};

export default Main;

const Wrappper = styled(motion.div)`
  width: ${(props) => (props.isnavmode ? "300px" : "100%")};

  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: antiquewhite;
  transition: width 0.5s ease-in-out;
  position: fixed;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
`;

const Intro = styled.h1`
  text-align: center;
  margin: 0;
  font-size: ${(props) => (props.isnavmode ? "1.25rem" : "1.5rem")};
  transition: font-size 0.5s ease-in-out;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
`;

const LinkTo = styled(Link)`
  padding: 0.75rem 1.25rem;
  border-radius: 0.5rem;
  font-size: 1.5em;
  text-decoration: none;
  color: #222;

  :hover {
    text-decoration: underline;
  }
`;

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;
