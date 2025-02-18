import React from "react";
import PropTypes from "prop-types";
import { FarewellTemplatePreview } from "../../templates/farewell-preview";

const FarewellPreview = ({ entry, widgetFor }) => (
  <FarewellTemplatePreview
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
    tags={entry.getIn(["data", "tags"]) && entry.getIn(["data", "tags"]).toJS()}
    date={widgetFor("date")}
    lecturedate={entry.getIn(["data", "lecturedate"])}
    place={entry.getIn(["data", "place"])}
    lecturersimage={entry.getIn(["data", "lecturersimage"])}
  />
);

FarewellPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default FarewellPreview;
