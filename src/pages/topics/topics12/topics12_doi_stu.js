import React from "react";
import { Link, withPrefix } from "gatsby";
import styled from "styled-components";

import Layout from "@common/Layout/Layout";
import HelmetForOGP from "@common/Helmet/HelmetForOGP";

const topics12_doi_stu = () => {
  // const { count } = props;
  return (
    <Layout>
      <HelmetForOGP
        title={"土井ゼミ-学生へのインタビュー"}
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
                土井ゼミ学生へのインタビュー
              </TitleDoi>
              <Q className="has-text-weight-semibold">
                このゼミを選んだ理由はなんですか？
              </Q>
              <div className="content">
                <A1>
                  海外留学先で一緒になった先輩が土井ゼミについてお話ししてくれたことが直接的な決め手です。先輩からお話を聞く中で土井ゼミで頑張りたいという気持ちが強まりました。
                </A1>
                <A2>
                  土井先生の性格に惹かれたことが一番の理由です。土井先生は学生一人一人の良いところを見た上で丁寧なフィードバックをしてくださると聞いていたので、意見の出しやすい環境が整う土井ゼミで学べば、先生との対話を通して自分自身のことがよくわかるようになるだろうと考え土井ゼミを選びました。
                </A2>
                <A3>
                  自分のやりたいと思ったことに挑戦させてもらえる寛容なゼミだと思ったからです。土井先生の心の広さは経済学部生の間では有名なんですよ。
                </A3>
                <br />
              </div>

              <Q className="has-text-weight-semibold">
                土井先生のゼミで学んだこと・得られたことはなんですか？
              </Q>
              <div className="content">
                <A1>
                  土井ゼミでの学びを通して、自分自身の理解が深まった気がします。土井先生は学生一人ひとりのことを本当によく見てくださっています。自分のことを客観視することは難しいことですが、先生からいただいた様々なアドバイスが自分自身を見る鏡となり、自己理解が進んだと感じます。
                </A1>
                <figure className="image column">
                  <img
                    src={withPrefix("/img/topics/topics12/pic/doi_06.png")}
                    alt=""
                  />
                </figure>
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
export default topics12_doi_stu;

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
  margin-bottom: 20px;
  padding: 8px 16px;
  border-radius: 8px;
  background-color: #edffe0;
  &:before {
    color: #008d10;
    content: "Q. ";
  }
`;

/* Aアイコン */
const A1 = styled.div`
  display: block;
  position: relative;
  padding-left: 65px;
  margin-bottom: 20px;
  &:before {
    position: absolute;
    left: 0;
    font-size: 24px;
    color: #ff0000;
    content: "A1";
    display: inline-block;
    background-color: #ffcccc;
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
    color: #ff0000;
    content: "A2";
    display: inline-block;
    background-color: #ffcccc;
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
    color: #ff0000;
    content: "A3";
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
