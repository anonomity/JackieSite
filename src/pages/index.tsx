import React from "react";

import Layout from "../components/layout/Layout";
import { graphql } from "gatsby";
import Categories, { ICategoryProps } from "./categories/categories";
import AboutMe from "./aboutme";
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
    <div>
      <AboutMe />
    </div>
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
