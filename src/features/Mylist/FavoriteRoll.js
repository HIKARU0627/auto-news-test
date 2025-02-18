import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import FavoriteCard from "./FavoriteCard";

const FavoriteRoll = (props) => {
  const { data } = props;
  const { edges: posts } = data.allMarkdownRemark;
  const [favedPosts, setFavedPosts] = useState([]);

  useEffect(() => {
    let favlist = JSON.parse(localStorage.getItem("nuocw-favlist")) || [];
    let favedPostsIni = [];
    for (let i = 0; i < favlist.length; i++) {
      favedPostsIni.unshift(posts.find((post) => post.node.id === favlist[i]));
    }
    setFavedPosts(favedPostsIni);
  }, []);

  return (
    <div className="tile is-ancestor is-vertical is-align-items-center">
      <FavoriteSummary length={favedPosts.length} />
      {favedPosts &&
        favedPosts.map(({ node: post }) => (
          <FavoriteCard post={post} key={post.id} />
        ))}
    </div>
  );
};

const FavoriteSummary = ({ length }) => {
  if (length === 0) {
    return <p> マイリストに登録されている講義はありません。 </p>;
  } else {
    return <></>;
  }
};

FavoriteRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
    file: PropTypes.object,
  }),
};

const FavoriteRollquery = () => (
  <StaticQuery
    query={graphql`
      query FavoriteRollQuery {
        allMarkdownRemark(
          sort: { frontmatter: { course_id: DESC } }
          filter: {
            frontmatter: { templateKey: { in: ["courses", "courses-en"] } }
          }
        ) {
          edges {
            node {
              excerpt(pruneLength: 140, truncate: true)
              id
              fields {
                slug
              }
              frontmatter {
                templateKey
                department
                title
                lecturer
                term
                date(formatString: "YYYY/MM/DD")
                description
                featuredpost
                featuredimage {
                  childImageSharp {
                    gatsbyImageData(
                      width: 480
                      quality: 100
                      layout: CONSTRAINED
                    )
                  }
                }
                featuredimageURL
              }
            }
          }
        }
      }
    `}
    render={(data) => <FavoriteRoll data={data} />}
  />
);

export default FavoriteRollquery;
