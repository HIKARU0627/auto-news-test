import React from "react";
import { withPrefix } from "gatsby";

import Layout from "@common/Layout/Layout";
import FavoriteRoll from "@features/Mylist/FavoriteRoll";
import HelmetForOGP from "@common/Helmet/HelmetForOGP";

export default class FavoriteIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <HelmetForOGP title={"マイリスト"} />
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url(${withPrefix("/img/blog-index.jpg")})`,
          }}
        >
          <h1 className="has-text-weight-bold is-size-1-widescreen is-size-2-tablet is-size-3-mobile header-title">
            マイリスト
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <FavoriteRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
