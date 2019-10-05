import React from 'react';
import './AssemblerProfile.css';
import data from '../dummyProjectData.json'

export default function AssemblerProfile (props) {
  return (
    <div className='Point-page-section Assembler-profile'>

      <div className='col1'>
        <img src={data.assembler.imageURL} alt='assembler'/>
      </div>

      <div className='col2'>
        <h3>Assembler Profile:</h3>
        <address>
          <ul>
            <li>Name:</li>
            <li>Phone:</li>
            <li>Website:</li>
          </ul>
          <ul>
            <li>{data.assembler.name ? data.assembler.name : 'n/a'}</li>
            <li>{data.assembler.phone ? data.assembler.phone : 'n/a'}</li>
            <li>
              <a href={data.assembler.website ? data.assembler.website : '#'}>
                {data.assembler.website ? data.assembler.website : 'n/a'}
              </a>
            </li>
          </ul>
        </address>        
      </div>

    </div>
  )
}