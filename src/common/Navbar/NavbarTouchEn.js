import React, { useReducer } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import logo from "../../img/logo.png";
//import english from "../img/header/english.svg";
//import pc from "../img/header/pc.svg";
import course from "../../img/header/course.svg";
//import special from "../img/header/special.svg";
import features from "../../img/header/special.svg";
import beginner from "../../img/header/beginner.svg";
import search from "../../img/header/search.svg";
import others from "../../img/header/others.svg";

const pulldownReducer = (
  {
    pulldownActive,
    pulldownCourse,
    pulldownSpecial,
    pulldownFeatures,
    pulldownBeginner,
    pulldownOthers,
  },
  action
) => {
  switch (action) {
    case "course":
      return (pulldownActive === true) & (pulldownCourse === true)
        ? {
            pulldownActive: false,
            pulldownCourse: false,
            pulldownSpecial: false,
            pulldownFeatures: false,
            pulldownBeginner: false,
            pulldownOthers: false,
          }
        : {
            pulldownActive: true,
            pulldownCourse: true,
            pulldownSpecial: false,
            pulldownFeatures: false,
            pulldownBeginner: false,
            pulldownOthers: false,
          };
    case "special":
      return (pulldownActive === true) & (pulldownSpecial === true)
        ? {
            pulldownActive: false,
            pulldownCourse: false,
            pulldownSpecial: false,
            pulldownFeatures: false,
            pulldownBeginner: false,
            pulldownOthers: false,
          }
        : {
            pulldownActive: true,
            pulldownCourse: false,
            pulldownSpecial: true,
            pulldownFeatures: false,
            pulldownBeginner: false,
            pulldownOthers: false,
          };
    case "features":
      return (pulldownActive === true) & (pulldownFeatures === true)
        ? {
            pulldownActive: false,
            pulldownCourse: false,
            pulldownSpecial: false,
            pulldownFeatures: false,
            pulldownBeginner: false,
            pulldownOthers: false,
          }
        : {
            pulldownActive: true,
            pulldownCourse: false,
            pulldownSpecial: false,
            pulldownFeatures: true,
            pulldownBeginner: false,
            pulldownOthers: false,
          };
    case "beginner":
      return (pulldownActive === true) & (pulldownBeginner === true)
        ? {
            pulldownActive: false,
            pulldownCourse: false,
            pulldownSpecial: false,
            pulldownFeatures: false,
            pulldownBeginner: false,
            pulldownOthers: false,
          }
        : {
            pulldownActive: true,
            pulldownCourse: false,
            pulldownSpecial: false,
            pulldownFeatures: false,
            pulldownBeginner: true,
            pulldownOthers: false,
          };
    case "others":
      return (pulldownActive === true) & (pulldownOthers === true)
        ? {
            pulldownActive: false,
            pulldownCourse: false,
            pulldownSpecial: false,
            pulldownFeatures: false,
            pulldownBeginner: false,
            pulldownOthers: false,
          }
        : {
            pulldownActive: true,
            pulldownCourse: false,
            pulldownSpecial: false,
            pulldownFeatures: false,
            pulldownBeginner: false,
            pulldownOthers: true,
          };
    case "close":
      return {
        pulldownActive: false,
        pulldownCourse: false,
        pulldownSpecial: false,
        pulldownFeatures: false,
        pulldownBeginner: false,
        pulldownOthers: false,
      };
    default:
      return {
        pulldownActive: false,
        pulldownCourse: false,
        pulldownSpecial: false,
        pulldownFeatures: false,
        pulldownBeginner: false,
        pulldownOthers: false,
      };
  }
};

