import React, { Component } from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

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
          <h1 class = "Header-text">Introduction</h1>
          <p class = "Introduction-text">
            As a Computer Science undergrad at Stanford University,
            I have had the priviledge of studying under the best and brightest minds
            in the field. With my concentration in Artificial Intelligence, I am learning
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
              <a href = "https://github.com/theCaiGuy/CS227B_GGP"><img class = "Project-logo" src = { require('./Photos/GGP-logo.png')} /></a>
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
              <a href = "https://cs110.stanford.edu"><img class = "Project-logo" src = { require('./Photos/cs110-logo.png')} /></a>
            </div>
            <div class = "Project-info-container">
              <p class = "Small-infotext">RSS News Feed (CS110): Implemented a thread pool for efficient retrieval of
              news articles from online sources</p>
            </div>
          </div>

          <div class = "Project-info">
            <div class = "Project-logo-container">
              <a href = "https://github.com/theCaiGuy/ChartzBot"><img class = "Project-logo" src = { require('./Photos/altozbot-logo.jpeg')} /></a>
            </div>
            <div class = "Project-info-container">
              <p class = "Small-infotext">LSJUMB Chartzbot (Independent): Built a GroupMe bot that uses NLP techniques to
              find and deliver music charts on command</p>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

class Knowledge extends Component {
  render() {
    return (
      <div class = "Section">
        <h1 class = "Header-text">Tools I Have</h1>

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
            <form action="action_page.php">

              <label for="fname">Name</label>
              <input type="text" id="name" name="name" placeholder="Your name..." />

              <label for="email">Email</label>
              <input type="text" id="email" name="email" placeholder="Your email..." />

              <label for="message">Message</label>
              <textarea id="subject" name="message" placeholder="Write something..."></textarea>

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
          This website was built using React.js in Summer 2018 and deployed using <a href = "https://heroku.com">Heroku</a>.
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
