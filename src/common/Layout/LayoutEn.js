import React from "react";
import { Helmet } from "react-helmet";
import FooterEn from "@common/Layout/FooterEn";
import NavbarEn from "@common/Navbar/NavbarEn";
import PageTopButton from "./PageTopButton";
import "@common/styles/all.sass";
import "@common/styles/font.css";
import useSiteMetadata from "@common/SiteMetadata";
import { withPrefix } from "gatsby";

const TemplateWrapper = ({ children }) => {
  const { title, referrer } = useSiteMetadata();
  return (
    <div>
      <Helmet>
        <html lang="ja" className="has-navbar-fixed-top" />
        <title>{title}</title>
        <meta name="referrer" content={referrer} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/img/apple-touch-icon.png")}`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/img/favicon-192x192.png")}`}
          sizes="192x192"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/img/favicon-32x32.png")}`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/img/favicon-16x16.png")}`}
          sizes="16x16"
        />

        {/* <link
          rel="mask-icon"
          href={`${withPrefix("/img/safari-pinned-tab.svg")}`}
          color="#ff4400"
        /> */}
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`https://ocw.nagoya-u.jp${withPrefix(
            "/img/favicon-256x256.png"
          )}`}
        />
        <meta property="twitter:card" content="summary" />
        <meta
          property="twitter:image"
          content={`https://ocw.nagoya-u.jp${withPrefix(
            "/img/favicon-256x256.png"
          )}`}
        />
      </Helmet>
      <NavbarEn />
      <div>{children}</div>
      <PageTopButton />
      <FooterEn />
    </div>
  );
};

export default TemplateWrapper;
