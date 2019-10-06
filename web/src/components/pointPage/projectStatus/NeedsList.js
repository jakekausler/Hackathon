import React from 'react';

import checked from "../../../images/checked.png"
import unchecked from "../../../images/unchecked.png"

export default function NeedsList(props) {
  let metNeeds = []
  let unmetNeeds = []

  props.data.projectStatus.needs.forEach((need, i) => {
    if(need.fulfilled) {
      metNeeds.push(
        <li key={'need' + i}>
          <img src={checked} />  {/*<---- CUSTOM LIST ICON HERE*/}
          {need.position}
        </li>
      )
    } else {
      unmetNeeds.push(
        <li key={'need' + i}>
          <img src={unchecked} />  {/*<---- CUSTOM LIST ICON HERE*/}
          {need.position}
        </li>
      )
    }
  })

  return (
    <div className='needs-list'>
      <ul className='needs-fulfilled'>
        <h4>Roles Filled</h4>
        {metNeeds}
      </ul>
      <ul className='needs-unfulfilled'>
        <h4>Still Needed</h4>
        {unmetNeeds}
      </ul>
    </div>
  )
}