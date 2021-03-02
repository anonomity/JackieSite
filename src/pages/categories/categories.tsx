import React from "react";
import { Link } from "gatsby";
import classes from "./category.module.css";
export interface ICategoryProps {
  data: { allMdx: { edges: any } };
}

const Categories = ({ data }: ICategoryProps) => {
  const { edges } = data.allMdx;
  return (
    <div
      style={{
        marginTop: 100,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      {edges.map((edge) => {
        const { frontmatter } = edge.node;
        return (
          <Link
            key={frontmatter.title}
            to={frontmatter.path}
            style={{ textDecoration: "none" }}
          >
            <h2>{frontmatter.category}</h2>
          </Link>
        );
      })}
    </div>
  );
};

export default Categories;
