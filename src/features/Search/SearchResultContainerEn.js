import React from "react";
import "bulma/css/bulma.css";
import styled from "styled-components";
import { Link } from "gatsby";
import ThumbnailImg from "@common/Thumbnail/Thumbnail";

const category_dic = {
  courses: "Japanese",
  farewell: "Farewell",
  "courses-en": "English",
  others: "other",
};

const defaultThumbnail =
  "https://ocw.nagoya-u.jp/img/common/default_thumbnail.png";

const SearchResultContainerEn = (props) => {
  const { slug, image, title, category, department, lecturer, term } = props;
  return (
    <LectureContainer className="column is-one-quarter-desktop is-one-third-tablet is-full-mobile">
      <Link to={slug}>
        <div className="box">
          <div style={{ position: "relative" }}>
            {image !== defaultThumbnail ? (
              <img
                src={image}
                style={{
                  width: "100%",
                  aspectRatio: "16/9",
                  objectFit: "contain",
                  margin: "10px",
                }}
              ></img>
            ) : (
              <div style={{ marginBottom: "10px" }}>
                <ThumbnailImg name={department} />
              </div>
            )}
            <ImgTag>{category_dic[category]}</ImgTag>
          </div>
          <FoldedText className="has-text-primary is-size-5">
            {title}
          </FoldedText>
          <FoldedText>{department}</FoldedText>
          <FoldedText>{lecturer}</FoldedText>
          <FoldedText>{term}</FoldedText>
        </div>
      </Link>
    </LectureContainer>
  );
};

const ImgTag = styled.div`
  position: absolute;
  top: 0; /*画像の左上に配置*/
  left: 0;
  margin: 0; /*余計な隙間を除く*/
  color: white; /*文字を白に*/
  background: #006e4f; /*背景色*/
  font-size: 15px;
  line-height: 1; /*行高は1に*/
  padding: 5px 10px; /*文字周りの余白*/
`;

const LectureContainer = styled.div`
  @media (max-width: 768px) {
    max-width: 50%;
  }
  @media (max-width: 512px) {
    max-width: 100%;
  }
`;

const FoldedText = styled.div`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

export default SearchResultContainerEn;
