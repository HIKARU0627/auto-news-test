import React from "react";
import { Link, withPrefix } from "gatsby";
import styled from "styled-components";

import Layout from "@common/Layout/Layout";
import HelmetForOGP from "@common/Helmet/HelmetForOGP";

const topics12_doi_pro = () => {
  // const { count } = props;
  return (
    <Layout>
      <HelmetForOGP
        title={"土井ゼミ-土井先生へのインタビュー"}
        category={"Topics"}
        image={`https://ocw.nagoya-u.jp${withPrefix(
          "/img/topics/topics12/top/TOPICS12_kanban_20220414.png"
        )}`}
      />
      <article className="columns">
        <div className="container column is-9-desktop">
          {/* containerがないと左寄せになる */}
          <section>
            <Kanban
              src={withPrefix(
                "/img/topics/topics12/top/TOPICS12_kanban_20220414.png"
              )}
            />
          </section>

          <section className="columns mx-2 is-mobile">
            <div className="container column is-10-desktop">
              <TitleDoi className="has-text-weight-bold">
                土井先生へのインタビュー
              </TitleDoi>
              <Q className="has-text-weight-semibold">
                このゼミで学んでほしいことはなんですか？
              </Q>
              <div className="content">
                <A0>
                  「好きなことを選んで、突き詰める」ことと、「経済学に対する社会の見方」を学んでほしいですね。学生にはゼミでの学びの集大成として、卒論または50ページ分の想いを乗せた論文を作成することが求められます。3年からテーマを探し、長期間かけて学び、考え、そして最後に発表するのです。このプロセスを通じて学生自身が成長することを求められます。
                </A0>
              </div>

              <Q className="has-text-weight-semibold">
                ゼミ生にはどんな人間になってほしいですか？
              </Q>
              <div className="content">
                <A0>
                  国際経済ゼミを選んだ以上、グローバルにかつ自主的に活動してほしいです。例えばゼミ生は、シンガポール国立大学と名大経済学部の交流プログラムのお別れ会を毎年企画・運営しています。また、ゼミ合宿の企画等もゼミ生主体で行われます。こうした企画を主催するためには、自分たちがどうすれば満足できるかを考える必要があります。自分のやりたいことの中から問いを立て、考え抜く過程で能力をあげていく、そんな人間であってほしいと思います。
                </A0>
                <figure className="image column">
                  <img
                    src={withPrefix("/img/topics/topics12/pic/doi_07.png")}
                    alt=""
                  />
                  <figcaption>想いを語る土井先生</figcaption>
                </figure>
              </div>

              <div className="content">
                <p>土井ゼミのみなさん、ご協力ありがとうございました！！</p>
              </div>
            </div>
          </section>

          <section className="section columns is-centered">
            <div className="container column">
              <div className="content">
                <Arrow className="columns">他のインタビューを見る </Arrow>
                <ul className="column is-12-desktop is-12-touch margin-top-0 has-text-weight-bold">
                  <StyledLink to="/topics/topics12/topics12">
                    ◆TOPICS12　トップへ
                  </StyledLink>
                  <br />
                  <br />
                  ◆土井ゼミ
                  <Pagelist>
                    <li>
                      <StyledLink to="/topics/topics12/topics12_doi_sem">
                        ゼミ授業内容
                      </StyledLink>
                    </li>
                    <li>
                      <StyledLink to="/topics/topics12/topics12_doi_stu">
                        土井ゼミ学生へのインタビュー
                      </StyledLink>
                    </li>
                  </Pagelist>
                  <br />
                  ◆西井ゼミ
                  <Pagelist>
                    <li>
                      <StyledLink to="/topics/topics12/topics12_nishii_sem">
                        ゼミ授業内容
                      </StyledLink>
                    </li>
                    <li>
                      <StyledLink to="/topics/topics12/topics12_nishii_stu">
                        西井ゼミ学生へのインタビュー
                      </StyledLink>
                    </li>
                  </Pagelist>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </article>
    </Layout>
  );
};
export default topics12_doi_pro;

/*タイトル装飾 ここから*/
const TitleDoi = styled.div`
  font-size: 33px;
  padding: 10px;
  position: relative;
  margin-left: 17px;
  margin-bottom: 30px;
  border-left: solid 5px #009900;
  &:before {
    content: "";
    height: 100%;
    position: absolute;
    bottom: 0px;
    left: -22px;
    border-left: solid 12px #009900;
  }
  &:after {
    content: "";
    width: 100%;
    width: calc(100% + 22px);
    position: absolute;
    bottom: 0px;
    left: -22px;
    border-bottom: solid 5px #009900;
  }
`;
/*タイトル装飾 ここまで*/

/* Q見出し 参考: https://copypet.jp/946/ */
const Q = styled.div`
  font-size: 27px;
  display: block;
  position: relative;
  padding: 8px 16px;
  margin-bottom: 20px;
  border-radius: 8px;
  background-color: #edffe0;
  &:before {
    color: #008d10;
    content: "Q. ";
  }
`;

/* Aアイコン */
const A0 = styled.div`
  display: block;
  position: relative;
  padding-left: 65px;
  margin-bottom: 20px;
  &:before {
    position: absolute;
    left: 0;
    font-size: 24px;
    color: #ff0000;
    content: "A";
    display: inline-block;
    background-color: #ffcccc;
    border-radius: 8px;
    width: 45px;
    height: 45px;
    text-align: center;
    line-height: 45px;
  }
`;

/*矢印型見出し　はじめ*/
const Arrow = styled.div`
  position: relative;
  padding-left: 30px;
  font-size: 25px;
  &:before {
    position: absolute;
    content: "";
    bottom: -3px;
    left: 0;
    width: 0;
    height: 0;
    border: none;
    border-left: solid 20px transparent;
    border-bottom: solid 20px #009900;
  }
  &:after {
    position: absolute;
    content: "";
    bottom: -3px;
    left: 10px;
    width: 100%;
    border-bottom: solid 5px #009900;
  }
`;
/*矢印型見出し　終わり*/

const StyledLink = styled(Link)`
  color: black;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: black;
  }
`;

const Pagelist = styled.div`
  position: relative;
  padding-left: 36px;
`;

const Kanban = styled.img`
  width: 100%;
  margin-bottom: 40px;
`;
