import React from 'react';

import './Map.css'

function MapPanel() {
  return (
    <div className="mapPanel">
      <div className="mapText">
      	<h2>Connect | Collaborate | Change</h2>
      	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus nisl laoreet congue venenatis. Donec tristique, leo laoreet hendrerit vestibulum, sapien nunc imperdiet lorem, et euismod tellus sem in tortor. Maecenas tincidunt mauris est, a elementum diam elementum et. Fusce sapien turpis, cursus sit amet consequat sit amet, tincidunt mollis urna.</p>
      </div>
      <img src="/img/map.svg" className="mapImage" alt='mape of assembli points'/>
    </div>
    );
  }

  export default MapPanel;
