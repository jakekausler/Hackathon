import React from 'react';
import './PointPage.css';

import data from './dummyProjectData.json'

import AffinityPoints from './affinityPoints/AffinityPoints';
import AssemblerProfile from './assemblerProfile/AssemblerProfile';
import ProjectDetails from './projectDetails/ProjectDetails';
import ProjectManagement from './projectManagement/ProjectManagement';
import ProjectStatus from './projectStatus/ProjectStatus';

export default function PointPage () {
  return (
    <div>
      <ProjectDetails
        name={data.projectName}
        description={data.projectDescription}
        profileImg={data.imageURL}
        groups={data.neededGroups}/>
      <AssemblerProfile />
      <ProjectStatus />
      <AffinityPoints />
      <ProjectManagement />
    </div>
  )
}
