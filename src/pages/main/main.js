import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
const Main = ({ isnavmode: isNavMode, setIsNavMode }) => {
  const location = useLocation();

  useEffect(() => {
    setIsNavMode(
      () => location.pathname !== `${process.env.REACT_APP_PUBLIC_URL}/`
    );
  }, [location.pathname, setIsNavMode]);

  return (
    <Wrappper isnavmode={isNavMode}>
      <Content>
        <Profile>
          <Intro isnavmode={isNavMode}>
            <img
              src={`${process.env.REACT_APP_PUBLIC_URL}/dev3d.png`}
              alt="developer"
            />
          </Intro>
          <h2>Aggie</h2>
        </Profile>
        <Nav>
          <LinkTo to={`${process.env.REACT_APP_PUBLIC_URL}/resume`}>
            Resume
          </LinkTo>
          <LinkTo to={`${process.env.REACT_APP_PUBLIC_URL}/portfolio`}>
            Portfolio
          </LinkTo>
        </Nav>
        <Footer>
          <Icons to="https://velog.io/@4ggie97" title="Blog" target="_blank">
            <img
              src={`${process.env.REACT_APP_PUBLIC_URL}/logo/symbols.png`}
              alt="velog"
            />
          </Icons>
          <Icons to="https://github.com/aggie97" title="Github" target="_blank">
            <img
              src={`${process.env.REACT_APP_PUBLIC_URL}/logo/github.png`}
              alt="github"
            />
          </Icons>
          <Icons to="mailto:4ggie97@gmail.com" title="Gmail" target="_blank">
            <img
              src={`${process.env.REACT_APP_PUBLIC_URL}/logo/gmail-logo.png`}
              alt="gmail"
            />
          </Icons>
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
  box-shadow: 0 5px 15px 10px #0002;
  background: url("/summer.jpeg");
  background-position: center;
  background-size: cover;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  background-color: #2228;
  border-radius: 1.5rem;
  padding: 3rem 1rem;
`;

const Profile = styled.div`
  h2 {
    text-align: center;
    margin: 0;
    color: #fff;
    font-size: 2rem;
    font-weight: 600;
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

const LinkTo = styled(Link)`
  padding: 0.75rem 1.25rem;
  border-radius: 0.5rem;
  font-size: 1.5em;
  text-decoration: none;
  color: #fff;

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
    background-color: #2221;
  }
`;
