import React, {Component} from "react"
import classes from "./Heading.module.css"

class Heading extends Component {
    render(){
        return (
            <div className={classes.container}>
                <hr/>
                <h1>JACKIE VELEZ</h1>
            </div>
        )
    }
}

export default Heading