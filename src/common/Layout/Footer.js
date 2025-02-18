import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Footer = () => (
  <footer>
    <Footer1>
      <nav className="columns is-hidden-touch">
        <FooterBox className="column is-3">
          <StyledUl className="has-text-left">
            <li>授業を探す</li>
            <li>
              <StyledLink to="/courses">授業一覧</StyledLink>
            </li>
            {/* <li>
              <StyledLink to="/categories">カテゴリから探す</StyledLink>
            </li> */}
            <li>
              <StyledLink to="/department">学部／研究科一覧</StyledLink>
            </li>
            <li>
              <StyledLink to="/search">講義検索</StyledLink>
            </li>
            <li>
              <StyledLink to="/farewell">最終講義</StyledLink>
            </li>
            <li>
              <StyledLink to="/tags">タグ一覧</StyledLink>
            </li>
          </StyledUl>
        </FooterBox>

        <FooterBox className="column is-3">
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
            {/* <li>
              <StyledLink to="/others">その他の特集</StyledLink>
            </li> */}
          </StyledUl>
        </FooterBox>

        <FooterBox className="column is-3">
          <StyledUl className="has-text-left">
            <li>初めての方へ</li>
            <li>
              <StyledLink to="/about">「名大の授業について」</StyledLink>
            </li>
            <li>
              <StyledLink to="/words">用語解説</StyledLink>
            </li>
            <li>
              <StyledLink to="/faq">FAQ (よくある質問)</StyledLink>
            </li>
          </StyledUl>
        </FooterBox>

        <FooterBox className="column is-3">
          <StyledUl className="has-text-left">
            <li>
              <StyledLink to="/news">お知らせ</StyledLink>
            </li>
            <li>
              <StyledLink to="/form">お問い合わせ</StyledLink>
            </li>
            <li>
              <StyledLink to="/forteacher">教員の方へ</StyledLink>
            </li>
            <li>
              <StyledLink to="/links">リンク集</StyledLink>
            </li>
            <li>
              <StyledA href="https://twitter.com/nuocw">
                OCW公式X(旧Twitter)
              </StyledA>
            </li>
            <li>
              <StyledA href="https://www.facebook.com/pg/Nagoya.Univ.info.ocw/about/">
                OCW公式Facebook
              </StyledA>
            </li>
            <li>
              <StyledLink to="/apply">スタッフ募集</StyledLink>
            </li>
          </StyledUl>
        </FooterBox>
      </nav>

      <nav className="is-hidden-desktop">
        <StyledUl className="has-text-left">
          <input id="accordion1" className="accordion" type="checkbox" />
          <label className="accordion-label" htmlFor="accordion1">
            <li>授業を探す</li>
          </label>
          <div className="accordion-content">
            <li>
              <StyledLink to="/courses">授業一覧</StyledLink>
            </li>
            {/* <li>
              <StyledLink to="/categories">カテゴリから探す</StyledLink>
            </li> */}
            <li>
              <StyledLink to="/department">学部／研究科から探す</StyledLink>
            </li>
            <li>
              <StyledLink to="/search">講義検索</StyledLink>
            </li>
            <li>
              <StyledLink to="/farewell">最終講義</StyledLink>
            </li>
          </div>
        </StyledUl>

        <hr />

        <StyledUl className="has-text-left">
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
            {/* <li>
              <StyledLink to="/others">その他の特集</StyledLink>
            </li> */}
          </div>
        </StyledUl>

        <hr />

        <StyledUl className="has-text-left">
          <input id="accordion3" className="accordion" type="checkbox" />
          <label className="accordion-label" htmlFor="accordion3">
            <li>初めての方へ</li>
          </label>
          <div className="accordion-content">
            <li>
              <StyledLink to="/about">「名大の授業について」</StyledLink>
            </li>
            <li>
              <StyledLink to="/words">用語解説</StyledLink>
            </li>
            <li>
              <StyledLink to="/faq">FAQ (よくある質問)</StyledLink>
            </li>
          </div>
        </StyledUl>

        <hr />

        <StyledUl className="has-text-left">
          <input id="accordion4" className="accordion" type="checkbox" />
          <label className="accordion-label" htmlFor="accordion4">
            <li>その他</li>
          </label>
          <div className="accordion-content">
            <li>
              <StyledLink to="/news">お知らせ</StyledLink>
            </li>
            <li>
              <StyledLink to="/form">お問い合わせ</StyledLink>
            </li>
            <li>
              <StyledLink to="/forteacher">教員の方へ</StyledLink>
            </li>
            <li>
              <StyledLink to="/links">リンク集</StyledLink>
            </li>
            <li>
              <StyledA href="https://twitter.com/nuocw">
                OCW公式X(旧Twitter)
              </StyledA>
            </li>
            <li>
              <StyledA href="https://www.facebook.com/pg/Nagoya.Univ.info.ocw/about/">
                OCW公式Facebook
              </StyledA>
            </li>
            <li>
              <StyledLink to="/apply">スタッフ募集</StyledLink>
            </li>
          </div>
        </StyledUl>
      </nav>
    </Footer1>

    <Footer2>
      <div className="has-text-centered">
        名大の授業Webサイト、およびこのサイトで公開されている講義資料は、
        <br />
        <StyledLink2 to="/about">「名大の授業について」</StyledLink2>
        の記載条件のもとで利用することができます。
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

const StyledLink2 = styled(Link)`
  color: #6DA4F7;
  &:hover {
    color: #94BCF9;
  },
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

export default Footer;
