import React from 'react'

import './UserProfile.css'

export default function UserProfile() {
    return (
        <div className="UserProfile">
            <h3>{data.fName} PROFILE</h3>
            <img src={data.profilePhoto} alt="User profile photo"/>
            <div className="profileDetails">
                <ul>
                    <li>Country: {data.country}</li>
                    <li>Language(s) Spoken: {data.languages}</li>
                    <li>Link (website/LinkedIn): {data.website}</li>
                    <li>Skills: {data.skills}</li>
                    <li>Work Preferences: {data.workPref}</li>
                    <li>Availability: {data.availability}</li>
                    <li>Experience/Background: {data.experience}</li>
                </ul>
            </div>
        </div>
    );

}
