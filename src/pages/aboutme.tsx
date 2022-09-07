import React from "react";
import classes from "./aboutme.module.css";
import { TechSticker } from "../components/TechSticker/TechSticker";
import Layout from "../components/layout/Layout";
import unity from "../images/techStack/unity.png";
import ts from "../images/techStack/ts.png";
import py from "../images/techStack/python.jpeg";
import node from "../images/techStack/nodejs.jpg";
import react from "../images/techStack/react.png";
import hypatia1 from "../images/img1.jpg";
import hypatia2 from "../images/img2.jpg";
import hypatia3 from "../images/img3.jpg";
import hypatia4 from "../images/im4.jpg";

function AboutMe() {
  return (
    <Layout>
      <div className={classes.imgbox}>
        <img src={unity} alt="unity" className={classes.img} />
        <img src={py} alt="py" className={classes.img} />
        <img src={node} alt="node" className={classes.img} />
        <img src={react} alt="react" className={classes.img} />
        <img src={ts} alt="ts" className={classes.img} />
      </div>
      <h1 style={{ textAlign: "center" }}>Jackie Codes</h1>
      <div className={classes.AboutBox}>
        <div className={classes.text}>
          {/* <h2>Tech Background</h2>
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
          I've been teaching kids programming since late 2018. */}
          <h2 className={classes.centerText}>Hypatia</h2>
          Hypatia is a game I've been working on since May 2021. I'm developing
          Hypatia using <TechSticker title={"Godot"} />. I'm also doing the pixel art using{" "}
          <TechSticker title={"Aseprite"} />. Hypatia is a 2d action RPG set in
          the time of Ancient Greece. There is Greek Mythology incorporated in
          the game but the time is set to around 300 BC, in this game you will
          fight increasingly difficult mobs, get advice / quests from
          philosophers and get experience and levels affiliated to particular
          mythological godss.
          <img
            src={hypatia1}
            alt="hepheastus skillbook"
            className={classes.screenshot}
          />
          <img src={hypatia2} alt="cave" className={classes.screenshot} />
          <img
            src={hypatia3}
            alt="dialogue system"
            className={classes.screenshot}
          />
          <img src={hypatia4} alt="shop" className={classes.screenshot} />
        </div>
      </div>
      <div className={classes.space} />
    </Layout>
  );
}
export default AboutMe;
