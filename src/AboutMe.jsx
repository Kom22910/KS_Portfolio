


import React, { StrictMode } from 'react'

const AboutMe = () => {





    return (
        <StrictMode>

            <div className="col-sm-8 col-10 aboutme">
                <div className="row">

                    {/* section 1 */}
                    <div className="col-sm-5 col-12 text-center  m-auto mb-sm-3 sec1">
                        <h1>About Me</h1>
                        <p>My Introduction</p>
                    </div>


                    {/* section 2 */}
                    <div className="col-12 sec2">
                        <div className="row">

                            {/* part 1 */}
                            <div className="col-sm-6 col-12">
                                <div className="row">


                                    <div className="col-12">
                                        <img src="asset/aboutme.png" alt="" className='d-block w-100' />
                                    </div>

                                </div>
                            </div>


                            {/* part 2 */}
                            <div className="col-sm-5 col-10 m-auto part2">
                                <div className="row">
                                    <p>As a Front-End Developer , I specializing in creating user-centered web experiences. Proficient in HTML, CSS, JavaScript, React, and Bootstrap. Skilled in API integration and building responsive and accessible interfaces.</p>

                                    <button className='btn btn-black col-sm-5 mt-sm-4 mt-2'>
                                         Resume <i class="bi bi-file-earmark-text"></i>
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>




        </StrictMode>
    )
}

export default AboutMe;