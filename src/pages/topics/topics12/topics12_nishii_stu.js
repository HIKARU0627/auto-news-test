import React from "react";
import { Link, withPrefix } from "gatsby";
import styled from "styled-components";

import Layout from "@common/Layout/Layout";
import HelmetForOGP from "@common/Helmet/HelmetForOGP";

const topics12_nishii_stu = () => {
  // const { count } = props;
  return (
    <Layout>
      <HelmetForOGP
        title={"西井ゼミ-学生へのインタビュー"}
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
              <TitleNishii className="has-text-weight-bold">
                西井ゼミ学生へのインタビュー
              </TitleNishii>
              <Q className="has-text-weight-semibold">
                このゼミを選んだ理由は？
              </Q>
              <div className="content">
                <A1>
                  音楽に興味があったからという漠然とした思いがそもそものきっかけ。最初は、「著作権というテーマは自分の好きな音楽と結構つながりがあるのでは」という軽い気持ちでゼミを選んだが、今では特許権・著作権がいかに私たちの生活に根付いているかが感じられるようになった。これからもさらにこのテーマについて深め、社会生活の中で有意義に活かしていきたい。
                </A1>
                <A2>
                  かつて学部の短期留学プログラムでミャンマーに行った際に、特許を専門にしている弁護士の方にお会いしたことがきっかけ。お話を聞く中で特許権・著作権の奥深さを感じ、このテーマについてさらに深めていきたいと思い、西井ゼミを選ぶことにした。
                </A2>
                <figure className="image column">
                  <img
                    src={withPrefix("/img/topics/topics12/pic/nishii_03.png")}
                    alt=""
                  />
                  <figcaption>ゼミの魅力を語るゼミ生</figcaption>
                </figure>
              </div>

              <Q className="has-text-weight-semibold">
                このゼミを通じて得られるものは？
              </Q>
              <div className="content">
                <A1>
                  粘り強く議論する力が得られる。少人数のグループで議論するため、自分の意見を言いやすい。また、先生や先輩も一緒に議論するので、疑問点をすぐに解決することができ、講義よりも理解を深めることができる。
                </A1>
                <A2>
                  専門的で深い議論。大学院生も多く出席しているため、学部生だけでは思いつかない視点から法律や判例についての理解を深めることができる。
                </A2>
                <figure className="image column">
                  <img
                    src={withPrefix("/img/topics/topics12/pic/nishii_04.png")}
                    alt=""
                  />
                  <figcaption>
                    ゼミ生の議論に加わり、学生を指導する西井先生
                  </figcaption>
                </figure>
                <A3>
                  先生からの直接指導。普段の講義と違い、ゼミでは発表している時や議論の時に、先生が理解を深めるような質問をしてくださる。先生の質問を通して、自分では理解していたつもりだったが理解できていなかったところがわかり、より深く学ぶことができる。
                </A3>
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
                      <StyledLink to="/topics/topics12/topics12_doi_pro">
                        土井先生へのインタビュー
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
export default topics12_nishii_stu;

/*タイトル装飾 ここから*/
const TitleNishii = styled.div`
  font-size: 33px;
  padding: 10px;
  position: relative;
  margin-left: 17px;
  margin-bottom: 30px;
  border-left: solid 5px #ff9933;
  &:before {
    content: "";
    height: 100%;
    position: absolute;
    bottom: 0px;
    left: -22px;
    border-left: solid 12px #ff9933;
  }
  &:after {
    content: "";
    width: 100%;
    width: calc(100% + 22px);
    position: absolute;
    bottom: 0px;
    left: -22px;
    border-bottom: solid 5px #ff9933;
  }
`;
/*タイトル装飾 ここまで*/

/* Q見出し 参考: https://copypet.jp/946/ */
const Q = styled.div`
  font-size: 27px;
  display: block;
  position: relative;
  margin-bottom: 20px;
  padding: 8px 16px;
  border-radius: 8px;
  background-color: #ffefd2;
  &:before {
    color: #ff9933;
    content: "Q.";
  }
`;

/* Aアイコン 参考: https://hitoribucho.hatenablog.com/entry/2016/09/26/190156 */
const A1 = styled.div`
  display: block;
  position: relative;
  padding-left: 65px;
  margin-bottom: 20px;
  &:before {
    position: absolute;
    left: 0;
    font-size: 24px;
    color: #0303ea;
    content: "A1";
    display: inline-block;
    background-color: #b4ebf5;
    border-radius: 8px;
    width: 45px;
    height: 45px;
    text-align: center;
    line-height: 45px;
  }
`;

const A2 = styled.div`
  display: block;
  position: relative;
  padding-left: 65px;
  margin-bottom: 20px;
  &:before {
    position: absolute;
    left: 0;
    font-size: 24px;
    color: #0303ea;
    content: "A2";
    display: inline-block;
    background-color: #b4ebf5;
    border-radius: 8px;
    width: 45px;
    height: 45px;
    text-align: center;
    line-height: 45px;
  }
`;

const A3 = styled.div`
  display: block;
  position: relative;
  padding-left: 65px;
  margin-bottom: 20px;
  &:before {
    position: absolute;
    left: 0;
    font-size: 24px;
    color: #0303ea;
    content: "A3";
    display: inline-block;
    background-color: #b4ebf5;
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
    border-bottom: solid 20px #ff9933;
  }
  &:after {
    position: absolute;
    content: "";
    bottom: -3px;
    left: 10px;
    width: 100%;
    border-bottom: solid 5px #ff9933;
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
