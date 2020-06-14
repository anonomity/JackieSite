import React, { Component } from "react"
import classes from "./Heading.module.css";
import icon from "../assets/hbgr.svg";
import SideBar from "../components/SideBar/SideBar";
import {NavLink} from "react-router-dom";
class Heading extends Component {
    state = {
        sidebar: false
    }

    unMountSideBar = () => {
        let sideBar = this.state.sidebar
        this.setState({
            sidebar: !sideBar
        })
    }
    render() {
        return (
            <div className={classes.container}>
                <p className={classes.Location}>Location: <p className={classes.Bold}>Wrocław, Poland</p></p>
                <div className={classes.OuterTitleBox}>
                    <h1 className={classes.Titlebox}>
                        <span className={classes.Title}>JACKIE VELEZ</span>
                        <span className={classes.HeadingSub}>Programmer, Educator, Creator</span>

                    </h1>
                </div>
                <div className={classes.HamContainer}>
                    <img src={icon} className={classes.Ham} alt="drop down menu icon"  onClick={this.unMountSideBar}/>
                   {this.state.sidebar ? <SideBar /> : null} 
                   

                </div>
                <div className={classes.NavCon}>
                    <NavLink to="/projects" className={classes.Nav}>Projects</NavLink>
                    <NavLink to="/courses" className={classes.Nav}>Courses</NavLink>
                    <NavLink to="/blog" className={classes.Nav}>Blog</NavLink>
                    <NavLink to="/students" className={classes.Nav}>Students</NavLink>

                </div>
            </div>
        )
    }
}

export default Heading