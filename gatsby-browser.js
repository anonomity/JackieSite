// Wraps the whole Gatsby element
import React from "react";
import { MDXProvider } from "@mdx-js/react";

import Activity from "./src/components/ui/Activity";

const MyH2 = (props) => <Activity {...props} />;
const MyH3 = (props) => <h3 style={{ textAlign: "center" }} {...props} />;
const P = (props) => <p style={{ textAlign: "center" }} {...props} />;
const OL = (props) => (
  <ol style={{ textAlign: "center", listStylePosition: "inside" }} {...props} />
);

// #TODO: Make Rules / Explaining Activity Component

const components = {
  h2: MyH2,
  h3: MyH3,
  p: P,
  ol: OL,
};

export const wrapRootElement = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>;
};
