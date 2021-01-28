import React, { FC, useState } from "react";
import classes from "./Heading.module.css";
import icon from "../../images/hbgr.svg";
import { Link } from "gatsby";
import SideBar from "../SideBar/SideBar";

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
          <p className={classes.Bold}>Wrocław, Poland</p>
        </div>
        <div className={classes.LocCont}>
          <p className={classes.Location}>Email:</p>{" "}
          <p className={classes.Bold}>jlauravelez@gmail.com</p>
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
        <Link to="/projects" className={classes.Nav}>
          Projects
        </Link>
        <Link to="/blog" className={classes.Nav}>
          Blog
        </Link>
        <Link to="/aboutme" className={classes.Nav}>
          About Me
        </Link>
      </div>
    </div>
  );
};
