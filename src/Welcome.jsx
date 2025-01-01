

import React, { StrictMode } from 'react'

const Welcome = () => {

    const iconData = [
        <i class="bi bi-instagram"></i>,
        <i class="bi bi-linkedin"></i>,
        <i class="bi bi-github"></i>,
        <i class="bi bi-telephone"></i>
    ]

    return (
        <StrictMode>


            <div className="col-10 welcome m-auto ">
                <div className="row">

                    {/* section 1 */}
                    <div className="col-sm-1 col-2 sec1">
                        <div className="row">
                            {
                                iconData.map((val, index) => {

                                    return (
                                        <div className="col-7 m-auto my-1 icon" key={index}>
                                            {val}
                                        </div>
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
                                    <h4 className='my-3'>React Developer</h4>
                                    <p className='my-3'>I am Front-End Developer. I am Currently working at SpeedUp Infotech ,based in Pune India</p>
                                    <button className='btn my-3'>Say Hello <i class="bi bi-send"></i></button>
                                </div>
                            </div>


                            <div className="col-6 part2">
                                <div className="row">
                                    <div className="col-8 m-auto imageContainer">
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

                    <div className="col-11 mt-4 m-auto">
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