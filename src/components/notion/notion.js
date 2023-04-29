import React from "react";
import Resume from "./resume";
import Portfolio from "./portfolio";
import { Wrapper } from "./notion.commonStyle";

const Notion = ({ content }) => {
  return (
    <Wrapper>
      <article id="d03cbcad-0f2a-4711-ab1e-a3c85a3ff442" className="page sans">
        <div className="page-body">
          {content === `/resume` ? <Resume /> : <Portfolio />}
        </div>
      </article>
    </Wrapper>
  );
};

export default Notion;
