import React, { Component } from "react";
import classes from "./SideBar.module.css";
import { NavLink } from "react-router-dom"
class SideBar extends Component {
    render() {
        return (
            <div className={classes.SideBar}>
                <NavLink to="/blog" className={classes.SideItems}>Blog</NavLink>
                <NavLink to="/students" className={classes.SideItems}>Students</NavLink>
                <NavLink to="/projects" className={classes.SideItems}>Projects</NavLink>
            </div>
        )
    }
}
export default SideBar