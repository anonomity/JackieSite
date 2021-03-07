import React from "react";

import Layout from "../components/layout/Layout";
import { graphql } from "gatsby";
import Categories, { ICategoryProps } from "./categories/categories";

export interface IIndexProps {
  data: {
    allMdx: {
      edges: {
        node: {
          frontmatter: {
            title: string;
            path: string;
            status: string;
            date: string;
            category: string;
          };
        };
      };
    };
  };
}

const App = ({ data }: ICategoryProps) => {
  return (
    <Layout>
      <p>not a real page</p>
    </Layout>
  );
};

export const query = graphql`
  query CategoryQuery {
    allMdx {
      edges {
        node {
          frontmatter {
            title
            path
            status
            date
            category
          }
        }
      }
    }
  }
`;
export default App;
