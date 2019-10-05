import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import assembliLogoNoTag from '../../images/assembliLogoNoTagline.png'

function Header(props) {
	const user = props.fullname || 'Create an Account';
	return (
		<div className="header">
			<div className="left">
				<Link to="/"><img className="assembliLogo" src={assembliLogoNoTag} /></Link>
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
					{ props.fullname ?
						<div>{props.fullname}</div> :
						<>
							<Link to="/create-account">Create an Account</Link>
							<Link className="login" to="/login">Login</Link>
						</>
					}
				</div>
			</div>
		</div>
	)
}

const mapStateToProps = state => ({
	fullname: state.auth.fullname,
});

export default connect(mapStateToProps)(Header)
