import React from "react";
import { Link, withPrefix } from "gatsby";
import styled from "styled-components";

import Layout from "@common/Layout/Layout";
import HelmetForOGP from "@common/Helmet/HelmetForOGP";

const topics11_kukita_stu = () => {
  // const { count } = props;
  return (
    <Layout>
      <HelmetForOGP
        title={"久木田研究室-学生インタビュー"}
        category={"Topics"}
        image={`https://ocw.nagoya-u.jp${withPrefix(
          "/img/topics/topics11/top/TOPICS11_kanban_20220414.png"
        )}`}
      />
      <div className="columns">
        <div className="container column is-11-desktop">
          <Videoframe style={{ margin: "auto" }}>
            <VideoframeImg>
              <img
                src={withPrefix("/img/topics/topics11/articles/tv_kukita.svg")}
                alt=""
              />
            </VideoframeImg>
            <Movie>
              <Moviecontents
                src={withPrefix(
                  "/img/topics/topics11/articles/kukita_students.png"
                )}
                alt=""
              />
            </Movie>
          </Videoframe>

          <section className="columns">
            <div className="container column is-10-desktop mx-2 is-mobile">
              <TitleKukita className="has-text-weight-bold">
                学生インタビュー
              </TitleKukita>
              <div className="content">
                <p className="has-text-weight-semibold">
                  <br />
                  ゼミの様子をより詳しく知るために、4年生の3名の学生の方々に以下についてインタビューを行いました。
                  <br />
                  ①　何を研究しているか
                  <br />
                  ②　久木田研究室を選んだ理由
                  <br />
                  ③　久木田研究室の特徴とは
                  <br />
                  ④　高校生に向けて一言
                  <br />
                </p>
              </div>

              <div className="content">
                <Q className="is-size-5-touch is-size-4-desktop has-text-weight-semibold">
                  久木田研究室でのご研究内容は？
                </Q>
                <div className="column ">
                  <p>
                    <text className="has-text-weight-bold">Oさん</text>
                    ：主にデザイン分野について勉強しています。その中でも特にユーザーインターフェースに関わることをやっており、卒論ではOS（オペレーティング・システム）のGUI（Graphical
                    User
                    Interface）についての研究を行うつもりです。GUIというのはマウス操作などの目に見えるものを指し、その対となるCUI（Character
                    User
                    Interface）は、キーボード入力などのコマンド入力によるものを指します。
                    <br />
                    <br />
                    <text className="has-text-weight-bold">Iさん</text>
                    ：私はコミュニケーションエラーについて研究しており、特に医療従事者間のコミュニケーションエラーが関心分野です。ここでのコミュニケーションエラーとは、医療に関わる人たちの間で適切なコミュニケーションが行われなかったり、誤伝達がおきて医療事故が発生するといったことを指します。何をコミュニケーションエラーとするかの定義や、その対策などを研究しています。
                    <br />
                    <br />
                    <text className="has-text-weight-bold">Tさん</text>
                    ：私は人工知能分野においての日本の強みについて研究しています。人口知能の定義を調べたり、また人工知能に関する日本の現状を調べたりしています。
                    <br />
                  </p>
                </div>
              </div>

              <div className="content">
                <Q className="is-size-5-touch is-size-4-desktop has-text-weight-semibold">
                  久木田研究室を選んだ理由は？
                </Q>
                <div className="column ">
                  <p>
                    　<text className="has-text-weight-bold">Oさん</text>
                    ：一番の理由として久木田研究室がなんでもやっていることがあります。久木田研究室では主に技術と社会のかかわりがテーマになっていますが、私もそこに興味がありました。
                    <br />
                    <br />　<text className="has-text-weight-bold">Iさん</text>
                    ：私もなんでもできるということを理由に入りました。他の研究室では、ある程度『この枠の範囲でやる』ということが決め
                    られていますが、久木田研究室ではやりたいことを自由にやれます。
                    <br />
                    <br />　<text className="has-text-weight-bold">Tさん</text>
                    ：私は人工知能や技術について研究したかったから、というのがあります。また、その人工知能分野の中でもとりわけ久木田
                    研究室は自由度が高く、それも久木田研を選んだ理由です。
                    <br />
                  </p>
                </div>
              </div>

              <div className="content">
                <Q className="is-size-5-touch is-size-4-desktop has-text-weight-semibold">
                  久木田研究室の特徴は？
                </Q>
                <div className="column">
                  <p>
                    <text className="has-text-weight-bold">Oさん</text>
                    ：やっぱりテーマを自由に選んで、なんでもできることです。
                    <br />
                    <br />
                    <text className="has-text-weight-bold">Iさん・Tさん</text>
                    ：同じく笑
                    <br />
                  </p>
                </div>
              </div>

              <div className="content">
                <Q className="is-size-5-touch is-size-4-desktop has-text-weight-semibold">
                  高校生に向けて一言お願いします。
                </Q>
                <div className="column">
                  <p>
                    <text className="has-text-weight-bold">Oさん</text>
                    ：情報学部の魅力として、大学に入ってから自分の興味のある分野を探して選べるということがあります。それは大きな魅力ではあるのですが、その分やりたいことを自分で探さないと後で困ってしまいます。そこに注意です。
                    <br />
                    <br />
                    <text className="has-text-weight-bold">Iさん</text>
                    ：他の学部では学部を選ぶ時点でできることが限られてきますが、ここでは学部を選んだ後も好きがのことができます。また、情報学部は理系と混じっているため、他分野の型とも交流でき、自分とは違った意見に接することができます。そこが大きな魅力です。
                    <br />
                    <br />
                    <text className="has-text-weight-bold">Tさん</text>
                    ：情報学部（人間・社会情報学科）は文系で情報をやりたい人には特におすすめの学部です。『文系だから』という理由で、自分のやりたいことを諦めないでほしいです。あとは、好きなことができる分、やりたいことは自分で探さなければならないため、積極的な態度が求められてきます。
                    <br />
                  </p>
                </div>
              </div>
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
export default topics11_kukita_stu;

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

const Moviecontents = styled.img`
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

const Pagelist = styled.div`
  position: relative;
  padding-left: 36px;
`;
