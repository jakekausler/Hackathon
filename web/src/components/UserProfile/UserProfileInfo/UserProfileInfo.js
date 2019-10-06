import React from 'react'

import './UserProfileInfo.css'

export default function UserProfileInfo(props) {
    return (
        <div className="profileSection UserProfileInfo">
            <h3>{props.Info.name}'s Profile</h3>
            <div className="profileInfoContent">
                <div className="profileImageDiv"><img src="/img/profileimage.jpg" alt="User profile pic"/></div>
                <div className="profileDetails">
                    <p><span className="label">Country:</span> {props.Info.country}</p>
                    <p><span className="label">Language(s) Spoken:</span> {props.Info.languages.join(", ")}</p>
                    <p><span className="label">Link (website/LinkedIn):</span> {props.Info.website}</p>
                    <p><span className="label">Skills:</span> {props.Info.skills.join(", ")}</p>
                    <p><span className="label">Work Preferences:</span> {props.Info.workPreferences}</p>
                    <p><span className="label">Availability:</span> {props.Info.availability}</p>
                    <p><span className="label">Experience/Background:</span> {props.Info.experience}</p>
                </div>
            </div>
        </div>
    );

}
