


import React, { StrictMode } from 'react'
import AboutMe from './AboutMe';
import Welcome from './Welcome';
import Skills from './Skills';
import Project from './Project';
import Contact from './Contact';

const BodySection = () => {
    return (
        <StrictMode>

            <div className="col-12 body py-5">
                <div className="row">

                    {/* home page  */}
                    <Welcome/>

                    {/* about me  */}
                    <AboutMe/>

                    {/* Skills  */}
                    <Skills/>


                    {/* Project */}
                    <Project/>

                    {/* Contact me  */}
                    <Contact/>



                </div>
            </div>

        </StrictMode>
    )
}

export default BodySection;