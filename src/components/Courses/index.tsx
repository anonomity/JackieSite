import React, { Component } from 'react';
import classes from "./Courses.module.css";
class Courses extends Component {


    render() {
        return (
            <div className={classes.CourseApp}>
                
                <h1>Courses</h1>
                <ul>
                    <li>Python For Beginners</li>
                </ul>
            </div>
        );
    }
}


export default Courses;
