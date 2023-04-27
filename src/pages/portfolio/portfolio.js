import React from "react";
import Wrapper from "../../components/common/Wrapper";
import Notion from "../../components/notion/notion";
const Portfolio = ({ content }) => {
  return (
    <>
      {content === `${process.env.REACT_APP_PUBLIC_URL}/portfolio` && (
        <Wrapper>
          <Notion content={content} />
        </Wrapper>
      )}
    </>
  );
};

export default Portfolio;
