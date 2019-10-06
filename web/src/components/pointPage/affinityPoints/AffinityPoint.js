import React from 'react';
import { Link } from 'react-router-dom';

export default function AffinityPoint (props) {
	let needs = props.Point.needs.map(function(need) {
		return (
			<li>{need}</li>
		)
	})
	let users = props.Point.users.map(function(user) {
		return (
			<li><Link to="/user">{user.name}</Link></li>
		)
	})
	return (
  		<div className="affinityPoint">
    		<div className="affinityPointHeading">
    			<div className='icon'><img src={props.Point.iconurl} alt='icon'/></div>
    			<h4>{props.Point.type[0].toUpperCase() + props.Point.type.slice(1)}</h4>
    		</div>
    		<p>We need these things:</p>
    		<ul>{needs}</ul>
    		<p>People who have signed up:</p>
    		<ul>{users}</ul>
    		{
    			props.Point.spaceAvailable ?
    			<div className="signup-container">
    				<p>There is still a need for more volunteers!</p>
    				<button className="signup">Sign Up</button>
    			</div>
    			: ""
    		}
    	</div>
	)
}