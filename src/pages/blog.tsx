import React from "react";

import Layout from "../components/layout/Layout";
import { graphql } from "gatsby";
import Posts, { IPostProps } from "../components/posts";

export interface IBlogProps {
  data: {
    allMdx: {
      edges: {
        node: {
          frontmatter: {
            title: string;
            path: string;
            status: string;
            date: string;
          };
        };
      };
    };
  };
}

const Blog = ({ data }: IPostProps) => {
  return (
    <Layout>
      <Posts data={data} />
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
            status
            date
          }
        }
      }
    }
  }
`;
export default Blog;
