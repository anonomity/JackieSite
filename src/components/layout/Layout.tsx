import React, { Component } from "react";

import { PageProps, useStaticQuery, graphql } from "gatsby";
import { Heading } from "../Navbar/Heading";

type DataProps = {
  children: Node;
};

type DataState = {};

function Layout(DataProps) {
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
      <main>{DataProps.children} </main>
    </div>
  );
}

export default Layout;
