

import React, { StrictMode } from 'react'

const Welcome = () => {

    const iconData = [
        {
            id: 1,
            icon: <i className="bi bi-instagram"></i>,
            link: "https://www.instagram.com/keshav.semwal.54/"
        },
        {
            id: 2,
            icon: <i className="bi bi-linkedin"></i>,
            link: "https://www.linkedin.com/in/keshav-semwal-b89764219/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        },
        {
            id: 3,
            icon: <i className="bi bi-github"></i>,
            link: "https://github.com/Kom22910"
        },
        {
            id: 4,
            icon: <i class="bi bi-whatsapp"></i>,
            link: "https://api.whatsapp.com/send/?phone=7972232633&text&type=phone_number&app_absent=0"
        }
    ]

    return (
        <StrictMode>


            <div className="col-10 welcome m-auto ">
                <div className="row">

                    {/* section 1 */}
                    <div className="col-sm-1 col-2 sec1">
                        <div className="row">
                            {
                                iconData.map((val) => {

                                    return (
                                        <a href={val.link} className='nav-link'>
                                            <div className="col-7 m-auto my-1 icon" key={val.id}>
                                                {val.icon}
                                            </div>
                                        </a>
                                    )
                                })
                            }

                        </div>
                    </div>

                    {/* section 2 */}
                    <div className="col-10 m-auto dis">
                        <div className="row">

                            <div className="col-6 part1">
                                <div className="row">
                                    <h1 className='mb-2'>Keshav Semwal</h1>
                                    <h4 className='my-3 col-9'>React Developer</h4>
                                    <p className='my-3'>I am Front-End Developer. I am Currently working at SpeedUp Infotech ,based in Pune India</p>
                                    <a href="#contact">
                                        <button className='btn my-3'>Say Hello <i class="bi bi-send"></i></button>
                                    </a>
                                </div>
                            </div>


                            <div className="col-6 part2">
                                <div className="row">
                                    <div className="col-7 m-auto imageContainer">
                                        <img src="asset/profilephoto.png" alt="" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>



                    {/* this section is for mobile */}
                    <div className="col-10 m-auto part2 vis">
                        <div className="row">

                            <div className="col-7 ms-3 imageContainer">
                                <img src="asset/profilephoto.png" alt="" />
                            </div>

                        </div>
                    </div>

                    <div className="col-11 mt-4 m-auto vis">
                        <div className="row">

                            <div className="col-12 m-auto part1">
                                <div className="row">
                                    <h1 className='mb-2'>Keshav Semwal</h1>
                                    <h4>React Developer</h4>
                                    <p className='my-3'>I am Front-End Developer. I am Currently working at SpeedUp Infotech ,based in Pune India</p>
                                    <button className='btn my-3'>Say Hello <i class="bi bi-send"></i></button>
                                </div>
                            </div>

                        </div>
                    </div>







                    {/* *************************************88 */}

                </div>
            </div>




        </StrictMode>
    )
}

export default Welcome;