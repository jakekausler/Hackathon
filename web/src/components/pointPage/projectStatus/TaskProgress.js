import React from 'react';

import checked from "../../../images/checked.png"
import unchecked from "../../../images/unchecked.png"

export default function TaskProgress (props) {
  return (
    <div className='task-progress'>
      <h4>Task Goals</h4>
      <ul className='task-progress'>
        {props.data.projectStatus.tasks.map( (task, i) => {
          return task.completed ?
          //Replace these span characters with checked or unchecked boxes
            <li key={'task' + i}><img src={checked} />{task.title}</li> :
            <li key={'task' + i}><img src={unchecked} />{task.title}</li>
        })}
      </ul>      
    </div>

  )
}