import React from 'react';
import AssembliPoint from '../../assembli-point/AssembliPoint';

export default function ProjectDetails(props) {
  return (
    <div className="Point-page-section">
      <h2>{props.name}</h2>
      <div className="assembli">
        <AssembliPoint img={props.profileImg} groups={props.groups}/>
      </div>
      <div>
        <p><b>Description:</b></p>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
