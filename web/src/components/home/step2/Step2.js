import React from 'react';
import '../Home.css';
import './GroupBox.css';

import prayer from './../images/prayer.png'
import story from './../images/story.png'
import innovation from './../images/innovation.png'
import funding from './../images/funding.png'
import logistics from './../images/logistics.png'
import equipping from './../images/equipping.png'

import GroupBox from './GroupBox';

export default function Step2() {
  return (
    <div className="step-box">
      <div>
        <div className="step-left-label">
          <h3>Get Connected</h3>
        </div>
        <p>
          Find your place in a thriving community of servant-hearted
          stewards by indicating your preferred Affinity(i) groups.
        </p>
      </div>

      <div className='groupbox-container'>
        <div className='groupbox-row1'>
          <GroupBox title='Prayer' description='description / bullets' iconurl={prayer} />
          <GroupBox title='Story' description='description / bullets' iconurl={story} />
          <GroupBox title='Innovation' description='description / bullets' iconurl={innovation} />          
        </div>

        <div className='groupbox-row2'>
          <GroupBox title='Funding' description='description / bullets' iconurl={funding} />
          <GroupBox title='Logistics' description='description / bullets' iconurl={logistics} />
          <GroupBox title='Equipping' description='description / bullets' iconurl={equipping} />
        </div>
      </div>

      <button className='Homepage-button'>Connect</button>
    </div>
  );
}
