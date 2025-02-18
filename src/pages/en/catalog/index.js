import React from "react";
import { withPrefix, Link } from "gatsby";
import "bulma/css/bulma.css";

import LayoutEn from "@common/Layout/LayoutEn";
import HelmetForOGPEn from "@common/Helmet/HelmetForOGPEn";

const EnCatalogIndexPage = () => {
  return (
    <LayoutEn>
      <HelmetForOGPEn title={"English-Taught Course Catalog"} />
      <section className="section">
        <div className="container is-paddingless">
          <div className="section is-paddingless">
            <div className="content is-paddingless">
              <div
                className="has-text-centered has-text-weight-semibold is-size-5-mobile is-size-4-tablet is-size-3-widescreen"
                style={{ padding: "20px 0" }}
              >
                <h1>
                  Nagoya University
                  <br />
                  English-Taught Course Catalog
                </h1>
              </div>
              <div className="columns is-fullwidth is-mobile">
                <div
                  className="column is-half"
                  style={{
                    //height: "500px",
                    backgroundColor: `#16A6B6`,
                    paddingBottom: "80px",
                  }}
                >
                  <div
                    className="has-text-centered"
                    style={{ marginTop: "80px" }}
                  >
                    <img src={withPrefix("/img/catalog/ug_class.png")}></img>
                  </div>
                  <div
                    className="has-text-centered"
                    style={{ marginTop: "50px" }}
                  >
                    <Link class="button is-paddingless" to="./u_grad">
                      <img src={withPrefix("/img/catalog/ug_btn.png")}></img>
                    </Link>
                  </div>
                </div>
                <div
                  className="column is-half"
                  style={{
                    backgroundColor: `#FF6860`,
                    paddingBottom: "80px",
                  }}
                >
                  <div
                    className="has-text-centered"
                    style={{ marginTop: "80px" }}
                  >
                    <img src={withPrefix("/img/catalog/g_class.png")}></img>
                  </div>
                  <div
                    className="has-text-centered"
                    style={{
                      marginTop: "50px",
                    }}
                  >
                    <Link class="button is-paddingless" to="./grad">
                      <img src={withPrefix("/img/catalog/g_btn.png")}></img>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section is-paddingless">
            <div
              className="content is-paddingless is-size-6-mobile is-size-5-widescreen"
              style={{ marginTop: "30px" }}
            >
              <h2>Message from the Vice-President:</h2>
              <div className="columns">
                <div className="column">
                  A warm greeting to you from us at Nagoya University in Central
                  Japan. Thank you for taking the time to look at our new
                  English course catalog. We hope that this will be helpful in
                  showcasing some of the amazing courses we offer to graduate
                  and undergraduate students. Some of you may even use this
                  catalog to consider whether Nagoya University may be a good
                  fit for your future educational and career development. We
                  feel that the breadth of our courses offered in English in the
                  Humanities, Social Sciences, Natural Sciences and Applied
                  Sciences is quite remarkable compared to what you will find
                  elsewhere.
                  <br />
                </div>
                <div className="column">
                  <img src={withPrefix("/img/catalog/idx_msg.jpg")}></img>
                </div>
              </div>
              <div>
                "Internationalization" at our institution is more than a
                buzzword. Not only do Nagoya University researchers have a
                tradition of collaborating with their colleagues from around the
                world but we are increasingly sending more of our students
                abroad and welcoming more international students. An important
                part of this process is offering more and more courses available
                in English. We benefit in two ways. First, it prepares our
                Japanese students to engage with the outside world and second,
                it increases the opportunities for international students to
                participate in our academic community.
                <br />
                <br />
                We understand that selecting a university is one of the most
                important decisions that you will ever make. But we hope that
                within this catalog you may find your curiosity stimulated as
                you discover at least a few course titles or course descriptions
                that make you pause to imagine what it might be like to sit in
                one of our classrooms or design an experiment in one of our
                labs.
                <br />
                <br />
                If you do find yourself interested then we encourage you to
                consult our homepage or contact us directly.
                <br />
                <br />
              </div>
              <div
                style={{
                  marginTop: "20px",
                  border: "1px solid gray",
                  padding: "20px 25px",
                }}
              >
                Professor Yoshihito Watanabe
                <br />
                Vice-President (International Planning, Public Relations, and
                Community Relations)
                <br />
                Nagoya University
              </div>
            </div>
          </div>
        </div>
      </section>
    </LayoutEn>
  );
};

export default EnCatalogIndexPage;
