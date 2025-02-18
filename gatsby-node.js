const _ = require("lodash");
const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");
const { fmImagesToRelative } = require("gatsby-remark-relative-images-v2");

let fs = require("fs"); // js-search用に追加 #391

// 全文検索用に制御文字を削除する
// eslintのエラーが出てしまう（後でルールを追加する）
const replaceControlCharactersAndNull = (str, isFeaturedimageURL = false) => {
  if (!str) {
    if (isFeaturedimageURL)
      return "https://ocw.nagoya-u.jp/img/common/default_thumbnail.png";
    return "";
  }
  return str.replace(/[\x00-\x1F\x7F-\x9F]/g, "");
};

const gatsbyToSearchData = (edge) => {
  return {
    slug: replaceControlCharactersAndNull(edge.node.fields.slug),
    title: replaceControlCharactersAndNull(edge.node.frontmatter.title),
    category: replaceControlCharactersAndNull(
      edge.node.frontmatter.templateKey
    ),
    department: replaceControlCharactersAndNull(
      edge.node.frontmatter.department
    ),
    lecturer: replaceControlCharactersAndNull(edge.node.frontmatter.lecturer),
    term: replaceControlCharactersAndNull(edge.node.frontmatter.term),
    date: new Date(edge.node.frontmatter.date),
    featuredimageURL: replaceControlCharactersAndNull(
      edge.node.frontmatter.featuredimageURL,
      true
    ),
    course_id: replaceControlCharactersAndNull(edge.node.frontmatter.course_id),
    content: replaceControlCharactersAndNull(edge.node.rawMarkdownBody),
    language: edge.node.frontmatter.templateKey === "courses-en" ? "en" : "ja",
  };
};

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              department
              category
              course_id
              tags
              date
              templateKey
              title
              lecturer
              term
              featuredimageURL
            }
            html
            rawMarkdownBody
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach((e) => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    const posts = result.data.allMarkdownRemark.edges;

    // ------------- for js-search #391　-------------
    const search = [];
    const courseData = [];
    result.data.allMarkdownRemark.edges.forEach((edge) => {
      let temp = edge.node.frontmatter.templateKey;
      if (temp === "courses" || temp === "farewell" || temp === "courses-en") {
        search.push({
          slug: edge.node.fields.slug,
          title: edge.node.frontmatter.title,
          templateKey: edge.node.frontmatter.templateKey,
          date: edge.node.frontmatter.date,
          department: edge.node.frontmatter.department,
          lecturer: edge.node.frontmatter.lecturer,
          term: edge.node.frontmatter.term,
        });
      }
      // elasticsearch用検索データを抽出
      if (temp === "courses" || temp === "farewell" || temp === "courses-en") {
        courseData.push(gatsbyToSearchData(edge));
      }
    });
    let res = search; // make search immutable
    res.sort((a, b) => {
      if (a.date > b.date) return -1;
      else return 1;
    });
    try {
      fs.writeFileSync(
        "static/search.json",
        JSON.stringify(res, null, 7),
        "utf-8"
      );
      console.log(
        "%cNUOCW",
        "color: #006e4f",
        "successfully write static/search.json"
      );
    } catch (err) {
      console.log(
        "%cNUOCW",
        "color: #006e4f",
        "failed to write static/search.json"
      );
    }

    // elasticsearchのbulk(データを一括で追加する)処理用のjson配列を生成
    const insertCourses = courseData.flatMap((course) => [
      {
        index: {
          _index: "test_index",
          _type: "_doc",
          _id: `${course.language}_${course.course_id}`,
        },
      },
      course,
    ]);

    try {
      fs.writeFileSync("static/elasticsearch_data.json", "", "utf-8");
      insertCourses.map((data) => {
        fs.appendFileSync(
          "static/elasticsearch_data.json",
          JSON.stringify(data) + "\n",
          "utf-8"
        );
      });

      console.log(
        "%cNUOCW",
        "color: #006e4f",
        "successfully write static/elasticsearch_data.json"
      );
    } catch (err) {
      console.log(
        "%cNUOCW",
        "color: #006e4f",
        "failed to write static/elasticsearch_data.json"
      );
    }
    // ------------- for js-search #391　--------------

    posts.forEach((edge) => {
      const id = edge.node.id;
      const department = edge.node.frontmatter.department;
      const category = edge.node.frontmatter.category;
      createPage({
        path: edge.node.fields.slug,
        category: edge.node.frontmatter.category,
        tags: edge.node.frontmatter.tags,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id,
          department,
          category,
        },
      });
    });

    // Tag pages:
    let tags = [];
    let tags_en = [];
    // Iterate through each post, putting all found tags into `tags`
    posts.forEach((edge) => {
      if (
        _.get(edge, `node.frontmatter.tags`) &&
        edge.node.frontmatter.templateKey !== "courses-en"
      ) {
        tags = tags.concat(edge.node.frontmatter.tags);
      } else {
        tags_en = tags_en.concat(edge.node.frontmatter.tags);
      }
    });
    // Eliminate duplicate tags
    tags = _.uniq(tags);
    tags_en = _.uniq(tags_en);

    // Make tag pages
    tags.forEach((tag) => {
      const tagPath = `/tags/${_.kebabCase(tag)}/`;

      createPage({
        path: tagPath,
        component: path.resolve(`src/templates/tags.js`),
        context: {
          tag,
        },
      });
    });

    tags_en.forEach((tag) => {
      const tagPath_en = `/en/tags/${_.kebabCase(tag)}/`;

      createPage({
        path: tagPath_en,
        component: path.resolve(`src/templates/tags-en.js`),
        context: {
          tag,
        },
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node); // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value, //value: link ? link : value//linkを持つmdファイルはその値をpathとする.
    });
  }
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@common": path.resolve(__dirname, "src/common/"),
        "@features": path.resolve(__dirname, "src/features/"),
      },
    },
  });
};
