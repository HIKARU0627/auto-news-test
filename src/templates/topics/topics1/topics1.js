import React from "react";
import { Link, withPrefix } from "gatsby";
import styled from "styled-components";

import Layout from "@common/Layout/Layout";
import HelmetForOGP from "@common/Helmet/HelmetForOGP";

const Topics1 = () => {
  return (
    <Layout>
      <HelmetForOGP
        title={"message"}
        category={"Topics"}
        image={`https://ocw.nagoya-u.jp${withPrefix(
          "/img/topics/topics1/topics1_kanban_1024x576.png"
        )}`}
      />
      <div
        className="full-width-image margin-top-0"
        style={{
          backgroundImage: `url(${withPrefix(
            "/img/topics/topics1/topics1_1024x576.png"
          )})`,
          backgroundPosition: `top center`,
          backgroundSize: `cover`,
        }}
      >
        <MesssageBox>
          <Title className="has-text-weight-bold is-size-4-mobile is-size-2-tablet is-size-1-widescreen has-text-centered">
            【TOPICS No.1】
            <br />
            message
          </Title>
          <Subtitle className="has-text-weight-bold is-size-4-widescreen has-text-lefted is-hidden-touch">
            名古屋大学の授業には、たくさんの人からのメッセージが込められています。授業をする先生だけでなく、多くの先人たちが得たものを伝え、受け取り、積み重ねてきたものがあります。ここでは授業で伝えられているメッセージの一部を、皆さんにご紹介します。
          </Subtitle>
        </MesssageBox>
      </div>
      <section className="section">
        <div className="container">
          <div className="content is-hidden-desktop">
            <p>
              　名古屋大学の授業には、たくさんの人からのメッセージが込められています。
              授業をする先生だけでなく、多くの先人たちが得たものを伝え、受け取り、積み重ねてきたものがあります。
              ここでは授業で伝えられているメッセージの一部を、皆さんにご紹介します。
            </p>
          </div>

          <div className="content box">
            <div className="columns is-vcentered is-desktop">
              <div className="column has-text-centered add-hoverable">
                <Link to="https://ocw.nagoya-u.jp/courses/0734-%E5%90%8D%E5%A4%A7%E3%81%AE%E6%AD%B4%E5%8F%B2%E3%82%92%E3%81%9F%E3%81%A9%E3%82%8B-2019/">
                  <img
                    src={withPrefix(
                      "/img/topics/topics1/msg_01haga_edited.png"
                    )}
                    alt="msg_01haga"
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="content box box-link-hover-shadow">
            <div className="columns is-vcentered is-desktop ">
              <div className="column has-text-centered add-hoverable">
                <Link to="https://ocw.nagoya-u.jp/courses/0032-%E7%89%A9%E8%B3%AA%E6%83%85%E5%A0%B1%E5%AD%A62-2010/">
                  <img
                    src={withPrefix(
                      "/img/topics/topics1/msg_02nakamura_edited.png"
                    )}
                    alt="msg_02nakamura"
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="content box box-link-hover-shadow">
            <div className="columns is-vcentered is-desktop">
              <div className="column has-text-centered add-hoverable">
                <Link to="https://ocw.nagoya-u.jp/courses/0120-%E9%81%BA%E4%BC%9D%E3%81%A8%E9%81%BA%E4%BC%9D%E5%AD%90-2011/">
                  <img
                    src={withPrefix("/img/topics/topics1/msg_03ono_edited.png")}
                    alt="msg_03ono"
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="content box box-link-hover-shadow">
            <div className="columns is-vcentered is-desktop">
              <div className="column has-text-centered add-hoverable">
                <Link to="https://ocw.nagoya-u.jp/courses/0151-%E3%83%A1%E3%83%87%E3%82%A3%E3%82%A2%E3%82%A2%E3%83%BC%E3%83%88%E8%AB%96-2014/">
                  <img
                    src={withPrefix(
                      "/img/topics/topics1/msg_04motoyama_edited.png"
                    )}
                    alt="msg_04motoyama"
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="content box box-link-hover-shadow">
            <div className="columns is-vcentered is-desktop">
              <div className="column has-text-centered add-hoverable">
                <Link to="https://ocw.nagoya-u.jp/courses/0043-%E6%B3%95%E5%AD%A6-2011/">
                  <img
                    src={withPrefix(
                      "/img/topics/topics1/msg_05okamoto_edited.png"
                    )}
                    alt="msg_05oksmoto"
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="content box box-link-hover-shadow">
            <div className="columns is-vcentered is-desktop">
              <div className="column has-text-centered add-hoverable">
                <Link to="https://ocw.nagoya-u.jp/courses/0071-%E5%9B%B3%E6%83%85%E5%A0%B1%E3%81%A8%E3%82%B3%E3%83%B3%E3%83%94%E3%83%A5%E3%83%BC%E3%82%BF-2014/">
                  <img
                    src={withPrefix(
                      "/img/topics/topics1/msg_06kita_edited.png"
                    )}
                    alt="msg_06kita"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Topics1;

const MesssageBox = styled.div`
  width: 80%;
  display: flex;
  line-height: 1;
  justify-content: space-around;
  align-items: left;
  flex-direction: column;
`;

const Title = styled.h1`
  text-shadow: 0px 0px 10px #2b2523;
  color: #ffffff;
  line-height: 1.5;
`;

const Subtitle = styled.h3`
  text-shadow: 0px 0px 10px #2b2523;
  color: #ffffff;
  line-height: 2;
`;
