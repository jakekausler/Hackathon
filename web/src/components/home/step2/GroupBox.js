import React from 'react';
import '../Home.css';
import './GroupBox.css';

export default function GroupBox(props) {
  //props = {Title, Description}
  return (
    <div className='groupbox'>
      <div className='icon'></div>      
      <p>{props.title}</p>
      <p>{props.description}</p>
    </div>
  );
}
