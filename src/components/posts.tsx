import React from "react";
import { Link } from "gatsby";
import classes from "./posts.module.css";
export interface IPostProps {
  data: { allMdx: { edges: any } };
}

enum PostType {
  GameDev = "GameDev",
  WebDev = "WebDev",
  Python = "Python",
}

const Posts = ({ data }: IPostProps) => {
  let GameDev = [];
  let WebDev = [];
  let Python = [];

  const { edges } = data.allMdx;

  edges.map((post) => {
    if (post.node.frontmatter.category === PostType.GameDev) {
      console.log("it got in!");
      GameDev.push(post.node.frontmatter);
    } else if (post.node.frontmatter.category === PostType.Python) {
      console.log("it got in! Python");
      Python.push(post.node.frontmatter);
    } else if (post.node.frontmatter.category === PostType.WebDev) {
      WebDev.push(post.node.frontmatter);
    }
  });

  return (
    <div>
      <p className={classes.information}>
        So the three different rankings [🌱, 🌿, 🌳] are for the development of
        the post. When a post is new it gets the 🌱, it doesn't upgrade into 🌿
        untill I have all the research written down. The final stage of
        development 🌳 is achieved when I add all the pictures, and I organize
        the text and edit, the typos and style.
      </p>
      <div className={classes.postContainer}>
        <div className={classes.category}>
          <h3 className={classes.categoryTitle}>Game Dev </h3>
          {GameDev.map((frontmatter) => {
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

        <div className={classes.category}>
          <h3 className={classes.categoryTitle}>Python Articles </h3>
          {Python.map((frontmatter) => {
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
        <div className={classes.category}>
          <h3 className={classes.categoryTitle}> Web dev Articles</h3>
          {WebDev.map((frontmatter) => {
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
      </div>
    </div>
  );
};

export default Posts;