const NavbarTouchEn = () => {
  const [pulldownState, pulldownDispatch] = useReducer(pulldownReducer, {
    pulldownActive: false,
    pulldownCourse: false,
    pulldownSpecial: false,
    pulldownFeatures: false,
    pulldownBeginner: false,
    pulldownOthers: false,
  });

  const iconStyle = { height: `2.0rem` };
  const titleStyle = { fontSize: `0.9rem` };

  return (
    <div className="is-hidden-desktop">
      <NavbarSub role="navigation" aria-label="sub-navigation">
        <div className="container">
          <Link to="/en" className="navbar-item" title="Logo">
            <div>
              <img src={logo} style={{ height: `2rem` }} alt="NUOCW" />
            </div>
          </Link>
          <div>
            {/* <StyledA href="http://ocw.ilas.nagoya-u.ac.jp/index.php?lang=en&mode=g&page_type=top">
              <div>
                <img src={english} style={{ height: `2rem` }} alt="ENGLISH" />
                ENGLISH
              </div>
            </StyledA> */}
            {/* <StyledLink to="/">
            <div>
                <img src={english} style={{ height: `2rem` }} alt="ENGLISH" />
                ENGLISH
              </div>
            </StyledLink> */}
            {/* <StyledLink to="/">
              <div>
                <img src={pc} style={{ height: `2rem` }} alt="PC" />
                PC
              </div>
            </StyledLink> */}
            {/* <StyledA href="https://ocw.ilas.nagoya-u.ac.jp/">
              <div>
                <img src={pc} style={{ height: `2rem` }} alt="PC" />
                旧日本語版
              </div>
            </StyledA> */}
          </div>
        </div>
      </NavbarSub>
      <NavbarMain
        className="navbar"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          {pulldownState.pulldownActive ? (
            <PulldownActive onClick={() => pulldownDispatch("close")} />
          ) : null}
          <div className="navbar-brand columns is-gapless is-vcentered">
            <PulldownItem className="column" role="button" tabIndex="0">
              <PulldownLink
                className={`columns is-gapless is-centered ${
                  pulldownState.pulldownCourse ? "on-pulldown" : "off-pulldown"
                }`}
                onClick={() => pulldownDispatch("course")}
              >
                <FlexBox className="column">
                  <img src={course} style={iconStyle} alt="授業を探す" />
                </FlexBox>
                <FlexBox className="column" style={titleStyle}>
                  Courses
                </FlexBox>
              </PulldownLink>
              <div
                className={`${
                  pulldownState.pulldownCourse ? "is-pulldown" : "not-pulldown"
                }`}
              >
                <Pulldown className="container">
                  <Link to="/en/courses">
                    <PulldownItemList>Course List</PulldownItemList>
                  </Link>
                  {/* <Link to="/categories">
                    <PulldownItemList>カテゴリから探す</PulldownItemList>
                  </Link> */}
                  <Link to="/en/department">
                    <PulldownItemList>Search by Department</PulldownItemList>
                  </Link>
                  <Link to="/en/search">
                    <PulldownItemList>Search by Keyword</PulldownItemList>
                  </Link>
                </Pulldown>
              </div>
            </PulldownItem>
            <PulldownItem className="column" role="button" tabIndex="0">
              <PulldownLink
                className={`columns is-gapless is-centered ${
                  pulldownState.pulldownFeatures
                    ? "on-pulldown"
                    : "off-pulldown"
                }`}
                onClick={() => pulldownDispatch("features")}
              >
                <FlexBox className="column">
                  <img src={features} style={iconStyle} alt="特集記事" />
                </FlexBox>
                <FlexBox className="column" style={titleStyle}>
                  Features
                </FlexBox>
              </PulldownLink>
              <div
                className={`${
                  pulldownState.pulldownFeatures
                    ? "is-pulldown"
                    : "not-pulldown"
                }`}
              >
                <Pulldown className="container">
                  <Link to="/en/catalog">
                    <PulldownItemList>Catalog</PulldownItemList>
                  </Link>
                </Pulldown>
              </div>
            </PulldownItem>
            {/* <PulldownItem className="column" role="button" tabIndex="0">
              <PulldownLink
                className={`columns is-gapless is-centered ${
                  pulldownState.pulldownSpecial ? "on-pulldown" : "off-pulldown"
                }`}
                onClick={() => pulldownDispatch("special")}
              >
                <FlexBox className="column">
                  <img
                    src={special}
                    style={{ height: `2.25rem` }}
                    alt="特集記事"
                  />
                </FlexBox>
                <FlexBox className="column">特集記事</FlexBox>
              </PulldownLink>
              <div
                className={`${
                  pulldownState.pulldownSpecial ? "is-pulldown" : "not-pulldown"
                }`}
              >
                <Pulldown className="container">
                  <Link to="/topics">
                    <PulldownItemList>TOPICS</PulldownItemList>
                  </Link>
                  <Link to="/research">
                    <PulldownItemList>名大の研究指導</PulldownItemList>
                  </Link>
                  <Link to="/opencampus">
                    <PulldownItemList>オープンキャンパス</PulldownItemList>
                  </Link>
                  <Link to="/relay">
                    <PulldownItemList>名古屋大学ラジオ公開講座</PulldownItemList>
                  </Link>
                  <Link to="/specials">
                    <PulldownItemList>過去の特集ページ</PulldownItemList>
                  </Link>
                  <Link to="/others">
                    <PulldownItemList>その他の特集</PulldownItemList>
                  </Link>
                </Pulldown>
              </div>
            </PulldownItem> */}
            <PulldownItem className="column" role="button" tabIndex="0">
              <PulldownLink
                className={`columns is-gapless is-centered ${
                  pulldownState.pulldownBeginner
                    ? "on-pulldown"
                    : "off-pulldown"
                }`}
                onClick={() => pulldownDispatch("beginner")}
              >
                <FlexBox className="column">
                  <img src={beginner} style={iconStyle} alt="初めての方へ" />
                </FlexBox>
                <FlexBox className="column" style={titleStyle}>
                  About
                </FlexBox>
              </PulldownLink>
              <div
                className={`${
                  pulldownState.pulldownBeginner
                    ? "is-pulldown"
                    : "not-pulldown"
                }`}
              >
                <Pulldown className="container">
                  <Link to="/en/about">
                    <PulldownItemList>About Us</PulldownItemList>
                  </Link>
                </Pulldown>
              </div>
            </PulldownItem>
            <PulldownItem className="column" role="button" tabIndex="0">
              <Link to="/en/search">
                <PulldownLink className={`columns is-gapless is-centered`}>
                  <FlexBox className="column">
                    <img src={search} style={iconStyle} alt="キーワード検索" />
                  </FlexBox>
                  <FlexBox className="column" style={titleStyle}>
                    Search
                  </FlexBox>
                </PulldownLink>
              </Link>
            </PulldownItem>
            <PulldownItem className="column" role="button" tabIndex="0">
              <PulldownLink
                className={`columns is-gapless is-centered ${
                  pulldownState.pulldownOthers ? "on-pulldown" : "off-pulldown"
                }`}
                onClick={() => pulldownDispatch("others")}
              >
                <FlexBox className="column">
                  <img src={others} style={iconStyle} alt="その他" />
                </FlexBox>
                <FlexBox className="column" style={titleStyle}>
                  Others
                </FlexBox>
              </PulldownLink>
              <div
                className={`${
                  pulldownState.pulldownOthers ? "is-pulldown" : "not-pulldown"
                }`}
              >
                <Pulldown className="container">
                  <Link to="/en/news">
                    <PulldownItemList>News</PulldownItemList>
                  </Link>
                  <Link to="/en/mylist">
                    <PulldownItemList>My List</PulldownItemList>
                  </Link>
                  {/* <Link to="apply">
                    <PulldownItemList>Staff Wanted</PulldownItemList>
                  </Link> */}
                </Pulldown>
              </div>
            </PulldownItem>
          </div>
        </div>
      </NavbarMain>
    </div>
  );
};

