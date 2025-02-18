import React from "react";
import "bulma/css/bulma.css";
import styled from "styled-components";

import SearchResultContainerEn from "./SearchResultContainerEn";

const SearchResultEn = React.memo(function SearchResultMemo(props) {
  const { resultData } = props;
  const CourseListMap = () => {
    return resultData.map((course) => {
      return (
        <SearchResultContainerEn
          key={course._source.course_id}
          slug={course._source.slug}
          image={course._source.featuredimageURL}
          category={course._source.category}
          title={course._source.title}
          department={course._source.department}
          lecturer={course._source.lecturer}
          term={course._source.term}
        />
      );
    });
  };
  return (
    <SearchResultWrapper className="columns is-mobile is-multiline">
      <CourseListMap />
    </SearchResultWrapper>
  );
});

const SearchResultWrapper = styled.div`
  display: flex;
`;

export default SearchResultEn;
