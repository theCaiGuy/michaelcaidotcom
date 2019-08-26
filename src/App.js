import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import ReactGA from 'react-ga'
import Modal from 'react-bootstrap/Modal'

import './App.css';

library.add(fab)


// Google Analytics
function initializeReactGA() {
    ReactGA.initialize('UA-145906940-1');
    ReactGA.pageview('/home');
}


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
            work on the "next big thing". Since then, as a software engineer specializing
            in Machine Learning, I have earned invaluable experience
            with the full ML product realization pipeline. Meanwhile, as a Computer
            Science undergraduate with a focus in Artificial Intelligence
            at Stanford University, I have the privilege of
            learning about the newest ideas from the best and brightest minds in the
            field. Ultimately, I hope to use all I have learned to challenge old
            ways of doing to upend the status quo and build a better tomorrow.
          </p>
        </div>
      </div>
    );
  }
}


class Qualifications extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show_unifyid: false,
      show_civicfeed: false,
      show_bsci: false,
      show_medtronic: false
    }
  }

  handle_show_unifyid = () => {
    this.setState({show_unifyid: true})
  }

  handle_hide_unifyid = () => {
    this.setState({show_unifyid: false})
  }

  handle_show_civicfeed = () => {
    this.setState({show_civicfeed: true})
  }

  handle_hide_civicfeed = () => {
    this.setState({show_civicfeed: false})
  }

  handle_show_bsci = () => {
    this.setState({show_bsci: true})
  }

  handle_hide_bsci = () => {
    this.setState({show_bsci: false})
  }

  handle_show_medtronic = () => {
    this.setState({show_medtronic: true})
  }

  handle_hide_medtronic = () => {
    this.setState({show_medtronic: false})
  }

  render() {
    return (
      <div class = "Section">
        <div class = "Qualifications">
          <h1 class = "Header-text">Places I've Worked</h1>
          <div class = "Work-col">
            <img class = "Logo" src = { require('./Photos/UnifyID.png') } alt = 'UnifyID' onClick = {this.handle_show_unifyid}/>
            <img class = "Logo" src = { require('./Photos/boston-scientific-logo.png') } alt = 'Boston Scientific' onClick = {this.handle_show_bsci}/>
          </div>
          <div class = "Learn-col">
            <img class = "Logo" src = { require('./Photos/CivicFeed.png') } alt = 'CivicFeed' onClick = {this.handle_show_civicfeed}/>
            <img class = "Logo" src = { require('./Photos/medtronic-logo.jpg') } alt = 'Medtronic' onClick = {this.handle_show_medtronic}/>
          </div>
        </div>
        <div></div>

        <Modal size="xl" show={this.state.show_unifyid} onHide={this.handle_hide_unifyid}>
          <Modal.Header closeButton>
            <Modal.Title>Machine Learning Engineering Intern - UnifyID</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              During summer of 2019, I accepted an internship at UnifyID, a Series A startup building biometric-based passive authentication software in Redwood City, California.
              This internship was one of the greatest learning experiences of my short career:
              I had the opportunity to work on a variety of projects ranging from backend infrastructure to client-side app development to bluetooth/IoT programming.
            </p>
            <p>
              For my primary project at UnifyID, I worked closely with the company's machine learning engineering team to gather real-world usage data and build simulations designed to measure the performance of our product in a variety of different scenarios.
              My project required me to learn how to write stable, maintainable, production-quality Python code while also providing me a crash course on industry-grade machine learning infrastructure and development techniques.
              My work would soon become critical to the company's decision making process, both for determining which models to ship to customers, and for identifying and triaging weaknesses in our product.
            </p>
            <p>
              Ultimately, working at UnifyID gave me an in-depth look at all the different functions necessary to turn cutting-edge machine learning research into a winning product.
              This internship will surely go down as one of the coolest job experiences I have ever had.
            </p>
          </Modal.Body>
        </Modal>

        <Modal size="xl" show={this.state.show_civicfeed} onHide={this.handle_hide_civicfeed}>
          <Modal.Header closeButton>
            <Modal.Title>Part Time Software Engineer - CivicFeed</Modal.Title>
          </Modal.Header>
          <Modal.Body>Section pending</Modal.Body>
        </Modal>

        <Modal size="xl" show={this.state.show_bsci} onHide={this.handle_hide_bsci}>
          <Modal.Header closeButton>
            <Modal.Title>Software Engineering Intern - Boston Scientific</Modal.Title>
          </Modal.Header>
          <Modal.Body>Section pending</Modal.Body>
        </Modal>

        <Modal size="xl" show={this.state.show_medtronic} onHide={this.handle_hide_medtronic}>
          <Modal.Header closeButton>
            <Modal.Title>Materials Science Intern - Medtronic</Modal.Title>
          </Modal.Header>
          <Modal.Body>Section pending</Modal.Body>
        </Modal>

      </div>
    );
  }
}


class Education extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show_stanford: false,
    }
  }

  handle_show_stanford = () => {
    this.setState({show_stanford: true})
  }

  handle_hide_stanford = () => {
    this.setState({show_stanford: false})
  }

  render() {
    return (
      <div class = "Section">
        <div class = "Qualifications">
          <h1 class = "Header-text">My Education</h1>
          <img class = "Logo" src = { require('./Photos/stanford-logo.png') } alt = 'Stanford University' onClick = {this.handle_show_stanford}/>
        </div>

        <Modal size="xl" show={this.state.show_stanford} onHide={this.handle_hide_stanford}>
          <Modal.Header closeButton>
            <Modal.Title>B.S. in Computer Science - Stanford University</Modal.Title>
          </Modal.Header>
          <Modal.Body>Section pending</Modal.Body>
        </Modal>

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
              <a href = "https://github.com/theCaiGuy/Twitter-Sentiment"><img class = "Project-logo" src = { require('./Photos/twitter.png')} alt = 'Twitter'/></a>
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
              <FontAwesomeIcon icon = {['fab', 'google-drive']} size = '7x' color = '#97040E'/>
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
          This website was built using <a href = 'https://reactjs.org/'>React.js</a> and deployed using <a href = "https://heroku.com">Heroku</a>.
          The source code for this site is available <a href = "https://github.com/theCaiGuy/michaelcaidotcom">here</a>.
        </p>
      </div>
    )
  }
}


class App extends Component {
  render() {
    initializeReactGA()
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
