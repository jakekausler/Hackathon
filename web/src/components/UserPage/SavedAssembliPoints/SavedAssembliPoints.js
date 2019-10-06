import React from 'react'
import data from '../dummyProjectData.json'
import ProjectDetails from './../../assembli-point/AssembliPoint'

import './SavedAssembliPoints.css'

export default function SavedAssembliPoints(props) {
	let points = data.saved.map(function(a) {
		return (
			<div className="projectContainer">
				<h4>{a.name}</h4>
				<ProjectDetails groups={a.points} />
			</div>
		)
	})
	return (
		<div className="UserPageSection AssembliPoints">
			<h3>Saved Assembl(i) Points</h3>
			<div className="projects">{points}</div>
		</div>
	);
}