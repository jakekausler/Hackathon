import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<div className="header">
			<div className="left">
				<Link to="/"><h1>Assembli(i)</h1></Link>
				<table className="links"><tbody><tr>
				<td>
					<Link to="/projectSearch">Project Search</Link>
				</td>
				<td>
					<Link to="/about">About</Link>
				</td>
				<td>
					<Link to="/contact">Contact</Link>
				</td>
				</tr></tbody></table>
			</div>
			<div className="right">
				<div className="accounts">
					<Link to="/create-account">Create an Account</Link>
					<Link className="login" to="/login">Login</Link>
				</div>
			</div>
		</div>
	)
}

export default Header