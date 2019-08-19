import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import FileIcon, { defaultStyles } from 'react-file-icon'

import './App.css';

library.add(fab)

class Welcome extends Component {
  render() {
    return (
      <div class = "Welcome-page">
        <h1 class = "Top-text">Michael Cai</h1>
        <img class = "Round-image" src = { require('./Photos/me.jpg') } alt = 'Me!'/>
        <p class = "Top-infotext">Stanford Computer Science | Class of 2020</p>
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
            Four years ago, I was drawn to Silicon Valley by my passion for the future.
            Unsatisfied with the status quo, I yearned for the opportunity to
            work on the "next big thing". In my work in the field of Machine
            Learning Engineering, I have earned invaluable experience
            with the full ML product realization pipeline. As a Computer
            Science undergraduate with a focus in Artificial Intelligence
            at Stanford University, I have the privilege of
            learning about new ideas from the best and brightest minds in the
            field. Ultimately, I hope to use all I have learned to challenge old
            ways of doing to upend the status quo and build a better tomorrow.
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
          <h1 class = "Header-text">Places I've Worked</h1>
          <div class = "Work-col">
            <img class = "Logo" src = { require('./Photos/UnifyID.png') } alt = 'UnifyID'/>
            <img class = "Logo" src = { require('./Photos/boston-scientific-logo.png') } alt = 'Boston Scientific'/>
          </div>
          <div class = "Learn-col">
            <img class = "Logo" src = { require('./Photos/CivicFeed.png') } alt = 'CivicFeed'/>
            <img class = "Logo" src = { require('./Photos/medtronic-logo.jpg') } alt = 'Medtronic'/>
          </div>
        </div>
        <div></div>
      </div>
    );
  }
}

class Education extends Component {
  render() {
    return (
      <div class = "Section">
        <div class = "Qualifications">
          <h1 class = "Header-text">My Education</h1>
          <img class = "Logo" src = { require('./Photos/stanford-logo.png') } alt = 'Stanford University'/>
        </div>
      </div>
    )
  }
}

