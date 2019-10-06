import React from 'react';
import '../Home.css';
import './GroupBox.css';
import { Link } from 'react-router-dom';

export default function GroupBox(props) {
  //props = {Title, Description, Icon URL}
  return (
    <Link to={"/" + props.title} className='groupbox'><div>
      <div className='icon'><img src={props.iconurl} alt='affinity icon'/></div>      
      <p className="groupbox-header">{props.title}</p>
      <p>{props.description}</p>
    </div></Link>
  );
}
