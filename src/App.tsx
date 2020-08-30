import React, { Component } from "react";
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./containers/Layout/Layout";
import projects from "./components/Projects/Projects";
import Blog from "./components/Blog/Blog";
import AboutMe from "./containers/About_Me/AboutMe"
import Nodes from "./components/Projects/ProjectComp/ProjectApps/Nodes/Nodes";
import crypto from "./components/Projects/ProjectComp/ProjectApps/Crypto/Cryptography";
import Stones from "./components/Projects/ProjectComp/ProjectApps/Stones/Stone";
class App extends Component {
  render() {
    const Catty = () =>{
         return <a href="http://www.cattycornerclubhouse.com">cattycornerclubhouse</a>
      }
     
          
    return (
      <BrowserRouter >
      
       <Layout > 
        <Switch>
          <Route path="/projects/crypto" component={crypto} /> 
          <Route path ="/projects/nodes" component={Nodes} />
          <Route path ="/projects/stones" component={Stones} />
          <Route path ="/projects/cattycornerclubhouse" component={Catty} />
          <Route path="/projects" component={projects} />
          <Route path="/blog" component={Blog} />
          <Route path="/" component={AboutMe} />
        </Switch>
        </ Layout>
      </BrowserRouter>
    );
  }


}
export default App;
