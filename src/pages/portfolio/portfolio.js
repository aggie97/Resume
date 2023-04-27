import React from "react";
import Wrapper from "../../components/common/Wrapper";
import Notion from "../../components/notion/notion";
const Portfolio = ({ content }) => {
  return (
    <Wrapper>
      <Notion content={content} />
    </Wrapper>
  );
};

export default Portfolio;
