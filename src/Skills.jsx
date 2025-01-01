


import React, { StrictMode } from 'react'

const Skills = () => {


    const skills = [
        {
            id: 1,
            icon: 'bx bxl-html5',
            word: "HTML"
        },
        {
            id: 2,
            icon: 'bx bxl-css3',
            word: "CSS"
        },
        {
            id: 3,
            icon: 'bx bxl-bootstrap',
            word: "Bootstrap"
        },
        {
            id: 4,
            icon: 'bx bxl-javascript',
            word: "Javascript"
        },
        {
            id: 5,
            icon: 'bx bxl-react',
            word: "React"
        }
    ]

    const backend = [
        {
            id: 1,
            icon: "bx bxl-mongodb skills_icon",
            word: "MongoDB"
        }
    ]




    return (
        <StrictMode>

            <div className="col-sm-8 col-10 skills">
                <div className="row">

                    {/* section 1 */}
                    <div className="col-sm-5 col-12 m-auto mb-sm-5 mb-3 sec1">
                        <h1>Skills</h1>
                        <p>My Technical level</p>
                    </div>


                    {/* section 2 */}
                    <div className="col-sm-10 col-12 m-auto sec2">
                        <div className="row">

                            {/* part 1 */}
                            <div className="col-sm-6 col-12 part1">
                                <div className="row">

                                    <div className="col-10 m-auto py-4 section ">
                                        <h6 className='text-center'>Frontend Developer</h6>

                                        <div className="col-sm-9 col-11 m-auto cardContainer mt-3">
                                            <div className="row r1">

                                                {
                                                    skills.map((val) => {

                                                        return (
                                                            <div className="col-sm-5 col-6 card1 my-2" key={val.id}>
                                                                <div className="row">
                                                                    <div className='col-12'>
                                                                        <div className="row">
                                                                            <div className="col-sm-4 col-3 p1">
                                                                                <i className={val.icon}></i>
                                                                            </div>
                                                                            <div className="col-8 p1">
                                                                                <p>{val.word}</p>
                                                                            </div>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }

                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>



                            {/* part 2 */}
                            <div className="col-sm-6 col-12 part1">
                                <div className="row">

                                    <div className="col-10 m-auto py-4 section">
                                        <h6 className='text-center'>Backend Developer</h6>

                                        <div className="col-sm-9 col-11 m-auto cardContainer mt-3">
                                            <div className="row r1">

                                                {
                                                    backend.map((val) => {

                                                        return (
                                                            <div className="col-sm-5 col-6 card1 my-2" key={val.id}>
                                                                <div className="row">
                                                                    <div className='col-12'>
                                                                        <div className="row">
                                                                            <div className="col-sm-4 col-3 p1">
                                                                                <i className={val.icon}></i>
                                                                            </div>
                                                                            <div className="col-8 p1">
                                                                                <p>{val.word}</p>
                                                                            </div>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }

                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>



                </div>
            </div>

        </StrictMode>
    )
}

export default Skills;