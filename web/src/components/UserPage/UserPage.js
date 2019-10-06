import React from 'react'
import { connect } from 'react-redux';

import data from './dummyProjectData.json'
import './UserPage.css'

import ActiveAssembliPoints from './ActiveAssembliPoints/ActiveAssembliPoints'
import SavedAssembliPoints from './SavedAssembliPoints/SavedAssembliPoints'
import AssembliPointInfo from './AssembliPointsInfo/AssembliPointInfo'
import Invite from './Invite/Invite'
import Sidebar from './Sidebar/Sidebar'

export default function UserPage(props) {
	return (
		<div className="UserPage">
			<h2>Hello Jake</h2>
			<div className="MainUserPage">
			<div className="main">
				<ActiveAssembliPoints Active={data.active} />
				<SavedAssembliPoints Saved={data.saved} />
				<AssembliPointInfo Urgent={data.urgent} Suggested={data.suggested} />
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