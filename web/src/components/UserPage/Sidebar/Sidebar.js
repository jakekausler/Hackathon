import React from 'react'

import './Sidebar.css'

export default function Sidebar() {
	return (
		<div className="Sidebar">
			<div className="dropdown">
				<button className="dropbtn">Info</button>
				<div className="dropdown-content">
					<a href="#">Messages&nbsp;&nbsp;&nbsp;( {4} )</a>
					<a href="#">Invites&nbsp;&nbsp;&nbsp;( {1} )</a>
					<a href="#">Projects&nbsp;&nbsp;&nbsp;( {3} )</a>
				</div>
			</div>
			<div className="dropdown">
				<button className="dropbtn">Account</button>
				<div className="dropdown-content">
					<a href="#">Edit Profile</a>
					<a href="#">Change Password</a>
					<a href="#">Invite Friends</a>
				</div>
			</div>
			<div className="dropdown">
				<button className="dropbtn">Affinity Groups</button>
				<div className="dropdown-content">
					<a href="#">Prayer</a>
					<a href="#">Logistics</a>
					<a href="#">Equipping</a>
					<a href="#">Update Groups</a>
				</div>
			</div>
			<div className="dropdown">
				<button className="dropbtn">Teams</button>
				<div className="dropdown-content">
					<a href="#">Home Church</a>
					<a href="#">NC</a>
					<a href="#">Create a Team</a>
				</div>
			</div>
		</div>
	);
}
