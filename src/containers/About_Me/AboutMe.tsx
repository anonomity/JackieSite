import React, { Component } from "react";
import classes from "./AboutMe.module.css"
import jack from "../../assets/Jack.jpg"
import {TechSticker} from "../../components/TechSticker/TechSticker";
class AboutMe extends Component {

    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <h1 >About Moi</h1>
                <div className={classes.AboutBox}>
                   
                   
                        <p className={classes.text}>
                            <h2>Tech Background</h2>
                            Hello, Jackie here. Hope you enjoy my little web page, I had a lot of fun programming and designing it. When making this website I stressed on 
                            designing it myself and not using external libraries for the UI. Technologies used are: 
                            <TechSticker title={"React"}/> and <TechSticker title={"Typescript"}/>. I really enjoy programming with React because I'm
                            able to visually express myself and concepts through interaction. I started web programming in the beggining of 2019, though I wasn't 
                            super serious about it until January of 2020, since then I've been expanding my Front and Backend knowledge with technologies such as 
                            <TechSticker title={"NodeJS"} />, <TechSticker title={"Redux"} />, <TechSticker title={"REST"} />.
                            Though my programming interests are not limited to Web Programming, I do also enjoy <TechSticker title={"Python"}/> when I want to 
                            visualize and manipulate data, or teach kids and adults programming! I've been teaching kids programming since late 2018. 
                            <br />
                            <h2> Hobbies </h2>
                            Currently I live in Poland, I was born in Medellin, Colombia and raised in Miami, Florida. I really enjoy traveling and learning from different 
                            cultures. I love reading books, Novels, Philosophy, Science, and Psychological books are my favorite. I also love music, from time to time I
                            pick up the guitar or sit by the piano and just play until my soul feels more at peace. Recently I started making beats with FL Studio, still
                            an amature but It's really fun nonetheless! 
                                
                                
                        </p>
                   
                </div>

                
               ``
            </div>
        )
    }
}
export default AboutMe
