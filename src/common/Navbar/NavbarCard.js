import React from "react";
import { Link } from "gatsby";

const NavbarCard = ({ link, thumbnail, title, subtitle }) => {
  return (
    <Link to={link}>
      <article className="navbar-list-item tile is-child box notification add-hoverable">
        <header>
          <div className="featured-thumbnail">{thumbnail}</div>
          <div className="post-meta">
            <h3 className="is-size-6 is-size-7-mobile">{title}</h3>
            <div className="is-size-7 is-size-8-mobile">{subtitle}</div>
          </div>
        </header>
      </article>
    </Link>
  );
};

export default NavbarCard;
