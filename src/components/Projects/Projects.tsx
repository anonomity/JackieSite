import React, { PureComponent } from 'react';
import classes from "./Project.module.css";
import ProjectComp from "./ProjectComp/ProjectComp";
import enigma from "../../images/enigma.jpg";
import catty from "../../images/catlogo.svg";
class Projects extends PureComponent {

    render() {
        return (
            <div className={classes.ProjectApp}>
                <ProjectComp img={catty} alt="Catty Website project" link="/projects/cattycornerclubhouse"  title="Catty Website"/>
                <ProjectComp img={enigma} alt="crypto project" link="/projects/crypto" title="Ceasar Crypto Cipher"/>
                {/* <ProjectComp img={nodes} alt="crypto project" link="/projects/nodes"  title="Nodes Projects"/> */}
                {/* <ProjectComp img={stones} alt="stone project" link="/projects/stones"  title="Stone Project"/> */}
                {/* <ProjectComp img={image} alt="crypto project" link="/projects/crypto"  title=""/> */}
                {/* <ProjectComp img={image} alt="crypto project" link="/projects/crypto"  title=""/> */}
            </ div>
        );
    }
}


export default Projects;
