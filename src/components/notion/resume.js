import React, { useState } from "react";
import { useDarkMode } from "../../App";
const Resume = () => {
  const [isDarkMode] = useDarkMode();
  const [open, setOpen] = useState(false);
  return (
    <div>
      <header>
        <h1 className="page-title">Resume</h1>
      </header>
      <hr style={{ marginBottom: "1rem" }} />
      <div id="bd2541d5-de67-4a6b-b006-4ed59d7f32ac" className="column-list">
        <div id="f878198f-0152-4db6-b025-cf6f5ab56e79" className="column">
          <h3
            style={{ marginBottom: "0.5rem" }}
            id="6821b454-3916-499d-b03b-0c49e8b284b9"
          >
            함께 하기 위해 무한 고민하는 프론트엔드 개발자, 김민겸입니다.
          </h3>
          <p id="1592e4b0-a127-4fd2-a4d4-b098c45c2485">
            비개발직군들과는 <strong>코드보다 이해하기 쉬운 말로</strong>,
            <br />
            개발직군들과는 <strong>말보다 가독성이 좋은 코드로</strong>
            <br /> 소통하는 것에 가치를 두고,
            <br />
            <p>
              <strong>불확실한 기억보단 확실한 기록을</strong> 하는 개발자를
              지향하고 있습니다.
            </p>
          </p>
        </div>
        <div id="aa6de163-fd60-4197-9422-24482ca247d3" className="column">
          <figure id="cc598b2e-ac1e-49ea-9ea4-770a8c7a9237" className="image">
            <img
              alt={"test"}
              style={{ borderRadius: "50%" }}
              src={`${process.env.PUBLIC_URL}/Resume%20d03cbcad0f2a4711ab1ea3c85a3ff442/KakaoTalk_Photo_2023-02-12-16-22-43-crop.jpeg`}
            />
          </figure>
        </div>
      </div>
      <div id="10e1d97f-85ca-45e5-9777-36eb2bebaebf" className="contact">
        <div
          id="2acf0b24-753a-4c04-b83f-7c78ac56f5d9"
          style={{
            display: "flex",
            flexWrap: "wrap",
          }}
          className="column"
        >
          <figure
            className="callout"
            style={{
              minWidth: "fit-content",
              display: "flex",
              gap: "1rem",
            }}
            id="a8ef0e8e-fa00-4131-b600-95f3aeb93500"
          >
            <div
              style={{
                width: "1.5rem",
                aspectRatio: "1 / 1",
              }}
            >
              <img
                className="icon"
                alt="telephone"
                src={`${process.env.PUBLIC_URL}/telephone-call.png`}
              />
            </div>
            <div
              style={{
                width: "100%",
                overflow: "hidden",
                whiteSpace: "no-wrap",
              }}
            >
              <a style={{ textOverflow: "elipsis" }} href="tel:01062986609">
                010-6298-6609
              </a>
            </div>
          </figure>
          <figure
            className="callout"
            style={{
              minWidth: "fit-content",
              display: "flex",
              gap: "1rem",
            }}
            id="c5fad15e-f188-4c3f-964b-48833ba0001a"
          >
            <div
              style={{
                width: "1.5rem",
                aspectRatio: "1 / 1",
              }}
            >
              <img
                alt={"test"}
                className="icon"
                src={`${process.env.PUBLIC_URL}/Resume%20d03cbcad0f2a4711ab1ea3c85a3ff442/velogLogo.jpeg`}
              />
            </div>
            <div
              style={{
                width: "100%",
                overflow: "hidden",
                whiteSpace: "no-wrap",
              }}
            >
              <a
                style={{ textOverflow: "elipsis" }}
                href="https://velog.io/@4ggie97"
              >
                https://velog.io/@4ggie97
              </a>
            </div>
          </figure>
          <figure
            className="callout"
            style={{
              minWidth: "fit-content",
              display: "flex",
              gap: "1rem",
            }}
            id="174d319b-a590-4c68-a3d4-f5e06e1cc5f0"
          >
            <div
              style={{
                width: "1.5rem",
                aspectRatio: "1 / 1",
              }}
            >
              <img
                alt={"test"}
                className="icon"
                src={`${process.env.PUBLIC_URL}/Resume%20d03cbcad0f2a4711ab1ea3c85a3ff442/%EC%BA%A1%EC%B2%98.png`}
              />
            </div>
            <div
              style={{
                width: "100%",
                overflow: "hidden",
                whiteSpace: "no-wrap",
              }}
            >
              <a
                style={{ textOverflow: "elipsis" }}
                href="mailto:4ggie97@gmail.com"
              >
                4ggie97@gmail.com
              </a>
            </div>
          </figure>
          <figure
            className="callout"
            style={{
              width: "25%",
              display: "flex",
              gap: "1rem",
            }}
            id="0d6f5cfb-1ded-42ac-9077-af3a04dbaa63"
          >
            <div
              style={{
                width: "1.5rem",
                aspectRatio: "1 / 1",
              }}
            >
              <img
                alt={"test"}
                className="icon"
                src="https://super.so/icon/dark/github.svg"
              />
            </div>
            <div
              style={{
                width: "100%",
                overflow: "hidden",
                whiteSpace: "no-wrap",
              }}
            >
              <a
                style={{ textOverflow: "elipsis" }}
                href="https://github.com/aggie97"
              >
                https://github.com/aggie97
              </a>
            </div>
          </figure>
        </div>
      </div>
      <h1
        style={{ margin: "1rem 0" }}
        id="f90425a4-2915-47a3-aa55-24431a221221"
      >
        <mark>Skills </mark>
      </h1>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <div id="bbbe0913-f263-4f07-bdae-7b29c32efabc">
          <div id="b6d8a008-f9ea-495d-927e-b639085584de" className="column">
            <figure
              className="callout"
              style={{ whiteSpace: "pre-wrap", display: "flex" }}
              id="b1cda534-0464-4f26-b311-4121958e8c58"
            >
              <div
                style={{
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.25rem",
                }}
              >
                <div>
                  <img
                    src={`https://skillicons.dev/icons?i=html&theme=${
                      isDarkMode ? "light" : "dark"
                    }`}
                    alt="html"
                    style={{ width: "1.5rem" }}
                  />
                </div>
                <span>HTML</span>
              </div>
            </figure>
          </div>
        </div>
        <div id="1e279df2-4912-4352-9fda-5601cfb6e02a">
          <div id="6c8ccef1-c6be-4526-b09e-5467b9d6634e" className="column">
            <figure
              className="callout"
              style={{ whiteSpace: "pre-wrap", display: "flex" }}
              id="95a739ba-81fe-45ba-86dc-99873586c66a"
            >
              <div
                style={{
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.25rem",
                }}
              >
                <p align="center">
                  <img
                    src={`https://skillicons.dev/icons?i=css&theme=${
                      isDarkMode ? "light" : "dark"
                    }`}
                    alt="css"
                    style={{ width: "1.5rem" }}
                  />
                </p>
                <span>CSS</span>
              </div>
            </figure>
          </div>
        </div>
        <div id="81784359-0b18-488e-beee-fa8946ed5922">
          <div
            id="594689f4-1ce3-4b8f-830c-2b48ded4b544"
            style={{ width: "100%" }}
            className="column"
          >
            <figure
              className="callout"
              style={{ whiteSpace: "pre-wrap", display: "flex" }}
              id="9ce398b7-68a1-4ac6-ac96-3536d4f72e57"
            >
              <div
                style={{
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.25rem",
                }}
              >
                <p align="center">
                  <img
                    src={`https://skillicons.dev/icons?i=js&theme=${
                      isDarkMode ? "light" : "dark"
                    }`}
                    alt="javascript"
                    style={{ width: "1.5rem" }}
                  />
                </p>
                <span>JavaScript</span>
              </div>
            </figure>
          </div>
        </div>
        <div id="0ba21dec-4e2e-4332-b388-e0245f3ccae7">
          <div
            id="47344162-26fb-4ef5-aa7e-920e7dd69eb3"
            style={{ width: "100%" }}
            className="column"
          >
            <figure
              className="callout"
              style={{ whiteSpace: "pre-wrap", display: "flex" }}
              id="3237b10c-a7a8-49e6-b194-fb5584fc896f"
            >
              <div
                style={{
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.25rem",
                }}
              >
                <p align="center">
                  <img
                    src={`https://skillicons.dev/icons?i=ts&theme=${
                      isDarkMode ? "light" : "dark"
                    }`}
                    alt="typescript"
                    style={{ width: "1.5rem" }}
                  />
                </p>
                <span>TypeScript</span>
              </div>
            </figure>
          </div>
        </div>
        <div id="9f6cef02-57d5-4194-8eff-fa527ffd854a">
          <div
            id="655b8693-5392-4020-a0ed-5e948e02d137"
            style={{ width: "100%" }}
            className="column"
          >
            <figure
              className="callout"
              style={{ whiteSpace: "pre-wrap", display: "flex" }}
              id="562cd031-a837-4071-909d-9d910d2fb56a"
            >
              <div
                style={{
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.25rem",
                }}
              >
                <p align="center">
                  <img
                    src={`https://skillicons.dev/icons?i=react&theme=${
                      isDarkMode ? "light" : "dark"
                    }`}
                    alt="react"
                    style={{ width: "1.5rem" }}
                  />
                </p>
                <span>React</span>
              </div>
            </figure>
          </div>
        </div>
        <div id="56a19990-a71f-4e1c-9b32-e8a0b3e6cbf2">
          <div
            id="f7210e7a-f2da-4d79-bf29-e997e5dd90cf"
            style={{ width: "100%" }}
            className="column"
          >
            <figure
              className="callout"
              style={{ whiteSpace: "pre-wrap", display: "flex" }}
              id="f6135c99-db04-4490-a9c4-e7af9fffb62c"
            >
              <div
                style={{
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.25rem",
                }}
              >
                <p align="center">
                  <img
                    src={`https://skillicons.dev/icons?i=next&theme=${
                      isDarkMode ? "light" : "dark"
                    }`}
                    alt="nextjs"
                    style={{ width: "1.5rem" }}
                  />
                </p>
                <span>Next.js</span>
              </div>
            </figure>
          </div>
        </div>
        <div id="5646fba6-e4ef-4545-9632-9d08bff9f4b9">
          <div
            id="607b0276-8e73-4f43-b798-a1a4ba60ea8e"
            style={{ width: "100%" }}
            className="column"
          >
            <figure
              className="callout"
              style={{ whiteSpace: "pre-wrap", display: "flex" }}
              id="e60199b4-71fc-426a-bc00-ff862a8a9cc9"
            >
              <div
                style={{
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.25rem",
                }}
              >
                <p align="center">
                  <img
                    src={`https://skillicons.dev/icons?i=emotion&theme=${
                      isDarkMode ? "light" : "dark"
                    }`}
                    alt="emotion"
                    style={{ width: "1.5rem" }}
                  />
                </p>
                <span>Emotion</span>
              </div>
            </figure>
          </div>
        </div>
        <div id="d42c3dd7-9c0e-42fa-be5c-4aa4a0e59707">
          <div
            id="7cb569af-5d45-43dc-966e-d536c9316879"
            style={{ width: "100%" }}
            className="column"
          >
            <figure
              className="callout"
              style={{ whiteSpace: "pre-wrap", display: "flex" }}
              id="4280a2dc-8adc-4442-899b-6b3fa856ffd2"
            >
              <div
                style={{
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.25rem",
                }}
              >
                <p align="center">
                  <img
                    src={`https://skillicons.dev/icons?i=github&theme=${
                      isDarkMode ? "light" : "dark"
                    }`}
                    alt="github"
                    style={{ width: "1.5rem" }}
                  />
                </p>
                <span>Git</span>
              </div>
            </figure>
          </div>
        </div>
        <div>
          <div style={{ width: "100%" }} className="column">
            <figure
              className="callout"
              style={{ whiteSpace: "pre-wrap", display: "flex" }}
              id="ec3a8e66-a8dc-46f7-8f7f-8d63d364ad7a"
            >
              <div
                style={{
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.25rem",
                }}
              >
                <p align="center">
                  <img
                    src={`https://skillicons.dev/icons?i=docker&theme=${
                      isDarkMode ? "light" : "dark"
                    }`}
                    alt="docker"
                    style={{ width: "1.5rem" }}
                  />
                </p>
                <span>Docker</span>
              </div>
            </figure>
          </div>
        </div>
        <div id="41808c78-ceea-490f-b820-39224e4f56d4">
          <div
            id="d1e61219-b8e1-4c36-bb91-54b97f1bfb25"
            style={{ width: "100%" }}
            className="column"
          >
            <figure
              className="callout"
              style={{ whiteSpace: "pre-wrap", display: "flex" }}
              id="ec3a8e66-a8dc-46f7-8f7f-8d63d364ad7a"
            >
              <div
                style={{
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.25rem",
                }}
              >
                <p align="center">
                  <img
                    src={`https://skillicons.dev/icons?i=gql&theme=${
                      isDarkMode ? "light" : "dark"
                    }`}
                    alt="graphql"
                    style={{ width: "1.5rem" }}
                  />
                </p>
                <span>GraphQL</span>
              </div>
            </figure>
          </div>
        </div>
        <div>
          <div
            id="d1e61219-b8e1-4c36-bb91-54b97f1bfb25"
            style={{ width: "100%" }}
            className="column"
          >
            <figure
              className="callout"
              style={{ whiteSpace: "pre-wrap", display: "flex" }}
              id="ec3a8e66-a8dc-46f7-8f7f-8d63d364ad7a"
            >
              <div
                style={{
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.25rem",
                }}
              >
                <p align="center">
                  <img
                    src={`https://skillicons.dev/icons?i=apollo&theme=${
                      isDarkMode ? "light" : "dark"
                    }`}
                    alt="apollo"
                    style={{ width: "1.5rem" }}
                  />
                </p>
                <span>Apollo-Client</span>
              </div>
            </figure>
          </div>
        </div>
        <div>
          <div style={{ width: "100%" }} className="column">
            <figure
              className="callout"
              style={{ whiteSpace: "pre-wrap", display: "flex" }}
              id="ec3a8e66-a8dc-46f7-8f7f-8d63d364ad7a"
            >
              <div
                style={{
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.25rem",
                }}
              >
                <p align="center">
                  <img
                    src={`https://skillicons.dev/icons?i=aws&theme=${
                      isDarkMode ? "light" : "dark"
                    }`}
                    alt="aws"
                    style={{ width: "1.5rem" }}
                  />
                </p>
                <span>Amazon Web Service</span>
              </div>
            </figure>
          </div>
        </div>
        <div>
          <div style={{ width: "100%" }} className="column">
            <figure
              className="callout"
              style={{ whiteSpace: "pre-wrap", display: "flex" }}
              id="ec3a8e66-a8dc-46f7-8f7f-8d63d364ad7a"
            >
              <div
                style={{
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.25rem",
                }}
              >
                <p align="center">
                  <img
                    src={`https://skillicons.dev/icons?i=gcp&theme=${
                      isDarkMode ? "light" : "dark"
                    }`}
                    alt="aws"
                    style={{ width: "1.5rem" }}
                  />
                </p>
                <span>Google Cloud Platform</span>
              </div>
            </figure>
          </div>
        </div>
      </div>
      <h1
        style={{ margin: "1rem 0" }}
        id="f81afe60-a0ae-4402-9340-d1da65153566"
      >
        <mark>Experience</mark>
      </h1>
      <div style={{ marginBottom: "1.5rem" }}>
        <div className="exp_header">
          <span>Front-End Dev</span>
          <span>ONF(Team Project)</span>
          <span>2022.11.28 ~ 2023.01.27</span>
        </div>
        <div>
          <ul>
            <li>전체 프로젝트 기여도 20%</li>
            <li>Back Office 핵심 페이지(관리) 개발</li>
            <li>핵심 공통 컴포넌트 기획, 디자인, 설계 및 개발</li>
            <li>
              기존의 Presenter 패턴에 유동적인 Atomic 패턴 팀 단위 도입 주도
            </li>
          </ul>
        </div>
      </div>
      <div style={{ marginBottom: "1.5rem" }}>
        <div className="exp_header">
          <span>Front-End Dev</span>
          <span>BUSKER(Team Project)</span>
          <span>2022.10.27 ~ 2022.11.22</span>
        </div>
        <div>
          <ul>
            <li>전체 프로젝트 기여도 60%</li>
            <li>AWS EC2 배포</li>
            <li>GCP Docker 배포</li>
            <li>Front Git 관리 (Commit-Convention, Code-Review) 주도</li>
            <li>반응형 웹 개발 주도</li>
            <li>타 직군(디자이너)과의 소통 주도</li>
            <li>와이어 프레임 제작</li>
          </ul>
        </div>
      </div>
      <div style={{ marginBottom: "1.5rem" }}>
        <div className="exp_header">
          <span>Front-End Dev</span>
          <span>Used Market(Personal Project)</span>
          <span>2022.08.27 ~ 2022.09.30</span>
        </div>
        <div>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li>재사용성 높은 컴포넌트 설계</li>
            <li>모듈, 파일 단위의 관심사 분리로 유지보수 개선</li>
            <li>yup을 통한 form의 유효성 검증 간편화</li>
          </ul>
        </div>
      </div>
      <h1 style={{ margin: "1rem 0" }}>
        <mark>About</mark>
      </h1>
      <p id="c8b3477a-a782-4cdd-8d8d-7200389a5062">
        안녕하세요. 1픽셀 어긋나는 것을 참지 못하는 사소한 이유로 개발을
        시작했지만, 개발의 무궁무진함과 협업의 재미에 빠지게 되어 대학 졸업 후
        부트 캠프를 수료하고 프론트 엔드 개발자가 되기 위한 여정을 걷고 있는
        김민겸입니다.
      </p>
      <p id="9c296626-9dce-433e-a46b-d0ee31347a63">
        React, Next.js, TypeScript, Emotion, GraphQL(Apollo-Client), Recoil을
        사용하여 프로젝트를 진행하고, Google Cloud Platform과 AWS 그리고
        Docker를 사용하여 배포해본 경험이 있습니다.
      </p>
      <p id="211fc6d8-0693-4469-a677-1a3da43336e0">
        비효율적인 반복 작업을 개선하기 위해 공통 컴포넌트를 만드는 것을
        좋아하며, 팀 단위의 효율적인 개발 환경에 대해 고민하곤 합니다.
        <br /> 현재는 Rest API와 Redux에 관심을 가지고 독학하면서 JavaScript
        심화 학습을 위해 수료생들과 책(모던 자바스크립트 딥 다이브)을 주제로
        스터디를 진행하고 있습니다.
      </p>
      <h2
        style={{ cursor: "pointer" }}
        onClick={() => setOpen((prev) => !prev)}
      >
        <div className={`toggleButton ${open ? "openedToggle" : ""}`}>▷</div>
        Detail
      </h2>
      <div className={`detail ${open ? "open" : "close"}`}>
        <div>
          <p>
            저는 전자 및 통신을 전공했습니다. 강의에서 아두이노와 라즈베리
            파이를 통해 C와 Python의 기초를 익히게 되었고 다양한 센서들을 결합해
            작품을 만드는 것을 시작으로 프로그래밍에 흥미를 가지기 시작했습니다.
          </p>
          <p>
            작품들 중 대다수가 어플과 연동되어있었고 항상 UI가 아쉬웠던 것이
            저에게 크게 다가왔습니다. 이를 계기로 졸업 직후부터 프론트 엔드
            개발자가 되기 위한 공부를 시작했습니다. 생활코딩, 유데미 등 온라인
            강의를 들으며 HTML, CSS, JavaScript, React를 공부했고 React의 기초
            정도를 익힌 상태에서 새로운 기술과 협업 능력 그리고 개발자
            네트워크에 참여할 기회를 얻기 위해 3개월 과정의 부트 캠프에 참여하게
            되었습니다.
          </p>
        </div>
      </div>
      <h1 id="3eb2286e-0415-455e-91de-5ac2eaa9f554">
        <mark>Career</mark>
      </h1>
      <div
        id="8ba98b32-bfcc-467b-94d6-531b2fca30f9"
        className="collection-content"
      >
        <table>
          <thead>
            <tr>
              <th>기간</th>
              <th>교육명</th>
              <th>내용</th>
              <th>기관명</th>
            </tr>
          </thead>
          <tbody>
            <tr id="0d65e669-3d3c-4a1a-a64b-ac1b711550c8">
              <td data-cell="기간" className="cell-title">
                2023.03.12~ing
              </td>
              <td data-cell="교육명" className="cell-title">
                <span className="selected-value">자바스크립트 스터디</span>
              </td>
              <td data-cell="내용" className="cell-Kfg">
                모던 자바스크립트 딥 다이브 스터디
              </td>
              <td data-cell="기관명" className="cell-PU">
                <a
                  rel="noreferrer"
                  href="https://www.notion.so/fdabcb7beff744d0b4f05ce63aa7c1fe"
                  target="_blank"
                >
                  스터디 노션
                </a>
              </td>
            </tr>
            <tr id="cf898cec-c204-459c-866e-2bbdcb94fb27">
              <td data-cell="기간" className="cell-title">
                2022.08.01~2022.11.24
              </td>
              <td data-cell="교육명" className="cell-title">
                <span className="selected-value">코드캠프 FE 코스 9기</span>
              </td>
              <td data-cell="내용" className="cell-Kfg">
                TypeScript, React.js, Next.js, Emotion, GraphQL, Apollo-Client,
                Recoil까지 프론트엔드 개발 전반에 대한 교육
              </td>
              <td data-cell="기관명" className="cell-PU">
                <a
                  rel="noreferrer"
                  href="https://codebootcamp.co.kr/"
                  target="_blank"
                >
                  코드캠프
                </a>
              </td>
            </tr>
            <tr id="0db5db83-d768-4305-a9ad-4493767d8cb0">
              <td data-cell="기간" className="cell-title">
                2021.11.05~2021.11.20
              </td>
              <td data-cell="교육명" className="cell-title">
                <span className="selected-value">
                  ReactJS로 영화 웹 서비스 만들기
                </span>
              </td>
              <td data-cell="내용" className="cell-Kfg">
                리액트와 오픈 API를 이용한 영화 소개 사이트 구현 강의
              </td>
              <td data-cell="기관명" className="cell-PU">
                <a
                  href="https://nomadcoders.co/"
                  target="_blank"
                  rel="noreferrer"
                >
                  NomadCoders
                </a>
              </td>
            </tr>
            <tr id="3c9f7581-b138-48e3-9e6c-574a9b6bcabe">
              <td data-cell="기간" className="cell-title">
                2021.11.01~2021.11.15
              </td>
              <td data-cell="교육명" className="cell-title">
                <span className="selected-value">바닐라 JS 2주 완성반</span>
              </td>
              <td data-cell="내용" className="cell-Kfg">
                바닐라JS로 크롬앱 만들기를 위한 사전 강의
              </td>
              <td data-cell="기관명" className="cell-PU">
                <a
                  href="https://nomadcoders.co/"
                  target="_blank"
                  rel="noreferrer"
                >
                  NomadCoders
                </a>
              </td>
            </tr>
            <tr id="300e095b-b603-4fcb-999e-3dc93382b101">
              <td data-cell="기간" className="cell-title">
                2021.08.03~2021.10.15
              </td>
              <td data-cell="교육명" className="cell-title">
                <span className="selected-value">
                  개발자를 위한 윈도우 셋업
                </span>
              </td>
              <td data-cell="내용" className="cell-Kfg">
                윈도우 사용자들을 위한 WSL2의 익숙한 사용법을 담은 강의
              </td>
              <td data-cell="기관명" className="cell-PU">
                <a
                  href="https://nomadcoders.co/"
                  target="_blank"
                  rel="noreferrer"
                >
                  NomadCoders
                </a>
              </td>
            </tr>
            <tr id="2fe02e9f-e898-4261-a709-34c5dc294db8">
              <td data-cell="기간" className="cell-title">
                2021.08.01~2021.10.15
              </td>
              <td data-cell="교육명" className="cell-title">
                <span className="selected-value">바닐라JS로 크롬앱 만들기</span>
              </td>
              <td data-cell="내용" className="cell-Kfg">
                JavaScript로 Momentum를 구현해보는 강의
              </td>
              <td data-cell="기관명" className="cell-PU">
                <a
                  href="https://nomadcoders.co/"
                  target="_blank"
                  rel="noreferrer"
                >
                  NomadCoders
                </a>
              </td>
            </tr>
            <tr id="55b9def7-8fe6-47c3-af65-2f064b8f5e49">
              <td data-cell="기간" className="cell-title">
                2016.03.01~2023.2.14
              </td>
              <td data-cell="교육명" className="cell-title">
                <span className="selected-value">전자 및 통신 공학</span>
              </td>
              <td data-cell="내용" className="cell-Kfg">
                3년제 전문 학사 과정
              </td>
              <td data-cell="기관명" className="cell-PU">
                울산과학대학교
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Resume;
