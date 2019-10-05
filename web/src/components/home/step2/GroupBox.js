import React from 'react';
import '../Home.css';
import './GroupBox.css';

export default function GroupBox(props) {
  //props = {Title, Description}
  return (
    <a href={"/" + props.title} className='groupbox'><div>
      <div className='icon'></div>      
      <p>{props.title}</p>
      <p>{props.description}</p>
    </div></a>
  );
}
