import React from 'react'
import data from '../dummyProjectData.json'

import Recommendation from './Recommendation'

import './Recommendations.css'

export default function Recommendations() {
	let recommendations = data.recommendations.map(function(r) {
		return <Recommendation From={r.from} Rec={r.recommendation} />
	})
    return (
        <div className="profileSection Recommendations">
        <h3>Recommendations</h3>
        <div className="Recommendations">
        	{recommendations}
        </div>
        </div>
    );

}
