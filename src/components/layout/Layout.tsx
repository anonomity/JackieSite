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
    <div>
      <Heading title={data.site.siteMetadata.title} />
      <main>{PageProps.children} </main>
    </div>
  );
}

export default Layout;
