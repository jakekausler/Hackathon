import React from 'react'
import data from '../dummyProjectData.json'
import ProjectDetails from './../../assembli-point/AssembliPoint'

import './CompletedAssembliPoints.css'

export default function CompletedAssembliPoints(props) {
	let points = data.completedAssembli.map(function(a) {
		return (
			<div className="projectContainer">
				<h4>{a.name}</h4>
				<ProjectDetails groups={a.points} />
			</div>
		)
	})
	return (
		<div className="UserPageSection AssembliPoints">
			<h3>Completed Assembl(i) Points</h3>
			<div className="projects">{points}</div>
		</div>
	);
}