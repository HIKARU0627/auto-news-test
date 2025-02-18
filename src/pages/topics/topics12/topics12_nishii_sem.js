import React from "react";
import { Link, withPrefix } from "gatsby";
import styled from "styled-components";

import Layout from "@common/Layout/Layout";
import HelmetForOGP from "@common/Helmet/HelmetForOGP";

const topics12_nishii_sem = () => {
  // const { count } = props;
  return (
    <Layout>
      <HelmetForOGP
        title={"西井ゼミ-授業内容"}
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
                西井ゼミ 授業内容
              </TitleNishii>
              <Rectangle className="has-text-weight-semibold">
                西井ゼミとは
              </Rectangle>
              <div className="content">
                <p>
                  西井ゼミで取り扱うのは、知的財産法。知的財産法とは、特許法や著作権法など、知的財産に関わる法の総称です。知的財産法が保護する物は、発明や音楽、情報など、形がないのが特徴です。
                </p>
                <p>
                  名古屋大学の知的財産法ゼミは現在2つ。今回取材した西井ゼミでは、発表者の報告の後、グループに分かれてディスカッションが行われます。報告内容は発表者に一任されており、自分の関心があるテーマを選びます。
                </p>
                <figure className="image column">
                  <img
                    src={withPrefix("/img/topics/topics12/pic/nishii_01.png")}
                    alt=""
                  />
                  <figcaption>ゼミの様子1</figcaption>
                </figure>
              </div>

              <Rectangle className="has-text-weight-semibold">
                ゼミ内容：「クレーム解釈」って何！？
              </Rectangle>
              <div className="content">
                <p>
                  この日のテーマは「クレーム(特許請求の範囲)解釈」。特許を取得する際には、特許庁に様々な書類を提出して手続きを踏む必要があります。そして、その書類を基に、特許権の具体的な範囲が決められます。
                </p>
                <p>
                  原則、クレームに書かれているものと全く同じものを作れば、特許権を侵害することになります。では、クレームに書かれていることに、少しだけ違う要素を加えた場合はどうなるでしょうか？原則に立ち返れば、これは特許権侵害とはなりません。つまり、少しでも変更を加えれば、その特許は他の人も使い放題だ、ということになります。これでは何かおかしいな、と感じませんか(もちろん、感じなくても構いません)。
                </p>
                <p>
                  そこで、クレームとは少し違っていても、どこまでであれば特許権の範囲となるか、を考える必要が出てきました。この解釈次第で、権利者にとっては自分の権利の範囲が、被疑侵害者にとっては自分の行動範囲が定まるのですから、非常に重要な問題ですよね。
                </p>
                <p>
                  発表中は、随所随所に質問コーナーが設けられます。基本的には学生同士で答えを探しますが、どうしても分からない時には先生が教えてくれます。このゼミの特徴は、やはり知的財産法ゼミなだけあって、引用の方法に厳しいところです。
                </p>
                <figure className="image column">
                  <img
                    src={withPrefix("/img/topics/topics12/pic/nishii_02.png")}
                    alt=""
                  />
                  <figcaption>ゼミの様子2</figcaption>
                </figure>
              </div>

              <Rectangle className="has-text-weight-semibold">
                ゼミの醍醐味！熱い議論
              </Rectangle>
              <div className="content">
                <p>
                  議論の時間には、発表中に紹介された学説や判例について検討します。議論では、その説に納得できるかどうか、や、法律を使う人にとって分かりやすいかどうか、などが論点となります。熱が収まるまで議論が続きましたが、結局、決着がつくことはありませんでした。法律の世界に、絶対的な正解はありません。学者の説は、それぞれに論理構造があり、どれもが一定程度説得的です。考えることが好きだ、解のない問いを追い続けることが好きだ、というそこのあなた、法律学の世界に足を踏み入れてみませんか？
                </p>
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
export default topics12_nishii_sem;

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

const Rectangle = styled.div`
  font-size: 27px;
  display: block;
  position: relative;
  padding: 8px 16px;
  border-radius: 8px;
  background-color: #ffefd2;
  margin-bottom: 20px;
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
