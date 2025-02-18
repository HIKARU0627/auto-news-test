import React, { useReducer, useCallback, useState, useEffect } from "react";
import { Link, withPrefix } from "gatsby";
import styled from "styled-components";
import logo from "../../img/logo.png";
import language from "../../img/header/language.svg";

import NavbarEnglishPulldown from "./NavbarEnglishPulldown";
import NavbarCoursePulldown from "./NavbarCoursePulldown";
import NavbarSpecialPulldown from "./NavbarSpecialPulldown";
import NavbarBeginnerPulldown from "./NavbarBeginnerPulldown";

const HOVER_DELAY = 40;

const pulldownReducer = (state, action) => {
  switch (action.type) {
    case "SET_PULLDOWN":
      return {
        ...state,
        pulldownActive: true,
        pulldownEnglish: action.menu === "english",
        pulldownCourse: action.menu === "course",
        pulldownSpecial: action.menu === "special",
        pulldownBeginner: action.menu === "beginner",
      };
    case "CLOSE":
      return {
        pulldownActive: false,
        pulldownEnglish: false,
        pulldownCourse: false,
        pulldownSpecial: false,
        pulldownBeginner: false,
      };
    default:
      return state;
  }
};

const NavbarDesktopTop = () => {
  const [pulldownState, dispatch] = useReducer(pulldownReducer, {
    pulldownActive: false,
    pulldownEnglish: false,
    pulldownCourse: false,
    pulldownSpecial: false,
    pulldownBeginner: false,
  });

  const [hoverTimer, setHoverTimer] = useState(null);

  const handleMouseEnter = useCallback(
    (menu) => {
      // 既存のタイマーをクリア
      if (hoverTimer) {
        clearTimeout(hoverTimer);
      }

      // 新しいタイマーをセット
      const timer = setTimeout(() => {
        dispatch({ type: "SET_PULLDOWN", menu });
      }, HOVER_DELAY);

      setHoverTimer(timer);
    },
    [hoverTimer]
  );

  const handleMouseLeave = useCallback(() => {
    if (hoverTimer) {
      clearTimeout(hoverTimer);
    }

    const timer = setTimeout(() => {
      dispatch({ type: "CLOSE" });
    }, HOVER_DELAY);

    setHoverTimer(timer);
  }, [hoverTimer]);

  // コンポーネントのアンマウント時にタイマーをリセット
  useEffect(() => {
    return () => {
      if (hoverTimer) {
        clearTimeout(hoverTimer);
      }
    };
  }, [hoverTimer]);

  return (
    <div className="is-hidden-touch">
      <NavbarSub role="navigation" aria-label="sub-navigation">
        <div className="container">
          <div>
            <StyledLink to="/form">お問い合わせ</StyledLink>
            <StyledLink to="/forteacher">教員の方へ</StyledLink>
            <StyledLink to="/links">リンク集</StyledLink>
          </div>
        </div>
      </NavbarSub>
      <NavbarMain
        className="navbar"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="NUOCW" />
            </Link>
          </div>
          <div id="navMenu" className="navbar-menu" style={{ height: "100%" }}>
            {pulldownState.pulldownActive && (
              <PulldownActive onMouseLeave={handleMouseLeave} />
            )}
            <div className="navbar-start">
              <PulldownItemTwo onMouseLeave={handleMouseLeave}>
                <PulldownLink
                  className={`${
                    pulldownState.pulldownEnglish
                      ? "on-pulldown"
                      : "off-pulldown"
                  }`}
                  onMouseEnter={() => handleMouseEnter("english")}
                >
                  <img
                    src={language}
                    style={{ height: `1.5rem` }}
                    alt="授業を探す"
                  />
                </PulldownLink>
                <div
                  className={`${
                    pulldownState.pulldownEnglish
                      ? "is-pulldown"
                      : "not-pulldown"
                  }`}
                >
                  <NavbarEnglishPulldown />
                </div>
              </PulldownItemTwo>
            </div>
            <div className="navbar-end">
              <PulldownItem onMouseLeave={handleMouseLeave}>
                <PulldownLink
                  className={`${
                    pulldownState.pulldownCourse
                      ? "on-pulldown"
                      : "off-pulldown"
                  }`}
                  onMouseEnter={() => handleMouseEnter("course")}
                >
                  授業を探す
                </PulldownLink>
                <div
                  className={`${
                    pulldownState.pulldownCourse
                      ? "is-pulldown"
                      : "not-pulldown"
                  }`}
                >
                  <NavbarCoursePulldown />
                </div>
              </PulldownItem>
              <PulldownItem onMouseLeave={handleMouseLeave}>
                <PulldownLink
                  className={`${
                    pulldownState.pulldownSpecial
                      ? "on-pulldown"
                      : "off-pulldown"
                  }`}
                  onMouseEnter={() => handleMouseEnter("special")}
                >
                  特集記事
                </PulldownLink>
                <div
                  className={`${
                    pulldownState.pulldownSpecial
                      ? "is-pulldown"
                      : "not-pulldown"
                  }`}
                >
                  <NavbarSpecialPulldown />
                </div>
              </PulldownItem>

              <PulldownItem onMouseLeave={handleMouseLeave}>
                <PulldownLink
                  className={`${
                    pulldownState.pulldownBeginner
                      ? "on-pulldown"
                      : "off-pulldown"
                  }`}
                  onMouseEnter={() => handleMouseEnter("beginner")}
                >
                  初めての方へ
                </PulldownLink>
                <div
                  className={`${
                    pulldownState.pulldownBeginner
                      ? "is-pulldown"
                      : "not-pulldown"
                  }`}
                >
                  <NavbarBeginnerPulldown />
                </div>
              </PulldownItem>

              <PulldownItem>
                <Link to="/mylist">
                  <NavbarLink>マイリスト</NavbarLink>
                </Link>
              </PulldownItem>

              <PulldownItem>
                <div className="field has-addons">
                  <div className="control">
                    <input
                      className="input is-rounded"
                      id="keyword"
                      type="text"
                      placeholder="検索したい単語を入力…"
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          let params = {
                            keyword: document.getElementById("keyword").value,
                          };
                          const urlSearchParam = new URLSearchParams(
                            params
                          ).toString();
                          document.location.href = `${withPrefix(
                            "/search?"
                          )}${urlSearchParam}`;
                        }
                      }}
                    />
                  </div>
                  <div className="control">
                    <SearchButton
                      className="input is-rounded"
                      type="button"
                      value="検索"
                      onClick={(e) => {
                        e.preventDefault();
                        let params = {
                          keyword: document.getElementById("keyword").value,
                        };
                        const urlSearchParam = new URLSearchParams(
                          params
                        ).toString();
                        document.location.href = `${withPrefix(
                          "/search?"
                        )}${urlSearchParam}`;
                      }}
                    />
                  </div>
                </div>
              </PulldownItem>
            </div>
          </div>
        </div>
      </NavbarMain>
    </div>
  );
};

