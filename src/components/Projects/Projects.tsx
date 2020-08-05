import React, { PureComponent } from 'react';
import classes from "./Project.module.css";
import ProjectComp from "./ProjectComp/ProjectComp";
import image from "../../assets/hbgr.svg";
import enigma from "../../assets/enigma.jpg";
import nodes from "../../assets/nodes.png";
import catty from "../../assets/catlogo.svg";
const stones =  require("../../assets/stones.JPG")
class Projects extends PureComponent {

    render() {
        return (
            <div className={classes.ProjectApp}>
                <ProjectComp img={enigma} alt="crypto project" link="/projects/crypto" title="Ceasar Crypto Cipher"/>
                <ProjectComp img={nodes} alt="crypto project" link="/projects/nodes"  title="Nodes Projects"/>
                <ProjectComp img={stones} alt="stone project" link="/projects/stones"  title="Stone Project"/>
                <ProjectComp img={catty} alt="Catty Website project" link="/projects/cattycornerclubhouse"  title="Catty Website"/>
                <ProjectComp img={image} alt="crypto project" link="/projects/crypto"  title=""/>
                <ProjectComp img={image} alt="crypto project" link="/projects/crypto"  title=""/>
            </ div>
        );
    }
}


export default Projects;
