import React, { useReducer } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import TopicsNavbarRoll from "./TopicsNavbarRoll";
import ReserchNavbarRoll from "./ReserchNavbarRoll";
import OpenCampusNavbarRoll from "./OpenCampusNavbarRoll";
import RelayNavbarRoll from "./RelayNavbarRoll";
import SpecialsNavbarRoll from "./SpecialsNavbarRoll";

const specialReducer = (
  {
    /* eslint-disable */
    specialTopics,
    specialResearch,
    specialCampus,
    specialRelay,
    specialSpecials,
    specialOthers,
    /* eslint-enable */
  },
  action
) => {
  switch (action) {
    case "topics":
      return {
        specialTopics: true,
        specialResearch: false,
        specialCampus: false,
        specialRelay: false,
        specialSpecials: false,
        specialOthers: false,
      };
    case "research":
      return {
        specialTopics: false,
        specialResearch: true,
        specialCampus: false,
        specialRelay: false,
        specialSpecials: false,
        specialOthers: false,
      };
    case "campus":
      return {
        specialTopics: false,
        specialResearch: false,
        specialCampus: true,
        specialRelay: false,
        specialSpecials: false,
        specialOthers: false,
      };
    case "relay":
      return {
        specialTopics: false,
        specialResearch: false,
        specialCampus: false,
        specialRelay: true,
        specialSpecials: false,
        specialOthers: false,
      };
    case "special":
      return {
        specialTopics: false,
        specialResearch: false,
        specialCampus: false,
        specialRelay: false,
        specialSpecials: true,
        specialOthers: false,
      };
    case "others":
      return {
        specialTopics: false,
        specialResearch: false,
        specialCampus: false,
        specialRelay: false,
        specialSpecials: false,
        specialOthers: true,
      };
    default:
      return {
        specialTopics: true,
        specialResearch: false,
        specialCampus: false,
        specialRelay: false,
        specialSpecials: false,
        specialOthers: false,
      };
  }
};

const NavbarSpecialPulldown = () => {
  const [specialState, specialDispatch] = useReducer(specialReducer, {
    specialTopics: true,
    specialResearch: false,
    specialCampus: false,
    specialRelay: false,
    specialSpecials: false,
    specialOthers: false,
  });

  return (
    <PulldownSpecial className="container">
      <div className="columns">
        <div className="column is-one-fifth">
          <PulldownItemList
            className={`${
              specialState.specialTopics ? "on-special" : "off-special"
            }`}
            onClick={() => specialDispatch("topics")}
          >
            <span>TOPICS</span>
          </PulldownItemList>
          <PulldownItemList
            className={`${
              specialState.specialResearch ? "on-special" : "off-special"
            }`}
            onClick={() => specialDispatch("research")}
          >
            <span>名大の研究指導</span>
          </PulldownItemList>
          <PulldownItemList
            className={`${
              specialState.specialCampus ? "on-special" : "off-special"
            }`}
            onClick={() => specialDispatch("campus")}
          >
            <span>オープンキャンパス</span>
          </PulldownItemList>
          <PulldownItemList
            className={`${
              specialState.specialRelay ? "on-special" : "off-special"
            }`}
            onClick={() => specialDispatch("relay")}
          >
            <span>名古屋大学ラジオ公開講座</span>
          </PulldownItemList>
          <PulldownItemList
            className={`${
              specialState.specialSpecials ? "on-special" : "off-special"
            }`}
            onClick={() => specialDispatch("special")}
          >
            <span>過去の特集ページ</span>
          </PulldownItemList>
          {/* <PulldownItemList
            className={`${
              specialState.specialOthers ? "on-special" : "off-special"
            }`}
            onClick={() => specialDispatch("others")}
          >
            <span>その他の特集</span>
          </PulldownItemList> */}
        </div>

        <div className="column">
          <div
            className={`${
              specialState.specialTopics ? "is-special" : "not-special"
            }`}
          >
            <TopicsNavbarRoll />
            <ButtonContainer>
              <Link to="/topics">
                <button className="button is-dark is-fullwidth">
                  一覧へ移動
                </button>
              </Link>
            </ButtonContainer>
          </div>

          <div
            className={`${
              specialState.specialResearch ? "is-special" : "not-special"
            }`}
          >
            <ReserchNavbarRoll />
            <ButtonContainer>
              <Link to="/research">
                <button className="button is-dark is-fullwidth">
                  一覧へ移動
                </button>
              </Link>
            </ButtonContainer>
          </div>

          <div
            className={`${
              specialState.specialCampus ? "is-special" : "not-special"
            }`}
          >
            <OpenCampusNavbarRoll />
            <ButtonContainer>
              <Link to="/opencampus">
                <button className="button is-dark is-fullwidth">
                  一覧へ移動
                </button>
              </Link>
            </ButtonContainer>
          </div>

          <div
            className={`${
              specialState.specialRelay ? "is-special" : "not-special"
            }`}
          >
            <RelayNavbarRoll />
            <ButtonContainer>
              <Link to="/relay">
                <button className="button is-dark is-fullwidth">
                  一覧へ移動
                </button>
              </Link>
            </ButtonContainer>
          </div>

          <div
            className={`${
              specialState.specialSpecials ? "is-special" : "not-special"
            }`}
          >
            <SpecialsNavbarRoll />
            <ButtonContainer>
              <Link to="/specials">
                <button className="button is-dark is-fullwidth">
                  一覧へ移動
                </button>
              </Link>
            </ButtonContainer>
          </div>

          <div
            className={`${
              specialState.specialOthers ? "is-special" : "not-special"
            }`}
          >
            {/* <FarewellNavbarRoll /> */}
            <ButtonContainer>
              {/* <Link to="/others">
                <button className="button is-dark is-fullwidth">
                  一覧へ移動
                </button>
              </Link> */}
            </ButtonContainer>
          </div>
        </div>
      </div>
    </PulldownSpecial>
  );
};

const PulldownSpecial = styled.div`
  div.is-special {
    display: block;
  }
  div.is-special > div {
    max-height: 50vh;
    overflow-y: auto;
    overflow-x: hidden;
  }
  div.not-special {
    display: none;
  }
`;

const PulldownItemList = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  flex-grow: 0;
  flex-shrink: 0;
  color: #8c8c8c;
  line-height: 1.5;
  padding: 0.5rem 0.75rem;
  position: relative;
  font-size: 0.875rem;
  &.on-special {
    color: #ffffff;
  }
  &.off-special {
    color: #8c8c8c;
  }
  &:hover {
    color: #ffffff;
  }
  span::before {
    content: ">";
    position: absolute;
    right: 0;
  }
`;

const ButtonContainer = styled.div`
  text-align: center;
`;

export default NavbarSpecialPulldown;
