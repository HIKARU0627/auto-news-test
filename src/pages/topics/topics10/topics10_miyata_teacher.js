import React from "react";
import { Link, withPrefix } from "gatsby";
import styled from "styled-components";

import Layout from "@common/Layout/Layout";
import HelmetForOGP from "@common/Helmet/HelmetForOGP";

const Topics10_miyata_teacher = () => {
  return (
    <Layout>
      <HelmetForOGP
        title={"細胞を観る-先生へのインタビュー"}
        category={"Topics"}
        image={`https://ocw.nagoya-u.jp${withPrefix(
          "/img/topics/topics10/top/top.png"
        )}`}
      />
      <Header className="full-width-image margin-top-0">
        <HeaderIconBlue
          src={withPrefix("/img/topics/topics10/top/header_icon_blue.svg")}
          alt=""
        />

        <Title>
          <div className="container">
            <h1 className="is-size-5-mobile is-size-2-tablet is-size-1-widescreen ">
              細胞を観る、記載する、そして伝える
            </h1>
          </div>
        </Title>
      </Header>

      <section className="section columns is-centered is-widescreen">
        <div className="container column is-6-widescreen">
          <div className="content columns is-vcentered is-mobile is-multiline">
            <figure className="image is-96x96	is-marginless column is-narrow is-hidden-mobile">
              <img
                src={withPrefix(
                  "/img/topics/topics10/miyata/miyata_headline_icon1.svg"
                )}
                alt=""
                style={{ opacity: `0.22` }}
              />
            </figure>
            <figure className="image is-64x64	is-marginless is-paddingless column is-narrow is-hidden-tablet">
              <img
                src={withPrefix(
                  "/img/topics/topics10/miyata/miyata_headline_icon1.svg"
                )}
                alt=""
                style={{ opacity: `0.22` }}
              />
            </figure>
            <h1 className="has-text-bold is-size-4-mobile is-size-2-tablet is-size-2-widescreen column">
              先生へのインタビュー
            </h1>
          </div>

          <div className="content">
            <h3 className="is-size-5-mobile is-size-4-tablet is-size-4-widescreen">
              Q.
              講義全体の構成を考えたり、実際に講義を行ったりする上で、先生が何か心がけていらっしゃることはありますか?
            </h3>
            <Answer>
              A: &nbsp;
              医学科の場合は、人体に由来する教材を使っての学習（解剖実習や組織学，病理学など）が続き、やがて生きたヒト相手の臨床実習に進みます。高校の時に生物をとらなかった学生が大多数である１年生に「生きている他者」への生物学的関心を、それぞれの立場で主体的に持ってもらえるようになればと願い、前半のコオロギ期間、後半の胎生マウス組織の期間ともに、「主治医」として受け持ち（循環班、呼吸班、消化班、泌尿生殖班、運動神経班）させるようにしています。
              <br />
              ほぼ全員にとって全くなじみのない「コオロギのからだ」の中で自分の担当システム（循環、呼吸、消化、泌尿生殖、運動神経）のありようを解剖して明らかにし、それを他の人に伝える、というゴールを最初の時点で意識させ、「解剖」には「初めての土地を尋ねる時に地図を見る」ような下調べが大切であること、また、顕微鏡やピンセット・ハサミなどの機器・道具の適切な利用・管理も必要であること、記録をきちんと行なうことなど、「現場」での姿勢について、必要に応じて個別の指示をしています。
              <br />
              私は２年生に「発生学」を教える際にも、講義室へ顕微鏡・カメラのセットを持ち込み、プロジェクターで実体顕微鏡下の胚などを投影します（講義室にスクリーンが２つあり、片方にパワーポイントスライド、片方に実物を写します）。これを私にやらせるきっかけの一つになっているかもしれないのが、私が高校生だったときの時の化学の先生が、教室に「炎色反応」用の一式を持ち込み、教卓の上できれいな色を見せてくれた（あるいは他にもあれこれ持ち込み、見せてくれた）ことを興味深く思ったことです。カリキュラム上の「実習」でなくても「なま」や「本物」「体験」などの持たせる効果は大きいように、自身の記憶の深さにもとづき思い、「基礎セミナーB」も、ずっとそういうスタイルで行なっています。
            </Answer>
            <h3 className="is-size-5-mobile is-size-4-tablet is-size-4-widescreen">
              Q. この授業を通して、先生が学生に最も伝えたいことは何でしょうか?
            </h3>
            <Answer>
              A: &nbsp;
              (1)人体に由来する教材を使っての学習が続き、やがて生きたヒト相手の臨床実習に進むという医学科の１年生に対して、本セミナーが、生きているコオロギ、さっきまでは生きていたマウスの胎仔、臓器のモト、組織、細胞など、（これから続く科目群あれこれがそうであることの前触れとして）「命」にどっぷり漬かった実習であることを意識してもらえたらと願っています。教科書・参考書の情報は、ボタンを押せば自動販売機から出て来る、あるいはモニター画面から美しく飛び出して来るなにか便利なもの、などではなく、手間をかけ、実験動物の命を奪って得られる（た）もの、めんどうくささや、肉感など、本物につきまとうあれこれを通ってたどり着くもの．．．である、というような感覚・体験を持って欲しいというのが一つでしょうか。
              <br />
              (2)「新しい（知らない）相手」に対して、好奇心を持ち、誠実に向き合う、問う、ということに、（きっと不慣れであろうから）少しずつ慣れて欲しいと思っています。未知なる病気や、はじめて会う患者、新しいメカニズム・謎などに対して、知的な関心・誠意をもって向き合う、見守ることは、将来の彼らの（ほとんどがそうなるであろう臨床医だろうが、本当は少数派として確保したく願う基礎研究者だろうが）日々の営みにとってとても大切です。本物に触れるという実体験をきっかけとして、「知的な腰軽さ」、積極性のようなものを持ってほしい。「ヒト」「医」には関心がもともと高かろうことは承知で、むしろ「そうでない何か（生き物）」だろうが積極的になれる、そこに潜むヒトとの共通性や相違に対して向き合える、そうした広さ・普遍性を意識できる、とんでもなく未知な相手だろうがひるまない（ならば余計に闘志が湧く）という、将来を担う若人に期待したいありようを念頭に（ちょうど無料で10月に確保（捕獲）しやすいという実務上の、また講師の趣味も兼ねた理由はありはしますが）、コオロギは貴重な対象であると考え、ずっと用いています。
            </Answer>
            <h3 className="is-size-5-mobile is-size-4-tablet is-size-4-widescreen">
              Q.
              最近の学生に対して、どのような印象をお持ちでしょうか?(講義を行っていて感じる点など)
            </h3>
            <Answer>
              A: &nbsp;
              １年生を対象とする「基礎セミナーB」は，基礎医学科目群に翻弄される次学年（２年生）にとって最重要項目である「テストに出る」とか「過去問」とかにほぼ無縁の世界ですので、比較的のびのびと取り組んでいると思います。「班」の中での意欲の濃淡は一定程度あります。教材との出会いの際にはどうなることかと案じることも多いですが、やがてそれぞれの班でしっかりと体験を受けとめ、発表会の際には、調べと考察の成果を披露するので、感心することが多いです。スマホカメラでの撮影やパワーポイントのスライドづくりなどは手慣れていると感じます。体験しさえすれば、もともと「ない訳ではない」生き物への関心が、発露する感はあり、また、ゲーム画面以外でも「探索」「捕獲」の意欲・能力は発揮され得るのだと、安心しています。もしかして、彼らの中に、そうした自己の「めざめ」のような体験をもち、その「気づき」を生かしてこれから本格化する専門科目に取り組んでくれる学生が出てくれば、しめたものだと思います。
            </Answer>
            <h3 className="is-size-5-mobile is-size-4-tablet is-size-4-widescreen">
              Q. 今回実際に講義を行う中で、何か感じたことはありますか?
            </h3>
            <Answer>
              A: &nbsp;
              コオロギ実習では最初は学生は皆とまどっていますが、回数を重ねるにつれて、それぞれの班で、徐々に困難・問題を克服する方向に進んでいく様子が見えます。解剖作業の技術向上や、臓器名の判定などで自信を持つ場面も見受けられます。わからないとすぐ匙を投げる学生もいますが、班としての共同作業が、探索を右往左往しながらでも進めていく効果をもたらしているように思われます。それぞれに「意外にやれる自分（たち）」みたいな感覚をもちながら取り組んでいるかもしれないような雰囲気（割と嬉々としている感、漂う）、感じました。学生のレポートには、それぞれに「実体験」を楽しんだ、あるいは有用に感じたようなコメントがあり、手間をかける意義を再認識しています。
              <br />
              学生のレポートには、それぞれに「実体験」を楽しんだ、あるいは有用に感じたようなコメントがあり、手間をかける意義を再認識しています。
            </Answer>
          </div>
        </div>
      </section>

      <section className="section columns is-centered is-widescreen">
        <div
          className="container column is-6-widescreen box"
          style={{ backgroundColor: `rgba(16,167,238,0.8)` }}
        >
          <div className="content columns is-vcentered is-multiline">
            <figure className="image is-96x96	is-marginless column is-narrow is-hidden-mobile">
              <img
                src={withPrefix(
                  "/img/topics/topics10/miyata/miyata_headline_icon2.svg"
                )}
                alt=""
                style={{ opacity: `0.33` }}
              />
            </figure>
            <h1
              className="has-text-bold is-size-4-mobile is-size-2-tablet is-size-2-widescreen column"
              style={{ color: "white" }}
            >
              他の回を見る
            </h1>
            <ul className="column is-10 margin-top-0">
              <li className="list-item has-text-white">
                <StyledLink to="/topics/topics10/topics10_miyata_class1">
                  コオロギの組織観察
                </StyledLink>
              </li>
              <li className="list-item has-text-white">
                <StyledLink to="/topics/topics10/topics10_miyata_class2">
                  マウス胎仔の培養と観察
                </StyledLink>
              </li>
              <li className="list-item has-text-white">
                <StyledLink to="/topics/topics10/topics10_miyata_students">
                  学生へのインタビュー
                </StyledLink>
              </li>
            </ul>
          </div>

          <div className="content columns is-vcentered is-multiline">
            <figure className="image is-96x96	is-marginless column is-narrow is-hidden-mobile">
              <img
                src={withPrefix(
                  "/img/topics/topics10/miyata/miyata_headline_icon2.svg"
                )}
                alt=""
                style={{ opacity: `0.33` }}
              />
            </figure>
            <h1
              className="has-text-bold is-size-4-mobile is-size-2-tablet is-size-2-widescreen column"
              style={{ color: "white" }}
            >
              他の授業を見る
            </h1>
            <ul className="column is-10 margin-top-0">
              <li className="list-item">
                <StyledA href="/topics/topics10/topics10#red">
                  ピアカウンセリング体験を通して、他者理解及び対人援助の基礎を理解する
                </StyledA>
              </li>
              <li className="list-item">
                <StyledA href="/topics/topics10/topics10#yellow">
                  レポート作成と口頭発表の技術
                </StyledA>
              </li>
              <li className="list-item">
                <StyledA href="/topics/topics10/topics10#green">
                  メディア研究・ビデオ作製を通したメディアリテラシーの獲得
                </StyledA>
              </li>
              <li className="list-item">
                <StyledA href="/topics/topics10/topics10#violet">
                  「考古学入門」～考古学に触れる～
                </StyledA>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Topics10_miyata_teacher;

const Header = styled.div`
  background-image: url("${withPrefix(
    "/img/topics/topics10/miyata/miyata_header_pic.jpg"
  )}");
  background-position: center center;
  background-size: cover;
  position: relative;
`;

const HeaderIconBlue = styled.img`
  background-color: rgba(16, 167, 238, 0.5);
  backgroundposition: center center;
  backgroundsize: cover;
  width: 100%;
  height: 100%;
`;

const Title = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.25);
  color: white;
`;

const StyledLink = styled(Link)`
  color: white;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: white;
  }

  position: relative;
  padding-left: 1.5em;
  &:before {
    background: #fff;
    content: "";
    height: 0.8em; //四角のサイズ
    width: 0.8em; //四角のサイズ
    left: 0;
    position: absolute;
    top: 0.25em;
  }
`;

const StyledA = styled.a`
  color: white;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: white;
  }
  position: relative;
  padding-left: 1.5em;
  &:before {
    background: #fff;
    content: "";
    height: 0.8em; //四角のサイズ
    width: 0.8em; //四角のサイズ
    left: 0;
    position: absolute;
    top: 0.25em;
  }
`;

const Answer = styled.p`
  margin-top: 0vw;
  margin-bottom: 4vw;
  padding-left: 1.9vw;
  text-indent: -1.9vw;
`;
