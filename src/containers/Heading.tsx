import React, { Component } from "react"
import classes from "./Heading.module.css"
import icon from "../assets/hbgr.svg";
class Heading extends Component {
    render() {
        return (
            <div className={classes.container}>
                <p className={classes.Location}>Location: <p className={classes.Bold}>Wrocław, Poland</p></p>
                <p className={classes.Title}>JACKIE VELEZ</p>

                <img src={icon} className = {classes.Ham} alt="drop down menu icon" />
            </div>
        )
    }
}

export default Heading