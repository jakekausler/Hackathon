import React, {Component} from 'react';
import './ProjectManagement.css'
import data from '../dummyProjectData.json'
import MessagePreview from './MessagePreview'
import FilePreview from './FilePreview'
import TeamPreview from './TeamPreview'

export default class ProjectManagement extends Component {
  	constructor() {
  		super();
  		this.state = {
  			currentTab: 'messages'
  		}
  		this.changeTab = this.changeTab.bind(this);
  	}

  	changeTab(tab) {
  		console.log(tab)
  		this.setState({
  			currentTab: tab
  		})
   	}

  	render() {
  		console.log(data)
  	  let messagesVisible = this.state.currentTab == "messages" ? "visible" : "hidden";
	  let filesVisible = this.state.currentTab == "files" ? "visible" : "hidden";
	  let teamsVisible = this.state.currentTab == "teams" ? "visible" : "hidden";

	  let messages = data.messages.map(function(m) {
	  	return <MessagePreview Message={m} />
	  })
	  let files = data.files.map(function(f) {
	  	return <FilePreview File={f} />
	  })
	  let teams = data.teams.map(function(t) {
	  	return <TeamPreview Team={t} />
	  })
	  return (
	  	<div className="ProjectManagement">
		    <h3>Project Management</h3>
		    	<div className="tabs">
					<table className="links"><tbody><tr>
					<td>
						<span tab="messages" onClick={() => this.changeTab("messages")}>Messages</span>
					</td>
					<td>
						<span tab="files" onClick={() => this.changeTab("files")}>Files</span>
					</td>
					<td>
						<span tab="teams" onClick={() => this.changeTab("teams")}>Teams</span>
					</td>
					</tr></tbody></table>
				</div>
				<div className={"messages " + messagesVisible}>
					{[messages]}
				</div>
				<div className={"files " + filesVisible}>
					{[files]}
				</div>
				<div className={"teams " + teamsVisible}>
					{[teams]}
				</div>
		</div>
	  )
	}
}