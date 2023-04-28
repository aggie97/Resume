import React from "react";
import { useDarkMode } from "../../App";

const Resume = () => {
  const [isDarkMode] = useDarkMode();
  return (
    <div>
      <header>
        <h1 className="page-title">Resume</h1>
      </header>
      <hr />
      <div id="bd2541d5-de67-4a6b-b006-4ed59d7f32ac" className="column-list">
        <div id="f878198f-0152-4db6-b025-cf6f5ab56e79" className="column">
          <h3 id="6821b454-3916-499d-b03b-0c49e8b284b9">
            함께 하기 위해 무한 고민하는 프론트엔드 개발자, 김민겸 입니다.
          </h3>
          <p id="1592e4b0-a127-4fd2-a4d4-b098c45c2485">
            비개발직군들에게는 <strong>코드보다 이해하기 쉬운 말로</strong>,
            <br />
            개발직군들에게는 <strong>말보다 가독성이 좋은 코드로</strong> 하는
            것에 가치를 두고,
            <br />
            <strong>불확실한 기억보단 확실한 기록을</strong> 하는 개발자를
            지향하고 있습니다.
          </p>
        </div>
        <div id="aa6de163-fd60-4197-9422-24482ca247d3" className="column">
          <figure id="cc598b2e-ac1e-49ea-9ea4-770a8c7a9237" className="image">
            <img
              alt={"test"}
              style={{ borderRadius: "50%" }}
              src="Resume%20d03cbcad0f2a4711ab1ea3c85a3ff442/KakaoTalk_Photo_2023-02-12-16-22-43-crop.jpeg"
            />
          </figure>
        </div>
      </div>
      <h1 id="7ef8f875-df03-4832-a8ba-287f954b3e46" className="">
        <mark>Contact</mark>
      </h1>
      <div
        id="10e1d97f-85ca-45e5-9777-36eb2bebaebf"
        className="column-list contact"
      >
        <div
          id="2acf0b24-753a-4c04-b83f-7c78ac56f5d9"
          style={{ flex: "1" }}
          className="column"
        >
          <figure
            className="callout"
            style={{
              whiteSpace: "pre-wrap",
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
                src="./telephone-call.png"
              />
            </div>
            <div style={{ width: "100%" }}>
              <a href="tel:01062986609">010-6298-6609</a>
            </div>
          </figure>
          <figure
            className="callout"
            style={{ whiteSpace: "pre-wrap", display: "flex", gap: "1rem" }}
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
                src="Resume%20d03cbcad0f2a4711ab1ea3c85a3ff442/velogLogo.jpeg"
              />
            </div>
            <div style={{ width: "100%" }}>
              <a href="https://velog.io/@4ggie97">https://velog.io/@4ggie97</a>
            </div>
          </figure>
        </div>
        <div
          id="407fb563-48cd-4ec9-bf24-157bbd1d52d8"
          style={{ flex: "1" }}
          className="column"
        >
          <figure
            className="callout"
            style={{ whiteSpace: "pre-wrap", display: "flex", gap: "1rem" }}
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
                src="Resume%20d03cbcad0f2a4711ab1ea3c85a3ff442/%EC%BA%A1%EC%B2%98.png"
              />
            </div>
            <div style={{ width: "100%" }}>
              <a href="mailto:4ggie97@gmail.com">4ggie97@gmail.com</a>
            </div>
          </figure>
          <figure
            className="callout"
            style={{ whiteSpace: "pre-wrap", display: "flex", gap: "1rem" }}
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
            <div style={{ width: "100%" }}>
              <a href="https://github.com/aggie97">
                https://github.com/aggie97
              </a>
            </div>
          </figure>
        </div>
      </div>
      <h1 id="f81afe60-a0ae-4402-9340-d1da65153566" className="">
        <mark>About </mark>
      </h1>
      <p id="c8b3477a-a782-4cdd-8d8d-7200389a5062" className="">
        저는 전자 및 통신을 전공했습니다. 강의에서 아두이노와 라즈베리 파이를
        통해 C와 Python의 기초를 익히게 되었고 여러 가지 센서들을 결합해 작품을
        만드는 것을 시작으로 프로그래밍에 흥미를 가지기 시작했습니다. 여러 가지
        작품들 중 대다수가 어플과 연동되어있었고 항상 UI가 아쉬웠던 것이 저에게
        크게 다가왔습니다. 이를 계기로 졸업 직후부터 프론트 엔드 개발자가 되기
        위한 공부를 시작했습니다.
      </p>
      <p id="9c296626-9dce-433e-a46b-d0ee31347a63" className="">
        생활코딩, 유데미 등 여러 온라인 강의를 들으며 HTML, CSS, JavaScript,
        React를 공부했고 React의 기초 정도를 익힌 상태에서 새로운 기술과 협업
        능력 그리고 개발자 네트워크에 참여할 기회를 얻기 위해 3개월 과정의 부트
        캠프에 참여하게 되었습니다.
      </p>
      <p id="211fc6d8-0693-4469-a677-1a3da43336e0" className="">
        현재는 JavaScript 심화 학습을 위해 수료생들과 책을 주제로 스터디를
        진행하고 있습니다.
      </p>
      <h1 id="f90425a4-2915-47a3-aa55-24431a221221" className="">
        <mark>Skills </mark>
      </h1>
      <div id="bbbe0913-f263-4f07-bdae-7b29c32efabc" className="column-list">
        <div
          id="b6d8a008-f9ea-495d-927e-b639085584de"
          style={{ width: "100%" }}
          className="column"
        >
          <figure
            className="callout"
            style={{ whiteSpace: "pre-wrap", display: "flex" }}
            id="b1cda534-0464-4f26-b311-4121958e8c58"
          >
            <div
              style={{
                textAlign: "center",
                width: "5rem",
                aspectRatio: "1 / 1",
              }}
            >
              <p align="center">
                <a href="https://skillicons.dev">
                  <img
                    src={`https://skillicons.dev/icons?i=html&theme=${
                      isDarkMode ? "dark" : "light"
                    }`}
                    alt="html"
                    style={{ width: "100%" }}
                  />
                </a>
              </p>
              <span>HTML</span>
            </div>
            <div
              id="7db81039-33bb-4c3f-95fa-7a6ac572ce25"
              style={{ width: "100%" }}
              className="column"
            >
              <ul
                id="028d26ec-6e2c-4517-bdf5-f910cbe760a0"
                className="bulleted-list"
              >
                <li style={{ listStyleType: "disc" }}>
                  검색 엔진 최적화와 웹 접근성을 위한 시멘틱 태그를 사용하고
                  있습니다.
                </li>
              </ul>
              <ul
                id="9cac1f7d-59cd-40c4-823b-de7b4f8a95c0"
                className="bulleted-list"
              >
                <li style={{ listStyleType: "disc" }}>
                  간단한 기능은 해당 기능을 가진 태그로 구현하려 합니다.
                </li>
              </ul>
            </div>
          </figure>
        </div>
      </div>
      <div id="1e279df2-4912-4352-9fda-5601cfb6e02a" className="column-list">
        <div
          id="6c8ccef1-c6be-4526-b09e-5467b9d6634e"
          style={{ width: "100%" }}
          className="column"
        >
          <figure
            className="callout"
            style={{ whiteSpace: "pre-wrap", display: "flex" }}
            id="95a739ba-81fe-45ba-86dc-99873586c66a"
          >
            <div
              style={{
                textAlign: "center",
                width: "5rem",
                aspectRatio: "1 / 1",
              }}
            >
              <p align="center">
                <a href="https://skillicons.dev">
                  <img
                    src={`https://skillicons.dev/icons?i=css&theme=${
                      isDarkMode ? "dark" : "light"
                    }`}
                    alt="css"
                    style={{ width: "100%" }}
                  />
                </a>
              </p>
              <span>CSS</span>
            </div>
            <div
              id="1e37b4f6-68e8-4b88-b920-7cd9be4978af"
              style={{ width: "100%" }}
              className="column"
            >
              <ul
                id="e3218da6-8ada-4f60-82a9-0ba3ec5c9b4a"
                className="bulleted-list"
              >
                <li style={{ listStyleType: "disc" }}>
                  다양한 선택자들을 숙지하고 cascade, specificity, inheritance를
                  고려하여 적절하게 사용합니다.
                </li>
              </ul>
              <ul
                id="7e9ac25e-d4d2-4a2b-b2a8-a000d9aeb417"
                className="bulleted-list"
              >
                <li style={{ listStyleType: "disc" }}>
                  반응형 디자인을 위해 picture, srcset, media-query 등 여러 가지
                  기법들을 상황에 맞게 사용합니다.
                </li>
              </ul>
            </div>
          </figure>
        </div>
      </div>
      <div id="81784359-0b18-488e-beee-fa8946ed5922" className="column-list">
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
                width: "5rem",
                aspectRatio: "1 / 1",
              }}
            >
              <p align="center">
                <a href="https://skillicons.dev">
                  <img
                    src={`https://skillicons.dev/icons?i=js&theme=${
                      isDarkMode ? "dark" : "light"
                    }`}
                    alt="javascript"
                    style={{ width: "100%" }}
                  />
                </a>
              </p>
              <span>JavaScript</span>
            </div>
            <div
              id="d009bce1-f80d-4901-a2c5-fabfa6a28416"
              style={{ width: "100%" }}
              className="column"
            >
              <ul
                id="7bbe9dc7-8050-41c6-87f8-9fea3c26b2c1"
                className="bulleted-list"
              >
                <li style={{ listStyleType: "disc" }}>
                  ES6+ 문법을 사용하여 간결하면서 가독성이 좋은 코드를 작성하기
                  하기 위해 노력하고 있습니다.
                </li>
              </ul>
              <ul
                id="0ea3a6c9-aeb2-4040-b997-b5a7ed4ba365"
                className="bulleted-list"
              >
                <li style={{ listStyleType: "disc" }}>
                  다양한 Web APIs를 익히면서 상황에 맞게 사용할 수 있도록
                  노력하고 있습니다.
                </li>
              </ul>
            </div>
          </figure>
        </div>
      </div>
      <div id="0ba21dec-4e2e-4332-b388-e0245f3ccae7" className="column-list">
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
                width: "5rem",
                aspectRatio: "1 / 1",
              }}
            >
              <p align="center">
                <a href="https://skillicons.dev">
                  <img
                    src={`https://skillicons.dev/icons?i=ts&theme=${
                      isDarkMode ? "dark" : "light"
                    }`}
                    alt="typescript"
                    style={{ width: "100%" }}
                  />
                </a>
              </p>
              <span>TypeScript</span>
            </div>
            <div
              id="6f1745e8-0c40-4cff-af29-a8d237ec4101"
              style={{ width: "100%" }}
              className="column"
            >
              <ul
                id="36a95ccc-08ab-401b-b32d-e53a4fc5fdac"
                className="bulleted-list"
              >
                <li style={{ listStyleType: "disc" }}>
                  런타임에 암묵적 타입 변환으로 일어날 수 있는 에러를 방지하기
                  위해 사용하고 있습니다.
                </li>
              </ul>
              <ul
                id="fb968ed0-89eb-483c-8a52-2781b7043d85"
                className="bulleted-list"
              >
                <li style={{ listStyleType: "disc" }}>
                  type과 interface의 차이를 이해하고 상황에 맞게 사용합니다.
                </li>
              </ul>
            </div>
          </figure>
        </div>
      </div>
      <div id="9f6cef02-57d5-4194-8eff-fa527ffd854a" className="column-list">
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
                width: "5rem",
                aspectRatio: "1 / 1",
              }}
            >
              <p align="center">
                <a href="https://skillicons.dev">
                  <img
                    src={`https://skillicons.dev/icons?i=react&theme=${
                      isDarkMode ? "dark" : "light"
                    }`}
                    alt="react"
                    style={{
                      width: "100%",
                    }}
                  />
                </a>
              </p>
              <span>React</span>
            </div>
            <div
              id="0eb0f441-877a-47df-9087-8f8ad2087554"
              style={{ width: "100%" }}
              className="column"
            >
              <ul
                id="8603d331-634e-4bdb-b4f3-e70ff3f69048"
                className="bulleted-list"
              >
                <li style={{ listStyleType: "disc" }}>
                  함수형 컴포넌트와 React Hooks를 상황에 맞게 활용합니다.
                </li>
              </ul>
              <ul
                id="09258ebf-1861-4376-ad01-ac940b9222bb"
                className="bulleted-list"
              >
                <li style={{ listStyleType: "disc" }}>
                  원활한 유지보수와 협업을 위해 Container-Presenter패턴과
                  Atomic패턴을 적절하게 섞어 활용해본 경험이 있습니다.
                </li>
              </ul>
            </div>
          </figure>
        </div>
      </div>
      <div id="56a19990-a71f-4e1c-9b32-e8a0b3e6cbf2" className="column-list">
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
                width: "5rem",
                aspectRatio: "1 / 1",
              }}
            >
              <p align="center">
                <a href="https://skillicons.dev">
                  <img
                    src={`https://skillicons.dev/icons?i=next&theme=${
                      isDarkMode ? "dark" : "light"
                    }`}
                    alt="nextjs"
                    style={{ width: "100%" }}
                  />
                </a>
              </p>
              <span>Next.js</span>
            </div>
            <div
              id="a2a02974-b120-4176-8b0a-0fc4b9f87708"
              style={{ width: "100%" }}
              className="column"
            >
              <ul
                id="86a66030-5400-4c18-9ac8-9c54ed75389c"
                className="bulleted-list"
              >
                <li style={{ listStyleType: "disc" }}>
                  페이지별로 다른 렌더링 방식을 사용하여 검색 엔진 최적화와 빠른
                  렌더링으로 인한 UX 개선을 위해 노력합니다.
                </li>
              </ul>
              <ul
                id="dba09d5e-e520-4647-ac0e-2c60b31184a6"
                className="bulleted-list"
              >
                <li style={{ listStyleType: "disc" }}>
                  이미지와 폰트 최적화, 빠른 새로고침, 파일 라우팅 시스템 등
                  내장 기능들을 최대한 활용하려고 합니다.
                </li>
              </ul>
            </div>
          </figure>
        </div>
      </div>
      <div id="5646fba6-e4ef-4545-9632-9d08bff9f4b9" className="column-list">
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
                width: "5rem",
                aspectRatio: "1 / 1",
              }}
            >
              <p align="center">
                <a href="https://skillicons.dev">
                  <img
                    src={`https://skillicons.dev/icons?i=emotion&theme=${
                      isDarkMode ? "dark" : "light"
                    }`}
                    alt="emotion"
                    style={{ width: "100%" }}
                  />
                </a>
              </p>
              <span>Emotion</span>
            </div>
            <div
              id="631c968b-70f6-4dfa-b46e-e0bd4e0760d5"
              style={{ width: "100%" }}
              className="column"
            >
              <ul
                id="b004f590-303a-4a2f-aecc-5db883234a4f"
                className="bulleted-list"
              >
                <li style={{ listStyleType: "disc" }}>
                  동적인 스타일링 적용이 간편하고 Next.js와 잘 맞아서 사용하고
                  있습니다.
                </li>
              </ul>
              <ul
                id="b004f590-303a-4a2f-aecc-5db883234a4f"
                className="bulleted-list"
              >
                <li style={{ listStyleType: "disc" }}>
                  컴포넌트 단위의 스타일 정의를 하고 css props를 이용한 유동적인
                  스타일링을 할 때 사용합니다.
                </li>
              </ul>
            </div>
          </figure>
        </div>
      </div>
      <div id="d42c3dd7-9c0e-42fa-be5c-4aa4a0e59707" className="column-list">
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
                width: "5rem",
                aspectRatio: "1 / 1",
              }}
            >
              <p align="center">
                <a href="https://skillicons.dev">
                  <img
                    src={`https://skillicons.dev/icons?i=github&theme=${
                      isDarkMode ? "dark" : "light"
                    }`}
                    alt="github"
                    style={{ width: "100%" }}
                  />
                </a>
              </p>
              <span>Git</span>
            </div>
            <div
              id="5e5e9653-ca84-42d6-91d1-b2e5967740f8"
              style={{ width: "100%" }}
              className="column"
            >
              <ul
                id="393db2d0-078b-4df1-babe-40a360c5aa32"
                className="bulleted-list"
              >
                <li style={{ listStyleType: "disc" }}>
                  프로젝트의 안정성을 높이기 위해 항상 커밋 메세지 컨벤션을
                  정하고 따르려고 노력하며, 더 직관적인 커밋 확인을 위한
                  Gitmoji를 애용합니다.
                </li>
              </ul>
            </div>
          </figure>
        </div>
      </div>
      <div id="41808c78-ceea-490f-b820-39224e4f56d4" className="column-list">
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
                width: "5rem",
                aspectRatio: "1 / 1",
              }}
            >
              <p align="center">
                <a href="https://skillicons.dev">
                  <img
                    src={`https://skillicons.dev/icons?i=gql&theme=${
                      isDarkMode ? "dark" : "light"
                    }`}
                    alt="graphql"
                    style={{ width: "100%" }}
                  />
                </a>
              </p>
              <span>GraphQL</span>
            </div>
            <div
              id="edfa7884-bc1a-4cb5-b59b-16f7af9d9434"
              style={{ width: "100%" }}
              className="column"
            >
              <ul
                id="4eb6772c-75f1-4fb4-ba3d-42f05b35572a"
                className="bulleted-list"
              >
                <li style={{ listStyleType: "disc" }}>
                  REST의 Over-fetching, Under-fetching 등 단점을 보완하기 위해
                  사용하고 있습니다.
                </li>
              </ul>
              <ul
                id="175d150f-572e-4c9c-8e70-ce93b3dfa20d"
                className="bulleted-list"
              >
                <li style={{ listStyleType: "disc" }}>
                  쿼리문을 적절하게 작성하고 반복되는 필드는 Fragment를 이용해
                  재사용합니다.
                </li>
              </ul>
            </div>
          </figure>
        </div>
      </div>
      <p id="30007d9c-b943-4665-8960-36a3230d1fe3" className=""></p>
      <h1 id="3eb2286e-0415-455e-91de-5ac2eaa9f554" className="">
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
              <td className="cell-title">2023.03.12~ing</td>
              <td className="cell-iw:I">
                <span className="selected-value">자바스크립트 스터디</span>
              </td>
              <td className="cell-Kfg">모던 자바스크립트 딥 다이브 스터디</td>
              <td className="cell-PU">
                <a href="https://www.notion.so/fdabcb7beff744d0b4f05ce63aa7c1fe">
                  스터디 노션 링크
                </a>
              </td>
            </tr>
            <tr id="cf898cec-c204-459c-866e-2bbdcb94fb27">
              <td className="cell-title">2022.08.01~2022.11.24</td>
              <td className="cell-iw:I">
                <span className="selected-value">코드캠프 FE 코스 9기</span>
              </td>
              <td className="cell-Kfg">
                TypeScript, React.js, Next.js, Emotion, GraphQL, Apollo-Client,
                Recoil까지 프론트엔드 개발 전반에 대한 교육
              </td>
              <td className="cell-PU">코드캠프</td>
            </tr>
            <tr id="0db5db83-d768-4305-a9ad-4493767d8cb0">
              <td className="cell-title">2021.11.05~2021.11.20</td>
              <td className="cell-iw:I">
                <span className="selected-value">
                  ReactJS로 영화 웹 서비스 만들기
                </span>
              </td>
              <td className="cell-Kfg">
                리액트와 오픈 API를 이용한 영화 소개 사이트 구현 강의
              </td>
              <td className="cell-PU">NomadCoders</td>
            </tr>
            <tr id="3c9f7581-b138-48e3-9e6c-574a9b6bcabe">
              <td className="cell-title">2021.11.01~2021.11.15</td>
              <td className="cell-iw:I">
                <span className="selected-value">바닐라 JS 2주 완성반</span>
              </td>
              <td className="cell-Kfg">
                바닐라JS로 크롬앱 만들기를 위한 사전 강의
              </td>
              <td className="cell-PU">NomadCoders</td>
            </tr>
            <tr id="300e095b-b603-4fcb-999e-3dc93382b101">
              <td className="cell-title">2021.08.03~2021.10.15</td>
              <td className="cell-iw:I">
                <span className="selected-value">
                  개발자를 위한 윈도우 셋업
                </span>
              </td>
              <td className="cell-Kfg">
                윈도우 사용자들을 위한 WSL2의 익숙한 사용법을 담은 강의
              </td>
              <td className="cell-PU">NomadCoders</td>
            </tr>
            <tr id="2fe02e9f-e898-4261-a709-34c5dc294db8">
              <td className="cell-title">2021.08.01~2021.10.15</td>
              <td className="cell-iw:I">
                <span className="selected-value">바닐라JS로 크롬앱 만들기</span>
              </td>
              <td className="cell-Kfg">
                JavaScript로 Momentum를 구현해보는 강의
              </td>
              <td className="cell-PU">NomadCoders</td>
            </tr>
            <tr id="55b9def7-8fe6-47c3-af65-2f064b8f5e49">
              <td className="cell-title">2016.03.01~2023.2.14</td>
              <td className="cell-iw:I">
                <span className="selected-value">전자 및 통신 공학</span>
              </td>
              <td className="cell-Kfg">3년제 전문 학사 과정</td>
              <td className="cell-PU">울산과학대학교</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Resume;
