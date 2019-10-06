import React from 'react'
import { Link } from 'react-router-dom';

export default function Need(props) {
	return (
		<div className="need">
			<h5>{props.Name}</h5>
			<p>Due on {props.DueDate}</p>
			<p>{props.Owner ? "Owned by " + props.Owner : ""}</p>
		</div>
	)
}