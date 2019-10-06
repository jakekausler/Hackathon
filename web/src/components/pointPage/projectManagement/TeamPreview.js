import React from 'react';

export default function TeamPreview(props) {
	return (
		<div className="team">
			<div className="name">
				{props.Team.name}
			</div>
			<div className="description">
				{props.Team.description.length > 255 ? props.Team.description.substring(0, 256) + "..." : props.Team.description}
			</div>
		</div>
	);
}