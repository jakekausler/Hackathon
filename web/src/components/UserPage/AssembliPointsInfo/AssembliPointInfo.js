import React from 'react'

import './AssembliPointInfo.css'
import Need from './Need'

export default function AssembliPointInfo(props) {
	let urgent = props.Urgent.map(function(need) {
		return <Need Name={need.name} DueDate={need.dueDate} />
	})
	let suggested = props.Suggested.map(function(need) {
		return <Need Name={need.name} DueDate={need.dueDate} Owner={need.owner} />
	})
	return (
		<div className="UserPageSection AssembliPointInfo">
			<h3>Assempl(i) Points with Urgent Need</h3>
			<div className="urgent">
				{urgent}
			</div>
			<h3>Assempl(i) Points You May Be Interested In</h3>
			<div className="suggested">
				{suggested}
			</div>
		</div>
	);
}