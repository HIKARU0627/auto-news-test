import React from "react";
import { Link, withPrefix } from "gatsby";
import styled from "styled-components";

import Layout from "@common/Layout/Layout";
import HelmetForOGP from "@common/Helmet/HelmetForOGP";

const topics3_senyo = () => {
  // const { count } = props;
  return (
    <Layout>
      <HelmetForOGP
        title={"千代先生インタビュー"}
        category={"Topics"}
        image={`https://ocw.nagoya-u.jp${withPrefix(
          "/img/topics/topics3/topics3_kanban.png"
        )}`}
      />
      <div className="container column is-11-desktop">
        <section>
          <div className="container column is-11-desktop">
            <div className="content columns is-vcentered">
              <TitleTopics3 className="has-text-weight-bold">
                千代先生インタビュー
              </TitleTopics3>
            </div>

            <div className="content column is-full">
              「物理学実験」を担当された千代先生に以下のことをお聞きしました。
              <br />
              ①　「物理学実験」について印象に残っていることについて
              <br />
              ②　学部１年生が実験をする意義とは
              <br />
              ③　実験だからこそ学べることについて
              <br />
            </div>

            <div className="content columns is-vcentered">
              <div className="is-8">
                <Q className="has-text-weight-semibold">
                  物理学実験について印象に残っていることは何ですか？
                </Q>

                <div className="container column ">
                  <p className="column">
                    　最近は理系学生でも実験、特に物理実験を高校でやっていたという学生はほとんどいないんですね。
                    普通、やったことがなければどうしても尻込みしてしまうこともあるかなと思っていたのですが、積極的に実験に参加する学生が多く、質問等を通じてコミュニケーションがとれました。
                  </p>
                </div>

                <Q className="has-text-weight-semibold">
                  その質問というのは、どういった内容のものでしたか？
                </Q>

                <div className="container column ">
                  <p className="column">
                    実験手順や、結果についての質問だけでなく、その実験にまつわる物理現象についての質問、例えば、「先生は○○という現象についてどう思われますか？」というような、発展的・本質的な質問がありました。
                    実験内容だけでなく、広がった話をしたことが印象に残っています。
                  </p>
                </div>
              </div>

              <div className="column is-4 image">
                <img
                  src={withPrefix("/img/topics/topics3/thumbnails/senyo1.png")}
                  alt="t3_senyo"
                />
              </div>
            </div>

            <div className="content">
              <Q className="has-text-weight-semibold">
                学部１年生が実験をする意義は何でしょうか？
              </Q>
              <div className="container column ">
                <p className="column">
                  実験でも授業でも１、２年生で受ける基礎教育というのは先が見えないというか、計算練習や基礎知識、例えるなら準備運動であるとか筋力トレーニングといったような先が見えないとちょっとやりにくいというものが多いと思うんですよね。
                  で、先生方はそういった点に関して色々と動機づけして下さると思うんですけれども、実験というのは比較的ものが見えて何をやるかがはっきりしています。
                </p>
              </div>

              <Q className="has-text-weight-semibold">
                自分も物理実験学を受けていました。実験がうまくいかないこともありましたが。
              </Q>
              <div className="container column ">
                <p className="column">
                  確かに、高校時代までに授業で習ってきたような内容というのが、実際に実験してみると教科書等に書いてある通りにはうまくできないということがあります。
                  そういうことをちょっと学んでもらって、現実と理論をつなげていく上で案外実際にやってみるというのは難しいということを一つ学んでいただきたいですね。
                  将来研究者、もしくはそれに近いことをやっていく場合、特に学部４年生や、大学院生になった時新しい実験、新しいことを見つけるための研究、基本的な、当たり前なことをずっとやっていくことになりますが、必ずしもそれはテキスト通りにやるだけではなく、新しい発見への準備だと思って実験をしていくと非常に有意義だと思います。
                  毎日のトレーニングといいますか、実験をきちっと行えることが将来の新しい研究や発見につながると思います。
                </p>
              </div>
            </div>

            <div className="content columns is-vcentered">
              <div className="column is-4 image">
                <img
                  src={withPrefix("/img/topics/topics3/thumbnails/senyo2.png")}
                  alt="t3_senyo2"
                />
              </div>
              <div className="is-8">
                <Q className="has-text-weight-semibold">
                  実験だからこそ学べることは何だと思いますか？
                </Q>
                <div className="container column ">
                  <p className="column">
                    これまでテキストのみで学んできたことというのは物理にしろ化学にしろ見たり観測したり実験してみたりとそういうところからスタートしてテキストが出来あがっているので、
                    普通の高校生は逆から勉強していることになるわけですね。もともとの発見から考えると。
                    <br />
                    ですから、実際に実験をしてみてどういうところから物理法則が発見されたのか、どのように考えてこの実験をしたのか、
                    どうしたらもっと自分が思っていた仮説を証明できるかといった実験の技術がわかってくると非常に面白いというか、非常に興味深いことがいっぱいわかってくるようになると思います。
                  </p>
                  <p className="has-text-right">
                    (インタビュー日：2010年10月18日)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section columns is-centered-widescreen">
          <div className="container column is-10-widescreen ">
            <div className="content columns is-vcentered is-multiline">
              <Arrow>他のインタビューを見る </Arrow>
              <ul className="column is-12-desktop is-12-touch margin-top-0 has-text-weight-bold">
                <StyledLink to="/topics/topics3/">◆TOPICS3トップへ</StyledLink>
                <br />
                <br />
                ◆先生へのインタビュー
                <div className="container column is-11-desktop is-11-touch">
                  <li>
                    <StyledLink to="/topics/topics3/topics3_ukiba">
                      浮葉先生へのインタビュー
                    </StyledLink>
                  </li>
                  <li>
                    <StyledLink to="/topics/topics3/topics3_sato">
                      佐藤先生へのインタビュー
                    </StyledLink>
                  </li>
                  <li>
                    <StyledLink to="/topics/topics2/topics2_arita">
                      有田先生へのインタビュー(TOPICS No.2)
                    </StyledLink>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};
export default topics3_senyo;

/*タイトル装飾 ここから*/
const TitleTopics3 = styled.div`
  font-size: 27px;
  padding: 10px;
  position: relative;
  margin-left: 17px;
  border-left: solid 5px #006e4f;
  &:before {
    content: "";
    height: 100%;
    position: absolute;
    bottom: 0px;
    left: -22px;
    border-left: solid 12px #006e4f;
  }
  &:after {
    content: "";
    width: 100%;
    width: calc(100% + 22px);
    position: absolute;
    bottom: 0px;
    left: -22px;
    border-bottom: solid 5px #006e4f;
  }
`;
/*タイトル装飾 ここまで*/

/*左に横線見出しデザイン　はじめ*/
const Q = styled.div`
  position: relative;
  margin-left: 30px;
  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: -30px;
    width: 25px;
    border-top: solid 1px black;
  }
`;
/*左に横線見出しデザイン　終わり*/

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
    border-bottom: solid 20px #006e4f;
  }
  &:after {
    position: absolute;
    content: "";
    bottom: -3px;
    left: 10px;
    width: 100%;
    border-bottom: solid 5px #006e4f;
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
