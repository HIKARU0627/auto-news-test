import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const FooterEn = () => (
  <footer>
    <Footer1>
      <nav className="columns is-hidden-touch">
        <FooterBox className="column is-4">
          <StyledUl className="has-text-left">
            <li>Search Courses</li>
            <li>
              <StyledLink to="/en/courses">courses</StyledLink>
            </li>
            {/* <li>
              <StyledLink to="/categories">カテゴリから探す</StyledLink>
            </li> */}
            <li>
              <StyledLink to="/en/department">Search by Department</StyledLink>
            </li>
            <li>
              <StyledLink to="/en/search">Search by Keyword</StyledLink>
            </li>
            <li>
              <StyledLink to="/en/tags">Search by Tags</StyledLink>
            </li>
          </StyledUl>
        </FooterBox>

        {/* <FooterBox className="column is-3">
          <StyledUl className="has-text-left">
            <li>特集記事</li>
            <li>
              <StyledLink to="/topics">TOPICS</StyledLink>
            </li>
            <li>
              <StyledLink to="/research">名大の研究指導</StyledLink>
            </li>
            <li>
              <StyledLink to="/opencampus">オープンキャンパス</StyledLink>
            </li>
            <li>
              <StyledLink to="/relay">名古屋大学ラジオ公開講座</StyledLink>
            </li>
            <li>
              <StyledLink to="/others">その他の特集</StyledLink>
            </li>
          </StyledUl>
        </FooterBox> */}

        <FooterBox className="column is-4">
          <StyledUl className="has-text-left">
            <li>What is NUOCW</li>
            <li>
              <StyledLink to="/en/about">About NUOCW</StyledLink>
            </li>
          </StyledUl>
        </FooterBox>

        <FooterBox className="column is-4">
          <StyledUl className="has-text-left">
            <li>
              <StyledLink to="/en/news">News</StyledLink>
            </li>
            {/* <li>
              <StyledLink to="/form">Contact Us</StyledLink>
            </li> */}
            {/* <li>
              <StyledLink to="/forteacher">For Teachers</StyledLink>
            </li> */}
            {/* <li>
              <StyledLink to="/links">Links</StyledLink>
            </li> */}
            {/* <li>
              <StyledA href="https://ocw.ilas.nagoya-u.ac.jp/">
                Old Japanese Page
              </StyledA>
            </li> */}
            {/* <li>
              <StyledA href="http://ocw.ilas.nagoya-u.ac.jp/index.php?lang=en&mode=g&page_type=top">
                Old English Page
              </StyledA>
            </li> */}

            <li>
              <StyledA href="https://twitter.com/NagoyaUniv_OCW">
                X, formerly Twitter
              </StyledA>
            </li>
            <li>
              <StyledA href="https://www.facebook.com/pg/Nagoya.Univ.info.ocw/about/">
                Facebook
              </StyledA>
            </li>
            {/* <li>
              <StyledLink to="/apply">Staff Wanted</StyledLink>
            </li> */}
          </StyledUl>
        </FooterBox>
      </nav>

      <nav className="is-hidden-desktop">
        <StyledUl className="has-text-left">
          <input id="accordion1" className="accordion" type="checkbox" />
          <label className="accordion-label" htmlFor="accordion1">
            <li>Search Courses</li>
          </label>
          <div className="accordion-content">
            <li>
              <StyledLink to="/en/courses">Course List</StyledLink>
            </li>
            {/* <li>
              <StyledLink to="/categories">カテゴリから探す</StyledLink>
            </li> */}
            <li>
              <StyledLink to="/en/department">Search by Department</StyledLink>
            </li>
            <li>
              <StyledLink to="/en/search">Search by Keyword</StyledLink>
            </li>
          </div>
        </StyledUl>

        <hr />

        {/* <StyledUl className="has-text-left">
          <input id="accordion2" className="accordion" type="checkbox" />
          <label className="accordion-label" htmlFor="accordion2">
            <li>特集記事</li>
          </label>
          <div className="accordion-content">
            <li>
              <StyledLink to="/topics">TOPICS</StyledLink>
            </li>
            <li>
              <StyledLink to="/research">名大の研究指導</StyledLink>
            </li>
            <li>
              <StyledLink to="/opencampus">オープンキャンパス</StyledLink>
            </li>
            <li>
              <StyledLink to="/relay">名古屋大学ラジオ公開講座</StyledLink>
            </li>
            <li>
              <StyledLink to="/others">その他の特集</StyledLink>
            </li>
          </div>
        </StyledUl>
        <hr /> */}

        <StyledUl className="has-text-left">
          <input id="accordion3" className="accordion" type="checkbox" />
          <label className="accordion-label" htmlFor="accordion3">
            <li>What is NUOCW</li>
          </label>
          <div className="accordion-content">
            <li>
              <StyledLink to="/en/about">About NUOCW</StyledLink>
            </li>
          </div>
        </StyledUl>

        <hr />

        <StyledUl className="has-text-left">
          <input id="accordion4" className="accordion" type="checkbox" />
          <label className="accordion-label" htmlFor="accordion4">
            <li>Others</li>
          </label>
          <div className="accordion-content">
            <li>
              <StyledLink to="/en/news">News</StyledLink>
            </li>
            {/* <li>
              <StyledLink to="/form">Contact Us</StyledLink>
            </li> */}
            {/* <li>
              <StyledLink to="/forteacher">For Teachers</StyledLink>
            </li> */}
            {/* <li>
              <StyledLink to="/link">Links</StyledLink>
            </li> */}
            {/* <li>
              <StyledA href="http://ocw.ilas.nagoya-u.ac.jp/index.php?lang=en&mode=g&page_type=top">
                Old English Page
              </StyledA>
            </li> */}
            <li>
              <StyledA href="https://twitter.com/NagoyaUniv_OCW">
                X, formerly Twitter
              </StyledA>
            </li>
            <li>
              <StyledA href="https://www.facebook.com/pg/Nagoya.Univ.info.ocw/about/">
                Facebook
              </StyledA>
            </li>
            {/* <li>
              <StyledLink to="apply">Staff Wanted</StyledLink>
            </li> */}
          </div>
        </StyledUl>
      </nav>
    </Footer1>

    <Footer2>
      <div className="has-text-centered">
        OCW website, and all course materials made public on this site,
        <br />
        may be used under the terms and conditions posted under{" "}
        <StyledLink2 to="/en/about">"About OCW"</StyledLink2>
        <br />© 2020 Nagoya University Open Course Ware
      </div>
    </Footer2>
  </footer>
);

