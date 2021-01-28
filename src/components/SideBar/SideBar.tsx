import React, { Component } from "react";
import classes from "./SideBar.module.css";
import { Link } from "gatsby";
class SideBar extends Component {
  render() {
    return (
      <div className={classes.SideBar}>
        <Link to="/blog" className={classes.SideItems}>
          Blog
        </Link>
        <Link to="/aboutme" className={classes.SideItems}>
          About Me
        </Link>
        <Link to="/projects" className={classes.SideItems}>
          Projects
        </Link>
      </div>
    );
  }
}
export default SideBar;
