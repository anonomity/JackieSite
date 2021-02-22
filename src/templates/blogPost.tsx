import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/Layout";
import { MDXRenderer } from "gatsby-plugin-mdx";

export interface ITemplateProps {
  data: { mdx: { frontmatter: { title: any }; body: any } };
}

const Template = ({ data }: ITemplateProps) => {
  const title = data.mdx.frontmatter.title;
  const body = data.mdx.body;
  return (
    <Layout>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      <MDXRenderer>{body}</MDXRenderer>
    </Layout>
  );
};

export const query = graphql`
  query($pathSlug: String!) {
    mdx(frontmatter: { path: { eq: $pathSlug } }) {
      body
      frontmatter {
        title
      }
    }
  }
`;

export default Template;
