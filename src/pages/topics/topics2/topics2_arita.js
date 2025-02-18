import React from "react";
import { Link, withPrefix } from "gatsby";
import styled from "styled-components";

import Layout from "@common/Layout/Layout";
import HelmetForOGP from "@common/Helmet/HelmetForOGP";

const topics2_arita = () => {
  return (
    <Layout>
      <HelmetForOGP
        title={"有田先生インタビュー"}
        category={"Topics"}
        image={`https://ocw.nagoya-u.jp${withPrefix(
          "/img/topics/topics2/topics2_kanban.png"
        )}`}
      />
      <div className="container column is-11-desktop">
        <section>
          <div className="container column is-11-desktop">
            <div className="content columns is-vcentered">
              <TitleTopics2 className="has-text-weight-bold">
                有田先生インタビュー
              </TitleTopics2>
            </div>

            <div className="content column is-full">
              <Postitwrap className="is-size-5-touch is-size-4-desktop">
                <Postit className="has-text-weight-semibold">
                  「考える喜びを伝えたい」
                </Postit>
              </Postitwrap>
              <div className="container column">
                「有田先生の授業で扱っている、ドイツのボードゲームは、基本的に人と人とのインタラクションを楽しむものです。
                プレイすることによって、インタラクションに関わる想像力をトレーニングする効果もあると、有田先生は言います。
                <br />
              </div>
              <p className="has-text-right">
                インタビュアー:市之瀬(OCWサポーター　文学部3年)
              </p>
            </div>

            <div className="content columns is-vcentered">
              <div className="column is-5 image">
                <img
                  src={withPrefix(
                    "/img/topics/topics2/img_i/pic06_enquete.png"
                  )}
                  alt="t2_06"
                />
                授業を終えてのアンケート
              </div>
              <div className="content is-7">
                <Q className="has-text-weight-semibold">
                  「ボードゲームで遊ぶ」という授業をして、良かったことは何ですか？
                </Q>
                <p className="container column">
                  一番は生徒が楽しそうであることですね。学期の後半あたりに授業についてのアンケートを行うのですが、「とても面白いし頭を使う」「とても楽しい」など、文句が一つも出ないのです。
                </p>
                <Q className="has-text-weight-semibold">へぇぇ、凄いですね。</Q>
                <p className="container column ">
                  この授業では様々なドイツのゲームを使っているのですが、ドイツには日本では考えられない文化があります。
                  例えばドイツでは、人の家に行く時のお土産がボードゲームだったりする。
                  いろんな面から、こういう世界もあるんだという発見も含めて、面白いと言ってくれているのだと思います。ゲームはすごく盛り上がりますよ。
                  まるで映画でも観ているような感覚に陥るほど、ドラマチックな場面もありました。
                </p>
              </div>
            </div>

            <div className="content">
              <Q className="has-text-weight-semibold">
                なぜボードゲームを使った授業をしようと思われたのですか？
              </Q>
              <p className="container column ">
                今の学生の皆さんを見ていると、ただ“こんな人生になるんだろうな”という気持ちで、そこそこ成功して生きているように思います。
                彼らは“自分からこれをやりたい”というモチベーションが少ない。そして普通の授業では、学生からのレスポンスはほとんど無いという状態です。
              </p>
            </div>

            <div className="content">
              <div className=" columns is-vcentered">
                <div className="column is-full">
                  <Q className="has-text-weight-semibold">そうですね。</Q>
                  <p className="container column ">
                    私は学生に考える喜びを伝えたい。
                    授業に学生が喜んで参加して考えたり、友だち同士でだまし合ったり、何を考えているのかと疑心暗鬼になったり、
                    協力したり、などゲームを通じて考える楽しさを味わってほしいと思いました。
                  </p>
                  <Q className="has-text-weight-semibold">
                    ボードゲームで遊ぶという「体験」によって学べることは何だとお考えですか？
                  </Q>
                  <p className="container column ">
                    私は専門において、コンピュータ上で何かのルールを決めて何が起きるかという、新しい形の思考実験を行っています。
                    例えば人と人がいた場合、ルールを決めてコンピュータ上で動かすと、何か呟いているうちに言語や文法が生まれます。
                    言語というものはこういう風になろうという完成形が決まっているのではなく、やり取りしていくうちに生まれてくるものです。
                    そして、私はゲームもこれと同じだと思うのです。
                  </p>
                  <Q className="has-text-weight-semibold">
                    それはどうしてですか？
                  </Q>
                  <p className="container column ">
                    ゲームも先程の話の思考実験も、やってみないとわからないものです。
                    ゲームにはいろんな要素が含まれているため、何かをする前にどうなるかというシミュレーションをすることがとても重要になります。
                    いろんなことがこのゲーム、小さな世界の中で、体験が出来る。それは、この先の人生においてもすごく役立ちますね。
                  </p>
                  <Q className="has-text-weight-semibold">
                    ボードゲームを使う、という独自の面白い授業の中で、学べることは沢山あるのですね。有田先生、ありがとうございました。
                  </Q>
                </div>
              </div>
              <p className="has-text-right">(インタビュー日：2010年11月8日)</p>
              <article className="message is-warning">
                <div className="message-body">
                  <h3 className="is-marginless-mobile has-text-weight-bold is-size-6-mobile is-size-4-tablet is-size-4-desktop ">
                    授業体験とインタビューを終えて
                  </h3>
                  <p className="has-text-right is-size-7-mobile is-size-6-tablet is-size-6-desktop ">
                    OCWサポーター　文学部3年　市之瀬由佳
                  </p>
                  <div className="columns is-vcentered">
                    <div className="content is-9">
                      <p className="container  is-size-7-mobile is-size-6-tablet is-size-6-desktop ">
                        ●授業に参加して●
                        <br />
                        授業の雰囲気はとても明るくて、その中でもみんな真剣にゲームに取り組んでいました。そして、相手と一緒に楽しもうという気持ちが表れていました。とても楽しくて中身の濃い時間でした。
                      </p>
                      <p className="container  is-size-7-mobile is-size-6-tablet is-size-6-desktop ">
                        ●自分の頭で考え、実行する●
                        <br />
                        この授業ではすごく頭を使います。みんな初めはそのゲームを体験したことは無いので、一から自分の頭で戦略をすばやく考える必要があります。
                        また、自分や相手がゲーム中に何か失敗をしたときは、それも次に生かすことが大事になります。
                        ゲームに優勝した学生は、
                        授業の成績が多少加点されるという工夫も、この授業をさらに面白くしているのだと思います。
                      </p>
                      <p className="container  is-size-7-mobile is-size-6-tablet is-size-6-desktop ">
                        ●この授業で学べること●
                        <br />
                        自分の頭で考えることが必要なため、毎回すごく思考力や想像力が上がるのだろうなと感じました。
                        さらにゲームは数人で行うため、他の人の考えにも刺激を受けることが出来ます。
                        人と関わることが好きで、楽しく自己成長したい人にはとても良い授業だと思いました。
                        <br />
                      </p>
                    </div>
                    <div className="column is-3 image">
                      <img
                        src={withPrefix(
                          "/img/topics/topics2/img_i/pic07_arita_ichinose.png"
                        )}
                        alt="t2_07"
                      />
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section columns is-centered-widescreen">
          <div className="container column is-10-widescreen ">
            <div className="content columns is-vcentered is-multiline">
              <Arrow>他のコンテンツを見る </Arrow>
              <ul className="column is-12-desktop is-12-touch margin-top-0 has-text-weight-bold">
                <StyledLink to="/topics/topics2/topics2">
                  ◆TOPICS2トップへ
                </StyledLink>
                <br />
                <StyledLink to="/topics/topics2/topics2_lecture">
                  ◆講義内容
                </StyledLink>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};
export default topics2_arita;

/*タイトル装飾 ここから*/
const TitleTopics2 = styled.div`
  font-size: 27px;
  padding: 10px;
  position: relative;
  margin-left: 17px;
  border-left: solid 5px #c7b299;
  &:before {
    content: "";
    height: 100%;
    position: absolute;
    bottom: 0px;
    left: -22px;
    border-left: solid 12px #c7b299;
  }
  &:after {
    content: "";
    width: 100%;
    width: calc(100% + 22px);
    position: absolute;
    bottom: 0px;
    left: -22px;
    border-bottom: solid 5px #c7b299;
  }
`;
/*タイトル装飾 ここまで*/

/*見出し　ポストイット風デザイン https://www.sejuku.net/blog/56721#i-9を参考*/
const Postit = styled.div`
  color: white;
  display: block;
  position: relative;
  padding: 8px 16px;
  border-radius: 2px;
  background-color: #c7b299;
`;

const Postitwrap = styled.div`
  position: relative;
  display: inline-block;
  &:before {
    content: "";
    background-color: #b3b3b3;
    display: block;
    position: absolute;
    left: 50%;
    height: 60%;
    top: 33%;
    width: 46%;
    box-shadow: 0 0 8px 8px #b3b3b3;
    transform: rotate(2deg);
  }
`;
/*ポストイット風デザインここまで*/

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
    border-bottom: solid 20px #c7b299;
  }
  &:after {
    position: absolute;
    content: "";
    bottom: -3px;
    left: 10px;
    width: 100%;
    border-bottom: solid 5px #c7b299;
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
