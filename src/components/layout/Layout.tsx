import React from "react";

import { useStaticQuery, graphql } from "gatsby";
import { Heading } from "../Navbar/Heading";
import plant from "../../images/Plant.svg";
import Monstura from "../../images/Monstura.svg";
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
        <main style={{ marginBottom: "13vh" }}>{PageProps.children} </main>
        {/* <div
          style={{
            position: "fixed",
            bottom: 0,
            backgroundColor: "#fff",
            width: "100vw",
            height: "13vh",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <img
            src={plant}
            style={{ width: 120 }}
            alt="plant on the bottom of the screen"
          />
          <img
            src={Monstura}
            style={{
              width: 120,
            }}
            alt="plant on the bottom of the screen"
          />
        </div> */}
      </div>
    </>
  );
}

export default Layout;
