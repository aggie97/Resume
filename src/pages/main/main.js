import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { css } from "@emotion/react";
import { useDarkMode } from "../../App";

const Main = ({ isnavmode: isNavMode, setIsNavMode }) => {
  const location = useLocation();
  const navigator = useNavigate();
  const [isDarkMode, toggleMode] = useDarkMode();

  useEffect(() => {
    setIsNavMode(() => location.pathname !== `/`);
  }, [location.pathname, setIsNavMode]);

  const toggleDarkMode = () => {
    toggleMode((prev) => !prev);
  };

  return (
    <Wrappper isDarkMode={isDarkMode} isnavmode={isNavMode}>
      <Content>
        <Profile isnavmode={isNavMode}>
          <Intro isnavmode={isNavMode}>
            <img src={`${process.env.PUBLIC_URL}/dev3d.png`} alt="developer" />
          </Intro>
          <button onClick={() => navigator(`/`)}>Aggie</button>
        </Profile>
        <Nav>
          <LinkTo
            onClick={() => {
              navigator(`/resume`);
            }}
          >
            Resume
          </LinkTo>
          <LinkTo
            onClick={() => {
              navigator(`/portfolio`);
            }}
          >
            Portfolio
          </LinkTo>
        </Nav>
        <Footer>
          <Icons to="https://velog.io/@4ggie97" title="Blog" target="_blank">
            <img
              src={`${process.env.PUBLIC_URL}/logo/symbols.png`}
              alt="velog"
            />
          </Icons>
          <Icons to="https://github.com/aggie97" title="Github" target="_blank">
            <img
              src={`${process.env.PUBLIC_URL}/logo/github.png`}
              alt="github"
            />
          </Icons>
          <Icons to="mailto:4ggie97@gmail.com" title="Gmail" target="_blank">
            <img
              src={`${process.env.PUBLIC_URL}/logo/gmail-logo.png`}
              alt="gmail"
            />
          </Icons>
        </Footer>
      </Content>
      <ToggleDarkMode
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 1 }}
        onClick={toggleDarkMode}
      >
        {isDarkMode ? (
          <img src={`${process.env.PUBLIC_URL}/sun.png`} alt="darkmode" />
        ) : (
          <img src={`${process.env.PUBLIC_URL}/moon.png`} alt="darkmode" />
        )}
      </ToggleDarkMode>
      <img
        style={{ display: "none" }}
        src={`${
          isDarkMode
            ? `${process.env.PUBLIC_URL}/summer.jpeg`
            : `${process.env.PUBLIC_URL}/summer-dark.jpeg`
        }`}
        alt="reverse-prefer-color"
      />
    </Wrappper>
  );
};

export default Main;

const Wrappper = styled(motion.div)`
  width: ${(props) => (props.isnavmode ? "300px" : "100%")};
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  box-shadow: 0 5px 15px 10px #0002;
  ${(props) =>
    props.isDarkMode
      ? `
          background: url("${process.env.PUBLIC_URL}/summer-dark.jpeg");
        `
      : `
          background: url("${process.env.PUBLIC_URL}/summer.jpeg");
        `};

  background-position: center;
  background-size: cover;

  @media (max-width: 859px) {
    width: ${(props) => (props.isnavmode ? "0px" : "100%")};
    > div {
      opacity: ${(props) => (props.isnavmode ? "0" : "1")};
      transition: opacity ${(props) => (props.isnavmode ? "0.1s" : "0.5s")} ease
        ${(props) => props.isnavmode || "0.5s"};
    }
  }
  transition: width 0.5s ease, background 0.5s ease;
`;

const ToggleDarkMode = styled(motion.div)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  :hover {
    background-color: rgba(124, 124, 124, 0.5);
  }
  transition: all 0.2s ease;

  img {
    width: 2rem;
    height: 2rem;
    transition: all 0.3s ease;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  background-color: #2228;
  border-radius: 1.5rem;
  padding: 3rem 1rem;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Profile = styled.div`
  text-align: center;
  button {
    background-color: transparent;
    border: none;
    color: #fff;
    font-size: 2rem;
    font-weight: 600;
    :hover {
      ${({ isnavmode }) =>
        isnavmode
          ? css`
              cursor: pointer;
              text-decoration: underline;
            `
          : css`
              cursor: default;
            `}
    }
  }
`;

const Intro = styled.div`
  text-align: center;
  margin: 0 auto;
  font-size: ${(props) => (props.isnavmode ? "1.25rem" : "1.5rem")};
  transition: font-size 0.5s ease-in-out;
  max-width: 13rem;
  border-radius: 30%;
  overflow: hidden;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
`;

const LinkTo = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  background-color: transparent;
  border-radius: 0.5rem;
  font-size: 1.5em;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const Icons = styled(Link)`
  border-radius: 0.5rem;
  width: 3rem;
  padding: 0.5rem;
  :hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;
