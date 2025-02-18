import React from "react";
import { Link, withPrefix } from "gatsby";

const LabIntroRoll = ({ contents }) => {
  return (
    <div className="columns is-multiline">
      {contents &&
        contents.map(({ node: post }, key) => (
          <div
            className="is-parent column is-12-mobile is-one-third-tablet is-one-quarter-desktop"
            key={key}
          >
            <Link to={post.video}>
              {/* for mobile */}
              <article className="course-list-item tile is-child box notification add-hoverable columns is-mobile is-hidden-tablet">
                <div className="featured-thumbnail is-hidden-tablet column is-half">
                  <img src={withPrefix(`/${post.img}`)} alt="a"></img>
                </div>
                <div className="post-meta is-hidden-tablet column">
                  <div className="is-size-6">{post.department}</div>
                  <div className="is-size-6">{post.labname}</div>
                </div>
              </article>
              {/* for not-mobile */}
              <article className="course-list-item tile is-child box notification add-hoverable is-hidden-mobile">
                <div className="featured-thumbnail">
                  <img src={withPrefix(`/${post.img}`)} alt="a"></img>
                </div>
                <div className="post-meta">
                  <div className="is-size-6">{post.department}</div>
                  <div className="is-size-6">{post.labname}</div>
                </div>
              </article>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default LabIntroRoll;
