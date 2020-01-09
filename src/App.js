import React from 'react';


import Navbar from './components/Navbar';
import MainSection from './components/MainSection';
import Extra from './components/Extra';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import MainProjects from './components/MainProjects';
import LocalProjects from './components/LocalProjects';
import Achievements from './components/Achievements';
import Footer from './components/Footer';


import { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <MainSection />
        <Extra />
        <AboutMe />
        <Skills />

        <LocalProjects />
        <Achievements />
        <Footer />

      </div>
    )
  }


}





