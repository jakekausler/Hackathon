import React from 'react'
import data from '../dummyProjectData.json'
import ProjectDetails from './../../assembli-point/AssembliPoint'

import './ActiveAssembliPoints.css'

export default function ActiveAssembliPoints(props) {
	let points = data.activeAssembli.map(function(a) {
		return (
			<div className="projectContainer">
				<h4>{a.name}</h4>
				<ProjectDetails groups={a.points} />
			</div>
		)
	})
	return (
		<div className="UserPageSection AssembliPoints">
			<h3>Active Assembl(i) Points</h3>
			<div className="projects">{points}</div>
		</div>
	);
}