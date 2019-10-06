import React from 'react';
import AssembliPoint from '../../assembli-point/AssembliPoint';

export default function ProjectDetails(props) {
  return (
    <>
      <h2>{props.name}</h2>
      <div style={{width: '50%'}}>
        <AssembliPoint img={props.profileImg} groups={props.groups}/>
      </div>
      <div>
        <p><b>Description:</b></p>
        <p>{props.description}</p>
      </div>
    </>
  );
}
