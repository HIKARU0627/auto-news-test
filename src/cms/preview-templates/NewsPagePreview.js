import React from "react";
import PropTypes from "prop-types";
import { NewsTemplatePreview } from "../../templates/news-preview";

const NewsPreview = ({ entry, widgetFor }) => (
  <NewsTemplatePreview
    content={widgetFor("body")}
    type={entry.getIn(["data", "type"])}
    title={entry.getIn(["data", "title"])}
    featuredimage={entry.getIn(["data", "featuredimage"])}
    description={entry.getIn(["data", "description"])} //description ではなくcontentに詳細説明を実装
    link={entry.getIn(["data", "link"])}
    tags={entry.getIn(["data", "tags"]) && entry.getIn(["data", "tags"]).toJS()}
    date={entry.getIn(["data", "date"])}
  />
);

NewsPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default NewsPreview;
