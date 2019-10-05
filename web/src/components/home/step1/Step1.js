import React from 'react';
import '../Home.css';
import image from '../images/filler.png'

export default function Step1() {
  return (
      <div>
        <div className="step-columns step-box step-box-accent">
          <div className="step-left">
            <img className="step-image" src={image}/>
          </div>
          <div className="step-right">
            <div className="step-right-label">
              <h3>Get Inspired</h3>
            </div>
            <p>
              Learn about our assemblers.. who they are and the kind of high impact
              BBunch of textBunch of textBunch of textBunch of textBunch of textunch of text
              Bunch of textBunch of textBunch of textBunch of textBunch of text
            </p>
            <button className="Homepage-button">Learn More</button>
          </div>
        </div>
      </div>
  );
}
