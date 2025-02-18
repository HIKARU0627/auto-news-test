import React from "react";
import { Link, withPrefix } from "gatsby";
import styled from "styled-components";

import Layout from "@common/Layout/Layout";
import HelmetForOGP from "@common/Helmet/HelmetForOGP";

const Topics6 = () => {
  return (
    <Layout>
      <HelmetForOGP
        title={"ひろがる世界"}
        category={"Topics"}
        image={`https://ocw.nagoya-u.jp${withPrefix(
          "/img/topics/topics6/topics6_1024×576.png"
        )}`}
      />
      <article className="columns">
        <div className="container column is-9-desktop">
          <Kanban
            src={withPrefix("/img/topics/topics6/topics6_4_for_header.png")}
            alt="topics6_header"
          />

          <section
            className="section"
            style={{
              padding: "0.1rem 1rem",
            }}
          >
            <div className="container ">
              <Subtitle className="has-text-weight-bold is-size-4-widescreen has-text-lefted">
                私たちが生きている「世界」新たな知識を得ることで、景色は変わり、視野はひろがり、より面白いものになります。まだ見ぬ「世界」を見てみませんか？
              </Subtitle>
              <div
                className="content"
                style={{
                  border: "1rem solid #ff3366",
                  borderRadius: "10px",
                }}
              >
                <Link to="../../../courses/0288-国際開発学-2011/">
                  <nav className="panel is-primary ">
                    <a className="panel-block " href="# ">
                      {/* <button className="  button is-fullwidth is-center is-outlined   "> */}
                      <div className="columns is-full is-multiline is-mobile">
                        {/* ↑整い次第新日本語版のリンクに変更せよ aタグのhref属ではなくGatsbyのリンクタグを使用すること ！*/}
                        {/* <link to="  ">*/}
                        {/* desktop,widescreen,fullhd size(1024~) */}
                        <div className="column is-hidden-touch is-full">
                          <div className="columns is-vcentered">
                            <div className="column  is-7">
                              <img
                                src={withPrefix(
                                  "/img/topics/topics6/images_ja_topics6_title01.png"
                                )}
                                alt="topics6_title01"
                              />
                              <h3
                                className="  has-text-weight-bold is-size-6-mobile is-size-6-tablet is-size-4-desktop"
                                style={{
                                  color: "#ff3366",
                                }}
                              >
                                途上国の現実を見る
                              </h3>
                              <p
                                className="is-size-7-mobile is-size-6-tablet is-size-6-desktop"
                                style={{
                                  color: "#ff3366",
                                }}
                              >
                                私たちが日本で生活をしていて、食料やライフラインに困ることはないでしょう。しかし、他の国には、貧困や飢餓にあえぐ人々の姿や、ただ水を飲むためだけに何時間も歩く光景があります。この講義では、途上国が抱える問題について考えていきます。学生たちは、ビジュアル教材を通して、問題の背景を理解することができます。日本とは違う世界を、少し考えてみませんか？
                              </p>
                            </div>
                            <div className="column is-5   image  ">
                              <img
                                src={withPrefix(
                                  "/img/topics/topics6/images_ja_topics6_nisikawa_kanban.GIF"
                                )}
                                alt="topics6_nisikawa"
                              />
                            </div>
                          </div>
                        </div>
                        {/*mobile tablet size(~1023)*/}
                        <div className="column is-hidden-desktop is-mobile is-full">
                          <div className="columns  is-mobile is-multiline">
                            <div className="column is-full">
                              <img
                                src={withPrefix(
                                  "/img/topics/topics6/images_ja_topics6_title01.png"
                                )}
                                alt="topics6_0title01"
                              />
                            </div>
                            <div className="column is-2 is-paddingless"></div>
                            <div className="column  is-8 image is-paddingless ">
                              <img
                                src={withPrefix(
                                  "/img/topics/topics6/images_ja_topics6_nisikawa_kanban.GIF"
                                )}
                                alt="topics6_0nisikawa"
                              />
                            </div>
                            <div className="column is-2 is-paddingless"></div>
                            <div className="column  is-full">
                              <h3
                                className="   is-marginless  is-size-6-mobile is-size-4-tablet has-text-weight-bold"
                                style={{
                                  color: "#ff3366",
                                }}
                              >
                                途上国の現実を見る
                              </h3>
                              <p
                                className="is-size-7-mobile is-size-6-tablet"
                                style={{
                                  color: "#ff3366",
                                }}
                              >
                                私たちが日本で生活をしていて、食料やライフラインに困ることはないでしょう。しかし、他の国には、貧困や飢餓にあえぐ人々の姿や、ただ水を飲むためだけに何時間も歩く光景があります。この講義では、途上国が抱える問題について考えていきます。学生たちは、ビジュアル教材を通して、問題の背景を理解することができます。日本とは違う世界を、少し考えてみませんか？
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </nav>
                </Link>
              </div>

              <div
                className="content"
                style={{
                  border: "1rem solid #ff9900",
                  borderRadius: "10px",
                }}
              >
                <Link to="../../../courses/0138-中級フランス語2-2008/">
                  <nav className="panel">
                    <a className="panel-block " href="# ">
                      <div className="columns is-full is-multiline is-mobile">
                        {/* ↑整い次第新日本語版のリンクに変更せよ aタグのhref属ではなくGatsbyのリンクタグを使用すること！/}
                    {/* desktop,widescreen,fullhd size(1024~) */}
                        <div className="column is-hidden-touch is-full">
                          <div className="columns is-vcentered">
                            <div className="column  is-7  ">
                              <img
                                src={withPrefix(
                                  "/img/topics/topics6/images_ja_topics6_title02.png"
                                )}
                                alt="topics6_title02"
                              />
                              <h3
                                className="  has-text-weight-bold is-size-6-mobile is-size-6-tablet is-size-4-desktop"
                                style={{
                                  color: "#ff9900",
                                }}
                              >
                                フランス語を楽しく学ぶ
                              </h3>
                              <p
                                className="is-size-7-mobile is-size-6-tablet is-size-6-desktop"
                                style={{
                                  color: "#ff9900",
                                }}
                              >
                                日本語だけでなく、外国語も理解できれば、より広く世界を知ることができます。しかし、外国語の勉強は難しいし退屈だと思っている方も多くいるのではないでしょうか？この授業では教科書の購読だけでなく、劇を演じたり、歌を歌ったりしながら自然とフランス語が身につくだけでなく、フランスの文化についても学ぶことができます。固定観念は捨て、一度フランス語の世界を見てみませんか？
                              </p>
                            </div>
                            <div className="column is-5   image  ">
                              <img
                                src={withPrefix(
                                  "/img/topics/topics6/images_ja_topics6_okuda_kanban.jpg"
                                )}
                                alt="topics6_okuda_kanban"
                              />
                            </div>
                          </div>
                        </div>
                        {/*mobile tablet size(~1023)*/}
                        <div className="column is-hidden-desktop is-mobile is-full">
                          <div className="columns  is-mobile is-multiline">
                            <div className="column is-full">
                              <img
                                src={withPrefix(
                                  "/img/topics/topics6/images_ja_topics6_title02.png"
                                )}
                                alt="topics6_title02_m"
                              />
                            </div>
                            <div className="column is-2 is-paddingless"></div>
                            <div className="column  is-8 image is-paddingless ">
                              <img
                                src={withPrefix(
                                  "/img/topics/topics6/images_ja_topics6_okuda_kanban.jpg"
                                )}
                                alt="topics6_okuda_kanban_m"
                              />
                            </div>
                            <div className="column is-2 is-paddingless"></div>
                            <div className="column  is-full">
                              <h3
                                className="is-marginless  is-size-6-mobile is-size-4-tablet has-text-weight-bold"
                                style={{
                                  color: "#ff9900",
                                }}
                              >
                                フランス語を楽しく学ぶ
                              </h3>
                              <p
                                className="is-size-7-mobile is-size-6-tablet"
                                style={{
                                  color: "#ff9900",
                                }}
                              >
                                日本語だけでなく、外国語も理解できれば、より広く世界を知ることができます。しかし、外国語の勉強は難しいし退屈だと思っている方も多くいるのではないでしょうか？この授業では教科書の購読だけでなく、劇を演じたり、歌を歌ったりしながら自然とフランス語が身につくだけでなく、フランスの文化についても学ぶことができます。固定観念は捨て、一度フランス語の世界を見てみませんか？
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </nav>
                </Link>
              </div>

              <div
                className="content"
                style={{
                  border: "1rem solid #3366cc",
                  borderRadius: "10px",
                }}
              >
                <Link to="../../../courses/0372-映像研究の方法I-2012/">
                  <nav className="panel">
                    <a className="panel-block " href="# ">
                      <div className="columns is-full is-multiline is-mobile">
                        {/* ↑整い次第新日本語版のリンクに変更せよ aタグのhref属ではなくGatsbyのリンクタグを使用すること！*/}
                        {/* desktop,widescreen,fullhd size(1024~) */}
                        <div className="column is-hidden-touch is-full">
                          <div className="columns is-vcentered">
                            <div className="column  is-7  ">
                              <img
                                src={withPrefix(
                                  "/img/topics/topics6/images_ja_topics6_title03.png"
                                )}
                                alt="topics6_title03"
                              />
                              <h3 className="  has-text-weight-bold is-size-6-mobile is-size-6-tablet is-size-4-desktop has-text-link">
                                映像を読む
                              </h3>
                              <p className="is-size-7-mobile is-size-6-tablet is-size-6-desktop has-text-link">
                                「作者の意図を考える」というのは、文学作品に限ったことではありません。たとえば、映像作品に示された人物の表情や動作、風景や音、更にはカメラワーク、映像処理といった要素をひとつひとつ丁寧に読み解けば、きっと、新たな発見があり、作品をより深く楽しめることでしょう。この授業では、自らの分析を文章にまとめ、批評しあうことで、あらゆる分野に対する豊な眼と思考を養うことができます。映像研究からあなたの世界を広げてみましょう。
                              </p>
                            </div>
                            <div className="column is-5   image  ">
                              <img
                                src={withPrefix(
                                  "/img/topics/topics6/images_ja_topics6_fuziki_kanban.png"
                                )}
                                alt="topics6_fuziki_kanban"
                              />
                            </div>
                          </div>
                        </div>
                        {/*mobile tablet size(~1023)*/}
                        <div className="column is-hidden-desktop is-mobile is-full">
                          <div className="columns  is-mobile is-multiline">
                            <div className="column is-full">
                              <img
                                src={withPrefix(
                                  "/img/topics/topics6/images_ja_topics6_title03.png"
                                )}
                                alt="topics6_title03_m"
                              />
                            </div>
                            <div className="column is-2 is-paddingless"></div>
                            <div className="column  is-8 image is-paddingless ">
                              <img
                                src={withPrefix(
                                  "/img/topics/topics6/images_ja_topics6_fuziki_kanban.png"
                                )}
                                alt="topics6_fuzuki_kanban_m"
                              />
                            </div>
                            <div className="column is-2 is-paddingless"></div>
                            <div className="column  is-full">
                              <h3 className="   is-marginless  is-size-6-mobile is-size-4-tablet has-text-weight-bold has-text-link">
                                映像を読む
                              </h3>
                              <p className="is-size-7-mobile is-size-6-tablet has-text-link">
                                「作者の意図を考える」というのは、文学作品に限ったことではありません。たとえば、映像作品に示された人物の表情や動作、風景や音、更にはカメラワーク、映像処理といった要素をひとつひとつ丁寧に読み解けば、きっと、新たな発見があり、作品をより深く楽しめることでしょう。この授業では、自らの分析を文章にまとめ、批評しあうことで、あらゆる分野に対する豊な眼と思考を養うことができます。映像研究からあなたの世界を広げてみましょう。
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </nav>
                </Link>
              </div>

              <div
                className="content"
                style={{
                  border: "1rem solid #6699cc",
                  borderRadius: "10px",
                }}
              >
                <Link to="../../../courses/0195-世界の中の日本語-2009/">
                  <nav className="panel">
                    <a className="panel-block " href="# ">
                      <div className="columns is-full is-multiline is-mobile">
                        {/* ↑整い次第新日本語版のリンクに変更せよ aタグのhref属ではなくGatsbyのリンクタグを使用すること！*/}
                        {/* desktop,widescreen,fullhd size(1024~) */}
                        <div className="column is-hidden-touch is-full">
                          <div className="columns is-vcentered">
                            <div className="column  is-7  ">
                              <img
                                src={withPrefix(
                                  "/img/topics/topics6/images_ja_topics6_title04.png"
                                )}
                                alt="topics6_title04"
                              />
                              <h3
                                className="  has-text-weight-bold is-size-6-mobile is-size-6-tablet is-size-4-desktop"
                                style={{
                                  color: "#6699cc",
                                }}
                              >
                                「比較」で見つかる新たな発見
                              </h3>
                              <p
                                className="is-size-7-mobile is-size-6-tablet is-size-6-desktop"
                                style={{
                                  color: "#6699cc",
                                }}
                              >
                                皆さんは、日本語が世界の言語の中でどのようなものとして位置づけられているか、気になったことはありませんか？日本語は、様々な言語の中において特殊だと思う人もいるかもしれませんが、むしろ言語的特徴としては「普通」の言語といえます。多言語との比較を通じて日本語について理解を広げてみましょう。
                              </p>
                            </div>
                            <div className="column is-5   image  ">
                              <img
                                src={withPrefix(
                                  "/img/topics/topics6/images_ja_topics6_machida_kanban.png"
                                )}
                                alt="topics6_machida_kanban"
                              />
                            </div>
                          </div>
                        </div>
                        {/*mobile tablet size(~1023)*/}
                        <div className="column is-hidden-desktop is-mobile is-full">
                          <div className="columns  is-mobile is-multiline">
                            <div className="column is-full">
                              <img
                                src={withPrefix(
                                  "/img/topics/topics6/images_ja_topics6_title04.png"
                                )}
                                alt="topics6_title04_m"
                              />
                            </div>
                            <div className="column is-2 is-paddingless"></div>
                            <div className="column  is-8 image is-paddingless ">
                              <img
                                src={withPrefix(
                                  "/img/topics/topics6/images_ja_topics6_machida_kanban.png"
                                )}
                                alt="topics6_machida_kanban_m"
                              />
                            </div>
                            <div className="column is-2 is-paddingless"></div>
                            <div className="column  is-full">
                              <h3 className="   is-marginless  is-size-6-mobile is-size-4-tablet has-text-weight-bold has-text-info">
                                「比較」で見つかる新たな発見
                              </h3>
                              <p className="is-size-7-mobile is-size-6-tablet has-text-info">
                                皆さんは、日本語が世界の言語の中でどのようなものとして位置づけられているか、気になったことはありませんか？日本語は、様々な言語の中において特殊だと思う人もいるかもしれませんが、むしろ言語的特徴としては「普通」の言語といえます。多言語との比較を通じて日本語について理解を広げてみましょう。
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </nav>
                </Link>
              </div>

              <div
                className="content"
                style={{
                  border: "1rem solid #99ff66",
                  borderRadius: "10px",
                }}
              >
                <Link to="../../../courses/0154-海外実地研修-2011/">
                  <nav className="panel">
                    <a className="panel-block " href="# ">
                      <div className="columns is-full is-multiline is-mobile">
                        {/* ↑整い次第新日本語版のリンクに変更せよ aタグのhref属ではなくGatsbyのリンクタグを使用すること！*/}
                        {/* desktop,widescreen,fullhd size(1024~) */}
                        <div className="column is-hidden-touch is-full">
                          <div className="columns is-vcentered">
                            <div className="column  is-7  ">
                              <img
                                src={withPrefix(
                                  "/img/topics/topics6/images_ja_topics6_title05.png"
                                )}
                                alt="topics6_title05"
                              />
                              <h3 className="  has-text-weight-bold is-size-6-mobile is-size-6-tablet is-size-4-desktop has-text-success">
                                農業を「見」「聞き」し考える
                              </h3>
                              <p className="is-size-7-mobile is-size-6-tablet is-size-6-desktop has-text-success">
                                この授業ではカンボジアの２つの農村を訪れ、どのような農業が行われているか、その問題点は何かについて、現地の農家の話や農村の様子等から学び考えます。カンボジアは、文化的背景も経済状況も日本とはかなり異なりますが、このような体験は日本、更には世界の農業の在り方について考える上で大きな足掛かりとなるでしょう。文字通り、未開の地へと自ら足を踏み入れることでしか感じること、学ぶことのできないものが、ここにはあります。
                              </p>
                            </div>
                            <div className="column is-5   image  ">
                              <img
                                src={withPrefix(
                                  "/img/topics/topics6/images_ja_topics6_kaigai_kanban.jpg"
                                )}
                                alt="topics6_kaigai_kanban"
                              />
                            </div>
                          </div>
                        </div>
                        {/*mobile tablet size(~1023)*/}
                        <div className="column is-hidden-desktop is-mobile is-full">
                          <div className="columns  is-mobile is-multiline">
                            <div className="column is-full">
                              <img
                                src={withPrefix(
                                  "/img/topics/topics6/images_ja_topics6_title05.png"
                                )}
                                alt="topics6_title05_m"
                              />
                            </div>
                            <div className="column is-2 is-paddingless"></div>
                            <div className="column  is-8 image is-paddingless ">
                              <img
                                src={withPrefix(
                                  "/img/topics/topics6/images_ja_topics6_kaigai_kanban.jpg"
                                )}
                                alt="topics6_kaigai_kanban_m"
                              />
                            </div>
                            <div className="column is-2 is-paddingless"></div>
                            <div className="column  is-full">
                              <h3 className="   is-marginless  is-size-6-mobile is-size-4-tablet has-text-weight-bold has-text-success">
                                農業を「見」「聞き」し考える
                              </h3>
                              <p className="is-size-7-mobile is-size-6-tablet has-text-success">
                                この授業ではカンボジアの２つの農村を訪れ、どのような農業が行われているか、その問題点は何かについて、現地の農家の話や農村の様子等から学び考えます。カンボジアは、文化的背景も経済状況も日本とはかなり異なりますが、このような体験は日本、更には世界の農業の在り方について考える上で大きな足掛かりとなるでしょう。文字通り、未開の地へと自ら足を踏み入れることでしか感じること、学ぶことのできないものが、ここにはあります。
                              </p>
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
        </div>
      </article>
    </Layout>
  );
};

export default Topics6;

const Subtitle = styled.h3`
  color: #8eb8ff;
  line-height: 2;
`;

const Kanban = styled.img`
  width: 100%;
`;
