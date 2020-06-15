import React, { Component } from "react";
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./containers/HomePage/HomePage";
import Courses from "./components/Courses";
import projects from "./components/Projects/Projects";
import crypto from "./components/Projects/ProjectComp/ProjectApps/Crypto/Cryptography";
class App extends Component {
  render() {

    return (
      <BrowserRouter >
        <Route path="/" component={HomePage} />
        <Switch>
          <Route exact path="/courses" component={Courses} />
          <Route exact path="/projects" component={projects} />
          <Route exact path="/projects/crypto" component={crypto} />
        </Switch>
      </BrowserRouter>
    );
  }


}
export default App;
