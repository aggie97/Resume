import React from "react";
import "./notion.css";
import Resume from "./resume";
import Portfolio from "./portfolio";
const Notion = ({ content }) => {
  return (
    <>
      <article id="d03cbcad-0f2a-4711-ab1e-a3c85a3ff442" className="page sans">
        <div className="page-body">
          {content === `${process.env.REACT_APP_PUBLIC_URL}/resume` ? (
            <Resume />
          ) : (
            <Portfolio />
          )}
        </div>
      </article>
    </>
  );
};

export default Notion;
