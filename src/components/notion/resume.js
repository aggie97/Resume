import { useState } from "react";

const Resume = () => {
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
            style={{ marginBottom: "1rem" }}
            id="6821b454-3916-499d-b03b-0c49e8b284b9"
          >
            함께 하기 위해 무한 고민하는 프론트엔드 개발자입니다.
          </h3>
          <div id="10e1d97f-85ca-45e5-9777-36eb2bebaebf" className="contact">
            <ul
              id="2acf0b24-753a-4c04-b83f-7c78ac56f5d9"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.25rem",
                paddingLeft: "1rem",
              }}
              className="column"
            >
              <li>
                <span style={{ display: "inline-block", width: "5rem" }}>
                  성명
                </span>
                김민겸
              </li>
              <li>
                <span style={{ display: "inline-block", width: "5rem" }}>
                  생년월일
                </span>
                1997년 08월 01일
              </li>
              <li>
                <span style={{ display: "inline-block", width: "5rem" }}>
                  전화번호{" "}
                </span>
                010-6298-6609
              </li>
              <li>
                <span style={{ display: "inline-block", width: "5rem" }}>
                  이메일{" "}
                </span>
                <a href="mailto:4ggie97@gmail.com">4ggie97@gmail.com</a>
              </li>
              <li>
                <span style={{ display: "inline-block", width: "5rem" }}>
                  깃허브{" "}
                </span>
                <a href="https://github.com/aggie97">
                  https://github.com/aggie97
                </a>
              </li>
            </ul>
          </div>
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
      <h1 style={{ margin: "1rem 0" }}>
        <mark>Intro</mark>
      </h1>
      <ul className="about">
        <li id="9c296626-9dce-433e-a46b-d0ee31347a63">
          전자통신공학 재학 중 총 3번의 팀 프로젝트(강의2 | 캡스톤디자인1)에서
          개발파트를 홀로 맡았고 강의는 A+, 캡스톤디자인은 동상으로 좋은 성적을
          거두고 졸업 후 독학 및 부트 캠프를 거치면서 팀 프로젝트를 진행하며
          프론트 엔드 역할로 웹 서비스를 개발 및 배포한 경험이 있습니다.
        </li>
        <li>
          <h4>주변 사람들이 편한 환경에서 일하도록 만드는 것을 좋아합니다.</h4>
          프로젝트가 시작되면 능동적으로 프로젝트 전반에 사용되는 핵심 공통
          컴포넌트를 찾아 개발하려 하고 컴포넌트 사용 명세를 작성 후 공유하기도
          합니다. 또한 비개발파트인 팀원들을 위한 코드의 흐름을 주석으로 대신
          보여주거나 적절한 변수 또는 함수명을 작성하여 알아보기 쉽게 하는 등
          코드의 가독성을 높이는 역량을 쌓고자 노력해왔습니다.
        </li>
        <li>
          <h4>소통이 최우선이라고 생각합니다.</h4>
          재학 중엔 캡스톤 디자인과 졸업 후엔 부트캠프 팀 프로젝트를 통해
          팀원들간의 관계, 프로젝트의 마감기한 등의 문제에 직면했을 때
          적극적이고 활발한 커뮤니케이션으로 해결했던 경험이 있습니다.
        </li>
      </ul>
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
            강의에서 아두이노와 라즈베리 파이를 통해 C와 Python의 기초를 익히게
            되었고 다양한 센서들을 결합해 작품을 만드는 것을 시작으로
            프로그래밍에 흥미를 가지기 시작했습니다.
          </p>
          <p>
            작품들 중 대다수가 어플과 연동되어있었고 항상 UI가 아쉬웠던 것이
            저에게 크게 다가왔습니다. 이를 계기로 학사 과정이 끝난 직후부터
            프론트 엔드 개발자가 되기 위한 공부를 시작했습니다. 생활코딩, 유데미
            등 온라인 강의를 들으며 HTML, CSS, JavaScript, React를 공부했고
            React의 기초 정도를 익힌 상태에서 새로운 기술과 협업 능력 그리고
            개발자 네트워크에 참여할 기회를 얻기 위해 3개월 과정의 부트 캠프에
            참여하게 되었습니다.
          </p>
        </div>
      </div>
      <h1
        style={{ margin: "1rem 0" }}
        id="f90425a4-2915-47a3-aa55-24431a221221"
      >
        <mark>Skills</mark>
      </h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
          gap: "0.5rem",
        }}
      >
        <div id="bbbe0913-f263-4f07-bdae-7b29c32efabc">
          <div id="b6d8a008-f9ea-495d-927e-b639085584de" className="column">
            <figure
              className="callout"
              style={{ whiteSpace: "pre-wrap", display: "flex" }}
              id="b1cda534-0464-4f26-b311-4121958e8c58"
            >
              <span>HTML</span>
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
              <span>CSS</span>
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
              <span>JavaScript</span>
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
              <span>TypeScript</span>
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
              <span>React</span>
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
              <span>Next.js</span>
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
              <span>Emotion</span>
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
              <span>Git</span>
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
              <span>Rest API</span>
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
              <span>GraphQL</span>
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
              <span>Apollo-Client</span>
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
          <a
            href="https://github.com/Dev-One-Project/ONF-client"
            rel="noreferrer"
            target="_blank"
            style={{ display: "flex" }}
          >
            ONF(Team Project)
            <img
              src={`${process.env.PUBLIC_URL}/link.png`}
              alt="Github Client Repository"
              className="link-image"
            />
          </a>
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
          <a
            href="https://github.com/code-bootcamp/BUSKER_client"
            rel="noreferrer"
            style={{ display: "flex" }}
            target="_blank"
          >
            BUSKER(Team Project)
            <img
              src={`${process.env.PUBLIC_URL}/link.png`}
              alt="Github Client Repository"
              className="link-image"
            />
          </a>
          <span>2022.10.27 ~ 2022.11.22</span>
        </div>
        <div>
          <ul>
            <li>전체 프로젝트 기여도 60%</li>
            <li>AWS(EC2 + Route53) 배포</li>
            <li>GCP(Compute Engine) Docker 배포</li>
            <li>Front Git 관리 (Commit-Convention, Code-Review) 주도</li>
            <li>반응형 웹 개발 주도</li>
            <li>디자이너와 소통 주도</li>
            <li>
              <a
                href="https://whimsical.com/busker-RNydqiscsdKJCvXXKX8Wjy"
                rel="noreferrer"
                target="_blank"
                style={{ display: "flex" }}
              >
                와이어 프레임(Whimsical
                <img
                  src={`${process.env.PUBLIC_URL}/link.png`}
                  alt="Github Client Repository"
                  className="link-image"
                />
                ) 제작
              </a>
            </li>
          </ul>
        </div>
      </div>
      <h1 id="3eb2286e-0415-455e-91de-5ac2eaa9f554">
        <mark>Education</mark>
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
                매주 진행되는 모던 자바스크립트 딥 다이브 스터디
              </td>
              <td data-cell="기관명" className="cell-PU">
                수료생 모임
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
                TypeScript, React, Next.js, Emotion, GraphQL, Apollo-Client,
                Recoil, Docker, 알고리즘 학습으로 프론트 엔드 개발 역량과 AWS,
                GCP 클라우드 플랫폼을 통한 배포 그리고 매주 진행되는 코드 리뷰와
                최종 팀 프로젝트를 통한 협업을 배울 수 있는 3개월 과정의 부트
                캠프
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
                <span className="selected-value">울산과학대학교</span>
              </td>
              <td data-cell="내용" className="cell-Kfg">
                3년제 전문 학사 전자 및 통신 공학 전공
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
