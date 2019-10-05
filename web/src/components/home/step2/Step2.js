import React from 'react';
import '../Home.css';
import './GroupBox.css';

import GroupBox from './GroupBox';

export default function Step2() {
  return (
    <div>
      <div>
        <span className='Step-label'>Step 2</span>
        <h3>Get Connected</h3>
        <p>
          Find your place in a thriving community of servant-hearted
          stewards by indicating your preferred Affinity(i) groups.
        </p>
      </div>

      <div className='groupbox-container'>
        <div className='groupbox-row1'>
          <GroupBox title='Prayer' description='description / bullets'/>
          <GroupBox title='Story' description='description / bullets'/>
          <GroupBox title='Innovation' description='description / bullets'/>          
        </div>

        <div className='groupbox-row2'>
          <GroupBox title='Funding' description='description / bullets'/>
          <GroupBox title='Logistics' description='description / bullets'/>
          <GroupBox title='Equipping' description='description / bullets'/>          
        </div>
      </div>

      <button className='Homepage-button'>Connect</button>
    </div>
  );
}
