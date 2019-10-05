import React from 'react';
import './About.css';

const About = ( props ) => {
    return (
        <div className="About">
            <h3>About Assembl(i)</h3>
                <p className="aboutText">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum.
                </p>
            <section>
                <form action="" method="post">
                    <div>
                        <label htmlFor="fName">First Name</label>
                        <input type="text" name="fName" id="fName"/>
                    </div>
                    <div>
                        <label htmlFor="lName">Last Name</label>
                        <input type="text" name="lName" id="lName"/>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email"/>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default About