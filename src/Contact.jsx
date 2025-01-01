


import React, { StrictMode } from 'react'

const Contact = () => {


    const cardData = [
        {
            id: 1,
            icon: "bx bx-mail-send",
            title: "Email",
            info: "keshavsemwal8@gmail.com"
        },
        {
            id: 2,
            icon: 'bx bxl-whatsapp',
            title: "Whatsapp",
            info: "7972232633"
        },
        {
            id: 3,
            icon: 'bx bx-phone',
            title: "Phone",
            info: "7972232633"
        }

    ]



    return (
        <StrictMode>

            <div className="col-sm-8 col-10 contact">
                <div className="row">


                    {/* section 1 */}
                    <div className="col-12 sec1">
                        <h1>Get in Touch</h1>
                        <p>Contact Me</p>
                    </div>

                    {/* section 2 */}

                    <div className="col-sm-10 col-11 m-auto sec2 mt-4">
                        <div className="row">


                            {/* part 1 */}
                            <div className="col-sm-6 col-12 part1 py-4 ">
                                <div className="row">

                                    {
                                        cardData.map((val) => {
                                            return (

                                                <div className="col-sm-8 col-10 m-auto card1 mb-4" key={val.id}>
                                                    <div>
                                                        <p className='p1'><i class={val.icon}></i></p>
                                                        <p className='p1 mb-1'>{val.title}</p>
                                                        <p className='p1 p2'>{val.info}</p>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }


                                </div>
                            </div>


                            {/* part 2 */}
                            <div className="col-sm-6 col-12 part2">
                                <div className="col-12 py-2">


                                    <form >

                                        {/* `1 */}
                                        <div className="col-12 p1 my-4">
                                            <input type="text" placeholder='Your name' className='form-control' />
                                        </div>

                                        {/* `2 */}
                                        <div className="col-12 p1 my-4">
                                            <input type="text" placeholder='Your email' className='form-control' />
                                        </div>


                                        {/* `3 */}
                                        <div className="col-12 p1 my-4">
                                            <textarea name="" id="" placeholder='Type message here' className='form-control p-3'></textarea>
                                        </div>


                                        {/* `3 */}
                                        <div className="col-12 p1 my-4">
                                            <button className='btn py-sm-3 col-sm-4 col-6'>Send <i class="bi bi-send"></i></button>
                                        </div>


                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>



                </div>
            </div>







        </StrictMode>
    )
}

export default Contact;