const Footer1 = styled.div`
  padding: 3rem 1.5rem 6rem;
  background-color: #707070;
  color: #ffffff;
  display: flex;
  justify-content: center;
  text-align: center;
  nav {
    width: 80%;
  }
`;

const Footer2 = styled.div`
  padding: 3rem 1.5rem 6rem;
  background-color: #323232;
  color: #ffffff;
`;

const FooterBox = styled.div`
  border-left: 1px white solid;
  border-right: 1px white solid;
`;

const StyledUl = styled.ul`
  li {
    margin: 1.5rem 0;
  }
  .accordion {
    display: none;
  }
  .accordion-label {
    display: block;
  }
  .accordion-label li::after {
    content: "";
    width: 1rem;
    height: 1rem;
    border: 1px solid;
    border-color: transparent transparent #565656 #565656;
    transform: rotate(-45deg);
    display: block;
    float: right;
  }
  .accordion-content {
    display: none;
  }
  .accordion:checked + .accordion-label li::after {
    transform: rotate(135deg);
  }
  .accordion:checked + .accordion-label + .accordion-content {
    display: block;
  }
`;

const StyledLink = styled(Link)`
  color: #ffffff;
  text-decoration: underline;
  ::before {
    content: "◇";
    margin: 0 0.5rem;
    text-decoration: none;
    display: inline-block;
  }
`;

const StyledA = styled.a`
  color: #ffffff;
  text-decoration: underline;
  ::before {
    content: "◇";
    margin: 0 0.5rem;
    text-decoration: none;
    display: inline-block;
  }
`;

const StyledLink2 = styled(Link)`
  color: #6DA4F7;
  &:hover {
    color: #94BCF9;
  },
`;

export default FooterEn;
