import React from "react";
import { Link } from "gatsby";

const Card = ({ link, thumbnail, title, subtitle, date, explanation }) => {
  return (
    <Link to={link}>
      <article className="course-list-item tile is-child box notification add-hoverable">
        <header>
          <div className="featured-thumbnail">{thumbnail}</div>
          <div className="post-meta">
            <h3 className="title is-size-5">{title}</h3>
            {subtitle ? <div className="is-size-6"> {subtitle}</div> : null}
            {explanation ? (
              <div className="subtitle is-size-7">{explanation}</div>
            ) : null}
            {date ? (
              <div className="has-text-right is-size-7">{date}</div>
            ) : null}
          </div>
        </header>
      </article>
    </Link>
  );
};

export default Card;
