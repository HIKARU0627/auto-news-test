import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const NavbarJapanesePulldown = () => {
  return (
    <PulldownJapanese className="container">
      <PulldownItemLink to="/">JA</PulldownItemLink>
    </PulldownJapanese>
  );
};

const PulldownJapanese = styled.div``;

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

export default NavbarJapanesePulldown;
