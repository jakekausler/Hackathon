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
          <GroupBox title='Prayer' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed turpis tincidunt id aliquet. Condimentum mattis pellentesque id nibh tortor id aliquet lectus. Vulputate mi sit amet mauris commodo quis imperdiet. Massa ultricies mi quis hendrerit dolor magna eget est. Molestie nunc non blandit massa enim nec dui.' iconurl={prayer} />
          <GroupBox title='Story' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed turpis tincidunt id aliquet. Condimentum mattis pellentesque id nibh tortor id aliquet lectus. Vulputate mi sit amet mauris commodo quis imperdiet. Massa ultricies mi quis hendrerit dolor magna eget est. Molestie nunc non blandit massa enim nec dui.' iconurl={story} />
          <GroupBox title='Innovation' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed turpis tincidunt id aliquet. Condimentum mattis pellentesque id nibh tortor id aliquet lectus. Vulputate mi sit amet mauris commodo quis imperdiet. Massa ultricies mi quis hendrerit dolor magna eget est. Molestie nunc non blandit massa enim nec dui.' iconurl={innovation} />          
        </div>

        <div className='groupbox-row2'>
          <GroupBox title='Funding' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed turpis tincidunt id aliquet. Condimentum mattis pellentesque id nibh tortor id aliquet lectus. Vulputate mi sit amet mauris commodo quis imperdiet. Massa ultricies mi quis hendrerit dolor magna eget est. Molestie nunc non blandit massa enim nec dui.' iconurl={funding} />
          <GroupBox title='Logistics' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed turpis tincidunt id aliquet. Condimentum mattis pellentesque id nibh tortor id aliquet lectus. Vulputate mi sit amet mauris commodo quis imperdiet. Massa ultricies mi quis hendrerit dolor magna eget est. Molestie nunc non blandit massa enim nec dui.' iconurl={logistics} />
          <GroupBox title='Equipping' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed turpis tincidunt id aliquet. Condimentum mattis pellentesque id nibh tortor id aliquet lectus. Vulputate mi sit amet mauris commodo quis imperdiet. Massa ultricies mi quis hendrerit dolor magna eget est. Molestie nunc non blandit massa enim nec dui.' iconurl={equipping} />
        </div>
      </div>

      <button className='Homepage-button'>Connect</button>
    </div>
  );
}
