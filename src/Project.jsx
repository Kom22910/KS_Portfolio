


import React, { StrictMode } from 'react'

const Project = () => {

    const cardData = [
        {
            id: 1,
            imgPath: "asset/reactProject1.png",
            title: "Zomato Clone",
            para: "A food ordering platform built with the React, featuring user authentication, shopping cart, and using Json database.",
            skill: [
                "HTML", "CSS", "Bootstrap", "Javascript", "React", "API Calling"
            ],
            link : "https://zomato-clone-ks.vercel.app/"
        },
        
    ]



    return (
        <StrictMode>
            <div className="col-sm-8 col-10 py-2 project" id='project'>
                <div className="row">

                    {/* section 1 */}
                    <div className="col-12 sec1">
                        <h1>Projects</h1>
                        <p>Most Recent Work</p>
                    </div>


                    {/* section 2 */}
                    <div className="col-sm-10 col-11  m-auto py-2 mt-sm-5 sec2 p-0">
                        <div className="row">

                            {
                                cardData.map((val) => {
                                    return (
                                        <div className="col-sm-4 col-12 card1 my-3" key={val.id}>

                                            <a href={val.link} className='nav-link'>
                                                <div className="col-12 section pt-1">
                                                    <div className="row">

                                                        <div className="col-12 text-center imageContainer">
                                                            <img src={val.imgPath} alt={val.title} className='d-block w-100' />
                                                        </div>
                                                        <hr />

                                                        <div className="col-11 m-auto mt-2 mb-0">
                                                            <p className='title'>{val.title}</p>
                                                            <p className='para'>{val.para}</p>
                                                        </div>

                                                        <div className="col-11 m-auto usedSkill">
                                                            <ul>
                                                                {
                                                                    val.skill.map((v, index) => {
                                                                        return (
                                                                            <li className='mb-1' key={index}>{v}</li>
                                                                        )
                                                                    })
                                                                }
                                                            </ul>
                                                        </div>

                                                    </div>
                                                </div>
                                            </a>
                                        </div>


                                    )
                                })
                            }







                        </div>
                    </div>



                </div>
            </div>

        </StrictMode>
    )
}

export default Project;