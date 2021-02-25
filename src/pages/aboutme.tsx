import React from "react";
import classes from "./aboutme.module.css";
import { TechSticker } from "../components/TechSticker/TechSticker";
import Layout from "../components/layout/Layout";
import js from "../images/techStack/js.png";
import ts from "../images/techStack/ts.png";
import py from "../images/techStack/python.jpeg";
import node from "../images/techStack/nodejs.jpg";
import react from "../images/techStack/react.png";

function AboutMe() {
  return (
    <Layout>
      <div className={classes.imgbox}>
        <img src={js} alt="js" className={classes.img} />
        <img src={py} alt="py" className={classes.img} />
        <img src={node} alt="node" className={classes.img} />
        <img src={react} alt="react" className={classes.img} />
        <img src={ts} alt="ts" className={classes.img} />
      </div>
      <h1 style={{ textAlign: "center" }}>About Moi</h1>
      <div className={classes.AboutBox}>
        <div className={classes.text}>
          <h2>Tech Background</h2>
          Hello, Jackie here. Hope you enjoy my little web page, I had a lot of
          fun programming and designing it. When making this website I stressed
          on designing it myself and not using external libraries for the UI.
          Technologies used are:
          <TechSticker title={"React"} /> and{" "}
          <TechSticker title={"Typescript"} />. I really enjoy programming with
          React because I'm able to visually express myself and concepts through
          interaction. I started web programming in the beggining of 2019,
          though I wasn't super serious about it until January of 2020, since
          then I've been expanding my Front and Backend knowledge with
          technologies such as
          <TechSticker title={"NodeJS"} />, <TechSticker title={"Redux"} />,{" "}
          <TechSticker title={"REST"} />. Though my programming interests are
          not limited to Web Programming, I do also enjoy{" "}
          <TechSticker title={"Python"} /> when I want to visualize and
          manipulate data, or teach kids and adults programming! I've been
          teaching kids programming since late 2018.
          <br />
          <h2> Hobbies </h2>
          Currently I live in Poland, I was born in Medellin, Colombia and
          raised in Miami, Florida. I really enjoy traveling and learning from
          different cultures. I love reading books, Novels, Philosophy, Science,
          and Psychological books are my favorite. I also love music, from time
          to time I pick up the guitar or sit by the piano and just play until
          my soul feels more at peace. Recently I started making beats with FL
          Studio, still an amature but It's really fun nonetheless!
        </div>
      </div>
      ``
    </Layout>
  );
}
export default AboutMe;
