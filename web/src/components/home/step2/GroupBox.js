import React from 'react';
import '../Home.css';
import './GroupBox.css';
import { Link } from 'react-router-dom';

export default function GroupBox(props) {
  //props = {Title, Description}
  return (
    <Link to={"/" + props.title} className='groupbox'><div>
      <div className='icon'><img src={props.iconurl} /></div>      
      <p className="groupbox-header">{props.title}</p>
      <p>{props.description}</p>
    </div></Link>
  );
}
