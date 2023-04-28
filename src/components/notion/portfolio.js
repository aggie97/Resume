import React from "react";

const Portfolio = () => {
  return (
    <div>
      <article id="ad1c5302-5a47-4abe-8b60-f6ab44c9b859" className="page sans">
        <header>
          <h1 className="page-title">Portfolio</h1>
        </header>
        <hr />
        <div className="page-body">
          <h3 id="cdd16dde-cac3-4d78-8033-6a27f7081d41">
            <span style={{ borderBottom: "0.05em solid" }}>
              <strong>ONF(On And Off)</strong>
            </span>
            <strong> : </strong>
            <mark className="highlight-gray">Team Project</mark>
          </h3>
          <p id="54656f97-32b1-4420-a61c-6ce76c800c44">
            근태관리 솔루션 Shiftee 클론 사이드 프로젝트
          </p>
          <figure id="1ed518b6-13f9-4528-a7f1-e1e5aa912f34">
            <a href="https://github.com/Dev-One-Project/ONF-client" alt="">
              ONF Github Client Repo 링크
            </a>
          </figure>
          <p id="d115ec2f-c5b3-4458-822c-10c98ceefc61">
            <mark className="highlight-gray">
              2022.11.28 ~ 2023.01.27(1차 마무리)
            </mark>
          </p>
          <div
            id="d329cbd4-6890-468d-b3ba-27b6ac6c229f"
            className="onoffImages"
          >
            <div
              id="6665a18d-b396-4dba-bd0b-13c2e014da0e"
              style={{ maxWidth: "100%" }}
              className="column"
            >
              <img
                style={{ width: "100%", height: "100%" }}
                src={`./onoff1.png`}
                alt=""
              />
            </div>
            <div
              id="bbd08297-2693-4d9b-9d40-06d826b68909"
              style={{ maxWidth: "100%" }}
              className="column"
            >
              <img
                style={{ width: "100%", height: "100%" }}
                src={`./onoff2.png`}
                alt=""
              />
            </div>
          </div>
          <h3 id="8eefd8a0-c78c-4164-bafe-c4e3e6f16465">Skill Stack</h3>
          <p id="15636c55-a977-4192-83b8-748071608662">
            <code>React</code>, <code>TypeScript</code>, <code>Next.js</code>,
            <code>Emotion</code>, <code>GraphQL</code>,
            <code>Apollo-Client</code>, <code>Recoil</code>
          </p>
          <h3 id="156b264d-ea09-4c27-bc14-c972be0d31dd">What I Did</h3>
          <p id="72b34aaf-a867-454d-bce4-10bc1aec22af">
            <strong>관리, 프로필 페이지</strong>
          </p>
          <ul
            id="f5e3bb0f-8d22-485d-b555-71dc4b53f191"
            className="bulleted-list"
          >
            <li style={{ listStyleType: "disc" }}>
              GraphQL을 통해 각 탭에 fit한 data 요청
            </li>
          </ul>
          <ul
            id="bd8775f1-8d67-4e3a-a046-b8b62a283e8c"
            className="bulleted-list"
          >
            <li style={{ listStyleType: "disc" }}>
              카카오맵 API를 이용하여 위치 기반 데이터를 가공하여 전달 및 요청
            </li>
          </ul>
          <ul
            id="8b2fc7fb-68d3-47e1-8420-f923e8599b42"
            className="bulleted-list"
          >
            <li style={{ listStyleType: "disc" }}>
              react-hook-form을 이용하여 form 관련 파일의 코드 라인 50% 단축
            </li>
          </ul>
          <ul
            id="fdede19c-affb-4d31-81f3-740618937c88"
            className="bulleted-list"
          >
            <li style={{ listStyleType: "disc" }}>
              yup을 이용한 유효성 검증으로 유지 보수 개선
            </li>
          </ul>
          <ul
            id="3504354d-a464-4d03-bb61-23727dd27a25"
            className="bulleted-list"
          >
            <li style={{ listStyleType: "disc" }}>
              Container-Presenter 패턴에 Atomic 패턴을 섞어 유지 보수 개선
            </li>
          </ul>
          <p id="d819b3a5-2572-4ea6-8bc0-76d8abc76bee">
            <strong>핵심 공통 컴포넌트 설계 및 구현</strong>
          </p>
          <ul
            id="9c834b02-f217-4772-9520-4ced0ab47af5"
            className="bulleted-list"
          >
            <li style={{ listStyleType: "disc" }}>
              select01.tsx, fallingModal.tsx
              <ul
                id="bc52e3eb-9bc3-42c7-8ee8-4ce4a9b72dc6"
                className="bulleted-list"
              >
                <li style={{ listStyleType: "circle" }}>
                  기능 명세 작성 및 공유
                </li>
              </ul>
            </li>
          </ul>
          <p id="2ee23611-e55b-46db-9fae-edb343ac2d0f"></p>
          <p id="61a0edb8-5f4e-49c6-95d2-41e78eff4db8"></p>
          <p id="f43f49ee-9c01-4d59-9281-b3034b8bdd5c"></p>
          <hr id="6108bd47-e6b8-4251-ab14-a8195fffb9e9" />
          <h2 id="4705c22c-66e4-409e-80cb-e75e84193953">
            <span style={{ borderBottom: "0.05em solid" }}>BUSKER</span> :
            <mark className="highlight-gray">Team Project</mark>
          </h2>
          <p id="59a39d5e-5250-4b01-8537-c4bddf5126ad">
            버스커와 버스킹을 즐기는 관객들을 이어주는 버스킹 위치 정보 제공
            플랫폼.
          </p>
          <p id="7f1aec68-81e5-4440-a10a-d72e46a315f8">
            부트 캠프에서 4주 동안 총 6 명의 팀원이 함께 만든 프로젝트로 기획,
            디자인, 개발을 분배하여 진행.
          </p>
          <figure
            className="callout"
            style={{
              whiteSpace: "pre-wrap",
              display: "flex",
            }}
            id="ebc77647-42c9-4ac1-a076-8d3eeefd476d"
          >
            <div
              style={{
                fontSize: "1.5em",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span className="icon">💡</span>
            </div>
            <p style={{ width: "100%" }}>
              프로젝트 전체 소개는
              <a href="https://bit.ly/9_BUSKER">https://bit.ly/9_BUSKER</a>를
              참조해주시기 바랍니다.
            </p>
          </figure>
          <h3 id="a0e3858d-add2-4aac-922e-f9381dfd03c9">Skill Stack</h3>
          <p id="175289b0-1b64-405c-89a4-0b1de3af4268">
            <code>React</code>, <code>TypeScript</code>, <code>Next.js</code>,
            <code>Emotion</code>, <code>GraphQL</code>, <code>Recoil</code>
          </p>
          <p id="82c9ef1b-3cb6-4e6e-a14a-c1529ebf7548"></p>
          <h3 id="0820383a-59ce-40ed-a309-a4f34d7e6494">What I Did</h3>
          <ul
            id="c973cf73-ba3d-451b-a4ba-3671b2aa1c83"
            className="bulleted-list"
          >
            <li style={{ listStyleType: "disc" }}>
              <strong>
                Front-Repo Git 관리 주도 (Commit Convention, Code Review before
                merging, README)
              </strong>
            </li>
          </ul>
          <ul
            id="3a5bfec3-9ceb-4b3c-82af-b738e0570647"
            className="bulleted-list"
          >
            <li style={{ listStyleType: "disc" }}>
              <strong>디자이너 소통 담당</strong>
            </li>
          </ul>
          <ul
            id="8718ccc8-1526-4d70-9b6e-f4ae42e2546c"
            className="bulleted-list"
          >
            <li style={{ listStyleType: "disc" }}>
              <strong>배포</strong>
              <ul
                id="16ee7af3-4eb3-4715-87dd-cd2658ce520b"
                className="bulleted-list"
              >
                <li style={{ listStyleType: "circle" }}>
                  Google Cloud Platform + Docker
                </li>
              </ul>
              <ul
                id="c5b2a8bf-1008-4e1a-a993-9fa6fe171b6c"
                className="bulleted-list"
              >
                <li style={{ listStyleType: "circle" }}>
                  busker.shop도메인(가비아) ⇒ 클라우드 DNS 네임서버 연결 ⇒ 외부
                  고정 ip주소 예약 ⇒ 부하분산기(https) ⇒ 인스턴스 그룹 ⇒
                  인스턴스 ⇒ docker container
                </li>
              </ul>
            </li>
          </ul>
          <ul
            id="a34e42a2-821f-47af-adea-76b7af076126"
            className="bulleted-list"
          >
            <li style={{ listStyleType: "disc" }}>
              <strong>
                랜딩, 메인(리스트/맵), 버스킹, 버스커, 내 정보 페이지 담당
              </strong>
              <ul
                id="6b0167a7-7e40-48e7-87c1-88bf6e9e09b8"
                className="bulleted-list"
              >
                <li style={{ listStyleType: "circle" }}>
                  AOS(Animated On Scroll) library ⇒ 스크롤 애니메이션 구현
                </li>
              </ul>
              <ul
                id="3cd59a76-bca9-4307-a997-279cb3ddf306"
                className="bulleted-list"
              >
                <li style={{ listStyleType: "circle" }}>
                  framer-motion ⇒ 필터링 애니메이션 적용
                </li>
              </ul>
              <ul
                id="74c09f0f-ec35-4f77-9cdf-83bb1d2a48f4"
                className="bulleted-list"
              >
                <li style={{ listStyleType: "circle" }}>
                  스크롤 시에 게시물 로딩 ⇒ 페이지 진입 속도 증가
                </li>
              </ul>
              <ul
                id="364cebeb-eca3-4ab4-9dc9-9536fbc24d40"
                className="bulleted-list"
              >
                <li style={{ listStyleType: "circle" }}>
                  geolocation API에서 현재 위치를 불러오는 속도(1~2초 사이) ⇒
                  사용자의 위치를 랜딩 페이지에서부터 받는 것으로 해결 ⇒ Map
                  렌더링 지연 개선
                </li>
              </ul>
              <ul
                id="aebf61c4-0fc7-4874-ad50-9763db6bff2a"
                className="bulleted-list"
              >
                <li style={{ listStyleType: "circle" }}>
                  react-kakao-maps-sdk API와 geolocation Web API를 조합하여
                  사용자 주변의 활성화된 버스킹 위치 정보 제공
                </li>
              </ul>
              <ul
                id="3ec38ec0-b3ed-43af-b1c3-c00e8a105447"
                className="bulleted-list"
              >
                <li style={{ listStyleType: "circle" }}>
                  slick-carousel 라이브러리 ⇒ 이미지 슬라이드 형식 구현
                </li>
              </ul>
            </li>
          </ul>
          <ul
            style={{ display: "flex" }}
            id="b88c3050-d85c-484f-aa46-5c0212fa1bf9"
            className="bulleted-list"
          >
            <li style={{ listStyleType: "disc" }}>
              <strong>와이어프레임 제작</strong>
              <ul
                id="50657a9e-2a99-4d3d-8729-a05df6fd740d"
                className="bulleted-list"
              >
                <li style={{ listStyleType: "circle" }}>
                  페이지별 기능들 기재
                </li>
              </ul>
              <ul
                id="0b969939-f433-47dd-b595-30e9d9bce90a"
                className="bulleted-list"
              >
                <li style={{ listStyleType: "circle" }}>
                  기본적인 UI 구조 설계
                </li>
              </ul>
            </li>
            <figure
              id="5f747e3e-c8e9-43a7-acf7-709ff1fdd927"
              style={{ flex: "1" }}
              className="image"
            >
              <a href="%E1%84%91%E1%85%A9%E1%84%90%E1%85%B3%E1%84%91%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A9%20ad1c53025a474abe8b60f6ab44c9b859/%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA_2023-01-16_%25E1%2584%258B%25E1%2585%25A9%25E1%2584%258C%25E1%2585%25A5%25E1%2586%25AB_11.54.57.png">
                <img
                  style={{
                    maxWidth: "40rem",
                    width: "100%",

                    paddingLeft: "1rem",
                  }}
                  src={`./%E1%84%91%E1%85%A9%E1%84%90%E1%85%B3%E1%84%91%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A9%20ad1c53025a474abe8b60f6ab44c9b859/%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA_2023-01-16_%25E1%2584%258B%25E1%2585%25A9%25E1%2584%258C%25E1%2585%25A5%25E1%2586%25AB_11.54.57.png`}
                  alt=""
                />
              </a>
            </figure>
          </ul>
          <ul>
            <li>
              <strong>회고</strong>
              <ul>
                <li style={{ listStyleType: "circle" }}>
                  <figure id="84cd9317-7f7b-4673-a3ed-c3ecd679426c">
                    <a href="https://velog.io/@4ggie97/4%EC%A3%BC-%EB%8F%99%EC%95%88%EC%9D%98-%ED%8C%80-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%9A%8C%EA%B3%A0">
                      velog 회고록 링크
                    </a>
                  </figure>
                </li>
              </ul>
            </li>
          </ul>
          <p id="804dde86-a33a-44c3-bec5-78cd414f094b"></p>
          <p id="8cf0f9c7-efe7-487a-b821-a8a670be747e"></p>
          <hr id="d79fad9b-36a2-4e47-bb29-3e66986e7a11" />
          <h2 id="f3284635-19ca-4229-b2ac-00049e1c08fb">
            <span style={{ borderBottom: "0.05em solid" }}>중고마켓</span> :
            <mark className="highlight-gray">Personal Project</mark>
          </h2>
          <p id="17c93db2-8eb0-4866-a518-54d90a4571a9">
            부트 캠프에서 8주 동안 학습을 병행하며 만들었던 간단한 문의 게시판
            CRUD 기능과 중고 상품 CRUD 기능을 가진 11번가, 에어비앤비 디자인을
            클론한 중고 마켓 + 자유 게시판입니다.
          </p>
          <figure id="37e1a2bd-3276-462e-bf6f-19f9c9b25f44">
            <a href="https://github.com/aggie97/used_market">
              usedMarket Github Client Repo 링크
            </a>
          </figure>
          <h3 id="4941ac6f-1c43-43dd-ace2-2045c25aaf2a">Skill Stack</h3>
          <p id="88416aef-7b75-4d9f-9202-a88b1b58cd6e">
            <code>React</code>, <code>TypeScript</code>, <code>Next.js</code>,
            <code>Emotion</code>, <code>GraphQL</code>, <code>Recoil</code>
          </p>
          <p id="f4d0bd43-0193-441b-b18b-760c3833c6b6"></p>
          <h3 id="d4fd5a6c-d45d-4e20-b5bc-fe2741b3f76a">What I Did</h3>
          <ul
            id="c70287f1-d934-4774-b4d9-c6984c50a85e"
            className="bulleted-list"
          >
            <li style={{ listStyleType: "disc" }}>
              input type option과 label을 이용한 pagination 버튼 구현
            </li>
          </ul>
          <ul
            id="4a13af2d-1421-4f66-b8d7-2840a9054c47"
            className="bulleted-list"
          >
            <li style={{ listStyleType: "disc" }}>
              제목 검색 API에 lodash의 debounce를 사용하여 연속적인 api 요청
              방지
            </li>
          </ul>
          <ul
            id="cd0a7499-4da6-4a79-9a8f-f3841409038e"
            className="bulleted-list"
          >
            <li style={{ listStyleType: "disc" }}>
              중고 상품 목록 무한 스크롤 구현
            </li>
          </ul>
          <ul
            id="5e199e02-1bd3-42f5-aee5-3b89296611a1"
            className="bulleted-list"
          >
            <li style={{ listStyleType: "disc" }}>
              daum-post-code를 이용하여 우편번호와 주소 검색
            </li>
          </ul>
          <ul
            id="ea1256e9-e754-4732-9a97-599ff92c8746"
            className="bulleted-list"
          >
            <li style={{ listStyleType: "disc" }}>
              최상단에서 아래로 스크롤 시, sticky 장바구니 목록
              표시(Intersection-Observer)
            </li>
          </ul>
          <h3>What I Learned</h3>
          <ul
            style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
          >
            <li>Next.js 작동 원리</li>
            <li>Emotion을 쓰는 이유</li>
            <li>Context API, Recoil를 활용한 전역 상태 관리</li>
            <li>GraphQL과 Apollo-Client의 사용법</li>
            <li>TypeScript를 사용하는 이유</li>
            <li>JavaScript의 비동기 처리</li>
            <li>Critical Rendering Path 방지법</li>
            <li>XSS, CSRF의 정의와 대응 방안</li>
          </ul>
          <p id="66b1027f-eecd-44aa-943d-943bfbd4df9f"></p>
        </div>
      </article>
    </div>
  );
};

export default Portfolio;
