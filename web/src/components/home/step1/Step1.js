import React from 'react';
import '../Home.css';
import image from '../images/filler.png'

export default function Step1() {
  return (
      <div>
        <img src={image}/>
        <div>
          <span className='Step-label'>Step 1</span>
          <h3>Get Inspired</h3>
          <p>
            Learn about our assemblers.. who they are and the kind of high impact
            BBunch of textBunch of textBunch of textBunch of textBunch of textunch of text
            Bunch of textBunch of textBunch of textBunch of textBunch of text
          </p>
        </div>
      </div>
  );
}
