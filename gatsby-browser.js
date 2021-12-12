// Wraps the whole Gatsby element
import React from "react";
import { MDXProvider } from "@mdx-js/react";

import Activity from "./src/components/ui/Activity";

// const MyH2 = (props) => <Activity {...props} />;
const MyH3 = (props) => (
  <p style={{ fontWeight: "bold", fontSize: 22 }} {...props} />
);
const MyH2 = (props) => (
  <p style={{ fontWeight: "bold", fontSize: 25 }} {...props} />
);
const P = (props) => <p style={{ fontSize: 18, lightHeight: 3 }} {...props} />;
const IMG = (props) => (
  <img
    style={{
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      marginBottom: "50px",
    }}
    {...props}
  />
);
// const OL = (props) => <ol style={{ listStylePosition: "inside" }} {...props} />;

// #TODO: Make Rules / Explaining Activity Component

const components = {
  // h2: MyH2,
  h3: MyH3,
  p: P,
  // ol: OL,
  img: IMG,
  h2: MyH2,
};

export const wrapRootElement = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>;
};
