import React, { Component } from "react"
import classes from "./Heading.module.css";
import icon from "../../assets/hbgr.svg";
import SideBar from "../SideBar/SideBar";
import { NavLink } from "react-router-dom";

export interface IHeadingState {
    sidebar: boolean
}

export interface IHeadingProps {

}
class Heading extends Component<IHeadingProps, IHeadingState> {
    constructor(props: any) {
        super(props);
        this.state = {
            sidebar: false
        };
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
                <div className={classes.Details}>
                    <div className={classes.LocCont}><p className={classes.Location}>Location:</p> <p className={classes.Bold}>Wrocław, Poland</p></div>
                    <div className={classes.LocCont}><p className={classes.Location}>Email:</p> <p className={classes.Bold}>jlauravelez@gmail.com</p></div>
                    
                    

                </div>
                <div className={classes.OuterTitleBox}>
                    <NavLink to="/" className={classes.TitleNav}>
                        <h1 className={classes.Titlebox}>
                            <span className={classes.Title}>JACKIE VELEZ</span>
                            <span className={classes.HeadingSub}>Programmer, Educator, Creator</span>

                        </h1>

                    </NavLink>
                </div>
                <div className={classes.HamContainer}>
                    <img src={icon} className={classes.Ham} alt="drop down menu icon" onClick={this.unMountSideBar} />
                    {this.state.sidebar ? <SideBar /> : null}


                </div>
                <div className={classes.NavCon}>
                    <NavLink to="/projects" className={classes.Nav}>Projects</NavLink>
                    <NavLink to="/blog" className={classes.Nav}>Blog</NavLink>
                    <NavLink to="/" className={classes.Nav}>About Me</NavLink>

                </div>
                
            </div>
        )
    }
}

export default Heading