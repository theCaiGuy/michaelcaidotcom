import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'

import './App.css';
// import './email_me.php'

library.add(fab)

class Welcome extends Component {
  render() {
    return (
      <div class = "Welcome-page">
        <h1 class = "Top-text">Michael Cai</h1>
        <img class = "Round-image" src = { require('./Photos/me.jpg') } alt = 'Me!'/>
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
          <h1 class = "Header-text">Introduction</h1>
          <p class = "Introduction-text">
            As a Computer Science undergrad at Stanford University,
            I have the priviledge of studying under the best and brightest minds
            in the field. With my concentration in Artificial Intelligence, I am learning
            how to write programs that are smarter, faster, and more reliable. Ultimately, my
            goal is to use my knowledge to challenge the status quo, disrupt old ways of doing,
            and make the world a better place.
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
        <div class = "Qualifications">
          <div class = "Work-col">
            <h1 class = "Header-text">Places I've Worked</h1>
            <img class = "Logo" src = { require('./Photos/boston-scientific-logo.png') } alt = 'Boston Scientific'/>
            <img class = "Logo" src = { require('./Photos/medtronic-logo.jpg') } alt = 'Medtronic'/>
          </div>
          <div class = "Learn-col">
            <h1 class = "Header-text">Places I've Studied</h1>
            <img class = "Logo" src = { require('./Photos/stanford-logo.png') } alt = 'Stanford University'/>
            <img class = "Logo" src = { require('./Photos/whs-logo.png') } alt = 'Wayzata High School'/>
          </div>
        </div>
        <div></div>
      </div>
    );
  }
}

class Projects extends Component {
  render() {
    return (
      <div class = "Section">
        <div class = "Qualifications">
          <h1 class = "Header-text">Some Things I've Worked On</h1>

          <div class = "Project-info">
            <div class = "Project-logo-container">
              <a href = "https://github.com/theCaiGuy/CS227B_GGP"><img class = "Project-logo" src = { require('./Photos/GGP-logo.png')} alt = 'GGP'/></a>
            </div>
            <div class = "Project-info-container">
              <p class = "Small-infotext">
                General Game Player (CS227B): Taught a computer how to play board games utilizing
                Monte Carlo Tree Search techniques
              </p>
            </div>
          </div>

          <div class = "Project-info">
            <div class = "Project-logo-container">
              <a href = "https://cs110.stanford.edu"><img class = "Project-logo" src = { require('./Photos/cs110-logo.png')} alt = 'CS110' /></a>
            </div>
            <div class = "Project-info-container">
              <p class = "Small-infotext">RSS News Feed (CS110): Implemented a thread pool for efficient retrieval of
              news articles from online sources</p>
            </div>
          </div>

          <div class = "Project-info">
            <div class = "Project-logo-container">
              <a href = "https://github.com/theCaiGuy/ChartzBot"><img class = "Project-logo" src = { require('./Photos/altozbot-logo.jpeg')} alt = 'Chartzbot'/></a>
            </div>
            <div class = "Project-info-container">
              <p class = "Small-infotext">LSJUMB Chartzbot (Independent): Built a GroupMe bot that uses NLP techniques to
              find and deliver music charts on command</p>
            </div>
          </div>

        </div>
        <div></div>
      </div>
    )
  }
}

class Knowledge extends Component {
  render() {
    return (
      <div class = "Section">
        <h1 class = "Header-text">My Toolbox</h1>
        <div class = "Tools">
          <div class = "Tool-col-left">
            <img class = "Tool-logo" src = { require('./Photos/Python.png') } alt = 'Python'/>
            <img class = "Tool-logo" src = { require('./Photos/javascript.png') } alt = 'Javascript'/>
            <img class = "Tool-logo" src = { require('./Photos/java.png') } alt = 'Java'/>
            <img class = "Tool-logo" src = { require('./Photos/cpp_logo.png') } alt = 'C++'/>
          </div>
          <div class = "Tool-col-right">
            <img class = "Tool-logo" src = { require('./Photos/C.png') } alt = 'C'/>
            <img class = "Tool-logo" src = { require('./Photos/React Native.png') } alt = 'React and React Native'/>
            <img class = "Tool-logo" src = { require('./Photos/nodejs.png') } alt = 'Nodejs'/>
            <img class = "Tool-logo" src = { require('./Photos/Angular.png') } alt = 'Angularjs'/>
          </div>
        </div>
        <div class = "Tools">
          <div class = "Tool-col-left">
            <img class = "Tool-logo" src = { require('./Photos/html.png') } alt = 'HTML'/>
            <img class = "Tool-logo" src = { require('./Photos/Arduino.jpg') } alt = 'Arduino'/>
            <img class = "Tool-logo" src = { require('./Photos/ios.png') } alt = 'iOS'/>
            <img class = "Tool-logo" src = { require('./Photos/android.png') } alt = 'Android'/>
          </div>
          <div class = "Tool-col-right">
            <img class = "Tool-logo" src = { require('./Photos/AWS.png') } alt = 'Amazon Web Services'/>
            <img class = "Tool-logo" src = { require('./Photos/Sauce Labs.png') } alt = 'Sauce Labs'/>
            <img class = "Tool-logo" src = { require('./Photos/appium.png') } alt = 'Appium'/>
            <img class = "Tool-logo" src = { require('./Photos/Jenkins.png') } alt = 'Jenkins'/>
          </div>
        </div>
      </div>
    )
  }
}

class Contact extends Component {
  render() {
    return (
      <div class = "Section">
        <div class = "Contact">
          <h1 class = "Header-text">Find Me Online</h1>
          <div>
            <a class = "Findme-btn" href = 'https://github.com/theCaiGuy'>
              <FontAwesomeIcon icon = {['fab', 'github']} size = '8x' color = '#97040E'/>
            </a>
            <a class = "Findme-btn" href = 'https://linkedin.com/in/theCaiGuy'>
              <FontAwesomeIcon icon = {['fab', 'linkedin']} size = '8x' color = '#97040E'/>
            </a>
          </div>

          <div class="container">
            <h1 class = "Header-text">Contact Me</h1>
            <form action="email_me.php" method = "post">

              <label for="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Your name..." required/>

              <label for="email">Email</label>
              <input type="text" id="email" name="email" placeholder="Your email..." required/>

              <label for="message">Message</label>
              <textarea id="subject" name="message" placeholder="Write something..." required></textarea>

              <input type="submit" value="Submit" />

            </form>
          </div>
        </div>
      </div>
    );
  }
}

class Footer extends Component {
  render() {
    return (
      <div class = "Footer">
        <p class = "Footer-text">
          This website was built using <a href = 'https://reactjs.org/'>React.js</a> and deployed using <a href = "https://heroku.com">Heroku</a> in Summer 2018.
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
        <Projects/>
        <Knowledge/>
        <Contact/>
        <Footer/>
      </body>
    );
  }
}

export default App;
