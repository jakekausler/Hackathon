import React from 'react'

import ActiveAssembliPoints from './ActiveAssembliPoints/ActiveAssembliPoints'
import SavedAssembliPoints from './SavedAssembliPoints/SavedAssembliPoints'
import AssembliPointInfo from './AssembliPointsInfo/AssembliPointInfo'
import Invite from './Invite/Invite'
import Sidebar from './Sidebar/Sidebar'

export default function UserPage() {
	return (
		<div>
			<ActiveAssembliPoints />
			<SavedAssembliPoints />
			<AssembliPointInfo />
			<Invite />
			<Sidebar />
		</div>
	);
}