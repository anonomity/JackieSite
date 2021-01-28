import React from "react";

import Layout from "../components/layout/Layout";
import { graphql } from "gatsby";
import Posts, { IPostProps } from "../components/posts";

export interface IBlogProps {
  data: {
    allMdx: {
      edges: { node: { frontmatter: { title: string; path: string } } };
    };
  };
}

const Blog = ({ data }: IPostProps) => {
  return (
    <Layout>
      <div style={{ position: "relative", left: 0, marginBottom: "50px" }}>
        <Posts data={data} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query BlogQuery {
    allMdx {
      edges {
        node {
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`;
export default Blog;
