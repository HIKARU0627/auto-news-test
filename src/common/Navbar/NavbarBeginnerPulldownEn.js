import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const NavbarBeginnerPulldown = () => {
  return (
    <PulldownBeginner className="container">
      <PulldownItemLink to="/en/about">About NUOCW</PulldownItemLink>
      {/* <PulldownItemLink to="/words">用語解説</PulldownItemLink>
      <PulldownItemLink to="/faq">FAQ (よくある質問)</PulldownItemLink> */}
    </PulldownBeginner>
  );
};

const PulldownBeginner = styled.div``;

const PulldownItemLink = styled(Link)`
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
  &:hover {
    color: #ffffff;
  }
`;

export default NavbarBeginnerPulldown;
