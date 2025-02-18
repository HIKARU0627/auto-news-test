import React from "react";
import { Link, withPrefix } from "gatsby";

import Layout from "@common/Layout/Layout";
import {
  Kanban,
  OuterFrame,
  Talk,
  Narration,
  BigNarration,
  ImageFrame,
  Dialogue,
  Face,
  Bubble,
} from "./topics13-style";
import HelmetForOGP from "@common/Helmet/HelmetForOGP";

const Topics13 = () => {
  return (
    <Layout>
      <HelmetForOGP
        title={"名大の自習スペースを探れ!!"}
        category={"Topics"}
        image={`https://ocw.nagoya-u.jp${withPrefix(
          "/img/topics/topics13/top/topics13_kanban.png"
        )}`}
      />
      <OuterFrame className="colmns">
        <div className="container is-9-desktop">
          <Kanban
            src={withPrefix("/img/topics/topics13/top/topics13-kanban.svg")}
            style={{ verticalAlign: "bottom" }}
          />
          <Talk className="container has-text-weight-medium">
            {/* containerがないと左寄せになる */}

            <section className="has-text-right" style={{ paddingTop: "15px" }}>
              <b>調査班：相田、羽田、榎本、西村</b>
            </section>

            <Narration>ある日のことである。</Narration>

            <ImageFrame>
              <img
                src={withPrefix("/img/topics/topics13/top/troubled.png")}
                width="100%"
              ></img>
            </ImageFrame>

            <Dialogue nospace>
              <Face
                src={withPrefix("/img/topics/topics13/top/face_koma.png")}
              />
              <Bubble bubble_color="#990000">
                なんということだ.....
                いつも使っている自習スペースが空いていないぞ
              </Bubble>
            </Dialogue>

            <Narration>
              いつも中央図書館の2階で勉強している困ったくん。
              <br />
              しかしテストが近いこともあり今日は空いていない。
            </Narration>

            <ImageFrame>
              <img
                src={withPrefix("/img/topics/topics13/top/waiwai.png")}
              ></img>
            </ImageFrame>

            <Dialogue>
              <Face
                src={withPrefix("/img/topics/topics13/top/face_koma.png")}
              />
              <Bubble bubble_color="#990000">
                そんな ......
                卒業がかかったテストの勉強をしないといけないのになんということだ
              </Bubble>
            </Dialogue>

            <Dialogue nospace>
              <Face
                src={withPrefix("/img/topics/topics13/top/face_hatena.png")}
              />
              <Bubble bubble_color="#669999">おや、お困りかね</Bubble>
            </Dialogue>

            <ImageFrame>
              <img
                src={withPrefix("/img/topics/topics13/top/nazonootoko.png")}
              ></img>
            </ImageFrame>

            <Dialogue>
              <Face
                src={withPrefix("/img/topics/topics13/top/face_koma.png")}
              />
              <Bubble bubble_color="#990000">あ、あなたは......!!</Bubble>
            </Dialogue>

            <Dialogue>
              <Face
                src={withPrefix("/img/topics/topics13/top/face_nazo.png")}
              />
              <Bubble bubble_color="#669999">
                いや初対面だよね。僕君のこと知らないけど。
              </Bubble>
            </Dialogue>

            <Dialogue>
              <Face
                src={withPrefix("/img/topics/topics13/top/face_koma.png")}
              />
              <Bubble bubble_color="#990000">確かにそうだけど......</Bubble>
            </Dialogue>

            <Dialogue>
              <Face
                src={withPrefix("/img/topics/topics13/top/face_nazo.png")}
              />
              <Bubble bubble_color="#669999">
                でもせっかくだから、名大の勉強場所を案内してあげよう。僕はたくさんの場所を知っているよ
                !!
              </Bubble>
            </Dialogue>

            <Dialogue>
              <Face
                src={withPrefix("/img/topics/topics13/top/face_koma.png")}
              />
              <Bubble bubble_color="#990000">
                ありがとうございます(なんかよくわからないけど......
                ついて行ってみよう)
              </Bubble>
            </Dialogue>

            <BigNarration>
              こうして、困ったくんと謎の名大生の旅が始まった。 <br />
              彼らはいったい、どのような自習スペースにたどり着くのだろうか......
            </BigNarration>

            {/* 文系総合館へのリンク */}
            <Link to="/topics/topics13/topics13_bun">
              <Kanban
                src={withPrefix("/img/topics/topics13/top/Bun.png")}
                width="100%"
                style={{ paddingBottom: "50px" }}
              ></Kanban>
            </Link>

            {/* 図書館へのリンク */}
            <Link to="/topics/topics13/topics13_tosho">
              <Kanban
                src={withPrefix("/img/topics/topics13/top/Tosho.png")}
                width="100%"
                style={{ paddingBottom: "80px" }}
              ></Kanban>
            </Link>
          </Talk>
        </div>
      </OuterFrame>
    </Layout>
  );
};

export default Topics13;