class Projects extends Component {
  render() {
    return (
      <div class = "Section">
        <div class = "Qualifications">
          <h1 class = "Header-text">Some Projects I've Worked On</h1>

          <div class = "Project-info">
            <div class = "Project-logo-container">
              <a href = "https://github.com/theCaiGuy/GANtor-Arts-Center"><img class = "Project-logo" src = { require('./Photos/Gantor.png')} alt = 'GANtor Arts Center'/></a>
            </div>
            <div class = "Project-info-container">
              <p class = "Small-infotext">
                <strong>GANtor Arts Center: </strong>
                Designed and trained a multi-stage Generative Adversarial Network to conditionally generate high-resolution artwork from different genres based on the public WikiArt dataset.
              </p>
            </div>
          </div>

          <div class = "Project-info">
            <div class = "Project-logo-container">
              <a href = "https://stanfordasl.github.io/aa274/"><img class = "Project-logo" src = { require('./Photos/turtlebot.png')} alt = 'turtlebot'/></a>
            </div>
            <div class = "Project-info-container">
              <p class = "Small-infotext">
                <strong>Autonomous Turtlebot: </strong>
                Implemented fully autonomous computer vision, motion planning, exploration, and finite state control using the ROS framework for a LIDAR equipped delivery bot. My team was one of five selected to present to a panel of industry experts.
              </p>
            </div>
          </div>

          <div class = "Project-info">
            <div class = "Project-logo-container">
              <a href = "https://github.com/theCaiGuy/CS227B_GGP"><img class = "Project-logo" src = { require('./Photos/GGP-logo.png')} alt = 'GGP'/></a>
            </div>
            <div class = "Project-info-container">
              <p class = "Small-infotext">
                <strong>General Game Player: </strong>
                Utilized Monte Carlo Tree Search and Minimax techniques to teach a computer how to play any board game with no prior knowledge of the rules.
              </p>
            </div>
          </div>

          <div class = "Project-info">
            <div class = "Project-logo-container">
              <a href = "https://github.com/theCaiGuy/Twitter-Sentiment"><img class = "Project-logo" src = { require('./Photos/twitter.jpg')} alt = 'Twitter'/></a>
            </div>
            <div class = "Project-info-container">
              <p class = "Small-infotext">
                <strong>Twitter Sentiment Classifier: </strong>
                Built a PyTorch CNN sentiment classifier based a paper published by Facebook AI. Trained the classifier on the Sentiment140 dataset using a CUDA GPU to classify Tweets.
              </p>
            </div>
          </div>

          <div class = "Project-info">
            <div class = "Project-logo-container">
              <a href = "https://github.com/theCaiGuy/ChartzBot"><img class = "Project-logo" src = { require('./Photos/altozbot-logo.jpeg')} alt = 'Chartzbot'/></a>
            </div>
            <div class = "Project-info-container">
              <p class = "Small-infotext">
                <strong>LSJUMB Chartzbot: </strong>
                Built a GroupMe chat bot that uses NLP techniques to act on text commands to deliver music charts to the Stanford Band’s group chat.
              </p>
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
            <a href = 'https://www.python.org/'>
              <img class = "Tool-logo" src = { require('./Photos/Python.png') } alt = 'Python'/>
            </a>
            <a href = 'https://aws.amazon.com/'>
              <img class = "Tool-logo" src = { require('./Photos/AWS.png') } alt = 'Amazon Web Services'/>
            </a>
            <a href = 'https://pytorch.org/'>
              <img class = "Tool-logo" src = { require('./Photos/Pytorch.jpg') } alt = 'PyTorch'/>
            </a>
            <a href = 'https://www.tensorflow.org/'>
              <img class = "Tool-logo" src = { require('./Photos/tensorflow.png') } alt = 'TensorFlow'/>
            </a>
          </div>
          <div class = "Tool-col-right">
            <a href = 'https://www.numpy.org/'>
              <img class = "Tool-logo" src = { require('./Photos/numpy-logo.png')} alt = 'Numpy'/>
            </a>
            <a href = 'https://www.ros.org/'>
              <img class = "Tool-logo" src = { require('./Photos/ros.png') } alt = 'ROS'/>
            </a>
            <a href = 'http://www.cplusplus.com/'>
              <img class = "Tool-logo" src = { require('./Photos/cpp_logo.png') } alt = 'C++'/>
            </a>
            <a href = 'https://www.javascript.com/'>
              <img class = "Tool-logo" src = { require('./Photos/javascript.png') } alt = 'Javascript'/>
            </a>
          </div>
        </div>
        <div class = "Tools">
          <div class = "Tool-col-left">
            <a href = 'https://facebook.github.io/react-native/'>
              <img class = "Tool-logo" src = { require('./Photos/React Native.png') } alt = 'React and React Native'/>
            </a>
            <a href = 'https://nodejs.org/en/'>
              <img class = "Tool-logo" src = { require('./Photos/nodejs.png') } alt = 'Nodejs'/>
            </a>
            <a href = 'https://www.w3schools.com/html/html_intro.asp'>
              <img class = "Tool-logo" src = { require('./Photos/html.png') } alt = 'HTML'/>
            </a>
            <a href = 'https://en.wikipedia.org/wiki/C_(programming_language)'>
              <img class = "Tool-logo" src = { require('./Photos/C.png') } alt = 'C'/>
            </a>

          </div>
          <div class = "Tool-col-right">
            <a href = 'https://www.java.com/en/'>
              <img class = "Tool-logo" src = { require('./Photos/java.png') } alt = 'Java'/>
            </a>
            <a href = 'https://www.arduino.cc/'>
              <img class = "Tool-logo" src = { require('./Photos/Arduino.jpg') } alt = 'Arduino'/>
            </a>
            <a href = 'https://www.apple.com/'>
              <img class = "Tool-logo" src = { require('./Photos/ios.png') } alt = 'iOS'/>
            </a>
            <a href = 'https://www.android.com/'>
              <img class = "Tool-logo" src = { require('./Photos/android.png') } alt = 'Android'/>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      formspree: "https://formspree.io/mcai88@stanford.edu"
    }
  }

  render() {
    return (
      <div class = "Section">
        <div class = "Contact">
          <h1 class = "Header-text">Find Me Online</h1>
          <div>
            <a class = "Findme-btn" href = 'https://github.com/theCaiGuy'>
              <FontAwesomeIcon icon = {['fab', 'github']} size = '7x' color = '#97040E'/>
            </a>
            <a class = "Findme-btn" href = 'https://linkedin.com/in/theCaiGuy'>
              <FontAwesomeIcon icon = {['fab', 'linkedin']} size = '7x' color = '#97040E'/>
            </a>
            <a class = "Findme-btn" href = 'https://drive.google.com/file/d/19ZQJHzrvyQ_4T6cCHRUOFECuRAaKPZLr/view?usp=sharing'>
              <FileIcon color = '#97040E' extension = 'PDF' size='88'/>
            </a>
          </div>

          <div class="container">
            <h1 class = "Header-text">Contact Me</h1>
            <form action = {this.state.formspree} method = "post">

              <label for="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Your name..." required/>

              <label for="email">Email</label>
              <input type="text" id="email" name="email" placeholder="Your email..." required/>

              <label for="message">Message</label>
              <textarea id="subject" name="message" placeholder="Write something..." required></textarea>

              <input type="submit" value="Submit" />
              <p class = "Footer-text"> Powered by <a href = "https://formspree.io/">Formspree</a></p>

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
          This website was built using <a href = 'https://reactjs.org/'>React.js</a> and deployed using <a href = "https://heroku.com">Heroku</a> starting in Summer 2018.
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
        <Education/>
        <Projects/>
        <Knowledge/>
        <Contact/>
        <Footer/>
      </body>
    );
  }
}

export default App;
