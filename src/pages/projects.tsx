import React, { PureComponent } from "react";
import classes from "./Projects/Project.module.css";
import ProjectComp from "./Projects/ProjectComp/ProjectComp";
import enigma from "../images/enigma.jpg";
import catty from "../images/catlogo.svg";
import Layout from "../components/layout/Layout";

class Projects extends PureComponent {
  render() {
    return (
      <Layout>
        <div className={classes.ProjectApp}>
          <ProjectComp
            img={catty}
            alt="Catty Website project"
            link="/projects/cattycornerclubhouse"
            title="Catty Website"
          />
          <ProjectComp
            img={enigma}
            alt="crypto project"
            link="/projects/crypto"
            title="Ceasar Crypto Cipher"
          />
          {/* <ProjectComp img={nodes} alt="crypto project" link="/projects/nodes"  title="Nodes Projects"/> */}
          {/* <ProjectComp img={stones} alt="stone project" link="/projects/stones"  title="Stone Project"/> */}
          {/* <ProjectComp img={image} alt="crypto project" link="/projects/crypto"  title=""/> */}
          {/* <ProjectComp img={image} alt="crypto project" link="/projects/crypto"  title=""/> */}
        </div>
      </Layout>
    );
  }
}

export default Projects;
