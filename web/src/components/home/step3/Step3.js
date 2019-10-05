import React from 'react';
import '../Home.css';

import image from '../images/filler.png'

export default function Step3() {
  return (
  	<div className="step-columns step-box step-box-accent">
  		<div className="step-left">
  			<img className="step-image" src={image} />
  		</div>
  		<div className="step-right">
	      <div className="step-right-label">
  		    <h3>Assemble</h3>
        </div>
		    <p>Explore active Assembl(i) points, ignited by Assembers</p>
		    <p>Join an assembl(i) point to use your gifts with to make an extraordinary difference. Just complete your profile and begin assembling.</p>
        <button className="Homepage-button">Get Started</button>
		</div>
    </div>
  );
}
