import React from 'react';

export default function MessagePreview(props) {
	return (
		<div className="message">
			<div className="from">
				From: {props.Message.from}
			</div>
			<div className="subject">
				Subject: {props.Message.subject}
			</div>
			<div className="content">
				{props.Message.content.length > 255 ? props.Message.content.substring(0, 256) + "..." : props.Message.content}
			</div>
		</div>
	);
}