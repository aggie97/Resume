import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { css } from "@emotion/react";
import { useDarkMode } from "../../App";

let flag = false;
const Main = ({ isnavmode: isNavMode, setIsNavMode }) => {
  const location = useLocation();
  const navigator = useNavigate();
  const [isDarkMode, toggleMode] = useDarkMode();

  useEffect(() => {
    if (!flag) {
      navigator("./resume");
      flag = true;
    }
  }, [navigator]);

  useEffect(() => {
    setIsNavMode(() => location.pathname !== `/`);
  }, [location.pathname, setIsNavMode]);

  const toggleDarkMode = () => {
    toggleMode((prev) => !prev);
  };

  return (
    <Wrappper isDarkMode={isDarkMode} isnavmode={isNavMode}>
      <Content isnavmode={isNavMode}>
        <Profile isnavmode={isNavMode}>
          <Intro isnavmode={isNavMode}>
            <img src={`${process.env.PUBLIC_URL}/dev3d.png`} alt="developer" />
          </Intro>
          <button onClick={() => navigator(`/`)}>Aggie</button>
        </Profile>
        <Nav>
          <LinkTo
            isActive={location.pathname === "/resume"}
            onClick={() => {
              navigator(`/resume`);
            }}
          >
            Resume
          </LinkTo>
          <LinkTo
            isActive={location.pathname === "/portfolio"}
            onClick={() => {
              navigator(`/portfolio`);
            }}
          >
            Portfolio
          </LinkTo>
        </Nav>
        <Footer isnavmode={isNavMode}>
          <Icons>
            <Icon to="https://velog.io/@4ggie97" title="Blog" target="_blank">
              <img
                src={`${process.env.PUBLIC_URL}/logo/symbols.png`}
                alt="velog"
              />
            </Icon>
            <Icon
              to="https://github.com/aggie97"
              title="Github"
              target="_blank"
            >
              <img
                src={`${process.env.PUBLIC_URL}/logo/github.png`}
                alt="github"
              />
            </Icon>
            <Icon to="mailto:4ggie97@gmail.com" title="Gmail" target="_blank">
              <img
                src={`${process.env.PUBLIC_URL}/logo/gmail-logo.png`}
                alt="gmail"
              />
            </Icon>
          </Icons>
          <GitGrass>
            <img
              decoding="async"
              src="https://ghchart.rshah.org/aggie97"
              alt="github_contribution_graph"
            />
          </GitGrass>
        </Footer>
      </Content>
      <ToggleButtonBox onClick={toggleDarkMode}>
        {isDarkMode && (
          <img src={`${process.env.PUBLIC_URL}/moon.png`} alt="darkmode" />
        )}{" "}
        {!isDarkMode && (
          <img src={`${process.env.PUBLIC_URL}/sun.png`} alt="lightmode" />
        )}
      </ToggleButtonBox>
      <BackgroundImageBox>
        <picture>
          <source
            className={`backgroundImage ${isDarkMode ? "gone" : "come"}`}
            srcSet={`${process.env.PUBLIC_URL}/summer.avif`}
            type="image/avif"
          />
          <source
            className={`backgroundImage ${isDarkMode ? "gone" : "come"}`}
            srcSet={`${process.env.PUBLIC_URL}/summer.webp`}
            type="image/webp"
          />
          <img
            className={`backgroundImage ${isDarkMode ? "gone" : "come"}`}
            src={`${process.env.PUBLIC_URL}/summer.jpeg`}
            alt=""
          />
        </picture>
        <picture>
          <source
            className={`backgroundImage ${isDarkMode ? "come" : "gone"}`}
            srcSet={`${process.env.PUBLIC_URL}/summer-dark.avif`}
            type="image/avif"
          />
          <source
            className={`backgroundImage ${isDarkMode ? "come" : "gone"}`}
            srcSet={`${process.env.PUBLIC_URL}/summer-dark.webp`}
            type="image/webp"
          />
          <img
            className={`backgroundImage ${isDarkMode ? "come" : "gone"}`}
            src={`${process.env.PUBLIC_URL}/summer-dark.jpeg`}
            alt=""
          />
        </picture>
      </BackgroundImageBox>
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
  box-shadow: 5px 0px 15px 5px rgba(0, 0, 0, 0.5);
  transition: width 0.5s ease;

  @media (max-width: 859px) {
    width: 100%;
    height: ${(props) => (props.isnavmode ? "5rem" : "100vh")};
    background: ${(props) =>
      props.isnavmode && (props.isDarkMode ? "#333" : "#bbb")};
    box-shadow: 0px 5px 15px 5px rgba(0, 0, 0, 0.5);
  }
`;

const Content = styled.div`
  width: 20rem;
  max-width: 90%;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  background-color: #2228;
  border-radius: 1.5rem;
  padding: 3rem 1rem;

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 859px) {
    ${({ isnavmode }) =>
      isnavmode &&
      css`
        width: 100%;
        max-width: 100%;
        flex-direction: row;
        justify-content: space-between;
        gap: 0;
        background-color: transparent;
        padding: 0 1rem;
        img[alt="developer"] {
          display: none;
        }
      `}
  }
`;

const ToggleButtonBox = styled.div`
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

  @keyframes toggleAnime {
    0% {
      opacity: 0;
      transform: rotate(120deg) scale(0.5);
    }
    100% {
      opacity: 1;
      transform: rotate(0deg) scale(1);
    }
  }
  > img {
    width: 2rem;
    height: 2rem;
    animation: toggleAnime 0.5s;
  }

  z-index: 999;
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  button {
    text-align: center;
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
    @media (max-width: 859px) {
      font-size: 1.5rem;
      flex-direction: row;
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

  text-decoration: ${({ isActive }) => (isActive ? "underline" : "none")};

  @media (max-width: 600px) {
    font-size: 1.2em;
  }
`;

const Footer = styled.div`
  width: 100%;
  @media (max-width: 859px) {
    ${({ isnavmode }) =>
      isnavmode &&
      css`
        width: auto;
        * {
          display: none;
        }
      `}
  }
`;

const Icons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const GitGrass = styled.div`
  width: 100%;
  overflow-x: scroll;
`;

const Icon = styled(Link)`
  border-radius: 0.5rem;
  width: 3rem;
  padding: 0.5rem;
  :hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

const BackgroundImageBox = styled.div`
  .backgroundImage {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }

  .come {
    opacity: 1;
    z-index: -2;
  }

  .gone {
    opacity: 0;
    transition: opacity 0.5s ease;
  }
`;
