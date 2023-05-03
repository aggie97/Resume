import React, { useEffect } from "react";
import Resume from "./resume";
import Portfolio from "./portfolio";
import { NotionCommonStyles } from "./notion.commonStyle";
import { useLocation } from "react-router-dom";

const Notion = ({ content }) => {
  const location = useLocation();
  // 페이지 전환 시 스크롤 초기화 임시 방편
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 500);
  }, [location.pathname]);
  return (
    <NotionCommonStyles>
      <article id="d03cbcad-0f2a-4711-ab1e-a3c85a3ff442" className="page sans">
        <div className="page-body">
          {content === `/resume` && <Resume />}
          {content === `/portfolio` && <Portfolio />}
        </div>
      </article>
    </NotionCommonStyles>
  );
};

export default Notion;
