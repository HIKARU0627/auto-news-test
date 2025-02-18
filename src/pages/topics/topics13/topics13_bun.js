import React from "react";
import { Link, withPrefix } from "gatsby";
import styled from "styled-components";

import media from "../../../templates/topics/topics13/media";
import {
  Kanban,
  OuterFrame,
  Talk,
  HeadLine,
  Narration,
  ImageFrame,
  Dialogue,
  Face,
  Bubble,
} from "../../../templates/topics/topics13/topics13-style";

import Layout from "@common/Layout/Layout";
import HelmetForOGP from "@common/Helmet/HelmetForOGP";

const topics13_bun = () => {
  return (
    <Layout>
      <HelmetForOGP
        title={"名大の自習スペースを探れ!!-文系総合館"}
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

            {/* 第1部 文系総合館 */}
            <HeadLine style={{ paddingTop: "13px" }}>
              <img
                src={withPrefix("/img/topics/topics13/bun/headline1.png")}
              ></img>
            </HeadLine>

            <Dialogue nospace>
              <Face
                src={withPrefix("/img/topics/topics13/top/face_koma.png")}
              />
              <Bubble bubble_color="#990000">ここは...。</Bubble>
            </Dialogue>

            <ImageFrame>
              <img
                src={withPrefix("/img/topics/topics13/bun/bun01.png")}
                width="100%"
              ></img>
            </ImageFrame>

            <Dialogue>
              <Face
                src={withPrefix("/img/topics/topics13/top/face_nazo.png")}
              />
              <Bubble bubble_color="#669999">
                ここは<b>文系総合館</b>。
                名古屋大学の文系地区のちょうど真ん中あたりにあるんだ。{" "}
                {/* 太字にできる？ */}
              </Bubble>
            </Dialogue>

            <Dialogue>
              <Face
                src={withPrefix("/img/topics/topics13/top/face_nazo.png")}
              />
              <Bubble bubble_color="#669999">
                ここには学習スペースをはじめ、談話スペースや教室・研究室に、なんといっても
                <b>ビズリーチキャンパス名大</b>があるんだ。
              </Bubble>
            </Dialogue>

            <Dialogue>
              <Face
                src={withPrefix("/img/topics/topics13/top/face_koma.png")}
              />
              <Bubble bubble_color="#990000">
                ビズリーチキャンパス名大……？
              </Bubble>
            </Dialogue>

            <Dialogue nospace>
              <Face
                src={withPrefix("/img/topics/topics13/top/face_nazo.png")}
              />
              <Bubble bubble_color="#669999">ほら、ここだよ。</Bubble>
            </Dialogue>

            <ImageFrame>
              <img src={withPrefix("/img/topics/topics13/bun/bun02.png")}></img>
            </ImageFrame>

            <Dialogue>
              <Face
                src={withPrefix("/img/topics/topics13/top/face_koma.png")}
              />
              <Bubble bubble_color="#990000">
                大学の職員らしき方々がたくさん働いているね。
              </Bubble>
            </Dialogue>

            <Dialogue nospace>
              <Face
                src={withPrefix("/img/topics/topics13/top/face_nazo.png")}
              />
              <Bubble bubble_color="#669999">
                文系教務課の窓口をここではそう呼んでいるんだ。
                ここは東海地区で初めて大学が「ネーミングライツ」という取り組みをした場所であって、これはすごく画期的だったんだよ。
              </Bubble>
            </Dialogue>

            <ImageFrame>
              <img src={withPrefix("/img/topics/topics13/bun/bun03.png")}></img>
            </ImageFrame>

            <Dialogue nospace>
              <Face
                src={withPrefix("/img/topics/topics13/top/face_nazo.png")}
              />
              <Bubble bubble_color="#669999">
                でも今は、ひとまず学習スペースを見に行こう。
              </Bubble>
            </Dialogue>

            <Narration>
              3階に到着した一行。そこには自習スペースがあった。
            </Narration>

            <Dialogue>
              <Face
                src={withPrefix("/img/topics/topics13/top/face_nazo.png")}
              />
              <Bubble bubble_color="#669999">
                自習室は3階と4階にあるよ。3階はいっぱいだから4階に行こう。
              </Bubble>
            </Dialogue>

            <Dialogue nospace>
              <Face
                src={withPrefix("/img/topics/topics13/top/face_koma.png")}
              />
              <Bubble bubble_color="#990000">わかった(๑╹ω╹๑ )</Bubble>
            </Dialogue>

            <Narration>〜エレベーターに乗る〜</Narration>

            <Narration>チーン（到着）</Narration>

            <ImageFrame>
              <img src={withPrefix("/img/topics/topics13/bun/bun04.png")}></img>
            </ImageFrame>

            <Dialogue>
              <Face
                src={withPrefix("/img/topics/topics13/top/face_nazo.png")}
              />
              <Bubble bubble_color="#669999">
                ここは個室になっていて集中しやすいよ。
              </Bubble>
            </Dialogue>

            <Dialogue>
              <Face
                src={withPrefix("/img/topics/topics13/top/face_koma.png")}
              />
              <Bubble bubble_color="#990000">
                広いし、ホワイトボードがあってみんなで勉強できそうだね！！
              </Bubble>
            </Dialogue>

            <Dialogue>
              <Face
                src={withPrefix("/img/topics/topics13/top/face_nazo.png")}
              />
              <Bubble bubble_color="#669999">
                別にみんなで勉強する必要はないんじゃない？......( ；∀；)
                一人でも勉強はできるよ。
              </Bubble>
            </Dialogue>

            <Dialogue>
              <Face
                src={withPrefix("/img/topics/topics13/top/face_koma.png")}
              />
              <Bubble bubble_color="#990000">
                （無視）あそこにホワイトボードを使って勉強している人たちがいるよ！
                <br />
                ここでどんなふうに勉強しているのか話を聞いてみよう！
              </Bubble>
            </Dialogue>

            <Dialogue nospace>
              <Face
                src={withPrefix("/img/topics/topics13/top/face_nazo.png")}
              />
              <Bubble bubble_color="#669999">
                え...（やめておこうよ...こわいよ......）
              </Bubble>
            </Dialogue>

            <ImageFrame>
              <img src={withPrefix("/img/topics/topics13/bun/bun05.png")}></img>
            </ImageFrame>

            <Dialogue>
              <Face
                src={withPrefix("/img/topics/topics13/top/face_koma.png")}
              />
              <Bubble bubble_color="#990000">
                こんにちは！！　ちょっとお話聞いてもいいですか？
              </Bubble>
            </Dialogue>

            <Dialogue>
              <Face
                src={withPrefix("/img/topics/topics13/bun/face_sato.png")}
              />
              <Bubble bubble_color="#54a0c0">構いませんよ。</Bubble>
            </Dialogue>

            <Dialogue>
              <Face
                src={withPrefix("/img/topics/topics13/top/face_koma.png")}
              />
              <Bubble bubble_color="#990000">
                ここでみなさん何してるんですか？？
              </Bubble>
            </Dialogue>

            <Dialogue>
              <Face src={withPrefix("/img/topics/topics13/bun/face_ito.png")} />
              <Bubble bubble_color="#e6a567">
                ゼミの発表の準備をしています。3人一組で発表なのです。
              </Bubble>
            </Dialogue>

            <Dialogue>
              <Face
                src={withPrefix("/img/topics/topics13/top/face_koma.png")}
              />
              <Bubble bubble_color="#990000">
                ゼミの準備ですか！何について発表するんですか？
              </Bubble>
            </Dialogue>

            <Dialogue nospace>
              <Face src={withPrefix("/img/topics/topics13/bun/face_ito.png")} />
              <Bubble bubble_color="#e6a567">
                動物園の倫理について議論しています。発表が来週に迫っているんですよ。
              </Bubble>
            </Dialogue>

            <ImageFrame>
              <img src={withPrefix("/img/topics/topics13/bun/bun06.png")}></img>
            </ImageFrame>

            <Dialogue>
              <Face
                src={withPrefix("/img/topics/topics13/top/face_koma.png")}
              />
              <Bubble bubble_color="#990000">
                動物園の倫理...！　なんだか難しそうですね。
              </Bubble>
            </Dialogue>

            <Dialogue>
              <Face
                src={withPrefix("/img/topics/topics13/bun/face_sato.png")}
              />
              <Bubble bubble_color="#54a0c0">そうなんですƪ(˘⌣˘)ʃ</Bubble>
            </Dialogue>

            <Dialogue>
              <Face
                src={withPrefix("/img/topics/topics13/bun/face_sato.png")}
              />
              <Bubble bubble_color="#54a0c0">
                動物園については、それが倫理的に許されるのかどうかが問題とされています。
                例えば、動物とは本来自然の中で生きるべきであり、人間が柵の中に閉じ込めるのは誤ったことなのではないかとか、
                一種の動物虐待なのではないかとか。
                野生の崩壊につながるのではないかとかも言われていますね。
              </Bubble>
            </Dialogue>

            <Dialogue>
              <Face src={withPrefix("/img/topics/topics13/bun/face_ito.png")} />
              <Bubble bubble_color="#e6a567">
                あわせて、「動物の権利」ということも言われています。人間に、「生命・身体の自由」が認められているように、
                動物にもそれを認めるべきではないかということですね。
                ライオンやゾウなどの動物も、人間と同様に「権利」を持つものとして扱うべきであり、不当に勾留すべきでないという主張です。
              </Bubble>
            </Dialogue>

            <Dialogue>
              <Face
                src={withPrefix("/img/topics/topics13/bun/face_kato.png")}
              />
              <Bubble bubble_color="#7c6ba8">
                でも、私たちの班は、あくまで動物園は倫理的に許されるという方向で発表を進めています。
                動物の権利とか言い出したら、私たちは牛や魚を食べられなくなるし、そもそも『動物の権利』という概念自体とても曖昧だと思っています。
                例えば、どのような生き物に権利を認めて、どのような生き物には認めないのかが曖昧です。動物に権利が認められるなら、植物にも権利を認めるべきなのではないか、その線引きはどこですべきなのか、ということが問題となります。
              </Bubble>
            </Dialogue>

            <Dialogue>
              <Face
                src={withPrefix("/img/topics/topics13/bun/face_kato.png")}
              />
              <Bubble bubble_color="#7c6ba8">
                あわせて、動物園はそもそも動物たちのためにもなっているのだと主張できます。
                動物園は動物にとって安全な環境ですし、多少のストレスはあるにしても、生存が脅かされることはありません。生殖も安全に出来ます。
                『動物というのは、本来野生で生きるべきなのだ』というのは一つの考えの押しつけにすぎません。
                また、動物園の仕組み自体、合理的な設計になっていると考えます。
                動物を安全な環境に置き、かつそれを見物させることで動物たちの管理費を得るという仕組みは、人間にとっても動物にとってもwin-winです。
                それゆえに私たちは動物園というものに賛成しようと思っています。
              </Bubble>
            </Dialogue>

            <Dialogue>
              <Face
                src={withPrefix("/img/topics/topics13/top/face_koma.png")}
              />
              <Bubble bubble_color="#990000">
                へー、そうなんですね。どうしてここを利用しているんですか？
              </Bubble>
            </Dialogue>

            <Dialogue>
              <Face
                src={withPrefix("/img/topics/topics13/bun/face_kato.png")}
              />
              <Bubble bubble_color="#7c6ba8">
                ここは20時までやっているし、広くてホワイトボードもあってみんなで議論するにはもってこいなんですよ。
              </Bubble>
            </Dialogue>

            <Dialogue>
              <Face
                src={withPrefix("/img/topics/topics13/top/face_koma.png")}
              />
              <Bubble bubble_color="#990000">
                そうなんですね！　僕も今度友達と利用してみようかな( ✌︎'ω')✌︎
              </Bubble>
            </Dialogue>

            <Dialogue>
              <Face
                src={withPrefix("/img/topics/topics13/top/face_nazo.png")}
              />
              <Bubble bubble_color="#669999">
                友達かぁ......1人で勉強する方がいいと思うけどね(ಠ_ಠ)
              </Bubble>
            </Dialogue>

            <Dialogue>
              <Face
                src={withPrefix("/img/topics/topics13/top/face_koma.png")}
              />
              <Bubble bubble_color="#990000">
                自分が友達いないからって拗ねないでよ笑。でも、確かに1人で勉強したい時もあるよね！
              </Bubble>
            </Dialogue>

            <Dialogue>
              <Face
                src={withPrefix("/img/topics/topics13/top/face_nazo.png")}
              />
              <Bubble bubble_color="#669999">
                そんなことないよ…。1人で勉強するときのお勧めの場所があるから行ってみようよ！
              </Bubble>
            </Dialogue>

            <Dialogue>
              <Face
                src={withPrefix("/img/topics/topics13/top/face_koma.png")}
              />
              <Bubble bubble_color="#990000">
                そんなに言うなら行ってあげるよ。
              </Bubble>
            </Dialogue>

            <Dialogue>
              <Face
                src={withPrefix("/img/topics/topics13/top/face_koma.png")}
              />
              <Bubble bubble_color="#990000">
                じゃあ、僕たちはここで失礼します。ありがとうございました！
              </Bubble>
            </Dialogue>

            <Dialogue nospace>
              <Face
                src={withPrefix("/img/topics/topics13/bun/face_ito.png")}
                style={{ marginRight: "20px" }}
              />
              <Face
                src={withPrefix("/img/topics/topics13/bun/face_sato.png")}
                style={{ marginRight: "20px" }}
              />
              <Face
                src={withPrefix("/img/topics/topics13/bun/face_kato.png")}
              />
              <Bubble2 bubble_color="#7c6ba8">ばいば〜いヾ(๑╹◡╹)ﾉ"</Bubble2>
            </Dialogue>

            <ImageFrame>
              <img src={withPrefix("/img/topics/topics13/bun/bun07.png")}></img>
            </ImageFrame>

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

export default topics13_bun;

// 特殊な吹き出し
const Bubble2 = styled.div`
  position: relative;
  width: 620px; // 顔が3人分あるため、幅を微調整
  margin: 10px 0;
  margin-left: 20px;
  padding: 20px;
  border: 2px solid ${(props) => props.bubble_color};
  border-radius: 10px;
  float: left;
  &:before {
    content: "";
    position: absolute;
    display: block;
    left: -15px;
    top: 15px;
    border-right: 15px solid ${(props) => props.bubble_color};
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
  }
  &:after {
    content: "";
    position: absolute;
    display: block;
    left: -12px;
    top: 15px;
    border-right: 15px solid #ffffff;
    border-top: 10px solid transparent;
    border-bottom: 9px solid transparent;
  }
  ${media.sp`
    position: relative;
    width: calc(100% - 15px);
    margin-left: 15px;
    padding: 10px;
    border: 2px solid ${(props) => props.bubble_color};
    border-radius: 7px;
    &:before {
      content: '';
      position: absolute;
      display: block;
      left: -15px;
      top: 7px;
    }
    &:after {
      content: '';
      position: absolute;
      display: block;
      left: -12px;
      top: 7px;
      height: 3px;
    }
  `}
`;
