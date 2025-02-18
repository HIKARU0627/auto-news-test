// const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = {
  pathPrefix: ``,
  trailingSlash: `always`,
  siteMetadata: {
    title: "NUOCW",
    siteUrl: `https://ocw.nagoya-u.jp`,
    description:
      "「名大の授業」NUOCW では、名古屋大学で行われている講義の教材などをインターネット上に無償で公開しており、だれでも自由に利用することができます。",
    referrer: "strict-origin-when-cross-origin",
    categories: [
      {
        templateKey: "department",
        name: `高等研究院`,
        slug: `高等研究院`,
        image: `高等研究院_thumbnail.png`,
      },
      {
        templateKey: "department",
        name: `研究協力部社会連携課`,
        slug: `研究協力部社会連携課`,
        image: `研究協力部社会連携課_thumbnail.png`,
      },
      {
        templateKey: "department",
        name: `男女共同参画室`,
        slug: `男女共同参画室`,
        image: `男女共同参画室_thumbnail.png`,
      },
      {
        templateKey: "department",
        name: `医学部／医学系研究科`,
        slug: `医学部／医学系研究科`,
        image: `医学部／医学系研究科_thumbnail.png`,
      },
      {
        templateKey: "department",
        name: `環境学研究科`,
        slug: `環境学研究科`,
        image: `環境学研究科_thumbnail.png`,
      },
      {
        templateKey: "department",
        name: `教育学部／教育発達科学研究科`,
        slug: `教育学部／教育発達科学研究科`,
        image: `教育学部／教育発達科学研究科_thumbnail.png`,
      },
      {
        templateKey: "department",
        name: `教養教育院`,
        slug: `教養教育院`,
        image: `教養教育院_thumbnail.png`,
      },
      {
        templateKey: "department",
        name: `経済学部／経済学研究科`,
        slug: `経済学部／経済学研究科`,
        image: `経済学部／経済学研究科_thumbnail.png`,
      },
      {
        templateKey: "department",
        name: `工学部／工学研究科`,
        slug: `工学部／工学研究科`,
        image: `工学部／工学研究科_thumbnail.png`,
      },
      {
        templateKey: "department",
        name: `国際開発研究科`,
        slug: `国際開発研究科`,
        image: `国際開発研究科_thumbnail.png`,
      },
      {
        templateKey: "department",
        name: `国際機構`,
        slug: `国際機構`,
        image: `国際機構_thumbnail.png`,
      },
      {
        templateKey: "department",
        name: `文学部／国際言語文化研究科`,
        slug: `文学部／国際言語文化研究科`,
        image: `国際言語文化研究科_thumbnail.png`,
      },
      {
        templateKey: "department",
        name: `情報科学研究科`,
        slug: `情報科学研究科`,
        image: `情報科学研究科_thumbnail.png`,
      },
      {
        templateKey: "department",
        name: `情報学部／情報学研究科`,
        slug: `情報学部／情報学研究科`,
        image: `情報学部／情報学研究科_thumbnail.png`,
      },
      {
        templateKey: "department",
        name: `情報文化学部`,
        slug: `情報文化学部`,
        image: `情報文化学部_thumbnail.png`,
      },
      {
        templateKey: "department",
        name: `創薬科学研究科`,
        slug: `創薬科学研究科`,
        image: `創薬科学研究科_thumbnail.png`,
      },
      {
        templateKey: "department",
        name: `多元数理科学研究科`,
        slug: `多元数理科学研究科`,
        image: `多元数理科学研究科_thumbnail.png`,
      },
      {
        templateKey: "department",
        name: `農学部／生命農学研究科`,
        slug: `農学部／生命農学研究科`,
        image: `農学部／生命農学研究科_thumbnail.png`,
      },
      {
        templateKey: "department",
        name: `文学部／人文学研究科`,
        slug: `文学部／人文学研究科`,
        image: `文学部／人文学研究科_thumbnail.png`,
      },
      {
        templateKey: "department",
        name: `文学部／文学研究科`,
        slug: `文学部／文学研究科`,
        image: `文学部／人文学研究科_thumbnail.png`,
      },
      {
        templateKey: "department",
        name: `法学部／法学研究科`,
        slug: `法学部／法学研究科`,
        image: `法学部／法学研究科_thumbnail.png`,
      },
      {
        templateKey: "department",
        name: `理学部／理学研究科`,
        slug: `理学部／理学研究科`,
        image: `理学部／理学研究科_thumbnail.png`,
      },
      {
        templateKey: "department",
        name: `自然科学研究機構 核融合科学研究所`,
        slug: `自然科学研究機構 核融合科学研究所`,
        image: `汎用サムネイル_化学.png`,
      },
      {
        templateKey: "department",
        name: `生物機能開発利用研究センター`,
        slug: `生物機能開発利用研究センター`,
        image: "汎用サムネイル_遺伝子.png",
      },
      {
        templateKey: "department",
        name: `環境医学研究所`,
        slug: `環境医学研究所`,
        image: `汎用サムネイル_自然.png`,
      },
      {
        templateKey: "department",
        name: `エコトピア科学研究所`,
        slug: `エコトピア科学研究所`,
        image: `汎用サムネイル_自然.png`,
      },
      {
        templateKey: "department",
        name: `博物館`,
        slug: `博物館`,
        image: `汎用サムネイル_建物.png`,
      },
      {
        templateKey: "department",
        name: `宇宙地球環境研究所`,
        slug: `宇宙地球環境研究所`,
        image: `汎用サムネイル_地球.png`,
      },
      {
        templateKey: "department",
        name: `物質科学国際研究センター`,
        slug: `物質科学国際研究センター`,
        image: `汎用サムネイル_近未来.png`,
      },
      {
        templateKey: "department",
        name: `遺伝子実験施設`,
        slug: `遺伝子実験施設`,
        image: `汎用サムネイル_遺伝子.png`,
      },
      {
        templateKey: "department",
        name: `農学国際教育協力研究センター`,
        slug: `農学国際教育協力研究センター`,
        image: `汎用サムネイル_遺伝子.png`,
      },
      {
        templateKey: "department",
        name: `ナショナルコンポジットセンター`,
        slug: `ナショナルコンポジットセンター`,
        image: `汎用サムネイル_自然.png`,
      },
      {
        templateKey: "department",
        name: `地球水循環研究センター`,
        slug: `地球水循環研究センター`,
        image: `汎用サムネイル_自然.png`,
      },
      {
        templateKey: "department",
        name: `情報連携基盤センター`,
        slug: `情報連携基盤センター`,
        image: `汎用サムネイル_情報.png`,
      },
      {
        templateKey: "department",
        name: `総合保健体育科学センター`,
        slug: `総合保健体育科学センター`,
        image: `汎用サムネイル_保健.png`,
      },
      {
        templateKey: "department",
        name: `低温プラズマ科学研究センター`,
        slug: `低温プラズマ科学研究センター`,
        image: `汎用サムネイル_化学.png`,
      },
      {
        templateKey: "department",
        name: `未来材料・システム研究所`,
        slug: `未来材料・システム研究所`,
        image: `汎用サムネイル_近未来.png`,
      },
      {
        templateKey: "department",
        name: `その他`,
        slug: `その他`,
        image: `汎用サムネイル_建物.png`,
      },
      {
        templateKey: `department`,
        name: `G30`,
        slug: `en/G30`,
        image: `G30_thumbnail.png`,
      },
      {
        templateKey: `department`,
        name: `Institute of International Education & Exchange`,
        slug: `en/Institute_of_International_Education_and_Exchange`,
        image: `国際機構_thumbnail.png`,
      },
      {
        templateKey: `department`,
        name: `Graduate School of Environmental Studies`,
        slug: `en/Graduate_School_of_Environmental_Studies`,
        image: `環境学研究科_thumbnail.png`,
      },
      {
        templateKey: `department`,
        name: `Graduate School of Information Science`,
        slug: `en/Graduate_School_of_Information_Science`,
        image: `情報科学研究科_thumbnail.png`,
      },
      {
        templateKey: `department`,
        name: `Graduate School of International Development`,
        slug: `en/Graduate_School_of_International_Development`,
        image: `国際開発研究科_thumbnail.png`,
      },
      {
        templateKey: `department`,
        name: `Graduate School of Languages and Cultures`,
        slug: `en/Graduate_School_of_Languages_and_Cultures`,
        image: `国際言語文化研究科_thumbnail.png`,
      },
      {
        templateKey: `department`,
        name: `Graduate School of Mathematics`,
        slug: `en/Graduate_School_of_Mathematics`,
        image: `多元数理科学研究科_thumbnail.png`,
      },
      {
        templateKey: `department`,
        name: `Graduate School of Pharmaceutical Sciences`,
        slug: `en/Graduate_School_of_Pharmaceutical_Sciences`,
        image: `創薬科学研究科_thumbnail.png`,
      },
      {
        templateKey: `department`,
        name: `Institute of Liberal Arts & Sciences`,
        slug: `en/Institute_of_Liberal_Arts_and_Sciences`,
        image: `教養教育院_thumbnail.png`,
      },
      {
        templateKey: `department`,
        name: `School of Agricultural Sciences / Graduate School of Bioagricultural Sciences`,
        slug: `en/School_of_Agricultural_Sciences／Graduate_School_of_Bioagricultural_Sciences`,
        image: `農学部／生命農学研究科_thumbnail.png`,
      },
      {
        templateKey: `department`,
        name: `School of Economics / Graduate School of Economics`,
        slug: `en/School_of_Economics／Graduate_School_of_Economics`,
        image: `経済学部／経済学研究科_thumbnail.png`,
      },
      {
        templateKey: `department`,
        name: `School of Education / Graduate School of Education and Human Development`,
        slug: `en/School_of_Education／Graduate_School_of_Education_and_Human_Development`,
        image: `教育学部／教育発達科学研究科_thumbnail.png`,
      },
      {
        templateKey: `department`,
        name: `School of Engineering / Graduate School of Engineering`,
        slug: `en/School_of_Engineering／Graduate_School_of_Engineering`,
        image: `工学部／工学研究科_thumbnail.png`,
      },
      {
        templateKey: `department`,
        name: `School of Humanities / Graduate School of Humanities`,
        slug: `en/School_of_Humanities／Graduate_School_of_Humanities`,
        image: `文学部／人文学研究科_thumbnail.png`,
      },
      {
        templateKey: `department`,
        name: `School of Informatics and Sciences`,
        slug: `en/School_of_Informatics_and_Sciences`,
        image: `情報文化学部_thumbnail.png`,
      },
      {
        templateKey: `department`,
        name: `School of Informatics / Graduate School of Informatics`,
        slug: `en/School_of_Informatics／Graduate_School_of_Informatics`,
        image: `情報学部／情報学研究科_thumbnail.png`,
      },
      {
        templateKey: `department`,
        name: `School of Law / Graduate School of Law`,
        slug: `en/School_of_Law／Graduate_School_of_Law`,
        image: `法学部／法学研究科_thumbnail.png`,
      },
      {
        templateKey: `department`,
        name: `School of Medicine / Graduate School of Medicine`,
        slug: `en/School_of_Medicine／Graduate_School_of_Medicine`,
        image: `医学部／医学系研究科_thumbnail.png`,
      },
      {
        templateKey: `department`,
        name: `School of Science / Graduate School of Science`,
        slug: `en/School_of_Science／Graduate_School_of_Science`,
        image: `理学部／理学研究科_thumbnail.png`,
      },
      {
        templateKey: `department`,
        name: `School of Letters / Graduate School of Letters`,
        slug: `en/School_of_Letters／Graduate_School_of_Letters`,
        image: `文学部／人文学研究科_thumbnail.png`,
      },
    ],
  },
  plugins: [
    // {
    //   // Google Analytics 4
    //   resolve: "gatsby-plugin-google-gtag",
    //   options: {
    //     trackingIds: ["G-9QZ85H0JKY"],
    //     pluginConfig: {
    //       head: true,
    //     },
    //   },
    // },
    {
      // Google Tag Manager
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-KCHQ33J6",
      },
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img`,
        name: "images",
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages/specials`,
        name: "special",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-audio",
            options: {
              preload: "auto",
              loop: false,
              controls: true,
              muted: false,
              autoplay: false,
            },
          },
          `gatsby-remark-responsive-iframe`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              quality: 100,
            },
          },
          `gatsby-remark-lazy-load`,
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: 0,
              icon: false,
              className: `custom-class`,
              maintainCase: true,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-lunr`,
      options: {
        languages: [{ name: "ja" }],
        // Fields to index. If store === true value will be stored in index file.
        // Attributes for custom indexing logic. See https://lunrjs.com/docs/lunr.Builder.html for details
        fields: [
          { name: "id", store: true },
          { name: "title", store: true, attributes: { boost: 20 } },
          { name: "lecturer", store: true, attributes: { boost: 10 } },
          { name: "department", store: true, attributes: { boost: 10 } },
          { name: "body", store: true },
          { name: "term", store: true },
          { name: "target", store: true },
          { name: "classes", store: true },
          { name: "credit", store: true },
          { name: "html", store: true }, //何のデータ？
          { name: "path", store: true }, //何のデータ？
          { name: "tags", store: true, attributes: { boost: 10 } },
        ],
        // How to resolve each field's value for a supported node type
        resolvers: {
          // For any node of type MarkdownRemark, list how to resolve the fields' values
          MarkdownRemark: {
            id: (node) => node.id,
            title: (node) => node.frontmatter.title,
            lecturer: (node) => node.frontmatter.lecturer,
            department: (node) => node.frontmatter.department,
            body: (node) => node.frontmatter.body,
            term: (node) => node.frontmatter.term,
            target: (node) => node.frontmatter.target,
            classes: (node) => node.frontmatter.classes,
            credit: (node) => node.frontmatter.credit,
            html: (node) => node.html, //何のデータ？
            path: (node) => node.fields.slug, //何のデータ？
            tags: (node) => node.frontmatter.tags,
          },
        },
      },
    },
    {
      resolve: "gatsby-plugin-purgecss", // purges all unused/unreferenced css rules
      options: {
        develop: false, // Activates purging in npm run develop
        purgeOnly: ["/all.sass"], // applies purging only on the bulma css file
      },
    }, // must be after other CSS plugins
    {
      resolve: "gatsby-plugin-breadcrumb",
      options: {
        useAutoGen: true,
        // 英語版と日本語版で切り分ける方法がないので共通でHome
        autoGenHomeLabel: "Home",
        // crumbLabelUpdates: optional, update specific crumbLabels in the path
        // 日本語ページのみパンくずリストを日本語化するため必要
        crumbLabelUpdates: [
          { pathname: "/about", crumbLabel: "名大の授業について" },
          { pathname: "/apply", crumbLabel: "サポートスタッフ募集" },
          { pathname: "/courses", crumbLabel: "授業一覧" },
          { pathname: "/department", crumbLabel: "学部／研究科一覧" },
          { pathname: "/faq", crumbLabel: "FAQ(よくある質問)" },
          { pathname: "/form", crumbLabel: "お問い合わせ" },
          { pathname: "/farewell", crumbLabel: "最終講義" },
          { pathname: "/forteacher", crumbLabel: "教員の方へ" },
          { pathname: "/links", crumbLabel: "リンク集" },
          { pathname: "/news", crumbLabel: "お知らせ" },
          { pathname: "/opencampus", crumbLabel: "オープンキャンパス" },
          { pathname: "/relay", crumbLabel: "ラジオ公開講座" },
          { pathname: "/research", crumbLabel: "名大の研究指導" },
          { pathname: "/specials", crumbLabel: "過去の特集ページ" },
          { pathname: "/tags", crumbLabel: "タグ一覧" },
          { pathname: "/words", crumbLabel: "用語解説" },
          { pathname: "/topics", crumbLabel: "TOPICS" },
          { pathname: "/search", crumbLabel: "講義検索" },
          { pathname: "/ranking", crumbLabel: "人気講義" },
        ],
      },
    },
    "gatsby-plugin-sitemap",
    // "gatsby-plugin-netlify", // make sure to keep it last in the array
    `gatsby-plugin-twitter`,
    {
      resolve: `gatsby-plugin-decap-cms`,
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://ocw.nagoya-u.jp",
        sitemap: "https://ocw.nagoya-u.jp/sitemap-index.xml",
        policy: [{ userAgent: "*", disallow: "/admin/", allow: "/" }],
      },
    },
  ],
  // for avoiding CORS while developing Netlify Functions locally
  // read more: https://www.gatsbyjs.org/docs/api-proxy/#advanced-proxying
  // Netlify関連なのでとりあえずコメントアウト　#1119
  // developMiddleware: (app) => {
  //   app.use(
  //     "/.netlify/functions/",
  //     createProxyMiddleware({
  //       target: "http://localhost:9000",
  //       pathRewrite: {
  //         "/.netlify/functions/": "",
  //       },
  //     })
  //   );
  // },
};
