import React from "react";
import { withPrefix } from "gatsby";
import styled from "styled-components";

import Layout from "@common/Layout/Layout";
import HelmetForOGP from "@common/Helmet/HelmetForOGP";

const Topics4 = () => {
  // const { count } = props;
  return (
    <Layout>
      <HelmetForOGP
        title={"理学部新歓サイエンスカフェ2011"}
        category={"Topics"}
        image={`https://ocw.nagoya-u.jp${withPrefix(
          "/img/topics/topics4/topics4_kanban.png"
        )}`}
      />
      <div
        className="full-width-image margin-top-0"
        style={{
          backgroundImage: `url(${withPrefix(
            "/img/topics/topics4/topics4_header.png"
          )})`,
          backgroundPosition: `top center`,
          backgroundSize: `cover`,
        }}
      >
        <MesssageBox>
          <Title className="has-text-weight-bold is-size-4-mobile is-size-2-tablet is-size-1-widescreen has-text-centered">
            【TOPICS No.4】
            <br />
            理学部新歓サイエンスカフェ2011
          </Title>
          <Subtitle className="has-text-weight-bold is-size-4-widescreen has-text-lefted is-hidden-touch">
            科学でなにができるのか。大学ではどのような研究が行われているのか。理学部の学生がその一端を見せてくれます。『名大の授業』ではその取り組みを取材しました。ようこそ、科学の世界へ。内容および出展者の所属・学年は2011年度のものです。
          </Subtitle>
        </MesssageBox>
      </div>

      <Scrolling>
        <section className="section">
          <div className="container">
            <div className="content is-hidden-desktop">
              <p>
                科学でなにができるのか。大学ではどのような研究が行われているのか。理学部の学生がその一端を見せてくれます。『名大の授業』ではその取り組みを取材しました。ようこそ、科学の世界へ。内容および出展者の所属・学年は2011年度のものです。
              </p>
            </div>

            <div className="content box">
              <h1 className="title is-size-4-mobile is-size-2-tablet is-size-2-desktop">
                展示一覧
              </h1>
              <div className="columns has-text-centered has-text-weight-bold">
                <a
                  href="#boom"
                  className="column m-1 notification is-success is-light"
                >
                  ブーメランはなぜ戻ってくるのか
                </a>
                <a
                  href="#comp"
                  className="column m-1 notification is-success is-light"
                >
                  コンピュータでみる物理，化学，生命の世界
                </a>
                <a
                  href="#elem"
                  className="column m-1 notification is-success is-light"
                >
                  素粒子の世界
                </a>
                <a
                  href="#prot"
                  className="column m-1 notification is-success is-light"
                >
                  タンパク質の就職活動
                </a>
              </div>
              <div className="columns has-text-centered has-text-weight-bold">
                <a
                  href="#fin"
                  className="column m-1 notification is-success is-light"
                >
                  経済物理学-物理学からみる経済学-
                </a>
                <a
                  href="#math"
                  className="column m-1 notification is-success is-light"
                >
                  大学の数学って何？-広大なる世界への第一歩-
                </a>
                <a
                  href="#cir"
                  className="column m-1 notification is-success is-light"
                >
                  円の数学
                </a>
                <a
                  href="#env"
                  className="column m-1 notification is-success is-light"
                >
                  地球環境システム学への招待
                </a>
              </div>
              <div className="columns has-text-centered has-text-weight-bold">
                <a
                  href="#earth"
                  className="column m-1 notification is-success is-light"
                >
                  地球を化学する
                </a>
                <a
                  href="#ste"
                  className="column m-1 notification is-success is-light"
                >
                  太陽地球環境研究所　研究所紹介
                </a>
                <a
                  href="#lure"
                  className="column m-1 notification is-success is-light"
                >
                  140年間探索されてきた花粉管誘引物質を発見！
                </a>
                <a
                  href="#brain"
                  className="column m-1 notification is-success is-light"
                >
                  遊び・運動・学習による脳の活性化のしくみ
                </a>
              </div>
            </div>

            <div>
              <div id="boom" className="content box">
                <div className="columns is-vcentered">
                  <div className="column  is-8">
                    <h1 className="title is-size-4-mobile is-size-2-tablet is-size-2-desktop">
                      ブーメランはなぜ戻ってくるのか
                    </h1>
                    <h2 className="subtitle has-text-weight-light is-size-5-mobile is-size-3-tablet is-size-3-desktop">
                      前川浩隆
                      <span className="  is-size-6-mobile is-size-4-tablet is-size-4-desktop">
                        (物理学科4年)
                      </span>{" "}
                    </h2>
                    <p className="overview is-size-7-mobile is-size-6-tablet is-size-6-desktop">
                      ブーメランがどのように飛んでいるのかを考えたことがありますか？その仕組みには揚力という力とブーメランの「回転」がとても大きな働きをしています。ブーメランはなぜ落ちないのか？どうして手元へ戻ってくるのか？今回はブーメランの描く軌跡の理由を基礎的なところから説明していきたいと思います。また実際に紙でブーメラン作って飛ばしてみるので興味のある方はぜひブーメランを作りに来てください。
                    </p>
                    <br />
                    <article className="message is-success is-light">
                      <div className="message-body">
                        <p className="subtitle">メッセージ</p>
                        <p className="comment is-size-7-mobile is-size-6-tablet is-size-6-desktop">
                          身近なものを物理的にとらえることを通じて、物理に関する固いイメージをなくしてもらえたら、と思います。
                        </p>
                      </div>
                    </article>
                    <ul>
                      <li>
                        <a href="https://ocw.nagoya-u.jp/images/ja/topics4/pdf/01maekawa.pdf">
                          参考資料: なぜブーメランは戻ってくるのか
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="column is-4  image ">
                    <img
                      src={withPrefix(
                        "/img/topics/topics4/people/boom_maekawa.png"
                      )}
                      alt="topics4_boom_maekawa"
                    />
                  </div>
                </div>
              </div>

              <div id="comp" className="content box">
                <div className="columns is-vcentered">
                  <div className="column  is-8">
                    <h1 className="title is-size-4-mobile is-size-2-tablet is-size-2-desktop">
                      コンピュータでみる物理，化学，生命の世界
                    </h1>
                    <h2 className="subtitle has-text-weight-light is-size-5-mobile is-size-3-tablet is-size-3-desktop">
                      森義治
                      <span className="  is-size-6-mobile is-size-4-tablet is-size-4-desktop">
                        (理学研究科物質理学専攻(物理系)TB研)
                      </span>{" "}
                    </h2>
                    <p className="overview is-size-7-mobile is-size-6-tablet is-size-6-desktop">
                      コンピュータを用いたシミュレーションにより，分子の運動を再現し、物質の性質を理解することができるようになってきました。そのようなシミュレーションは物理や化学の問題を解決することを助け，また，私たちに欠かせないタンパク質などの生体分子に応用されて、薬を開発する際の方法のひとつにもなってきています。今回は、そのようなタンパク質におけるシミュレーションの動画を見ていただき、最新の研究を楽しんでいただけたらと思います。
                    </p>
                    <br />
                    <article className="message is-success is-light">
                      <div className="message-body">
                        <p className="subtitle">メッセージ</p>
                        <p className="comment is-size-7-mobile is-size-6-tablet is-size-6-desktop">
                          好奇心旺盛な多くの方に来て頂いて、こちらも楽しかった。
                        </p>
                      </div>
                    </article>
                    <ul>
                      <li>
                        <a href="https://ocw.nagoya-u.jp/images/ja/topics4/pdf/03mori.pdf">
                          参考資料: コンピュータでみる物理，化学，生命の世界
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="column is-4  image ">
                    <img
                      src={withPrefix(
                        "/img/topics/topics4/people/comp_mori.png"
                      )}
                      alt="topics4_comp_mori"
                    />
                  </div>
                </div>
              </div>

              <div id="elem" className="content box">
                <div className="columns is-vcentered">
                  <div className="column  is-8">
                    <h1 className="title is-size-4-mobile is-size-2-tablet is-size-2-desktop">
                      素粒子の世界
                    </h1>
                    <h2 className="subtitle has-text-weight-light is-size-5-mobile is-size-3-tablet is-size-3-desktop">
                      榎本成志
                      <span className="  is-size-6-mobile is-size-4-tablet is-size-4-desktop">
                        (E研)
                      </span>{" "}
                    </h2>
                    <p className="overview is-size-7-mobile is-size-6-tablet is-size-6-desktop">
                      私たちを構成している物質の最小構成要素は何でしょうか？それが素粒子であり，素粒子理論研究のゴールです。何が素粒子かという答えは，科学技術の進歩によって変わっていきます。100年ほど前ならそれは原子であり，しかし時代が進むと陽子や中性子が素粒子に，今ではクォークと呼ばれる粒子こそが素粒子であると考えられています。
                      <br />
                      私たちのポスターでは，この素粒子について簡単に解説します。素粒子は今や宇宙を語る上でも非常に重要な要素になっています。素粒子に興味を持っている方はもちろん，宇宙に興味を持っている方もぜひ気軽に来てください。
                    </p>
                    <br />
                    <article className="message is-success is-light">
                      <div className="message-body">
                        <p className="subtitle">メッセージ</p>
                        <p className="comment is-size-7-mobile is-size-6-tablet is-size-6-desktop">
                          このサイエンスカフェに多くの方が来て下さり、驚いています。この機会に皆さんが、素粒子はじめ物理に興味を抱いてくれたら、と思っています。
                        </p>
                      </div>
                    </article>
                  </div>
                  <div className="column is-4 image ">
                    <img
                      src={withPrefix("/img/topics/topics4/icons/elem.png")}
                      alt="topics4_elem"
                    />
                  </div>
                </div>
              </div>

              <div id="prot" className="content box">
                <div className="columns is-vcentered">
                  <div className="column  is-8">
                    <h1 className="title is-size-4-mobile is-size-2-tablet is-size-2-desktop">
                      タンパク質の就職活動
                    </h1>
                    <h2 className="subtitle has-text-weight-light is-size-5-mobile is-size-3-tablet is-size-3-desktop">
                      安西高廣・塩田拓也
                      <span className="  is-size-6-mobile is-size-4-tablet is-size-4-desktop">
                        (理学研究科物質理学専攻(化学系)生物化学研究室)
                      </span>{" "}
                    </h2>
                    <p className="overview is-size-7-mobile is-size-6-tablet is-size-6-desktop">
                      タンパク質は生まれて、成長し、働き、そして分解されますが、これはまるでわれわれの人生のようだと思いませんか？タンパク質が、細胞内のいくつものゲートを通って正しい場所へと移動していく様子は、まるでタンパク質が就職活動しているようにも感じられます。グレた（正しい立体構造をとれなかった）タンパク質は、シャペロンとよばれる細胞内の保護観察官の助けを借りて更生（正しい立体構造をとる）されます。サイエンスカフェでは、このような素晴らしい細胞内の機能について、わかりやすく説明したいと思います。
                    </p>
                    <br />
                    <article className="message is-success is-light">
                      <div className="message-body">
                        <p className="subtitle">メッセージ</p>
                        <p className="comment is-size-7-mobile is-size-6-tablet is-size-6-desktop">
                          集客を狙ってキャッチーなタイトルにしたが、その必要もなく、就職というタイトルにしたのに、研究志望の方が多く来たので、なんだか申し訳ない気分になった。
                          <br />
                          1年生に基礎から最先端の内容まで紹介した。なんとなくでもわかってもらえれば。
                        </p>
                      </div>
                    </article>
                    <ul>
                      <li>
                        <a href="https://ocw.nagoya-u.jp/images/ja/topics4/pdf/05siota_anzai.pdf">
                          参考資料: タンパク質の就職活動
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="column is-4  image ">
                    <img
                      src={withPrefix(
                        "/img/topics/topics4/people/prot_shiota-anzai.png"
                      )}
                      alt="topics4_shiota_anzai"
                    />
                  </div>
                </div>
              </div>

              <div id="fin" className="content box">
                <div className="columns is-vcentered">
                  <div className="column  is-8">
                    <h1 className="title is-size-4-mobile is-size-2-tablet is-size-2-desktop">
                      経済物理学-物理学からみる経済学-
                    </h1>
                    <h2 className="subtitle has-text-weight-light is-size-5-mobile is-size-3-tablet is-size-3-desktop">
                      久保宏樹
                      <span className="  is-size-6-mobile is-size-4-tablet is-size-4-desktop">
                        (物理学科4年)
                      </span>{" "}
                    </h2>
                    <p className="overview is-size-7-mobile is-size-6-tablet is-size-6-desktop">
                      経済物理学という学問をご存じだろうか。これは経済を物理学というツールを用いて解析しようというものである。何故物理で経済？と思う人がいるかもしれないが、物理学と経済学とは意外と多く関係を持っている。分かり易い例として、アダム・スミスの「需要と供給は均衡する」という考え方を挙げてみよう。物理学を知っている人間なら、この考えはニュートン力学に由来していることはなんとなく予想できるだろう。実際に「需要と供給」の考えは18世紀に生まれた考えである。この頃、世界では古典力学全盛の時代であり、あらゆるものの動きは力学で説明できると信じられていたらしい。また、経済学で19世紀からでてきた等分配則、最大値原理などのキーワードも物理学で当時盛んに使われていた概念である。本展示は物理学を使う利点、利用法、その結果どうのような事が見えてくるかなどをできる限り分かり易く説明するものである。
                    </p>
                    <br />
                    <article className="message is-success is-light">
                      <div className="message-body">
                        <p className="subtitle">メッセージ</p>
                        <p className="comment is-size-7-mobile is-size-6-tablet is-size-6-desktop">
                          物理学というものは、他の分野でも応用できるということを知ってもらいたい。
                        </p>
                      </div>
                    </article>
                    <ul>
                      <li>
                        <a href="http://nuvideo.media.nagoya-u.ac.jp/embed/3c90a8129b6bf273218078b1096971393f41d346">
                          参考資料: 経済物理学-物理学からみる経済学-(flv形式)
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="column is-4  image ">
                    <img
                      src={withPrefix(
                        "/img/topics/topics4/people/fin_kubo.png"
                      )}
                      alt="topics4_fin_kubo"
                    />
                  </div>
                </div>
              </div>

              <div id="math" className="content box">
                <div className="columns is-vcentered">
                  <div className="column  is-8">
                    <h1 className="title is-size-4-mobile is-size-2-tablet is-size-2-desktop">
                      大学の数学って何？-広大なる世界への第一歩-
                    </h1>
                    <h2 className="subtitle has-text-weight-light is-size-5-mobile is-size-3-tablet is-size-3-desktop">
                      小西正秀
                      <span className="  is-size-6-mobile is-size-4-tablet is-size-4-desktop">
                        (多元数理研究科)
                      </span>{" "}
                    </h2>
                    <p className="overview is-size-7-mobile is-size-6-tablet is-size-6-desktop">
                      皆さんにとって「数学」とはどういうものだったでしょうか。高校の数学が好きな人も嫌いな人も、得意な人も苦手な人もいるでしょう。ただ、大学からの数学は趣がガラリと変わります。ここでは学部三年次に制作するポスターを多数展示しています。新入生が一目見て理解できる代物ではありませんが、それでも充分に数学の世界を垣間見ることができます。今まで抱いてきた数学への思いを一旦忘れて、真っ白な心で数学の世界を眺め、その広さを感じて下さい。気になったことがあれば近くで暇そうにしている先輩に声を掛けて下さい。彼らは数学の世界の住民ですが、怖い人ではありません。どうぞお気軽に。
                    </p>
                    <br />
                    <article className="message is-success is-light">
                      <div className="message-body">
                        <p className="subtitle">メッセージ</p>
                        <p className="comment is-size-7-mobile is-size-6-tablet is-size-6-desktop">
                          新入生に数学を感じてもらえれば良い。
                        </p>
                      </div>
                    </article>
                    <ul>
                      <li>
                        <a href="https://ocw.nagoya-u.jp/images/ja/topics4/pdf/Bertrand.pdf">
                          参考資料: ベルトランの仮説
                        </a>
                      </li>
                      <li>
                        <a href="https://ocw.nagoya-u.jp/images/ja/topics4/pdf/Fuerstenbrgs.pdf">
                          参考資料: Fuerstenbrgs
                        </a>
                      </li>
                      <li>
                        <a href="https://ocw.nagoya-u.jp/images/ja/topics4/pdf/Kaleidoscope.pdf">
                          参考資料: 万華鏡の幾何学
                        </a>
                      </li>
                      <li>
                        <a href="https://ocw.nagoya-u.jp/images/ja/topics4/pdf/folding.pdf">
                          参考資料: 折り紙と２次方程式
                        </a>
                      </li>
                      <li>
                        <a href="https://ocw.nagoya-u.jp/images/ja/topics4/pdf/fractale.pdf">
                          参考資料: フラクタルとジュリア集合
                        </a>
                      </li>
                      <li>
                        <a href="https://ocw.nagoya-u.jp/images/ja/topics4/pdf/game.pdf">
                          参考資料: ゲーム理論
                        </a>
                      </li>
                      <li>
                        <a href="https://ocw.nagoya-u.jp/images/ja/topics4/pdf/knot.pdf">
                          参考資料: 結び目、絡み目の不変量
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="column is-4  image ">
                    <img
                      src={withPrefix(
                        "/img/topics/topics4/people/math_konishi.png"
                      )}
                      alt="topics4_math_konishi"
                    />
                  </div>
                </div>
              </div>

              <div id="cir" className="contnet box">
                <div className="columns is-vcentered">
                  <div className="column  is-8">
                    <h1 className="title is-size-4-mobile is-size-2-tablet is-size-2-desktop">
                      円の数学
                    </h1>
                    <h2 className="subtitle has-text-weight-light is-size-5-mobile is-size-3-tablet is-size-3-desktop">
                      足立真訓
                      <span className="  is-size-6-mobile is-size-4-tablet is-size-4-desktop">
                        (多元数理科学研究科)
                      </span>{" "}
                    </h2>
                    <p className="overview is-size-7-mobile is-size-6-tablet is-size-6-desktop">
                      円は最も基本的な図形の一つで、紀元前から研究されてきた数学的対象です。みなさんも小学校の算数以来、中学校の初等幾何学や、高校の座標幾何学、三角関数など、円に親しんでこられたかと思います。大学で学ぶ数学でも、円について新しい側面を学ぶことになりますし、実は、円についてまだ分かっておらず、研究されている話題もまだまだあります。そんな中からいくつかのトピックをご紹介しようと思います。
                    </p>
                    <br />
                    <article className="message is-success is-light">
                      <div className="message-body">
                        <p className="subtitle">メッセージ</p>
                        <p className="comment is-size-7-mobile is-size-6-tablet is-size-6-desktop">
                          1年生はやる気に満ちあふれているので、その勢いをそのまま勉強にあててもらえれば、と思っています。
                          <br />
                          展示では、高校と大学の間をつなぐことを意識しました。
                          <br />
                          来場者からは、早くも就職や学科分属についての相談を受けました。
                        </p>
                      </div>
                    </article>
                    <ul>
                      <li>
                        <a href="https://ocw.nagoya-u.jp/images/ja/topics4/pdf/09adachi.pdf">
                          参考資料: 円の数学
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="column is-4  image ">
                    <img
                      src={withPrefix(
                        "/img/topics/topics4/people/cir_adachi.png"
                      )}
                      alt="topics4_cir_adachi"
                    />
                  </div>
                </div>
              </div>

              <div id="env" className="content box">
                <div className="columns is-vcentered">
                  <div className="column  is-8">
                    <h1 className="title is-size-4-mobile is-size-2-tablet is-size-2-desktop">
                      地球環境システム学への招待
                    </h1>
                    <h2 className="subtitle has-text-weight-light is-size-5-mobile is-size-3-tablet is-size-3-desktop">
                      加藤杏奈
                      <span className="  is-size-6-mobile is-size-4-tablet is-size-4-desktop">
                        (環境学研究科地球環境科学専攻)
                      </span>{" "}
                    </h2>
                    <p className="overview is-size-7-mobile is-size-6-tablet is-size-6-desktop">
                      環境学研究科は、理学部の上にある大学院です。様々な学問分野が統合し、地球環境について研究を深めています。私たちシステム学講座の研究分野は、主にリモートセンシングやモデルシミュレーション。更にはフィールド調査も行う等、多岐にわたっています。様々なスケールで地球の物質循環を捉え、地球環境を科学する。1つの概念に囚われたくない方、漠然としてるけど、環境って言葉には興味があるという方、是非一度、私たちのブースへいらしてください！
                    </p>
                    <br />
                    <article className="message is-success is-light">
                      <div className="message-body">
                        <p className="subtitle">メッセージ</p>
                        <p className="comment is-size-7-mobile is-size-6-tablet is-size-6-desktop">
                          自分たちも楽しめて良い。普段出会えない人との発表なども見られて、楽しい。
                        </p>
                      </div>
                    </article>
                  </div>
                  <div className="column is-4  image ">
                    <img
                      src={withPrefix("/img/topics/topics4/icons/env.png")}
                      alt="topics4_env"
                    />
                  </div>
                </div>
              </div>

              <div id="earth" className="content box">
                <div className="columns is-vcentered">
                  <div className="column  is-8">
                    <h1 className="title is-size-4-mobile is-size-2-tablet is-size-2-desktop">
                      地球を化学する
                    </h1>
                    <h2 className="subtitle has-text-weight-light is-size-5-mobile is-size-3-tablet is-size-3-desktop">
                      片岡良輔
                      <span className="  is-size-6-mobile is-size-4-tablet is-size-4-desktop">
                        (環境学研究科地球環境科学専攻)
                      </span>{" "}
                    </h2>
                    <p className="overview is-size-7-mobile is-size-6-tablet is-size-6-desktop">
                      新入生の皆さん、サイエンスの世界へようこそ。私たち地球化学講座は、地球・宇宙・環境に関する様々な事象について化学的な手法を用いて明らかにしようとしています。つまり、「地球を化学の目で見る」という姿勢で、サイエンスの世界を走り回っているってわけです。実験、データの整理、毎日がスリルの連続。今私たちが味わっているスリルについて、具体的な事例を交えてお伝えします。
                    </p>
                    <br />
                    <article className="message is-success is-light">
                      <div className="message-body">
                        <p className="subtitle">メッセージ</p>
                        <p className="comment is-size-7-mobile is-size-6-tablet is-size-6-desktop">
                          新入生の方に、サイエンスの楽しさが伝われば良いと思い、行っている。
                        </p>
                      </div>
                    </article>
                  </div>
                  <div className="column is-4  image  ">
                    <img
                      src={withPrefix(
                        "/img/topics/topics4/people/earth_kataoka.png"
                      )}
                      alt="topics4_earth_kataoka"
                    />
                  </div>
                </div>
              </div>

              <div id="ste" className="content box">
                <div className="columns is-vcentered">
                  <div className="column  is-8">
                    <h1 className="title is-size-4-mobile is-size-2-tablet is-size-2-desktop">
                      太陽地球環境研究所　研究所紹介
                    </h1>
                    <h2 className="subtitle has-text-weight-light is-size-5-mobile is-size-3-tablet is-size-3-desktop">
                      原拓也
                      <span className="  is-size-6-mobile is-size-4-tablet is-size-4-desktop">
                        (太陽地球環境研究所)
                      </span>{" "}
                    </h2>
                    <p className="overview is-size-7-mobile is-size-6-tablet is-size-6-desktop">
                      太陽地球環境研究所は，太陽表面から，宇宙空間，地球大気に渡る広大な領域を研究対象とし，太陽からやってくるエネルギーや物質がどのように伝わり，地球周辺にどのような影響を与えるかを主なテーマとして研究しています。本展示では，実際に私たちがどのような研究をしているかについて紹介したいと思います。新入生のみなさまに「手の届く宇宙」である，太陽地球系科学のおもしろさをお伝えできたらと思っています。
                    </p>
                    <br />
                    <article className="message is-success is-light">
                      <div className="message-body">
                        <p className="subtitle">メッセージ</p>
                        <p className="comment is-size-7-mobile is-size-6-tablet is-size-6-desktop">
                          太陽地球環境研究所について、もっと多くの方に知って頂けたら、と思っています。
                        </p>
                      </div>
                    </article>
                  </div>
                  <div className="column is-4   image  ">
                    <img
                      src={withPrefix(
                        "/img/topics/topics4/people/ste_hara.png"
                      )}
                      alt="topics4_ste_hara"
                    />
                  </div>
                </div>
              </div>

              <div id="lure" className="content box">
                <div className="columns is-vcentered">
                  <div className="column  is-8">
                    <h1 className="title is-size-4-mobile is-size-2-tablet is-size-2-desktop">
                      140年間探索されてきた花粉管誘引物質を発見！
                    </h1>
                    <h2 className="subtitle has-text-weight-light is-size-5-mobile is-size-3-tablet is-size-3-desktop">
                      武内秀憲
                      <span className="  is-size-6-mobile is-size-4-tablet is-size-4-desktop">
                        (生命理学専攻 機能調節学講座 生殖分子情報学グループ)
                      </span>{" "}
                    </h2>
                    <p className="overview is-size-7-mobile is-size-6-tablet is-size-6-desktop">
                      植物の受精は、穀物生産など、人類にも密接にかかわる重要な現象です。古くからの多くの研究にも関わらず、植物の受精は神秘のヴェールに覆われるかのように、謎に包まれてきました。謎の現象の一つが、花粉管ガイダンスと呼ばれる仕組みです。めしべの先端で花粉から伸びだした花粉管は、迷うことなく、正確にめしべ内部にある卵細胞に到達します。私達の研究室では、卵細胞に隣接する助細胞から分泌される花粉管誘引物質を発見しました。本展示では、この謎の解明に至った研究をご紹介したいと思います。
                    </p>
                    <br />
                    <article className="message is-success is-light">
                      <div className="message-body">
                        <p className="subtitle">メッセージ</p>
                        <p className="comment is-size-7-mobile is-size-6-tablet is-size-6-desktop">
                          研究を紹介できる場がもらえてよかった。
                        </p>
                      </div>
                    </article>
                  </div>
                  <div className="column is-4  image ">
                    <img
                      src={withPrefix(
                        "/img/topics/topics4/people/lure_takeuchi.png"
                      )}
                      alt="topics4_lure"
                    />
                  </div>
                </div>
              </div>

              <div id="brain" className="content box">
                <div className="columns is-vcentered">
                  <div className="column  is-8">
                    <h1 className="title is-size-4-mobile is-size-2-tablet is-size-2-desktop">
                      遊び・運動・学習による脳の活性化のしくみ
                    </h1>
                    <h2 className="subtitle has-text-weight-light is-size-5-mobile is-size-3-tablet is-size-3-desktop">
                      山内康久
                      <span className="  is-size-6-mobile is-size-4-tablet is-size-4-desktop">
                        (理学部生命理学科 細胞制御学研究グループ)
                      </span>{" "}
                    </h2>
                    <p className="overview is-size-7-mobile is-size-6-tablet is-size-6-desktop">
                      遊び道具や仲間の多い豊かな環境で育ったラットでは脳がよく発達する」というデータが1945年にRosenzweigらによって報告されました。それ以来サルまでの哺乳類において、適度な感覚刺激や運動が脳重量、神経細胞数、シナプス結合数を後天的に増やし、さらにストレスや疾患への耐性をも与えることが確立しました。この生命現象は比較的短期間で大きな脳と高い知性を獲得したヒトの進化の謎への手がかりを与えるだけでなく、その分子メカニズムを解明し、強化することで教育や医療への応用も期待されることから、広く注目を集めています。私たちは、興奮した神経細胞がGFP(クラゲの蛍光蛋白質）で光るようにデザインした遺伝子改変マウスや、感覚や運動の代わりに電気でピンポイント刺激した脳などを用いて、脳の活性化のしくみを探索しています。あなたもマウスと遊んだり彼らの光る脳を蛍光顕微鏡で観察したりしながら、自分の脳を活性化してみませんか。
                    </p>
                    <br />
                    <article className="message is-success is-light">
                      <div className="message-body">
                        <p className="subtitle">メッセージ</p>
                        <p className="comment is-size-7-mobile is-size-6-tablet is-size-6-desktop">
                          私達と研究をぜひしてみたい学生を“大”募集中です！
                        </p>
                      </div>
                    </article>
                    <ul>
                      <li>
                        <a href="https://ocw.nagoya-u.jp/images/ja/topics4/pdf/14yamauchi.pdf">
                          参考資料: 「遊び」や運動による脳の再編成のしくみ
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="column is-4 image ">
                    <img
                      src={withPrefix(
                        "/img/topics/topics4/people/brain_yamauchi.png"
                      )}
                      alt="topics4_brain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Scrolling>
    </Layout>
  );
};

export default Topics4;

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

const Scrolling = styled.div`
  scroll-padding-top: 50px;
`;
