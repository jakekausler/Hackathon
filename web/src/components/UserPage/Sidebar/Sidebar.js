import React from 'react'

import './Sidebar.css'

export default function Sidebar() {
	return (
		<div className="Sidebar">
			<div>
				<ul>
					<li className="undecorated"><a href="#">Messages&nbsp;&nbsp;&nbsp;( {4} )</a></li>
					<li className="undecorated"><a href="#">Invites&nbsp;&nbsp;&nbsp;( {1} )</a></li>
					<li className="undecorated"><a href="#">Projects&nbsp;&nbsp;&nbsp;( {3} )</a></li>
				</ul>
			</div>
			<div>
				<ul>
					<li className="undecorated">Account</li>
						<ul>
							<li className="filled"><a href="#">Edit Profile</a></li>
							<li className="filled"><a href="#">Change Password</a></li>
							<li className="filled"><a href="#">Invite Friends</a></li>
						</ul>
					<li className="undecorated">Affinity Groups</li>
						<ul>
							<li className="filled"><a href="#">Prayer</a></li>
							<li className="filled"><a href="#">Logistics</a></li>
							<li className="filled"><a href="#">Equipping</a></li>
							<li className="filled"><a href="#">Update Groups</a></li>
						</ul>
					<li className="undecorated">Teams</li>
						<ul>
							<li className="filled"><a href="#">Home Church</a></li>
							<li className="filled"><a href="#">NC</a></li>
							<li className="filled"><a href="#">Create a Team</a></li>
						</ul>
				</ul>
			</div>
		</div>
	);
}
