import React from "react";
import Wrapper from "../../components/common/Wrapper";
import Notion from "../../components/notion/notion";
const Resume = ({ content }) => {
  return (
    <Wrapper>
      <Notion content={content} />
    </Wrapper>
  );
};

export default Resume;
