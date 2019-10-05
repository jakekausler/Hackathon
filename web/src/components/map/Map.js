import React from 'react';
import map from './map.svg';

import './Map.css'

function MapPanel() {
  return (
    <div className="mapPanel">
      <div className="mapText">
      	<h2>Tag Line</h2>
      	<p>Add a little bit of body text</p>
      </div>
      <img src={map} className="mapImage" />
    </div>
    );
  }

  export default MapPanel;
