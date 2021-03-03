import React from "react";
import { Link } from "gatsby";
import classes from "./posts.module.css";
export interface IPostProps {
  data: { allMdx: { edges: any } };
}

const Posts = ({ data }: IPostProps) => {
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
            <div className={classes.box}>
              <p
                style={{
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {frontmatter.title} {frontmatter.status}
              </p>

              <p style={{ color: "#ccc", textAlign: "center" }}>
                {frontmatter.date}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Posts;
