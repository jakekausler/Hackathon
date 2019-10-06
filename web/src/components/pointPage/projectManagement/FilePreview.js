import React from 'react';

export default function FilePreview(props) {
	return (
		<div className="file">
			<div className="name">
				{props.File.name}
			</div>
			<div className="description">
				{props.File.description.length > 255 ? props.File.description.substring(0, 256) + "..." : props.File.description}
			</div>
		</div>
	);
}