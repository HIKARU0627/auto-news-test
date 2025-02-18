import React from "react";
import PropTypes from "prop-types";
import { CourseEnTemplatePreview } from "../../templates/courses-en-preview";

const CourseEnPreview = ({ entry, widgetFor }) => (
  <CourseEnTemplatePreview
    content={widgetFor("body")}
    description={entry.getIn(["data", "description"])}
    title={entry.getIn(["data", "title"])}
    featuredimage={entry.getIn(["data", "featuredimage"])} // この行から以下付け足した.
    featuredimageURL={entry.getIn(["data", "featuredimageURL"])}
    movie={entry.getIn(["data", "movie"])}
    lecturer={entry.getIn(["data", "lecturer"])}
    department={entry.getIn(["data", "department"])}
    subdepartment={entry.getIn(["data", "subdepartment"])}
    term={entry.getIn(["data", "term"])}
    target={entry.getIn(["data", "target"])}
    classes={entry.getIn(["data", "classes"])}
    credit={entry.getIn(["data", "credit"])}
    category={
      entry.getIn(["data", "category"]) &&
      entry.getIn(["data", "category"]).toJS()
    }
    tags={entry.getIn(["data", "tags"]) && entry.getIn(["data", "tags"]).toJS()}
    date={entry.getIn(["data", "date"])}
  />
);

CourseEnPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default CourseEnPreview;
