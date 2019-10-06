import React from 'react';
import data from '../dummyProjectData.json'
import './AffinityPoints.css'

import AffinityPoint from './AffinityPoint'

export default function AffinityPoints () {
	let affinityPoints = data.affinityPoints.map(function(point) {
		switch (point.type) {
		case "prayer":
			point.iconurl = "/img/prayer.png";
			break;
		case "story":
			point.iconurl = "/img/story.png";
			break;
		case "innovation":
			point.iconurl = "/img/innovation.png";
			break;
		case "funding":
			point.iconurl = "/img/funding.png";
			break;
		case "logistics":
			point.iconurl = "/img/logistics.png";
			break;
		case "equipping":
			point.iconurl = "/img/equipping.png";
			break;
		}
		return <AffinityPoint Point={point} />;
	})
	return (
  		<div className="Point-page-section">
    		<h3>Affinity Points</h3>
    		<div className="affinityPoints">
    			{affinityPoints}
    		</div>
    	</div>
	)
}