import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Welcome extends Component {
  render() {
    return (
      <div class = "Welcome-page">
        <h1 class = "Top-text">Michael Cai</h1>
        <img class = "Round-image" src = { require('./Photos/me.jpg') }/>
        <p class = "Top-infotext">CS Major | Stanford University class of 2020</p>
      </div>
    );
  }
}

class Introduction extends Component {
  render() {
    return (
      <div class = "Section">
        <div class = "Introduction">
          <h1 class = "Header-text">Who am I?</h1>
          <p class = "Introduction-text">
            As a Computer Science undergrad at Stanford University,
            I have had the priviledge of studying under the best and brightest minds
            in the field. With a concentration in Artificial Intelligence, I am learning
            how to write programs that are smarter, faster, and more reliable. Ultimately, my
            goal is to use these tools to challenge the status quo, disrupt the way that things
            have always been done, and make the world a better place.
          </p>
        </div>
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

class Footer extends Component {
  render() {
    return (
      <div class = "Footer">
        <p class = "Footer-text">
          This website was built using React.js in Summer 2018.
          The source code for this site is available <a href = "https://github.com/theCaiGuy/michaelcaidotcom">here</a>.
        </p>
      </div>
    )
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
        <Footer/>
      </body>
    );
  }
}

export default App;
