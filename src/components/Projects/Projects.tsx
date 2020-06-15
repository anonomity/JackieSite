import React, { PureComponent } from 'react';
import classes from "./Project.module.css"
import ProjectComp from "./ProjectComp/ProjectComp";
import image from "../../assets/hbgr.svg"
import enigma from "../../assets/enigma.jpg"
class Projects extends PureComponent {

    render() {
        return (
            <div className={classes.ProjectApp}>
                <ProjectComp img={enigma} alt="crypto project" link="/projects/crypto" title="Ceasar Crypto Cipher"/>
                <ProjectComp img={image} alt="crypto project" link="/projects/crypto"  title="Ceasar Crypto Cipher"/>
                <ProjectComp img={image} alt="crypto project" link="/projects/crypto"  title="Ceasar Crypto Cipher"/>
                <ProjectComp img={image} alt="crypto project" link="/projects/crypto"  title="Ceasar Crypto Cipher"/>
                <ProjectComp img={image} alt="crypto project" link="/projects/crypto"  title="Ceasar Crypto Cipher"/>
                <ProjectComp img={image} alt="crypto project" link="/projects/crypto"  title="Ceasar Crypto Cipher"/>
            </ div>
        );
    }
}


export default Projects;
