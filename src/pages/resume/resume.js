import React from "react";
import Wrapper from "../../components/common/Wrapper";
import Notion from "../../components/notion/notion";
const Resume = ({ content }) => {
  return (
    <>
      {content === `${process.env.REACT_APP_PUBLIC_URL}/resume` && (
        <Wrapper>
          <Notion content={content} />
        </Wrapper>
      )}
    </>
  );
};

export default Resume;
