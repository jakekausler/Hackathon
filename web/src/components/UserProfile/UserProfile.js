import React from 'react'
import { connect } from 'react-redux';

import UserProfileInfo from './UserProfileInfo/UserProfileInfo'
import ActiveAssembliPoints from './ActiveAssembliPoints/ActiveAssembliPoints'
import CompletedAssembliPoints from './CompletedAssembliPoints/CompletedAssembliPoints'
import Recommendations from './Recommendations/Recommendations'
import Message from './Message/Message'

import data from './dummyProjectData.json'
import './UserProfile.css'

export default function UserProfile(props) {
	return (
		<div className="UserProfile">
			<UserProfileInfo Info={data} />
			<ActiveAssembliPoints Info={data} />
			<CompletedAssembliPoints Info={data} />
			<Recommendations Info={data} />
			<Message />
		</div>
	);
}

const mapStateToProps = state => ({
	fullname: state.auth.fullname,
});