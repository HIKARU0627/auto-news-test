import React from "react";
import { Link, withPrefix } from "gatsby";
import styled from "styled-components";

import Layout from "@common/Layout/Layout";
import HelmetForOGP from "@common/Helmet/HelmetForOGP";

const topics3_sato = () => {
  // const { count } = props;
  return (
    <Layout>
      <HelmetForOGP
        title={"佐藤先生インタビュー"}
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
                佐藤先生インタビュー
              </TitleTopics3>
            </div>

            <div className="content column is-full">
              「国内実地研修」を担当された佐藤先生に以下のことをお聞きしました。
              <br />
              ①　「国内実地研修」で印象に残っていることについて
              <br />
              ②　実習の前と後で学生の様子について
              <br />
              ③　体験でこそ学べることについて
              <br />
            </div>

            <Q className="has-text-weight-semibold">
              「国内実地研修」の授業の中で一番印象に残っていることを教えて下さい。
            </Q>

            <div className="container column">
              <p>
                学生さんたちが三日間の研修を終えたあとに、発表会を毎年開いて、研修して感じたこと、何をやったか、みんなの前で発表してもらうようにしているんですけど、
                なかには、研修に行って非常に大きな収穫があったって言って帰ってくる子もいるもんだから、そういう子を見てると担当して良かったなあと思います。
              </p>
            </div>
            <div className="content columns is-vcentered">
              <div className="is-7">
                <Q className="has-text-weight-semibold">
                  具体的にはどのような学生さんがいましたか？
                </Q>
                <div className="container column ">
                  <p>
                    愛知県農業総合試験場の企画のところに行った子がいますね。実際に研究をやってる部署ではなくて、研究所の運営に関わっている部署です。
                    研究を記者発表する日に、その発表のお手伝いをしたそうです。その子は「直接重要な研究に手を動かしてなくても、いろんな形で農業だとか農業研究に貢献できるっていうのが分かった。」っていうのを発表していました。
                    そういった、もっと幅広い意味での「農学部で学んだことが役に立つ」ということを理解してくれた人がいたっていうのは非常に印象に残ってますね。
                  </p>
                </div>
              </div>
              <div className="column is-4 image">
                <img
                  src={withPrefix("/img/topics/topics3/thumbnails/sato.png")}
                  alt="t3_sato"
                />
              </div>
            </div>

            <div className="content">
              <Q className="has-text-weight-semibold">
                実習の前と後で学生に変化は見られましたか？
              </Q>
              <div className="container column ">
                <p className="column">
                  実地研修に行って頂いた学生さんのなかには、農学部で学んだそれぞれの授業の中身と、自分の将来の進路のつながりが見えた人がいるんじゃないかなあ、っていうのが僕の感想です。
                  基礎の部分の研究、授業を一、二年生の頃にやって、三年生になってくるともうちょっと、少し専門的な授業も入ってくるんですね。
                  そのまま個々の授業を見ていると、視野がだんだんと狭くなっていく。
                </p>
              </div>

              <Q className="has-text-weight-semibold">
                確かに、専門の科目が増えてくると、自分の興味があるものに目が向きますよね。全部を完璧に学ぶのも大変ですから。
              </Q>
              <div className="container column ">
                <p className="column">
                  ええ、そうなってくると全体の授業の、カリキュラムの作られてる全体像がますます見えなくなっていって、あたかも自分の進路に関して、どんどん選択肢を狭めているような形で、ついつい勉強していきがちです。
                  そうした時に、農学部全体のカリキュラムが自分たちの将来にどう活かされるかっていうのを実地研修で実際に外へ行って見てきてもらえば、必ずしも何かひとつを極めたからその先が広がってるわけではなく、より幅広い視野を持って授業に取り組むことで、色んな科目がどういうふうに関わっていくのか見えてくる。
                  そのようなことが、授業をやる前と後で学生さんの意識として、変わっていればいいと思います。
                </p>
              </div>
            </div>

            <div className="content">
              <div className=" columns is-vcentered">
                <div className="column is-4 image">
                  <img
                    src={withPrefix("/img/topics/topics3/thumbnails/sato2.png")}
                    alt="t3_sato2"
                  />
                </div>
                <div className="is-8">
                  <Q className="has-text-weight-semibold">
                    体験でこそ学べることとはどのようなものだとお考えですか？
                  </Q>
                  <p className="container column ">
                    体験型の授業は僕はすごく重要だと思いますね。
                    普通の先生からある程度内容を提供する形の授業っていうのは、学生さんたちの、質問なり何かインタラクティブなやりとりがあるとしても基本的には先生が想定した授業の範囲の中でのトピックスを元に、
                    話が進んでいくと思います。ですけど、体験型授業っていうのはそういうくくりがないですよね。僕自身も研修先の方が何を見せているのか、何をやらせているのかについて実は知らないんですね。
                    もう完全に先方に任せている。
                    「向こうの日々の業務を、今の時期やらなきゃいけないことをさせてください。」という形で、職業人の方が普段接している職業を分担していってもらう、という形なので、まさに何が起こるか分からないし、何をやるのかも分からない。
                    その中で「どうやったら自分が役に立つのか」、「自分の学んできたことがどのようにに活かされるのか」を常に考えながら、学生がケースバイケースで対応せざるをえない。
                    そういうふうにあらかじめメニューがない上で、自分たちが何かを学び取れるっていうのが魅力なんじゃないかなと思います。
                    それぞれの学生さんが積極的に取り組めば取り組むほど、学ぶ物は自分できちっと見えてくる、そこが体験学習のいいところじゃないかと思っています。
                  </p>
                </div>
              </div>
              <p className="has-text-right">(インタビュー日：2010年11月8日)</p>
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
                    <StyledLink to="/topics/topics3/topics3_senyo">
                      千代先生へのインタビュー
                    </StyledLink>
                  </li>
                  <li>
                    <StyledLink to="/topics/topics3/topics3_ukiba">
                      浮葉先生へのインタビュー
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
export default topics3_sato;

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
