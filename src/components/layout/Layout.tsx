import React from "react";

import { useStaticQuery, graphql } from "gatsby";
import { Heading } from "../Navbar/Heading";

type DataProps = {
  children: Node;
};

type DataState = {};

function Layout(PageProps: { children: React.ReactNode }) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  console.log(data);
  return (
    <>
      <Heading title={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0.5rem 2rem 2rem`,
        }}
      >
        <main>{PageProps.children} </main>
      </div>
    </>
  );
}

export default Layout;
