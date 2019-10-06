import React from 'react'
import data from '../dummyProjectData.json'


export default function Recommendation(props) {
    return (
        <div className="Recommendation">
        <h4>From {props.From}</h4>
        <p>{props.Rec}</p>
        </div>
    );

}
