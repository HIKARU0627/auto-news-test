import React from "react";
import PropTypes from "prop-types";

export const HTMLContent = ({ content, className }) => (
  <div
    className={`styled-title ${className}`}
    dangerouslySetInnerHTML={{ __html: content }}
  ></div>
);

const Content = ({ content, className }) => (
  <div className={`styled-title ${className}`}>{content}</div>
);

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
};

HTMLContent.propTypes = Content.propTypes;

export default Content;
