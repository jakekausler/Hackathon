import React from 'react';

const leafStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%`'
}

// Here to force relative div's spacing
const circle = {
  height: '100%',
  width: '100%'
};


const groupImages = {
  prayer: '/svg/prayerTri.svg',
  story: '/svg/storyTri.svg',
  innovation: '/svg/innovationTri.svg',
  funding: '/svg/fundingTri.svg',
  logistics: '/svg/logisticsTri.svg',
  equipping: '/svg/equippingTri.svg'
}

const center = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  margin: 'auto',
  width: '30%'
}

export default function ProjectDetails(props) {
  const leaves = props.groups.map(l => (
    <img src={groupImages[l]} style={leafStyle}></img>
  ));

  return(
    <div style={{position: 'relative'}}>
      {leaves}
      {/* TODO: Replace with same dimension but smaller file sized element. */}
      <img src='svg/centerCircle.svg' style={circle}/>
      <img src={props.img} style={center}/>
    </div>
  );
}
