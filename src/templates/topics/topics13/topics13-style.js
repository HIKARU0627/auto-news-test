// topics13のスタイル

import styled from "styled-components";
import media from "./media";

/* css */
const Kanban = styled.img`
  width: 100%;
`;

const OuterFrame = styled.div`
  background-color: #f2f2f2;
`;

const Talk = styled.div`
  padding: 0 40px;
  background-color: #ffffff;
  ${media.sp`
    padding: 5%;
  `}
`;

const HeadLine = styled.div`
  margin: 0 auto;
  width: 400px;
  ${media.sp`
    width: 50%;  // 80% * 62.5% = 50%
  `}
`;

const Narration = styled.div`
  text-align: center;
  clear: both;
  margin: 50px;
  font-weight: 500;
  font-size: 16px;
`;

const BigNarration = styled.div`
  clear: both;
  margin: 50px;
  font-weight: 500;
  font-size: 25px;
  ${media.sp`
    mergin: 0;
    font-size: 18px;
  `}
`;

const ImageFrame = styled.div`
  margin: 40px auto;
  max-width: 600px;
  ${media.sp`
    width: 80%;
  `}
`;

// セリフ (顔 + 吹き出し)
const Dialogue = styled.div`
  width: 100%;
  overflow: hidden;
  padding-bottom: ${(props) => (props.nospace ? "0" : "40px")};
  ${media.sp`
    padding-bottom: ${(props) => (props.nospace ? "0" : "30px")};
  `}
`;

// 顔
const Face = styled.img`
  width: 80px;
  display: inline-block;
  float: left;
  ${media.sp`
    width: 16%;
  `}
`;

// 吹き出し
const Bubble = styled.div`
  position: relative;
  width: 89%;
  margin: 10px 0;
  margin-left: 20px;
  padding: 20px;
  border: 2px solid ${(props) => props.bubble_color};
  border-radius: 10px;
  float: left;
  &:before {
    content: "";
    position: absolute;
    display: block;
    left: -15px;
    top: 15px;
    border-right: 15px solid ${(props) => props.bubble_color};
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
  }
  &:after {
    content: "";
    position: absolute;
    display: block;
    left: -12px;
    top: 15px;
    border-right: 15px solid #ffffff;
    border-top: 10px solid transparent;
    border-bottom: 9px solid transparent;
  }
  ${media.sp`
    position: relative;
    width: 75%;
    margin-left: 20px;
    padding: 10px;
    border: 2px solid ${(props) => props.bubble_color};
    border-radius: 7px;
    &:before {
      content: '';
      position: absolute;
      display: block;
      left: -15px;
      top: 7px;
    }
    &:after {
      content: '';
      position: absolute;
      display: block;
      left: -12px;
      top: 7px;
      height: 3px;
    }
  `}
`;

export {
  Kanban,
  OuterFrame,
  Talk,
  HeadLine,
  Narration,
  BigNarration,
  ImageFrame,
  Dialogue,
  Face,
  Bubble,
};