const Pulldown = styled.div`
  a:not(:last-child) div {
    border-bottom: 1px solid #2b2523;
  }
`;

const PulldownItemList = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  flex-grow: 0;
  flex-shrink: 0;
  color: #ffffff;
  line-height: 1.5;
  padding: 0.5rem 0.75rem;
  position: relative;
  font-size: 0.875rem;
`;

const NavbarSub = styled.nav`
  min-height: 2rem !important;
  background-color: #323232;
  position: relative;
  z-index: 30;
  font-size: 0.8em;
  display: flex;
  div {
    align-items: stretch;
    display: flex;
    div {
      display: flex;
      justify-content: flex-end;
      margin-left: auto;
      align-items: center;
    }
  }
`;

const FlexBox = styled.div`
  display: flex !important;
  justify-content: center;
  align-items: center;
`;

const NavbarMain = styled.nav`
  z-index: 30;
`;

const PulldownActive = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 0;
  display: block;
  cursor: default;
  content: " ";
  background: transparent;
`;

const PulldownItem = styled.div`
  //display: flex; //columnと競合 block
  align-items: center;
  //flex-grow: 0; //columnと競合 1
  //flex-shrink: 0; //columnと競合 1
  line-height: 1.5;
  padding: 0.5rem 0.75rem;
  position: relative;
  div.off-pulldown {
    color: #ffffff;
  }
  div.on-pulldown {
    background-color: #00996e;
    color: #2b2523;
  }
  div.is-pulldown {
    background-color: black;
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
    box-shadow: 0 8px 8px rgba(43, 37, 35, 0.1);
    font-size: 0.875rem;
    position: fixed;
    min-width: 100%;
    top: 6.5rem;
    left: 0;
    z-index: 20;
    display: block;
    opacity: 0.9;
  }
  div.not-pulldown {
    display: none;
  }
`;

const PulldownLink = styled.div`
  cursor: pointer;
  color: #ffffff;
  position: relative;
  border-radius: 0.5rem;
  margin-bottom: 0 !important;
  padding: 5px 0;
  :hover {
    background-color: #00996e;
    color: #2b2523;
  }
`;

// const StyledA = styled.a`
//   color: white;
//   position: relative;
//   margin: 0 1rem;
//   vertical-align: middle;
//   :hover {
//     color: #00996e;
//   }
//   img {
//     padding-right: 1rem;
//   }
// `;

// const StyledLink = styled(Link)`
//   color: white;
//   position: relative;
//   margin: 0 1rem;
//   vertical-align: middle;
//   :hover {
//     color: #00996e;
//   }
//   img {
//     padding-right: 1rem;
//   }
// `;

export default NavbarTouchEn;
