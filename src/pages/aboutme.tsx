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
          <TechSticker title={"NodeJS"} />,<TechSticker title={"Gatsby"} />,
          <TechSticker title={"MongoDB"} /> ,<TechSticker title={"Firebase"} />{" "}
          ,<TechSticker title={"Redux"} />, <TechSticker title={"REST"} />.
          Though my programming interests are not limited to Web Programming, I
          do also enjoy <TechSticker title={"Python"} /> when I want to
          visualize and manipulate data, or teach kids and adults programming!
          I've been teaching kids programming since late 2018.
          <h2>My Plants</h2>
          You may have noticed some cool plants hanging around the website. Well
          I really love those little guys. Nature and plants are a big part of
          my life, I love growing regular plants, hydroponic plants and or
          gardening. Nurturing something and watching it grow is such a relaxing
          therapy. And when I'm not getting my hands dirty with dirt or water
          nutriently, you'll sometimes find me on{" "}
          <TechSticker title={"Adobe Illustrator"} /> drawing some more. All my
          plants can be in .svg and they are free to{" "}
          <a href="google.com">download here</a>
        </div>
      </div>
    </Layout>
  );
}
export default AboutMe;
