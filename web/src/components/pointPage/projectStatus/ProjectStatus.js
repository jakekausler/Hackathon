import React from 'react';
import data from '../dummyProjectData.json'
import './ProjectStatus.css'

import NeedsList from './NeedsList';
import FundingGoal from './FundingGoal';
import TaskProgress from './TaskProgress';

export default function ProjectStatus () {
  return (
    <div className='Point-page-section'>
      <h3>Project Status</h3>
      <NeedsList data={data}/>
      <div className='goal-progress'>
        <FundingGoal data={data}/>
        <TaskProgress data={data}/>        
      </div>

    </div>
  )
}