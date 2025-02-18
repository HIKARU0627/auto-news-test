import React from "react";
import { Link, withPrefix } from "gatsby";
import styled from "styled-components";

import Layout from "@common/Layout/Layout";
import HelmetForOGP from "@common/Helmet/HelmetForOGP";

const Topics3 = () => {
  // const { count } = props;
  return (
    <Layout>
      <HelmetForOGP
        title={"遊び・体験から学ぶ授業"}
        category={"Topics"}
        image={`https://ocw.nagoya-u.jp${withPrefix(
          "/img/topics/topics3/topics3_kanban.png"
        )}`}
      />
      {/* ヘッダー設定1 */}
      <div
        className="full-width-image  margin-top-0 is-medium "
        style={{
          backgroundImage: `url(${withPrefix(
            "/"
          )}img/topics/topics3/topics3_header.png)`,
          backgroundPosition: `top center`,
          backgroundRepeat: `repeat`,
        }}
      >
        <MesssageBox>
          {/* ~tablet */}
          <Title className="has-text-weight-bold is-size-4-mobile is-size-2-tablet is-size-3-widescreen has-text-centered is-hidden-desktop">
            <p>【TOPICS No.3】</p>
          </Title>
          <Title className="has-text-weight-bold is-size-4-mobile is-size-2-tablet is-size-2-widescreen has-text-centered is-hidden-desktop ">
            <p> 遊び・体験から学ぶ授業</p>
          </Title>
          {/* desktop~ */}
          <Title className="has-text-weight-bold is-size-4-mobile is-size-2-tablet is-size-3-widescreen has-text-centered is-hidden-touch">
            <p>【TOPICS No.3】 遊び・体験から学ぶ授業</p>
          </Title>
          <Subtitle className="has-text-weight-bold is-size-6-mobile is-size-5-tablet is-size-5-widescreen has-text-centered is-hidden-touch">
            <p>名古屋大学には、自ら様々な体験をすることで</p>
            <p>学習するという授業がたくさんあります。</p>
            <p>名大の個性的な授業を、覗いてみませんか？</p>
          </Subtitle>
        </MesssageBox>
      </div>

      {/* ヘッダー設定2 コチラの場合後の同様の文言は非表示 */}
      {/*
      <div className="is-full">
        <img src={withPrefix('/img/topics/topics3/topics3_kanban.png')}/>
      </div>
      <div className="column has-text-weight-medium">
        名古屋大学には、自ら様々な体験をすることで
        学習するという授業がたくさんあります。
        名大の個性的な授業を、覗いてみませんか？
      </div>

 */}

      {/* container=ボタン(リンク付き)　パターン */}

      <section className="section">
        <div className="container ">
          <div className="content has-text-centered is-hidden-desktop">
            <p>名古屋大学には、自ら様々な体験をすることで</p>
            <p>学習するという授業がたくさんあります。</p>
            <p>名大の個性的な授業を、覗いてみませんか？</p>
          </div>

          <div className="content">
            <Link to="../../../courses/0023-基礎セミナー民法の世界で遊ぶ-2003">
              <nav className="panel is-primary ">
                <a className="panel-block " href="# ">
                  {/* <button className="  button is-fullwidth is-center is-outlined   "> */}
                  <div className="columns is-full is-multiline is-mobile">
                    {/* ↑整い次第新日本語版のリンクに変更せよ aタグのhref属ではなくGatsbyのリンクタグを使用すること ！*/}
                    {/* <link to="  ">*/}
                    {/* desktop,widescreen,fullhd size(1024~) */}
                    <div className="column is-hidden-touch is-full">
                      <div className="columns is-vcentered">
                        <div className="column  is-7  ">
                          <h1 className="   title is-size-4-mobile is-size-2-tablet  is-size-2-desktop ">
                            民法の世界で遊ぶ
                          </h1>
                          <h2 className=" subtitle has-text-weight-light  is-size-5-mobile is-size-3-tablet is-size-3-desktop ">
                            千葉恵美子
                            <span className="is-size-6-mobile is-size-4-tablet is-size-4-desktop ">
                              教授
                            </span>{" "}
                            法学研究科
                          </h2>
                          <p></p>
                          <h3 className="  has-text-weight-bold is-size-6-mobile is-size-6-tablet is-size-4-desktop ">
                            日常の中の法律
                          </h3>
                          <p className="is-size-7-mobile is-size-6-tablet is-size-6-desktop ">
                            法律は社会を観察するための一つの切り口です。
                            この授業では、自分で選択した映画を題材とし、法律という視点で問題を捉えていきます。
                            また、発表・司会・ディベートの役割を通じて、自分の考えを主張していくことができます。
                            自己抑制的だった高校までの学習から、一歩踏み出す。
                            六法全書の丸暗記ではない、法律問題の議論の楽しさがこの授業にはあります。
                          </p>
                          <article className="message is-primary">
                            <div className="message-body">
                              <p className="subtitle">
                                千葉先生からのメッセージ
                              </p>
                              <p className="has-text-primary">
                                公開されている授業に参加されていた当時文系学部の1年生であった方は、私の知る限り、企業・地方公共団体で活躍されており、また、今年の司法試験に現役合格された方が出るなど、みんなアクティブな人生を送っておられます。
                                文系・基礎演習で自ら学ぶことを楽しんでくれた学生のその後の成長を嬉しく思っています。
                              </p>
                            </div>
                          </article>
                        </div>
                        <div className="column is-5   image  ">
                          <img
                            src={withPrefix(
                              "/img/topics/topics3/thumbnails/home_chiba.jpg"
                            )}
                            alt="topics3_home"
                          />
                        </div>
                      </div>
                    </div>
                    {/*mobile tablet size(~1023)*/}
                    <div className="column is-hidden-desktop is-mobile is-full">
                      <div className="columns  is-mobile is-multiline">
                        <div className="column is-full">
                          <h1 className="   title is-size-5-mobile is-size-3-tablet  ">
                            民法の世界で遊ぶ
                          </h1>
                          <h2 className=" subtitle has-text-weight-light  is-size-6-mobile is-size-4-tablet">
                            千葉恵美子
                            <span className="is-size-7-mobile is-size-5-tablet ">
                              教授
                            </span>{" "}
                            法学研究科
                          </h2>
                        </div>
                        <div className="column is-2 is-paddingless"></div>
                        <div className="column  is-8 image is-paddingless ">
                          <img
                            src={withPrefix(
                              "/img/topics/topics3/thumbnails/home_chiba.jpg"
                            )}
                            alt="topics3_home_m"
                          />
                        </div>
                        <div className="column is-2 is-paddingless"></div>
                        <div className="column  is-full">
                          <h3 className="   is-marginless  is-size-6-mobile is-size-4-tablet has-text-weight-bold">
                            日常の中の法律
                          </h3>
                          <p className="is-size-7-mobile is-size-6-tablet">
                            法律は社会を観察するための一つの切り口です。この授業では、自分で選択した映画を題材とし、法律という視点で問題を捉えていきます。
                            また、発表・司会・ディベートの役割を通じて、自分の考えを主張していくことができます。
                            自己抑制的だった高校までの学習から、一歩踏み出す。
                            六法全書の丸暗記ではない、法律問題の議論の楽しさがこの授業にはあります。
                          </p>
                          <article className="message is-primary">
                            <div className="message-body">
                              <p className="subtitle is-size-6-mobile is-size-4-table">
                                千葉先生からのメッセージ
                              </p>
                              <p className="is-size-7-mobile is-size-6-tablet has-text-primary">
                                公開されている授業に参加されていた当時文系学部の1年生であった方は、私の知る限り、企業・地方公共団体で活躍されており、また、今年の司法試験に現役合格された方が出るなど、みんなアクティブな人生を送っておられます。
                                文系・基礎演習で自ら学ぶことを楽しんでくれた学生のその後の成長を嬉しく思っています。
                              </p>
                            </div>
                          </article>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </nav>
            </Link>
          </div>

          <div className="content">
            <Link to="../../../courses/0143-物理学実験-2010/">
              <nav className="panel">
                <a className="panel-block " href="# ">
                  <div
                    className="columns is-full is-multiline is-mobile"
                    href="# "
                  >
                    {/* ↑整い次第新日本語版のリンクに変更せよ aタグのhref属ではなくGatsbyのリンクタグを使用すること！/}
                    {/* desktop,widescreen,fullhd size(1024~) */}
                    <div className="column is-hidden-touch is-full">
                      <div className="columns is-vcentered">
                        <div className="column  is-7  ">
                          <h1 className="   title is-size-4-mobile is-size-2-tablet  is-size-2-desktop ">
                            物理学実験
                          </h1>
                          <h2 className=" subtitle has-text-weight-light  is-size-5-mobile is-size-3-tablet is-size-3-desktop ">
                            千代勝実
                            <span className="is-size-6-mobile is-size-4-tablet is-size-4-desktop ">
                              講師
                            </span>{" "}
                            教養教育院
                          </h2>
                          <p></p>
                          <h3 className="  has-text-weight-bold is-size-6-mobile is-size-6-tablet is-size-4-desktop ">
                            すべての「科学」の原点
                          </h3>
                          <p className="is-size-7-mobile is-size-6-tablet is-size-6-desktop ">
                            注目してほしいのはこの授業が医学部対象であるところです。また、理学部はもちろん、理系の学生のほとんどが物理学実験の授業を選択することができます。自分の手で物理学の実験をすることが医学部や他の学部の学生にとってどう役にたつのか、ぜひ講義ノートの「物理学実験ガイダンス」に目を通してみてください。
                          </p>
                          <li>
                            <StyledLink
                              to="/topics/topics3/topics3_senyo"
                              className="has-text-weight-demibold"
                            >
                              千代先生へのインタビュー
                            </StyledLink>
                          </li>
                        </div>
                        <div className="column is-5   image  ">
                          <img
                            src={withPrefix(
                              "/img/topics/topics3/thumbnails/s_senyo_kanban.jpg"
                            )}
                            alt="topics3_s"
                          />
                        </div>
                      </div>
                    </div>
                    {/*mobile tablet size(~1023)*/}
                    <div className="column is-hidden-desktop is-mobile is-full">
                      <div className="columns  is-mobile is-multiline">
                        <div className="column is-full">
                          <h1 className="   title is-size-5-mobile is-size-3-tablet  ">
                            物理学実験
                          </h1>
                          <h2 className=" subtitle has-text-weight-light  is-size-6-mobile is-size-4-tablet">
                            千代勝実
                            <span className="is-size-7-mobile is-size-5-tablet ">
                              講師
                            </span>{" "}
                            教養教育院
                          </h2>
                        </div>
                        <div className="column is-2 is-paddingless"></div>
                        <div className="column  is-8 image is-paddingless ">
                          <img
                            src={withPrefix(
                              "/img/topics/topics3/thumbnails/s_senyo_kanban.jpg"
                            )}
                            alt="topics3_s_m"
                          />
                        </div>
                        <div className="column is-2 is-paddingless"></div>
                        <div className="column  is-full">
                          <h3 className="   is-marginless  is-size-6-mobile is-size-4-tablet has-text-weight-bold">
                            すべての「科学」の原点
                          </h3>
                          <p className="is-size-7-mobile is-size-6-tablet">
                            注目してほしいのはこの授業が医学部対象であるところです。また、理学部はもちろん、理系の学生のほとんどが物理学実験の授業を選択することができます。自分の手で物理学の実験をすることが医学部や他の学部の学生にとってどう役にたつのか、ぜひ講義ノートの「物理学実験ガイダンス」に目を通してみてください。
                          </p>
                          <li>
                            <StyledLink
                              to="/topics/topics3/topics3_senyo"
                              className="has-text-weight-demibold"
                            >
                              千代先生へのインタビュー
                            </StyledLink>
                          </li>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </nav>
            </Link>
          </div>

          <div className="content">
            <Link to="../../../courses/0022-留学生と日本〜異文化を通しての日本理解〜-2014/">
              <nav className="panel">
                <a className="panel-block " href="# ">
                  <div className="columns is-full is-multiline is-mobile">
                    {/* ↑整い次第新日本語版のリンクに変更せよ aタグのhref属ではなくGatsbyのリンクタグを使用すること！*/}
                    {/* desktop,widescreen,fullhd size(1024~) */}
                    <div className="column is-hidden-touch is-full">
                      <div className="columns is-vcentered">
                        <div className="column  is-7  ">
                          <h1 className="   title is-size-4-mobile is-size-2-tablet  is-size-2-desktop ">
                            留学生と日本
                            <br />
                            ～異文化を通しての日本理解～
                          </h1>
                          <h2 className=" subtitle has-text-weight-light  is-size-5-mobile is-size-3-tablet is-size-3-desktop ">
                            浮葉正親
                            <span className="is-size-6-mobile is-size-4-tablet is-size-4-desktop ">
                              准教授
                            </span>{" "}
                            留学生センター
                          </h2>
                          <p></p>
                          <h3 className="  has-text-weight-bold is-size-6-mobile is-size-6-tablet is-size-4-desktop ">
                            日本を知る
                          </h3>
                          <p className="is-size-7-mobile is-size-6-tablet is-size-6-desktop ">
                            名古屋大学には１２００人を超える留学生がいます。
                            日本人はなぜそんなに漫画が好きなの？」、「地下鉄で眠っている人が多いのはなぜ？」留学生は日本に対するさまざまな疑問を持っています。
                            この授業では、そのような疑問を留学生から引き出し、その答えを留学生と在校生が一緒に考えることで、日本に対する理解や相互の理解を深めます。
                          </p>
                          <li>
                            <StyledLink
                              to="/topics/topics3/topics3_ukiba"
                              className="has-text-weight-demibold"
                            >
                              浮葉先生へのインタビュー
                            </StyledLink>
                          </li>
                        </div>
                        <div className="column is-5   image  ">
                          <img
                            src={withPrefix(
                              "/img/topics/topics3/thumbnails/home_ukiba.jpg"
                            )}
                            alt="topics3_home_u"
                          />
                        </div>
                      </div>
                    </div>
                    {/*mobile tablet size(~1023)*/}
                    <div className="column is-hidden-desktop is-mobile is-full">
                      <div className="columns  is-mobile is-multiline">
                        <div className="column is-full">
                          <h1 className="   title is-size-5-mobile is-size-3-tablet  ">
                            留学生と日本
                            <br />
                            ～異文化を通しての日本理解～
                          </h1>
                          <h2 className=" subtitle has-text-weight-light  is-size-6-mobile is-size-4-tablet">
                            浮葉正親
                            <span className="is-size-7-mobile is-size-5-tablet ">
                              准教授
                            </span>{" "}
                            留学生センター
                          </h2>
                        </div>
                        <div className="column is-2 is-paddingless"></div>
                        <div className="column  is-8 image is-paddingless ">
                          <img
                            src={withPrefix(
                              "/img/topics/topics3/thumbnails/home_ukiba.jpg"
                            )}
                            alt="topics3_home_u_m"
                          />
                        </div>
                        <div className="column is-2 is-paddingless"></div>
                        <div className="column  is-full">
                          <h3 className="   is-marginless  is-size-6-mobile is-size-4-tablet has-text-weight-bold">
                            日本を知る
                          </h3>
                          <p className="is-size-7-mobile is-size-6-tablet">
                            名古屋大学には１２００人を超える留学生がいます。
                            日本人はなぜそんなに漫画が好きなの？」、「地下鉄で眠っている人が多いのはなぜ？」留学生は日本に対するさまざまな疑問を持っています。
                            この授業では、そのような疑問を留学生から引き出し、その答えを留学生と在校生が一緒に考えることで、日本に対する理解や相互の理解を深めます。
                          </p>
                          <li>
                            <StyledLink
                              to="/topics/topics3/topics3_ukiba"
                              className="has-text-weight-demibold"
                            >
                              浮葉先生へのインタビュー
                            </StyledLink>
                          </li>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </nav>
            </Link>
          </div>

          <div className="content">
            <Link to="../../../courses/0148-国内実地研修-2011/">
              <nav className="panel">
                <a className="panel-block " href="# ">
                  <div
                    className="columns is-full is-multiline is-mobile"
                    href="# "
                  >
                    {/* ↑整い次第新日本語版のリンクに変更せよ aタグのhref属ではなくGatsbyのリンクタグを使用すること！*/}
                    {/* desktop,widescreen,fullhd size(1024~) */}
                    <div className="column is-hidden-touch is-full">
                      <div className="columns is-vcentered">
                        <div className="column  is-7  ">
                          <h1 className="   title is-size-4-mobile is-size-2-tablet  is-size-2-desktop ">
                            国内実地研修
                          </h1>
                          <h2 className=" subtitle has-text-weight-light  is-size-5-mobile is-size-3-tablet is-size-3-desktop ">
                            佐藤豊
                            <span className="is-size-6-mobile is-size-4-tablet is-size-4-desktop ">
                              准教授
                            </span>{" "}
                            生命農学研究科
                          </h2>
                          <p></p>
                          <h3 className="  has-text-weight-bold is-size-6-mobile is-size-6-tablet is-size-4-desktop ">
                            いざ、農業の世界へ
                          </h3>
                          <p className="is-size-7-mobile is-size-6-tablet is-size-6-desktop ">
                            何気なく食べている野菜、肉、お米。何気なく飲んでいる牛乳、お茶。それらがどこからどのようにして私たちのもとへ届くのか、考えたことがありますか。
                            この授業では私たちの生活を支える農業を実際に体験することで、現場の新鮮な知識を身につけることができます。
                            また、学生が主体的に行動するため、研修を進路選択に活かせます。
                          </p>
                          <li>
                            <StyledLink
                              to="/topics/topics3/topics3_sato"
                              className="has-text-weight-demibold"
                            >
                              佐藤先生へのインタビュー
                            </StyledLink>
                          </li>
                        </div>
                        <div className="column is-5   image  ">
                          <img
                            src={withPrefix(
                              "/img/topics/topics3/thumbnails/s_satou_kanban.jpg"
                            )}
                            alt="topics3_s_s"
                          />
                        </div>
                      </div>
                    </div>
                    {/*mobile tablet size(~1023)*/}
                    <div className="column is-hidden-desktop is-mobile is-full">
                      <div className="columns  is-mobile is-multiline">
                        <div className="column is-full">
                          <h1 className="   title is-size-5-mobile is-size-3-tablet  ">
                            国内実地研修
                          </h1>
                          <h2 className=" subtitle has-text-weight-light  is-size-6-mobile is-size-4-tablet">
                            佐藤豊
                            <span className="is-size-7-mobile is-size-5-tablet ">
                              准教授
                            </span>{" "}
                            生命農学研究科
                          </h2>
                        </div>
                        <div className="column is-2 is-paddingless"></div>
                        <div className="column  is-8 image is-paddingless ">
                          <img
                            src={withPrefix(
                              "/img/topics/topics3/thumbnails/s_satou_kanban.jpg"
                            )}
                            alt="topics3_s_s_m"
                          />
                        </div>
                        <div className="column is-2 is-paddingless"></div>
                        <div className="column  is-full">
                          <h3 className="   is-marginless  is-size-6-mobile is-size-4-tablet has-text-weight-bold">
                            いざ、農業の世界へ
                          </h3>
                          <p className="is-size-7-mobile is-size-6-tablet">
                            何気なく食べている野菜、肉、お米。何気なく飲んでいる牛乳、お茶。それらがどこからどのようにして私たちのもとへ届くのか、考えたことがありますか。
                            この授業では私たちの生活を支える農業を実際に体験することで、現場の新鮮な知識を身につけることができます。
                            また、学生が主体的に行動するため、研修を進路選択に活かせます。
                          </p>
                          <li>
                            <StyledLink
                              to="/topics/topics3/topics3_sato"
                              className="has-text-weight-demibold"
                            >
                              佐藤先生へのインタビュー
                            </StyledLink>
                          </li>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </nav>
            </Link>
          </div>

          <div className="content">
            <Link to="../../../courses/0025-基礎セミナーボードゲームを究める-2015/">
              <nav className="panel">
                <a className="panel-block " href="# ">
                  <div
                    className="columns is-full is-multiline is-mobile"
                    href="# "
                  >
                    {/* ↑整い次第新日本語版のリンクに変更せよ aタグのhref属ではなくGatsbyのリンクタグを使用すること！*/}
                    {/* desktop,widescreen,fullhd size(1024~) */}
                    <div className="column is-hidden-touch is-full">
                      <div className="columns is-vcentered">
                        <div className="column  is-7  ">
                          <h1 className="   title is-size-4-mobile is-size-2-tablet  is-size-2-desktop ">
                            ボードゲームを究める
                          </h1>
                          <h2 className=" subtitle has-text-weight-light  is-size-5-mobile is-size-3-tablet is-size-3-desktop ">
                            有田隆也
                            <span className="is-size-6-mobile is-size-4-tablet is-size-4-desktop ">
                              教授
                            </span>{" "}
                            情報文化学部
                          </h2>
                          <p></p>
                          <h3 className="  has-text-weight-bold is-size-6-mobile is-size-6-tablet is-size-4-desktop ">
                            考える楽しさ
                          </h3>
                          <p className="is-size-7-mobile is-size-6-tablet is-size-6-desktop ">
                            ゲームに勝つためには、プレイヤー間の駆け引きに想像を膨らませて、戦略を練るということが必要となります。
                            この授業では普段触れることのない海外のボードゲームを取り上げ、実際にプレイし、勝つための戦略を考え、皆で議論します。
                            ボードゲームを通して想像力を鍛え、考えることの楽しさを味わいませんか。
                          </p>
                          <li>
                            <StyledLink
                              to="/topics/topics2/topics2"
                              className="has-text-weight-demibold"
                            >
                              有田先生へのインタビュー(TOPICS No.2へ移動)
                            </StyledLink>
                          </li>
                        </div>
                        <div className="column is-5   image  ">
                          <img
                            src={withPrefix(
                              "/img/topics/topics3/thumbnails/home_arita.jpg"
                            )}
                            alt="topics3_home_a"
                          />
                        </div>
                      </div>
                    </div>
                    {/*mobile tablet size(~1023)*/}
                    <div className="column is-hidden-desktop is-mobile is-full">
                      <div className="columns  is-mobile is-multiline">
                        <div className="column is-full">
                          <h1 className="   title is-size-5-mobile is-size-3-tablet  ">
                            ボードゲームを究める
                          </h1>
                          <h2 className=" subtitle has-text-weight-light  is-size-6-mobile is-size-4-tablet">
                            有田隆也
                            <span className="is-size-7-mobile is-size-5-tablet ">
                              教授
                            </span>{" "}
                            情報文化学部
                          </h2>
                        </div>
                        <div className="column is-2 is-paddingless"></div>
                        <div className="column  is-8 image is-paddingless ">
                          <img
                            src={withPrefix(
                              "/img/topics/topics3/thumbnails/home_arita.jpg"
                            )}
                            alt="topics3_home_a_m"
                          />
                        </div>
                        <div className="column is-2 is-paddingless"></div>
                        <div className="column  is-full">
                          <h3 className="   is-marginless  is-size-6-mobile is-size-4-tablet has-text-weight-bold">
                            考える楽しさ
                          </h3>
                          <p className="is-size-7-mobile is-size-6-tablet">
                            ゲームに勝つためには、プレイヤー間の駆け引きに想像を膨らませて、戦略を練るということが必要となります。
                            この授業では普段触れることのない海外のボードゲームを取り上げ、実際にプレイし、勝つための戦略を考え、皆で議論します。
                            ボードゲームを通して想像力を鍛え、考えることの楽しさを味わいませんか。
                          </p>
                          <li>
                            <StyledLink
                              to="/topics/topics2/topics2"
                              className="has-text-weight-demibold"
                            >
                              有田先生へのインタビュー(TOPICS No.2へ移動)
                            </StyledLink>
                          </li>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </nav>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

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

const StyledLink = styled(Link)`
  color: black;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: black;
  }
`;

export default Topics3;
