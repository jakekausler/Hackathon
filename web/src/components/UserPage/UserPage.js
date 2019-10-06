import React from 'react'
import { connect } from 'react-redux';

import './UserPage.css'

import ActiveAssembliPoints from './ActiveAssembliPoints/ActiveAssembliPoints'
import SavedAssembliPoints from './SavedAssembliPoints/SavedAssembliPoints'
import AssembliPointInfo from './AssembliPointsInfo/AssembliPointInfo'
import Invite from './Invite/Invite'
import Sidebar from './Sidebar/Sidebar'

export default function UserPage(props) {
	return (
		<div className="UserPage">
			<h2>Hello [User]</h2>
			<div className="MainUserPage">
			<div className="main">
				<ActiveAssembliPoints />
				<SavedAssembliPoints />
				<AssembliPointInfo />
				<Invite />
			</div>
			<div className="side">
				<Sidebar />
			</div>
			</div>
		</div>
	);
}

const mapStateToProps = state => ({
	fullname: state.auth.fullname,
});