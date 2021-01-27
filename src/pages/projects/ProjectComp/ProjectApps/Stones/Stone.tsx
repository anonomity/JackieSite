import React, { Component } from "react";
import classes from "./Stone.module.css";

class Stone extends Component {
    render() {
        return (
            <div className={classes.svg_wrapper}>
                <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 360 308"
                    >
                         <ellipse className={classes.Stone1} cx="130.9" cy="60.3" rx="70.8" ry="30.7"/>
                        <ellipse className={classes.Stone2} cx="136.9" cy="131.3" rx="107.8" ry="39.7"/>
                    <ellipse className={classes.Stone1} cx="137.6" cy="239.6" rx="137.6" ry="68.4" />
                </svg> </div>
        )
    }
}

export default Stone