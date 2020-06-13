import React, {Component} from "react";
import classes from "./SideBar.module.css";

class SideBar extends Component {
    render(){
        return(
            <div className={classes.SideBar}>
                <p>Blog</p>
                <p>Students</p>
                <p>Projects</p>
            </div>
        )
    }
}
export default SideBar