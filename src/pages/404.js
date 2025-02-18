import React from "react";
import { Link, withPrefix } from "gatsby";

import Layout from "@common/Layout/Layout";
import HelmetForOGP from "@common/Helmet/HelmetForOGP";

const NotFoundPage = () => (
  <Layout>
    <HelmetForOGP title={"404 ERROR"} />
    <div className="column">
      <style>{"body { background-color: #c4c3c3; }"}</style>
      {/* <h2>NOT FOUND</h2>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p> */}

      <div className="columns is-centered is-mobile" style={{ marginTop: 100 }}>
        <p className="title is-1">404 ERROR</p>
      </div>

      <div
        className="columns is-centered is-mobile"
        style={{ marginBottom: 30 }}
      >
        <p>Sorry, this page does not exist.</p>
      </div>

      <div className="columns is-centered is-mobile">
        <Link to={`/`}>
          <button
            className="button is-large is-hovered has-text-white"
            style={{ background: "#006E4F" }}
          >
            Go back to the home page.
          </button>
        </Link>
        {/* Topへ戻る  */}
      </div>

      <div className="columns">
        <img src={withPrefix("/img/404page.png")} alt="" />
      </div>
    </div>
  </Layout>
);

export default NotFoundPage;
