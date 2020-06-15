import React, { Component } from "react";
import classes from "./ProjectComp.module.css";
import { Link } from "react-router-dom";
export interface IProjectCompProps {
    img: string,
    alt: string,
    link: string,
    title: string
}

export interface IProjectCompState {

}

class ProjectComp extends Component<IProjectCompProps, IProjectCompState> {
    constructor(props: IProjectCompProps) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className={classes.Box} >
                <Link to={this.props.link} >
                    <img src={this.props.img} className={classes.image} alt={this.props.alt} />
                </Link>
                <p className={classes.Text}> {this.props.title}</p>
            </div>
        )
    }
}
export default ProjectComp