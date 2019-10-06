import React from 'react';
import data from '../dummyProjectData.json'

export default function ProjectDetails () {
  return (
  	<div className="Point-page-section">
    	<h3>Project Details</h3>
    	<p>{data.projectDescription}</p>
    </div>
  )
}