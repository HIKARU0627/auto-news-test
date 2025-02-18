import React from "react";
import { Link, withPrefix } from "gatsby";
import {
  Kanban,
  OuterFrame,
  Talk,
  HeadLine,
  BigNarration,
  ImageFrame,
  Dialogue,
  Face,
  Bubble,
} from "../../../templates/topics/topics13/topics13-style";

import Layout from "@common/Layout/Layout";
import HelmetForOGP from "@common/Helmet/HelmetForOGP";

const topics13_tosho = () => {
  return (
    <Layout>
      <HelmetForOGP
        title={"名大の自習スペースを探れ!!-図書館"}
        category={"Topics"}
        image={`https://ocw.nagoya-u.jp${withPrefix(
          "/img/topics/topics13/top/topics13_kanban.png"
        )}`}
      />
      <OuterFrame>
        <div className="container is-9-desktop">
          <Kanban
            src={withPrefix("/img/topics/topics13/top/topics13-kanban.svg")}
            style={{ verticalAlign: "bottom" }}
          />
          <Talk className="container has-text-weight-medium">
            {/* containerがないと左寄せになる */}

            {/* 第2部 図書館 */}
            <HeadLine style={{ paddingTop: "15px" }}>
              <img
                src={withPrefix("/img/topics/topics13/tosho/headline2.png")}
              ></img>
            </HeadLine>

            <Dialogue nospace>
              <Face
                src={withPrefix("/img/topics/topics13/top/face_nazo.png")}
              />
              <Bubble bubble_color="#669999">
                さあ、着いた。ここに最高の勉強場所があるよ。
              </Bubble>
            </Dialogue>

            <ImageFrame>
              <img
                src={withPrefix("/img/topics/topics13/tosho/tosho01.png")}
                width="100%"
              ></img>
            </ImageFrame>

            <Dialogue>
              <Face
                src={withPrefix("/img/topics/topics13/top/face_koma.png")}
              />
              <Bubble bubble_color="#990000">
                え、ここって...僕たちがさっきまでいた図書館じゃん!
                <br />
                さっき見たときには 2 階は席が埋まっていたし、3
                階もこの時期はいつも満員なはず...
              </Bubble>
            </Dialogue>

            <Dialogue>
              <Face
                src={withPrefix("/img/topics/topics13/top/face_nazo.png")}
              />
              <Bubble bubble_color="#669999">
                実は、この図書館には知る人ぞ知る隠れ家的自習スポットがあるんだ。
                <br />
                君は4階に足を踏み入れたことはあるかい?
              </Bubble>
            </Dialogue>

            <Dialogue>
              <Face
                src={withPrefix("/img/topics/topics13/top/face_koma.png")}
              />
              <Bubble bubble_color="#990000">
                そういえば 4 階は階段上るの大変だから行ったこと無いなあ。
              </Bubble>
            </Dialogue>

            <Dialogue>
              <Face
                src={withPrefix("/img/topics/topics13/top/face_nazo.png")}
              />
              <Bubble bubble_color="#669999">
                だと思ったよ。それじゃあ今から君を招待してあげよう。
              </Bubble>
            </Dialogue>

            <BigNarration style={{ textAlign: "center" }}>
              2 人は 4 階へと続く長い階段を登っていった。
            </BigNarration>

            <ImageFrame>
              <img
                src={withPrefix("/img/topics/topics13/tosho/tosho02.png")}
                width="100%"
              ></img>
            </ImageFrame>

            <Dialogue>
              <Face
                src={withPrefix("/img/topics/topics13/top/face_koma.png")}
              />
              <Bubble bubble_color="#990000">
                ここが 4 階かあ。初めて来たけど、本がいっぱいだなあ。
              </Bubble>
            </Dialogue>

            <Dialogue>
              <Face
                src={withPrefix("/img/topics/topics13/top/face_nazo.png")}
              />
              <Bubble bubble_color="#669999">
                この階には人文科学系の研究図書が配置してあるんだ。
                <br />
                学習用図書が置いてある3階と違って、古くて立派な本が多いでしょ。
              </Bubble>
            </Dialogue>

            <Dialogue>
              <Face
                src={withPrefix("/img/topics/topics13/top/face_koma.png")}
              />
              <Bubble bubble_color="#990000">
                大学の図書館って感じがしていて雰囲気がいいね。
                <br />
                本ばっかりあるけど本当に自習スペースなんてあるのかな?
              </Bubble>
            </Dialogue>

            <Dialogue>
              <Face
                src={withPrefix("/img/topics/topics13/top/face_nazo.png")}
              />
              <Bubble bubble_color="#669999">
                さあ着いたよ。ここなら最高に集中できるはず。
              </Bubble>
            </Dialogue>

            <ImageFrame>
              <img
                src={withPrefix("/img/topics/topics13/tosho/tosho03.png")}
                width="100%"
              ></img>
            </ImageFrame>

            <Dialogue nospace>
              <Face
                src={withPrefix("/img/topics/topics13/top/face_koma.png")}
              />
              <Bubble bubble_color="#990000">
                わあ、すごい!机は広いし充電用のコンセントもある。
                <br />
                しかも、周囲が壁で囲まれていてめちゃくちゃ集中できそう!
                <br />
                僕もここで勉強したいなあ...ってあれ?
              </Bubble>
            </Dialogue>

            <ImageFrame>
              <img
                src={withPrefix("/img/topics/topics13/tosho/tosho04.jpg")}
                width="100%"
              ></img>
            </ImageFrame>

            <Dialogue>
              <Face
                src={withPrefix("/img/topics/topics13/top/face_koma.png")}
              />
              <Bubble bubble_color="#990000">早速勉強し始めてる！</Bubble>
            </Dialogue>

            <Dialogue>
              <Face
                src={withPrefix("/img/topics/topics13/top/face_nazo.png")}
              />
              <Bubble bubble_color="#669999">
                ここは何度来ても最高だな。貴重品用のロッカーも完備されているし、椅子の座り心地も最高だよ。
              </Bubble>
            </Dialogue>

            <Dialogue>
              <Face
                src={withPrefix("/img/topics/topics13/top/face_koma.png")}
              />
              <Bubble bubble_color="#990000">
                いいなあ、今度から僕もここで勉強しようっと。
              </Bubble>
            </Dialogue>

            <Dialogue>
              <Face
                src={withPrefix("/img/topics/topics13/top/face_nazo.png")}
              />
              <Bubble bubble_color="#669999">
                気に入ってくれて嬉しいよ。今日はいろんな場所を回ってお疲れ様。
              </Bubble>
            </Dialogue>

            <Dialogue>
              <Face
                src={withPrefix("/img/topics/topics13/top/face_koma.png")}
              />
              <Bubble bubble_color="#990000">
                こちらこそ、僕にとっておきの場所をいくつも教えてくれてありがとう。
              </Bubble>
            </Dialogue>

            <Dialogue>
              <Face
                src={withPrefix("/img/topics/topics13/top/face_koma.png")}
              />
              <Bubble bubble_color="#990000">
                よーし、それじゃあ早速テストに向けて猛勉強するぞ!
                <br />
                この席は僕が使うね!さあ、どいてどいて!
              </Bubble>
            </Dialogue>

            <Dialogue>
              <Face
                src={withPrefix("/img/topics/topics13/top/face_nazo.png")}
              />
              <Bubble bubble_color="#669999">ええ...僕の勉強場所が...。</Bubble>
            </Dialogue>

            {/* 文系総合館へのリンク */}
            <Link to="/topics/topics13/topics13_bun">
              <Kanban
                src={withPrefix("/img/topics/topics13/top/Bun.png")}
                width="100%"
                style={{ paddingBottom: "50px" }}
              ></Kanban>
            </Link>
          </Talk>
        </div>
      </OuterFrame>
    </Layout>
  );
};

export default topics13_tosho;
