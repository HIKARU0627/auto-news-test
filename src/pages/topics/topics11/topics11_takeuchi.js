import React from "react";
import { Link, withPrefix } from "gatsby";
import styled from "styled-components";

import Layout from "@common/Layout/Layout";
import HelmetForOGP from "@common/Helmet/HelmetForOGP";

const topics11_takeuchi = () => {
  // const { count } = props;
  return (
    <Layout>
      <HelmetForOGP
        title={"武田研究室-竹内先生インタビュー"}
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
                src={withPrefix("/img/topics/topics11/articles/tv_takeda.svg")}
                alt=""
              />
            </VideoframeImg>
            <Movie>
              <Moviecontents
                src="https://nuvideo.media.nagoya-u.ac.jp/embed/1c604970a6bdf3329100b82951b11299c601bfba"
                scrolling="no"
                frameBorder={0}
              />
            </Movie>
          </Videoframe>

          <section className="columns">
            <div className="container column is-10-desktop mx-2 is-mobile">
              <TitleTakeda className="has-text-weight-bold">
                竹内先生インタビュー
              </TitleTakeda>
              <div className="content">
                <p className="has-text-weight-semibold">
                  <br />
                  ロボティクス・自動運転を研究されている竹内先生に以下のことをお聞きしました。
                  <br />
                  ①　竹内先生の研究内容について
                  <br />
                  ②　武田研究室の魅力とは
                  <br />
                  ③　どのような人に研究室に入って欲しいか
                  <br />
                  ④　高校生に向けて一言
                  <br />
                </p>
              </div>

              <Q className="is-size-5-touch is-size-4-desktop has-text-weight-semibold">
                竹内先生のご研究内容は？
              </Q>
              <Answer>
                <Postitwrap className="is-size-5-touch is-size-4-desktop">
                  <Postit className="has-text-weight-semibold">
                    自動で動く機械の「知能」を探求しています！
                  </Postit>
                </Postitwrap>
              </Answer>
              <Answer>
                　私たち人間は「この電車に乗って、どこどこに着く」などの認知・判断が容易にできますが、機械にとってはそうではありません。
                なぜ私たち人間にはそれができるのか、そしてそれをどのようにしてロボットに適用可能かを研究し、いかに効率的かつ安全に自動運転車が目的地に着けるかを探求しています。
                いわばロボットの「知能」にあたる部分の研究になります。
              </Answer>

              <Q className="is-size-5-touch is-size-4-desktop has-text-weight-semibold">
                武田研究室の魅力は？
              </Q>
              <Answer>
                <Postitwrap className="is-size-5-touch is-size-4-desktop">
                  <Postit className="has-text-weight-semibold">
                    幅広い信号処理の研究をしつつ、その背景（理論的仕組み）まで理解できる！
                  </Postit>
                </Postitwrap>
              </Answer>
              <Answer>
                　武田研究室では音声・音響などの音にかかわるものから、車などの行動にかかわるものまで、幅広い情報信号処理を行なっています。そしてそれらは単に「幅が広い」だけでなく、そのバックグラウンドにある理論的仕組みが共通しており、古くから積み重ねられている「音」にかかわる研究の成果を、最新の「自動運転」などの研究に適用することが可能です。またどの分野でも要求される「大量のデータをどう扱うか」に関する能力も武田研究室では培うことができ、様々な分野で活躍することができます。
              </Answer>

              <Q className="is-size-5-touch is-size-4-desktop has-text-weight-semibold">
                どういう学生に入って欲しいですか？
              </Q>
              <Answer>
                <Postitwrap className="is-size-5-touch is-size-4-desktop">
                  <Postit className="has-text-weight-semibold">
                    チャレンジする精神を持っている人たち！
                  </Postit>
                </Postitwrap>
              </Answer>
              <Answer>
                　研究をする上では数学・物理から英語まで色々な能力が必要になってきます。しかしそれだけに限らず、色々なことにチャレンジして、色々な経験を積んでいることも必要です。研究をする上では、社会でどのようなことが求められているか、そしてそれを踏まえて我々はどのようなことをすべきか、そうしたことを考える必要があります。これからは答えのない問題に向き合っていくことになるので、自分で問題を見つけてそれをどうやって解いていくか、またどうやって人に伝えていくかを、自分で発見していく必要があります。枠にはまった人生を送るのではなく、自分で世界を変えてやるぞ！というチャレンジ精神を持った方を歓迎します。
              </Answer>

              <Q className="is-size-5-touch is-size-4-desktop has-text-weight-semibold">
                高校生に向けて一言お願いします。
              </Q>
              <Answer>
                <Postitwrap className="is-size-5-touch is-size-4-desktop">
                  <Postit className="has-text-weight-semibold">
                    自分だけにしかない武器を手に入れよ！
                  </Postit>
                </Postitwrap>
              </Answer>
              <Answer>
                　今は大学に入るために勉強を頑張っているところだと思いますが、そうした基礎学力に加えて、「自分だけにしかできないこと」や「他の人は持っていない経験」を作っていくのが良いと思います。それらの「自分だけの武器」を持っていると、この先大学で研究をしていく上では強いですし、そしてこの社会で生きていく上でも強みになってきます。是非とも、そうした面も伸ばしていけると良いと思います。
              </Answer>
            </div>
          </section>

          <section className="section columns is-centered">
            <div className="container column">
              <div className="content">
                <Arrow className="columns">他のインタビューを見る </Arrow>
                <ul className="column is-12-desktop margin-top-0 has-text-weight-bold">
                  <StyledLink to="/topics/topics11/topics11">
                    ◆TOPICS11　トップへ
                  </StyledLink>
                  <br />
                  <br />
                  ◆戸田山・久木田研究室（社会情報学専攻）
                  <Pagelist className="container">
                    <li>
                      <StyledLink to="/topics/topics11/topics11_kukita">
                        久木田先生へのインタビュー
                      </StyledLink>
                    </li>
                    <li>
                      <StyledLink to="/topics/topics11/topics11_kukita_stu">
                        研究室の学生へのインタビュー
                      </StyledLink>
                    </li>
                  </Pagelist>
                  ◆武田研究室（知能システム学専攻）
                  <Pagelist className="container">
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
export default topics11_takeuchi;

/*タイトル装飾 ここから*/
const TitleTakeda = styled.div`
  font-size: 27px;
  padding: 10px;
  position: relative;
  margin-left: 17px;
  border-left: solid 5px #867aaa;
  &:before {
    content: "";
    height: 100%;
    position: absolute;
    bottom: 0px;
    left: -22px;
    border-left: solid 12px #867aaa;
  }
  &:after {
    content: "";
    width: 100%;
    width: calc(100% + 22px);
    position: absolute;
    bottom: 0px;
    left: -22px;
    border-bottom: solid 5px #867aaa;
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
  background-color: #867aaa;
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
    border-bottom: solid 20px #867aaa;
  }
  &:after {
    position: absolute;
    content: "";
    bottom: -3px;
    left: 10px;
    width: 100%;
    border-bottom: solid 5px #867aaa;
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
