import React from "react";
import { Link, withPrefix } from "gatsby";
import styled from "styled-components";

import Layout from "@common/Layout/Layout";
import HelmetForOGP from "@common/Helmet/HelmetForOGP";

const topics11_kukita = () => {
  // const { count } = props;
  return (
    <Layout>
      <HelmetForOGP
        title={"久木田研究室-久木田先生インタビュー"}
        category={"Topics"}
        image={`https://ocw.nagoya-u.jp${withPrefix(
          "/img/topics/topics11/top/TOPICS11_kanban_20220414.png"
        )}`}
      />
      <div className="columns">
        <div className="container column is-11-desktop">
          <Videoframe>
            <VideoframeImg>
              <img
                src={withPrefix("/img/topics/topics11/articles/tv_kukita.svg")}
                alt=""
              />
            </VideoframeImg>
            <Movie>
              <Moviecontents
                src="https://nuvideo.media.nagoya-u.ac.jp/embed/f50699e428de70c63ed66bc39c9d1676c420b3e2"
                scrolling="no"
                frameBorder={0}
              />
            </Movie>
          </Videoframe>

          <section className="columns">
            <div className="container column is-10-desktop mx-2 is-mobile">
              <TitleKukita className="has-text-weight-bold">
                久木田先生インタビュー
              </TitleKukita>
              <div className="content">
                <p className="has-text-weight-semibold">
                  <br />
                  技術哲学・技術倫理を研究されている久木田先生に以下のことをお聞きしました。
                  <br />
                  ①　久木田先生の研究内容について
                  <br />
                  ②　戸田山・久木田研究室の魅力とは
                  <br />
                  ③　どのような人が研究室に向いているか
                  <br />
                  ④　研究室の卒業生の主な進路について
                  <br />
                  ⑤　高校生に向けて一言
                  <br />
                </p>
              </div>

              <Q className="is-size-5-touch is-size-4-desktop has-text-weight-semibold">
                久木田先生のご研究内容は？
              </Q>
              <Answer>
                <Postitwrap className="is-size-5-touch is-size-4-desktop">
                  <Postit className="has-text-weight-semibold">
                    ロボットや人工知能の倫理について研究しています。
                  </Postit>
                </Postitwrap>
              </Answer>
              <Answer>
                　もともと興味があったのは言語哲学という分野でした。物理現象としては音の羅列である言葉が意味を持つのはどういうことか、といったことに興味がありました。そこから論理学に関心が移り、バートランド・ラッセルの論理学思想などを研究していましたが、現在はロボットの倫理・人工知能の倫理をやっています。ロボットに倫理的判断をさせることが私たち人間にどのような影響を与えるのか、倫理を機械に持たせるとはどういうことなのか、などです。人間の心や倫理は機械で作るという観点から、倫理や道徳とは何かということを研究しています。また、それ以外に情報倫理という分野についても研究をしています。情報は何かということを考えつつ、私たちが情報技術とどのように付き合うべきかを考えています。ゼミ生については、数学の哲学や美学、情報技術やロボット関係を研究している人もおり、基本的には何をやっても良いとなっています。ゼミでは情報の哲学や数学の哲学、人工知能などをやっています。
              </Answer>

              <Q className="is-size-5-touch is-size-4-desktop has-text-weight-semibold">
                戸田山・久木田研究室の魅力とは
              </Q>
              <Answer>
                <Postitwrap className="is-size-5-touch is-size-4-desktop">
                  <Postit className="has-text-weight-semibold">
                    興味を持ったことをなんでもやっていいこと！
                  </Postit>
                </Postitwrap>
              </Answer>
              <Answer>
                　基本的に「哲学」というのは、科学哲学、知識の哲学、情報の哲学、心の哲学、論理学の哲学、数学の哲学、ロボットの哲学、といった具合に「～の哲学」となっています。そのため哲学という名のつくものであれば、一つのものに限らず、幅広く学ぶことができます。また教員も二人体制なので、支援の体制も整っています。
              </Answer>

              <Q className="is-size-5-touch is-size-4-desktop has-text-weight-semibold">
                研究室はどのような人に向いていますか？
              </Q>
              <Answer>
                <Postitwrap className="is-size-5-touch is-size-4-desktop">
                  <Postit className="has-text-weight-semibold">
                    主体的に自分の興味を追求できる人！
                  </Postit>
                </Postitwrap>
              </Answer>
              <Answer>
                　上記の通り興味をもったことはなんでもできる分、こちらから「こういうことをやったら？」とは言わないので、主体的に自分の興味を追求できる人が向いています。あとは地道に色々調べられる人の方がいいとは思います。まずはしっかり色々調べて、まとめて考えられる人、柔軟に人と対話をしながら考えを形成できる人に向いていると思います。
              </Answer>

              <Q className="is-size-5-touch is-size-4-desktop has-text-weight-semibold">
                高校生に向けて一言お願いします。
              </Q>
              <Answer>
                <Postitwrap className="is-size-5-touch is-size-4-desktop">
                  <Postit className="has-text-weight-semibold">
                    柔軟な思考と、世の中を良い方向にもっていこうという態度を持つべし。
                  </Postit>
                </Postitwrap>
              </Answer>
              <Answer>
                　現代は社会や経済や政治やテクノロジーが目まぐるしく変わり、先がどうなるかわからなくなっています。今自分が勉強していることも将来役に立たなくなるかもしれません。そうした中で、今までの「良い人生のモデル」も通用しなくなってきています。そうした時には、やはり柔軟性や、自分から世の中を良い方向にもっていくという態度が必要になってくると思います。また、現代は世の中の差別や対立があからさまになっており、自由や民主化といった理念も脅かされています。若い人にとっても大変な時代だとは思いますが、一緒に頑張っていきましょう。
              </Answer>

              <Q className="is-size-5-touch is-size-4-desktop has-text-weight-semibold">
                卒業生の主な進路は？
              </Q>
              <Answer>
                <Postitwrap className="is-size-5-touch is-size-4-desktop">
                  <Postit className="has-text-weight-semibold">
                    企業への就職が多い。
                  </Postit>
                </Postitwrap>
              </Answer>
              <Answer>
                職種は色々ですが、ほぼ全員企業に就職しています。大学院に行く人はほとんどいません。
              </Answer>
            </div>
          </section>

          <section className="section columns is-centered">
            <div className="container column">
              <div className="content">
                <Arrow className="columns">他のインタビューを見る </Arrow>
                <ul className="column is-12-desktop is-12-touch margin-top-0 has-text-weight-bold">
                  <StyledLink to="/topics/topics11/topics11">
                    ◆TOPICS11　トップへ
                  </StyledLink>
                  <br />
                  <br />
                  ◆戸田山・久木田研究室（社会情報学専攻）
                  <Pagelist>
                    <li>
                      <StyledLink to="/topics/topics11/topics11_kukita_stu">
                        研究室の学生へのインタビュー
                      </StyledLink>
                    </li>
                  </Pagelist>
                  ◆武田研究室（知能システム学専攻）
                  <Pagelist>
                    <li>
                      <StyledLink to="/topics/topics11/topics11_takeda">
                        武田先生へのインタビュー
                      </StyledLink>
                    </li>
                    <li>
                      <StyledLink to="/topics/topics11/topics11_ishiguro">
                        石黒先生へのインタビュー
                      </StyledLink>
                    </li>
                    <li>
                      <StyledLink to="/topics/topics11/topics11_takeuchi">
                        竹内先生へのインタビュー
                      </StyledLink>
                    </li>
                  </Pagelist>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};
export default topics11_kukita;

/*タイトル装飾 ここから*/
const TitleKukita = styled.div`
  font-size: 27px;
  padding: 10px;
  position: relative;
  margin-left: 17px;
  border-left: solid 5px #e18862;
  &:before {
    content: "";
    height: 100%;
    position: absolute;
    bottom: 0px;
    left: -22px;
    border-left: solid 12px #e18862;
  }
  &:after {
    content: "";
    width: 100%;
    width: calc(100% + 22px);
    position: absolute;
    bottom: 0px;
    left: -22px;
    border-bottom: solid 5px #e18862;
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
  background-color: #e18862;
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
    border-top: solid 2px black;
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
    border-bottom: solid 20px #e18862;
  }
  &:after {
    position: absolute;
    content: "";
    bottom: -3px;
    left: 10px;
    width: 100%;
    border-bottom: solid 5px #e18862;
  }
`;
/*矢印型見出し　終わり*/

/*動画部分　はじめ*/

const Videoframe = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  padding: 4.25% 5.2% 22% 5.2%;
`;

const VideoframeImg = styled.div`
  position: absolute;
  top: 0;
  left: 5%;
  width: 90%;
  height: auto;
`;

const Movie = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  &:before {
    content: "";
    display: block;
    padding-top: 56.25%;
  }
`;

const Moviecontents = styled.iframe`
  position: absolute;
  top: 0;
  left: 5%;
  width: 90%;
  height: 90%;
`;

/*動画部分　終わり*/

const StyledLink = styled(Link)`
  color: black;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: black;
  }
`;

const Answer = styled.div`
  position: relative;
  padding: 10px;
`;

const Pagelist = styled.div`
  position: relative;
  padding-left: 36px;
`;
