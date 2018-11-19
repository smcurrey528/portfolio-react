import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Projects from './Projects';
import About from './About';
import Footer from './Footer';
import Contact from './Contact';
import RideBikes from './RideBikes';

class App extends Component {
  render() {
    return (
      <div>
       <Header/>
       <Projects/>
       <About/>
       <Contact/>
       <Footer/>
      </div>
    );
  }
}

export default App;
