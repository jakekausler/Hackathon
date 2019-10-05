import React from 'react';
import '../Home.css';

import image from '../images/filler.png'

export default function Step3() {
  return (
  	<div className="step3">
  		<div className="step3-Left">
  			<img className="step3-image" src={image} />
  		</div>
  		<div className="step3-right">
	        <span className='Step-label'>Step 3</span>
		    <h3>Assemble</h3>
		    <p>Explore active Assembl(i) points, ignited by Assembers</p>
		    <p>Join an assembl(i) point to use your gifts with to make an extraordinary difference. Just complete your profile and begin assembling.</p>
		    <button className="Homepage-button">Get Started</button>
		</div>
    </div>
  );
}
