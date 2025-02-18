import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const IframeMovie = ({ src }) => {
  return (
    <MovieWrapper>
      <iframe
        src={src}
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
        }}
        frameBorder="0"
        allowfullscreen="true"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
      />
    </MovieWrapper>
  );
};

IframeMovie.propTypes = {
  src: PropTypes.string.isRequired,
};

export default IframeMovie;

const MovieWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 56.25%;
`;
