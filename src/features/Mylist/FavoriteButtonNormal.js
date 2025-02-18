import React from "react";
import styled from "styled-components";
import useFavorite from "./FavoriteButtonLogic";
import { RxBookmarkFilled } from "react-icons/rx";
import { RxBookmark } from "react-icons/rx";

const FavoriteButtonNormal = ({ id, slug }) => {
  const [isFaved, toggleFav] = useFavorite(id, slug);
  return (
    <Wrapper onClick={(e) => toggleFav(e)} title="マイリスト">
      {isFaved ? (
        <RxBookmarkFilled size={30} color="ff5252" />
      ) : (
        <RxBookmark size={30} />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: inline-block;
  cursor: pointer;
  padding: 4px 2px;
  &:hover svg {
    color: #ff5252;
  }
`;

export default FavoriteButtonNormal;
