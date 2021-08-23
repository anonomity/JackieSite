import React, { FC, useState } from "react";
import classes from "./Heading.module.css";
import icon from "../../images/hbgr.svg";
import { Link } from "gatsby";
import SideBar from "../SideBar/SideBar";
import Twitch from "../../images/twitch.png";
import Youtube from "../../images/youtube.png";
import { TechSticker } from "../TechSticker/TechSticker";
interface IHeadingState {
  sidebar: boolean;
}

interface IHeadingProps {
  title: string;
}
export const Heading: FC<IHeadingProps> = ({ title }) => {
  const [sidebar, setSideBar] = useState(false);

  return (
    <div className={classes.container}>
      <div className={classes.Details}>
        <div className={classes.LocCont}>
          <p className={classes.Location}>Location:</p>{" "}
          <p className={classes.Bold}>Miami / Poland</p>
        </div>
        <div className={classes.LocCont}>
          <a href="twitch.tv/jackie_codes">
            <p className={classes.Bold}>
              {" "}
              <img className={classes.social} src={Twitch} /> Twitch
            </p>
          </a>
          <a href="https://www.youtube.com/channel/UCVrC7eFcep-0gPw2foMvYcQ">
            <p className={classes.Bold}>
              {" "}
              <img className={classes.social} src={Youtube} /> Youtube
            </p>
          </a>
        </div>
      </div>
      <div className={classes.OuterTitleBox}>
        <Link to="/" className={classes.TitleNav}>
          <h1 className={classes.Titlebox}>
            <span className={classes.Title}>{title}</span>
            <span className={classes.HeadingSub}>
              Programmer, Educator, Creator
            </span>
          </h1>
        </Link>
      </div>
      <div className={classes.HamContainer}>
        <img
          src={icon}
          className={classes.Ham}
          alt="drop down menu icon"
          onClick={() => setSideBar(!sidebar)}
        />
        {sidebar ? <SideBar /> : null}
      </div>
      <div className={classes.NavCon}>
        {/* <Link to="/projects" className={classes.Nav}>
          Projects
        </Link> */}
        <Link to="/blog" className={classes.Nav}>
          Digital Garden
        </Link>
        <Link to="/aboutme" className={classes.Nav}>
          About
        </Link>
      </div>
    </div>
  );
};
