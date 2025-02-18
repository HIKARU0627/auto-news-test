import React from "react";
import { Link, withPrefix } from "gatsby";
import styled from "styled-components";

import Layout from "@common/Layout/Layout";
import HelmetForOGP from "@common/Helmet/HelmetForOGP";

// 講義紹介パネルのコンポーネント
const Course = ({
  title,
  profName,
  profText,
  introText,
  videoURL,
  chapterName,
  chapterText,
  detailURL,
  detailText,
}) => {
  return (
    <section>
      <Pannel>
        <IntroWrapper>
          <TitleText>{title}</TitleText>
          <ProfText>
            <ProfnameText>{profName}</ProfnameText>
            {profText}
          </ProfText>
          {introText}
        </IntroWrapper>
        <DetailWrapper>
          {/* <Thumbnail src={withPrefix(imgURL)} /> */}
          <div>
            <Video>
              <Videoframe
                src={videoURL}
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen
                title="かばん語"
              ></Videoframe>
            </Video>
            <script src="https://player.vimeo.com/api/player.js"></script>
          </div>
          <div>
            <DetailPannel>
              <ChapterText>＃1 {chapterName}</ChapterText>
              <DetailText>{chapterText}</DetailText>
            </DetailPannel>
            <StyledLink to={detailURL}>{detailText}</StyledLink>
          </div>
        </DetailWrapper>
      </Pannel>
    </section>
  );
};

