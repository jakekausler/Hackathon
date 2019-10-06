import React from 'react'

import './Message.css'

export default function Message() {
    return (
        <div className="profileSection Message">
            <h3>Message {}</h3>
            <form action="" method="post">
                <div className="msgContainer">
                    <label htmlFor="msgSubject">Subject</label>
                    <textarea name="msgSubject" id="msgSubject" cols="30" rows="2"></textarea>
                </div>
                <div className="msgContainer">
                    <label htmlFor="msgContent">Message</label>
                    <textarea name="msgContent" id="msgContent" cols="30" rows="5"></textarea>
                </div>
                <button type="submit" id="sendInvite">Send</button>
            </form>
        </div>
    );

}
