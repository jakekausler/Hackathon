import React from 'react'

import './Invite.css'

export default function Invite() {
	return (
		<div className="UserPageSection Invite">
			<h3>Invite Friends, Family, Co-Workers</h3>
			<form action="" method="post">
				<div className="inviteContainer">
					<label htmlFor="inviteEmail">Email(s)/SMS</label>
					<textarea name="inviteEmail" id="inviteEmail" cols="30" rows="3"></textarea>
				</div>
				<div className="inviteContainer">
					<label htmlFor="inviteMsg">Message</label>
					<textarea name="inviteMsg" id="inviteMsg" cols="40" rows="5"></textarea>
				</div>
				<button type="submit" id="sendInvite">Send</button>
			</form>

		</div>
	);
}
