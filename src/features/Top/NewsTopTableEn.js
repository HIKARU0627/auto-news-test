import React from "react";
import { Link, graphql, StaticQuery } from "gatsby";
import styled from "styled-components";

const NewsTopTableEn = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;

  const switchType = (type) => {
    switch (type) {
      case "class":
        return <div className="news-list news-class">Course</div>;
      case "topics":
        return <div className="news-list news-topics">Featured</div>;
      case "farewell":
        return <div className="news-list news-farawell">退職講義</div>;
      case "special":
        return <div className="news-list news-special">特別講義</div>;
      default:
        return <div className="news-list news-default">Other</div>;
    }
  };

  const switchVisible = (visible, title, slug, link) => {
    if (visible) {
      return (
        <div>
          <Link to={`${slug}`}>{title}</Link>
        </div>
      );
    } else if (link) {
      return (
        <div>
          <Link to={`${link}`}>{title}</Link>
        </div>
      );
    } else {
      return <div>{title}</div>;
    }
  };

  return (
    <div>
      <table className="table is-hoverable">
        <tbody>
          {posts &&
            posts.map(({ node: post }) => (
              <tr className="is-size-6" key={post.id}>
                <TdDate>
                  <div>{post.frontmatter.date}</div>
                </TdDate>
                <TdType>{switchType(post.frontmatter.type)}</TdType>
                <TdContents>
                  {switchVisible(
                    post.frontmatter.visible,
                    post.frontmatter.title,
                    post.fields.slug,
                    post.frontmatter.link
                  )}
                </TdContents>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

const TdDate = styled.td`
  width: 15%;
  div {
    text-align: center;
  }
`;

const TdType = styled.td`
  width: 15%;
  div {
    text-align: center;
  }
`;

const TdContents = styled.td`
  width: 70%;
`;

// export default () => (
const NewsTopTableEnquery = () => (
  <StaticQuery
    query={graphql`
      query NewsTopTableEnQuery {
        allMarkdownRemark(
          sort: { frontmatter: { date: DESC } }
          filter: { frontmatter: { templateKey: { eq: "news-en" } } }
          limit: 3
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                templateKey
                title
                type
                link
                visible
                date(formatString: "YYYY.MM.DD")
                description
              }
            }
          }
        }
      }
    `}
    render={(data) => <NewsTopTableEn data={data} />}
  />
);

export default NewsTopTableEnquery;
