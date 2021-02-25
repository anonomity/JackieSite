import React from "react";
import { Link } from "gatsby";

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
            <div
              style={{
                color: "black",
                fontSize: 20,
                border: "1px solid #ccc",
                display: "flex",
                flexDirection: "column",
                padding: 20,
                width: 200,
                height: 150,
              }}
            >
              <p style={{ fontWeight: "bold", textAlign: "center" }}>
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
