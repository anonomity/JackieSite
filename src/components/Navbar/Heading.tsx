import React, { Component } from "react"
import classes from "./Heading.module.css";
import icon from "../../images/hbgr.svg";
import {Link} from 'gatsby'
// import SideBar from "../SideBar/SideBar";


// export interface IHeadingState {
//     sidebar: boolean
// }

export interface IHeadingProps {
    title: string

}
class Heading extends Component<IHeadingProps, null> {
    // constructor(props: any) {
    //     super(props);
    //     this.state = {
    //         sidebar: false
    //     };
    // }
    // unMountSideBar = () => {
    //     let sideBar = this.state.sidebar
    //     this.setState({
    //         sidebar: !sideBar
    //     })
    // }
    render() {
        return (
            <div className={classes.container}>
                <div className={classes.Details}>
                    <div className={classes.LocCont}><p className={classes.Location}>Location:</p> <p className={classes.Bold}>Wrocław, Poland</p></div>
                    <div className={classes.LocCont}><p className={classes.Location}>Email:</p> <p className={classes.Bold}>jlauravelez@gmail.com</p></div>
                    
                    

                </div>
                <div className={classes.OuterTitleBox}>
                    <Link to="/" className={classes.TitleNav}>
                        <h1 className={classes.Titlebox}>
        <span className={classes.Title}>{this.props.title}</span>
                            <span className={classes.HeadingSub}>Programmer, Educator, Creator</span>

                        </h1>

                    </Link>
                </div>
                {/* <div className={classes.HamContainer}>
                    <img src={icon} className={classes.Ham} alt="drop down menu icon" onClick={this.unMountSideBar} />
                    {this.state.sidebar ? <SideBar /> : null}


                </div> */}
                <div className={classes.NavCon}>
                    <Link to="/projects" className={classes.Nav}>Projects</Link>
                    <Link to="/blog" className={classes.Nav}>Blog</Link>
                    <Link to="/" className={classes.Nav}>About Me</Link>

                </div>
                
            </div>
        )
    }
}

export default Heading