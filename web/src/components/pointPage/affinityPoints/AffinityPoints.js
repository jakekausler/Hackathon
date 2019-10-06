import React from 'react';
import data from '../dummyProjectData.json'
import './AffinityPoints.css'

import AffinityPoint from './AffinityPoint'

import prayer from './../../../images/prayer.png'
import story from './../../../images/story.png'
import innovation from './../../../images/innovation.png'
import funding from './../../../images/funding.png'
import logistics from './../../../images/logistics.png'
import equipping from './../../../images/equipping.png'

export default function AffinityPoints () {
	let affinityPoints = data.affinityPoints.map(function(point) {
		switch (point.type) {
		case "prayer":
			point.iconurl = prayer;
			break;
		case "story":
			point.iconurl = story;
			break;
		case "innovation":
			point.iconurl = innovation;
			break;
		case "funding":
			point.iconurl = funding;
			break;
		case "logistics":
			point.iconurl = logistics;
			break;
		case "equipping":
			point.iconurl = equipping;
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