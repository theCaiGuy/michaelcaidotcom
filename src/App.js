import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Welcome extends Component {
  render() {
    return (
      <div class = "Welcome-page">
        <h1 class = "Top-text">Michael Cai</h1>
        <img class = "Round-image" src = { require('./Photos/me.jpg') } width = "400" height = "400"/>
        <p class = "Top-infotext">CS Major @ Stanford University</p>
      </div>
    );
  }
}

class Introduction extends Component {
  render() {
    return (
      <div class = "Section">
        <h1 class = "Header-text">An Introduction</h1>
      </div>
    );
  }
}

class Qualifications extends Component {
  render() {
    return (
      <div class = "Section">
        <h1 class = "Header-text">Places I've Learned</h1>
        <h1 class = "Header-text">Places I've Worked</h1>
      </div>
    );
  }
}

class Contact extends Component {
  render() {
    return (
      <div class = "Section">
        <h1 class = "Header-text">Contact Me</h1>
        <h1 class = "Header-text">Find Me Online</h1>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <body>
        <Welcome/>
        <Introduction/>
        <Qualifications/>
        <Contact/>
      </body>
    );
  }
}

export default App;