const Glocal1 = () => {
  return (
    <Layout>
      <HelmetForOGP
        title={"Glocal Lesson 特集"}
        image={`https://ocw.nagoya-u.jp${withPrefix(
          "/img/glocal/glocal1/top_thum.jpg"
        )}`}
      />
      <Kanban src={withPrefix("/img/glocal/glocal1/header.jpg")} />
      <KanbanSP src={withPrefix("/img/glocal/glocal1/header_sp.jpg")} />

      <article className="columns section">
        <div className="container column is-9-desktop">
          <section>
            <div className="script" style={{ fontSize: "0.9rem" }}>
              岐阜大学グローカル推進機構では、学生・教職員に限らず、一般の方への学習支援を目的としたGlocal
              Lessonを提供しています。
              <br />
              本サイトでは、海外へ渡航する前に是非知っておきたい知識や異文化理解、言語のお話等から、岐阜大学の研究紹介に至るまで、教養を高めるきっかけとなる様々なコンテンツを配信しています。
            </div>
          </section>

          <Link to="https://www.gu-glocal.com/">
            <Button width={"250px"} fontSize={"1.3rem"}>
              Glocal Lessonはこちら
            </Button>
          </Link>

          <Course
            title={"岐阜方言から考えることばのしくみ"}
            profName={"山田 敏弘"}
            profText={"教授（岐阜大学 教育学部）"}
            introText={
              "この講義では、言語学の概念を身近な岐阜方言における具体例を用いながら、音声・語彙・文法・運用の側面から考えます。「Think Globally, Act Locally.」人間言語の本質を知る一つの方法として、方言を切り口に考えてみましょう！"
            }
            imgURL={"/img/glocal/glocal1/yamada.jpg"}
            videoURL={
              "https://player.vimeo.com/video/605381279?h=763a84126c&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            }
            chapterName={"かばん語"}
            chapterText={
              "「かばん語」と呼ばれる複合語について、岐阜方言から英語まで具体例を取り上げながら解説します。"
            }
            detailURL={
              "https://alss-portal.gifu-u.ac.jp/campusweb/slbssbdr.do?risyunen=2022&semekikn=1&kougicd=1ZJI111050"
            }
            detailText={"関連する科目のシラバスはこちら"}
          ></Course>

          <Course
            title={"日本を発つ前に知っておきたい"}
            profName={"杉山　誠"}
            profText={"教授（岐阜大学）"}
            introText={
              "海外渡航前に知っておきたい、健康管理や様々な感染症の特徴を概説し、海外生活で気を付ける行動や感染時などの対処法について説明します。"
            }
            imgURL={"/img/glocal/glocal1/sugiyama.jpg"}
            videoURL={
              "https://player.vimeo.com/video/674696046?h=40830f5dff&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            }
            chapterName={"狂犬病のおはなし"}
            chapterText={
              "狂犬病はウイルス性人獣共通感染症であり、主に犬から人へ咬傷を通じて感染します。発症した場合、有効な治療法は存在せず、神経症状を呈して死に至ります。我が国では、60年以上狂犬病の発生がないものの、アジアやアフリカの開発途上国を中心に世界的に発生がみられます。本講義では、狂犬病の特徴とともに、海外での動物との接し方や本症への対処法等について説明します。"
            }
            detailURL={
              "https://alss-portal.gifu-u.ac.jp/campusweb/slbssbdr.do?risyunen=2022&semekikn=1&kougicd=2ZJI111220"
            }
            detailText={"関連する科目のシラバスはこちら"}
          ></Course>

          <Course
            title={"アートの見方からセンスを磨く"}
            profName={"野村 幸弘"}
            profText={"教授（岐阜大学 教育学部）"}
            introText={
              "本講座では、皆さんが良く知る西洋美術作品を中心に作品の見方を提案します。巨匠らの描いた視点や時代背景等を分析し、他の作品との関連性や類似性を紐づけることで「点と点をつなげる」感覚を養いましょう。"
            }
            imgURL={"/img/glocal/glocal1/nomura.jpg"}
            videoURL={
              "https://player.vimeo.com/video/678503695?h=2ba11dcdac&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            }
            chapterName={"絵と言葉"}
            chapterText={
              "絵には言葉と同様、意味があります。その意味を理解するイコノロジーと作品を比較する鑑賞方法について解説します。"
            }
            detailURL={
              "https://alss-portal.gifu-u.ac.jp/campusweb/slbssbdr.do?risyunen=2022&semekikn=1&kougicd=1ZJI110670"
            }
            detailText={"関連する科目のシラバスはこちら"}
          ></Course>

          <Course
            title={"多文化共生社会における異文化理解に向けて"}
            profName={"今福 輪太郎"}
            profText={
              <>
                併任講師
                <br className="br-sp" />
                <span className="span-pc"> </span>
                (岐阜大学 医学教育開発研究センター)
              </>
            }
            introText={
              "「異文化間コミュニケーションにおける関連理論」および「多文化共生社会におけるコミュニケーション」についてお話します。"
            }
            imgURL={"/img/glocal/glocal1/imafuku.jpg"}
            videoURL={
              "https://player.vimeo.com/video/603655702?h=02d5a978fd&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            }
            chapterName={
              <>
                異文化間コミュニケーション
                <span className="span-pc">における関連理論</span>
              </>
            }
            chapterText={
              "文献をもとに、異文化間能力の定義づけをしたあとに、異文化間コミュニケーションの理解・実践に役立つ理論/概念として、「フレーム」と「ポライトネス理論」を概説します。"
            }
            detailURL={
              "https://alss-portal.gifu-u.ac.jp/campusweb/slbssbdr.do?risyunen=2022&semekikn=1&kougicd=1HMK03005"
            }
            detailText={"関連する科目のシラバスはこちら"}
          ></Course>

          <Course
            title={"GU Research"}
            profName={"柳瀬 笑子"}
            profText={
              <>
                教授
                <br className="br-sp" />
                <span className="span-pc"> </span>
                (岐阜大学 応用生物科学部)
              </>
            }
            introText={
              "岐阜大学での研究・勉学の魅力を皆さんにお伝えするために、本学の研究者が自身の研究内容を分かりやすく解説します。"
            }
            imgURL={"/img/glocal/glocal1/yanase.jpg"}
            videoURL={
              "https://player.vimeo.com/video/703131746?h=c4a65aa973&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            }
            chapterName={"お茶を化学する"}
            chapterText={
              "お茶には健康に良いとされるポリフェノール（カテキン類）が含まれていますが、紅茶やウーロン茶に加工する過程で大きく変化することが知られています。その変化について有機化学的な視点から分子レベルで明らかにすることをめざして行っている研究の一端をご紹介します。"
            }
            detailURL={
              "https://www.gifu-u.ac.jp/about/publication/gu_research.html"
            }
            detailText={"GU Research 特集ページ"}
          ></Course>

          <Link to="https://www.gu-glocal.com/">
            <Button width={"100%"} fontSize={"1.1rem"}>
              もっと見たい方は Glocal Lesson に<br className="br-sp" />
              登録（無料）しよう！
            </Button>
          </Link>

          <Caution>
            ※名古屋大学・岐阜大学の学生・教職員用メールアドレスで登録の場合、有料会員ステータスへの引き上げを行います。
          </Caution>
        </div>
      </article>
    </Layout>
  );
};

export default Glocal1;

/*スタイルドコンポーネント*/
// 看板画像 PC版
const Kanban = styled.img`
  width: 100%;
  @media (max-width: 768px) {
    display: none;
  }
`;

// 看板画像 スマホ版
const KanbanSP = styled.img`
  @media (min-width: 769px) {
    display: none;
  }
`;

// ボタン
const Button = styled.button`
  background: #f1e767;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#e9937c),
    to(#e3646a)
  );
  transition: 0.3s;
  &:hover {
    opacity: 0.8;
  }
  cursor: pointer;

  border: none;
  border-radius: 10px;
  width: ${(props) => props.width};
  min-height: 60px;
  margin-top: 40px;
  box-shadow: 0 10px 10px 0 rgb(0 0 0 / 15%);

  color: #ffffff;
  font-size: 1.3rem;
  font-weight: bold;

  @media (max-width: 768px) {
    display: block;
    margin: 20px auto;
    font-size: ${(props) => props.fontSize};
  }
  @media (min-width: 769px) {
    .br-sp {
      display: none;
    }
  }
`;

// 各講義ごとのパネル
const Pannel = styled.div`
  padding: 10px;
  margin: 60px 0px;

  @media (min-width: 769px) {
    border-left: 4px solid #fa7373;
  }
`;

const IntroWrapper = styled.div`
  padding-left: 10px;

  @media (max-width: 768px) {
    border-left: 3px solid #fa7373;
  }
`;

// 講義のタイトル
const TitleText = styled.div`
  color: #fa7373;
  font-size: 2rem;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;
// 教授の名前
const ProfnameText = styled.span`
  font-size: 1.7rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

// 教授の所属
const ProfText = styled.div`
  font-size: 1.3rem;
  margin-bottom: 5px;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (min-width: 769px) {
    .br-sp {
      display: none;
    }
  }
`;

// 講義の詳細のラッパー
const DetailWrapper = styled.div`
  @media (min-width: 769px) {
    display: flex;
    align-items: flex-start;
  }
`;

// 講義の詳細のパネル
const DetailPannel = styled.div`
  border-left: 3px solid #fa7373;
  background-color: #f3edf1;
  vertical-align: top;
  padding-bottom: 5px;

  @media (min-width: 769px) {
    margin: 10px;
    min-height: 9.4rem;
  }
`;

// 講義画像
/*
const Thumbnail = styled.img`
  width: 35%;
  height: 35%;
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }

  margin-top: 15px;
  margin-right: 20px;
`;
*/

// 講義のチャプター名
const ChapterText = styled.div`
  font-size: 1.4rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    .span-pc {
      display: none;
    }
  }

  font-weight: bold;
  padding: 10px 0px 5px 5px;
`;

// 講義の詳細文
const DetailText = styled.div`
  font-size: 0.8rem;
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  padding: 0px 10px;
`;

// リンク
const StyledLink = styled(Link)`
  font-weight: bold;
  color: #006e4f;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
  position: relative;
  ::before {
    content: "･";
    margin: 0 0.5rem;
    text-decoration: none;
    display: inline-block;
  }
`;

// 注意書き
const Caution = styled.p`
  color: #e3646a;
  margin: 30px 0px;
`;

// 講義動画関連
const Video = styled.div`
  margin-top: 10px;
  text-align: center;
`;

const Videoframe = styled.iframe`
  height: 100%;
`;
