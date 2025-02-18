import React from "react";
import { Link, withPrefix } from "gatsby";
import styled from "styled-components";

import Layout from "@common/Layout/Layout";
import HelmetForOGP from "@common/Helmet/HelmetForOGP";

const topics12_doi_sem = () => {
  // const { count } = props;
  return (
    <Layout>
      <HelmetForOGP
        title={"土井ゼミ-授業内容"}
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
                土井ゼミ 授業内容
              </TitleDoi>
              <Rectangle className="has-text-weight-semibold">
                その日のゼミ内容
              </Rectangle>
              <div className="content">
                <p>
                  経済学部の土井ゼミで扱うのは、国際経済学。本日はゼミでの卒論報告にお邪魔しました。報告者２名が、それぞれ自身の研究の結果を報告し、その内容をゼミ全体で議論します。本日行われるのは、2年間の総まとめ。皆さんリラックスした雰囲気ですが、発表者は少し緊張した様子です。
                </p>
                <figure className="image column">
                  <img
                    src={withPrefix("/img/topics/topics12/pic/doi_01.png")}
                    alt=""
                  />
                  <figcaption>発表直前の様子</figcaption>
                </figure>
              </div>

              <Rectangle className="has-text-weight-semibold">
                報告内容：「携帯電話市場におけるMNOとMVNO」
              </Rectangle>
              <div className="content">
                <p>
                  発表の内容は携帯電話市場についてです。発表者は、自身がMNO（一般的に大手キャリアと呼ばれる事業者）の携帯電話からMVNO（格安スマホ会社と呼ばれる事業者）の携帯電話へと乗り換えた経験から、日本の携帯電話市場に興味を持ちました。そこで、格安スマホ会社の台頭が市場にどのような影響を及ぼすのか、また、大手キャリアは今後どのような生存戦略をとるのかについて経済学的な視点から分析していました。
                </p>
                <figure className="image column">
                  <img
                    src={withPrefix("/img/topics/topics12/pic/doi_02.png")}
                    alt=""
                  />
                </figure>
                <figure className="image column">
                  <img
                    src={withPrefix("/img/topics/topics12/pic/doi_03.png")}
                    alt=""
                  />
                </figure>
              </div>

              <Rectangle className="has-text-weight-semibold">
                発表者による携帯電話市場分析！！
              </Rectangle>
              <div className="content">
                <p>
                  発表者は携帯電話を乗り換えるときのコスト（手間）を「経済的コスト」「心理的コスト」「手間的コスト」に分類しました。そして、このコストが、携帯電話の契約についての制度が変更されるたびに変化してきたことを指摘しました。
                </p>
                <p>
                  一般に、格安スマホ会社の中から「2年縛り」をしない事業者が現れたことが、私たちが携帯電話を選ぶ上で、大きな影響を及ぼしたとされています。すなわち、従来、大手キャリアばかりを選んでいた消費者が、格安スマホ会社を選ぶことが多くなりました。しかし、現状ほとんどの格安スマホ会社は赤字のまま数を増やしています。発表者は、最終的に格安スマホ会社は大手キャリアに負け、数を減らすと予測しました。
                </p>
                <p>
                  発表者はこの予測について、需要曲線、費用曲線といった経済学上の概念を用いながら、理論的な説明を行いました。
                </p>
                <p>
                  最後に発表者は、格安スマホ会社の躍進に危機感を抱く大手キャリアが生き残りの道を探っていることを各社の中期目標等を参考に示しました。具体的には膨大なパーソナルデータを活用した新規ビジネスの創造に活路を見出す必要があるとのことです。
                </p>
              </div>

              <Rectangle className="has-text-weight-semibold">
                発表へのフィードバック
              </Rectangle>
              <div className="content">
                <p>報告者の発表を受けて、学生からは、</p>
                <ul className="has-text-weight-semibold">
                  <li>
                    話し方、プレゼンテーションの仕方に気をつけており、聞きやすかった。
                  </li>
                  <li>
                    需要曲線の求め方の説明が不十分であり、経済理論的には説得力が弱い。
                  </li>
                </ul>
                <p>といった基本的なフィードバックから、</p>
                <ul className="has-text-weight-semibold">
                  <li>
                    個人情報の利用と契約数との関連についてのデータが示されておらず、大手キャリアについての結論が客観的に導けていない。
                  </li>
                </ul>
                <p>
                  といった専門性の高いコメントまで、様々な意見が寄せられました。
                </p>

                <figure className="image column">
                  <img
                    src={withPrefix("/img/topics/topics12/pic/doi_04.png")}
                    alt=""
                  />
                  <figcaption>発表者に質問を投げかけるゼミ生たち</figcaption>
                </figure>

                <p>また、先生からは、</p>
                <ul className="has-text-weight-semibold">
                  <li>
                    発表で使用する基礎概念の説明は、もっと丁寧にするべき。
                  </li>
                  <li>
                    発表者が使用している「余剰分析モデル」というものは、携帯電話市場の分析をする上では「現実的ではない」とされている。現実社会の問題に取り組む上では、経済学で正しいと思われている理論・モデルを正しく当てはめるということが重要になる。
                  </li>
                </ul>
                <p>
                  などの指摘がなされました。
                  <br />
                  発表者も先生からの指摘に頷き、より理解を深めていました。
                </p>

                <figure className="image column">
                  <img
                    src={withPrefix("/img/topics/topics12/pic/doi_05.png")}
                    alt=""
                  />
                  <figcaption>質問を投げかける土井先生</figcaption>
                </figure>
              </div>

              <Rectangle className="has-text-weight-semibold">
                まとめ：議論の白熱するゼミ
              </Rectangle>
              <div className="content">
                <p>
                  土井ゼミでは、発表者がしっかりと時間をかけて準備をしていました。一方発表を聞く側は、遠慮なく鋭い指摘をたくさん投げかけていました。そこには「経済学」という学問に本気で取り組み、日々の学習に真剣に励む学生の姿がありました。数式や経済学の用語を使いながら、市場を分析する。そのようなことに興味がある皆さんは、ぜひ経済学部に進み、白熱する議論に身を投げ込んでみてはいかがでしょうか。
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
                      <StyledLink to="/topics/topics12/topics12_doi_stu">
                        土井ゼミ学生へのインタビュー
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
export default topics12_doi_sem;

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

const Rectangle = styled.div`
  font-size: 27px;
  display: block;
  position: relative;
  padding: 8px 16px;
  border-radius: 8px;
  background-color: #edffe0;
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
