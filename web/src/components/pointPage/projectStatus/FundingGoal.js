import React from 'react';

export default function FundingGoal (props) {
  let localeCode = navigator.language;

  let formatter;
  try {
    formatter = new Intl.NumberFormat(localeCode, {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    })
  } catch (e) {
    //I'm not entirely sure if navigator.language will always 
    //produce a valid locale code, so use USD as a fall-back
    console.log(e)
    formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    })
  }

  return (
    <div>
      <h4>Funding Goal</h4>
      <p>
        <span>
        {formatter.format(props.data.projectStatus.funding.granted) + ' '}</span>
        out of 
        <span>{' ' + formatter.format(props.data.projectStatus.funding.goal)}</span>
      </p>
    </div>
  )
}