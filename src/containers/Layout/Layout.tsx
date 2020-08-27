import React, {Component} from "react";
import Heading from "../../components/Navbar/Heading"

import classes from "./Layout.module.css";
class Layout extends Component {
    
    render(){

        return(
            <div className={classes.body}>
                <Heading />
                <hr />
                <main className={classes.content}>{this.props.children}</main>
         
            </div>
        )
    }
}
export default Layout