import React from "react";
import PropTypes from "prop-types";
import { DepartmentEnTemplatePreview } from "../../templates/department-en-preview";

const DepartmentEnPreview = ({ entry, widgetFor }) => (
  <DepartmentEnTemplatePreview
    content={widgetFor("body")}
    department={entry.getIn(["data", "department"])}
    title={entry.getIn(["data", "title"])}
    subtitle={entry.getIn(["data", "subtitle"])}
    director={entry.getIn(["data", "director"])}
    departmentOrder={entry.getIn(["data", "departmentOrder"])}
    date={entry.getIn(["data", "date"])}
    headerImage={entry.getIn(["data", "headerImage"])}
    featuredimage={entry.getIn(["data", "featuredimage"])}
    description={entry.getIn(["data", "description"])}
    tags={entry.getIn(["data", "tags"]) && entry.getIn(["data", "tags"]).toJS()}
  />
);

DepartmentEnPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default DepartmentEnPreview;
