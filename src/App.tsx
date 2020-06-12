import React, { Component } from 'react';
import './App.css';
import Heading from "./containers/Heading"; 
class App extends Component {
  render() {

    return (
      <div className="App">
        <header className="App-header">
        <Heading></Heading>
        </header>
      </div>
    );
  }


}
export default App;
