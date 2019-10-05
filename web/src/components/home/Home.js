import React from 'react';
import './Home.css';

import Header from './../header/Header'
import Footer from '../footer/Footer'
import Map from './../map/Map'
import Step1 from './step1/Step1'
import Step2 from './step2/Step2'
import Step3 from './step3/Step3'
import About from './about/About'

function Home() {
  return (
    <div className="App">
      <Header />
      <MapPanel />
      <Step1 />
      <Step2 />
      <Step3 />
      <About />
      <Footer />
    </div>
  );
}

export default Home;