const SearchButton = styled.input`
  background-color: #006649;
  color: white;
  :hover {
    background-color: #00996e;
    color: white;
    cursor: pointer;
  }
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

const NavbarMain = styled.nav`
  z-index: 30;
  .navbar-start {
    height: 100%;
    display: flex;
    align-items: center;
  }
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
  display: flex;
  align-items: center;
  flex-grow: 0;
  flex-shrink: 0;
  line-height: 1.5;
  padding: 0.5rem 0.75rem;
  position: relative;
  height: 100%;
  div.off-pulldown {
    color: #ffffff;
  }
  div.on-pulldown {
    background-color: #00996e;
    color: #2b2523;
  }
  div.on-pulldown::before {
    content: "";
    width: 0;
    height: 0;
    border-left: 1rem solid transparent;
    border-right: 1rem solid transparent;
    border-bottom: 1rem solid black;
    position: absolute;
    top: 80%;
    left: 40%;
    z-index: 30;
    opacity: 0.9;
  }
  div.is-pulldown {
    background-color: black;
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
    box-shadow: 0 8px 8px rgba(43, 37, 35, 0.1);
    font-size: 0.875rem;
    left: 0;
    position: absolute;
    min-width: 100%;
    top: 100%;
    z-index: 20;
    display: block;
    opacity: 0.9;
  }
  div.not-pulldown {
    display: none;
  }
  div.is-pulldown {
    font-size: 0.875rem;
    position: fixed;
    top: 5.5rem;
    z-index: 20;
    display: block;
    div.container {
      padding-bottom: 0.5rem;
      padding-top: 0.5rem;
      border-radius: 1rem;
      border-top: none;
    }
    div.not-pulldown {
      display: none;
    }
  }
`;

const PulldownItemTwo = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 0;
  flex-shrink: 0;
  line-height: 1.5;
  padding: 0.5rem 0.75rem;
  position: relative;
  height: 100%;
  div.off-pulldown {
    color: #ffffff;
  }
  div.on-pulldown {
    background-color: #00996e;
    color: #2b2523;
  }
  div.on-pulldown::before {
    content: "";
    width: 0;
    height: 0;
    border-left: 1rem solid transparent;
    border-right: 1rem solid transparent;
    border-bottom: 1rem solid black;
    position: absolute;
    top: 80%;
    left: 40%;
    z-index: 30;
    opacity: 0.9;
  }
  div.is-pulldown {
    background-color: black;
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
    box-shadow: 0 8px 8px rgba(43, 37, 35, 0.1);
    font-size: 0.875rem;
    position: absolute;
    top: 100%;
    z-index: 20;
    display: block;
    opacity: 0.9;
  }
  div.not-pulldown {
    display: none;
  }
  div.is-pulldown {
    font-size: 0.875rem;
    position: absolute;
    top: 3.5rem;
    width: 6rem;
    z-index: 20;
    display: block;
    div.container {
      padding-bottom: 0.5rem;
      padding-top: 0.5rem;
      border-radius: 1rem;
      border-top: none;
    }
    div.not-pulldown {
      display: none;
    }
  }
`;

const NavbarLink = styled.div`
  align-items: center;
  display: flex;
  cursor: pointer;
  color: #ffffff;
  line-height: 1.5;
  padding: 0.5rem 0.75rem;
  position: relative;
  border-radius: 0.5rem;
  :hover {
    background-color: #00996e;
    color: #2b2523;
  }
`;

const PulldownLink = styled(NavbarLink)`
  padding: 0.5rem 2.5em 0.5rem 0.75rem;
  ::after {
    border: 3px solid;
    border-color: #3273dc;
    margin-top: -0.375em;
    right: 1.125em;
    border-radius: 2px;
    border-right: 0;
    border-top: 0;
    content: " ";
    display: block;
    height: 0.625em;
    margin-top: -0.4375em;
    pointer-events: none;
    position: absolute;
    top: 50%;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    -webkit-transform-origin: center;
    transform-origin: center;
    width: 0.625em;
  }
`;

const StyledLink = styled(Link)`
  color: white;
  position: relative;
  padding-left: 0.8rem;
  margin-left: 1rem;
  :hover {
    color: #00996e;
  }
  ::before {
    position: absolute;
    content: "";
    width: 0;
    height: 0;
    border: solid 0.5rem transparent;
    border-left: solid 0.5rem #697b91;
    top: 0.1rem;
    left: 0;
  }
`;

export default NavbarDesktopTop;
