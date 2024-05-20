import styled from "@emotion/styled";
import React from "react";
import { useDarkMode } from "../../App";

const ThemeWrapper = ({ children }) => {
  const [isDarkMode] = useDarkMode();

  return <Wrapper isdarkmode={isDarkMode}>{children}</Wrapper>;
};

export default ThemeWrapper;

const Wrapper = styled.div`
  display: flex;

  color: ${(props) =>
    props.isdarkmode === "true"
      ? props.theme.darkModeColor
      : props.theme.lightModeColor};
  background-color: ${(props) =>
    props.isdarkmode === "true"
      ? props.theme.darkModeBackgroundColor
      : props.theme.lightModeBackgroundColor};
  hr,
  mark::after {
    background-color: ${(props) =>
      props.isdarkmode === "true"
        ? props.theme.lightModeBackgroundColor
        : props.theme.darkModeBackgroundColor};
  }

  mark {
    color: ${(props) =>
      props.isdarkmode === "true"
        ? props.theme.darkModeColor
        : props.theme.lightModeColor};
  }

  thead {
    background-color: ${(props) =>
      props.isdarkmode === "true" ? "#222" : "#ccc"};
    th {
      font-weight: bold;
    }
  }

  tr:nth-of-type(2n),
  figure.callout,
  .exp_header {
    background-color: ${(props) =>
      props.isdarkmode === "true" ? "#444" : "#eee"};
  }

  transition: all 0.5s ease;
`;
