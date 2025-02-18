// topics14のスタイル
import styled from "styled-components";
import media from "./media";
import { Link } from "gatsby";

/* css */
const Kanban = styled.img`
  width: 100%;
`;

const TopPage = styled.div`
  background-color: #ffffff;
  margin: 100px auto;
  ${media.sp`
    width: 80%;
    margin: 40px auto;
  `}
`;

const Lecture = styled.div`
  background-color: #ffffff;
  ${media.sp`
    width: 90%;
  `}
`;

const LectureImage = styled.div`
  width: 100%;
  margin-top: 80px;
  ${media.sp`
    margin-top: 40px;
  `}
`;

const StyledLink = styled(Link)`
  text-decoration: underline;
  color: #1f7dc7;
  font-weight: 700;
  &:hover {
    cursor: pointer;
  }
  ::before {
    content: "･";
    margin: 0 0.5rem;
    text-decoration: none;
    display: inline-block;
    color: black;
  }
`;

const Square = styled.div`
  width: 10px;
  height: 40px;
  border-radius: 1px;
  margin-right: 10px;
`;

const HeadLine = styled.div`
  display: flex;
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 30px;
`;

const Explanation = styled.div`
  font-weight: 500;
  font-size: 18px;
`;

const ImageFrame = styled.div`
  margin: 50px auto;
  width: 600px;
  ${media.sp`
    width: 89%; // 0.8÷0.9≈0.89
  `}
`;

const Question = styled.div`
  display: flex;
  font-size: 25px;
  font-weight: 700;
  align-items: center;
  position: relative;
  margin-left: 50px;
  &:before {
    margin-left: -50px;
    position: absolute;
    top: 18px;
    border-top: 1px solid;
    content: "";
    width: 50px;
  }
`;

export {
  Kanban,
  TopPage,
  Lecture,
  LectureImage,
  StyledLink,
  HeadLine,
  Explanation,
  Square,
  ImageFrame,
  Question,
};
