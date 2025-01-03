



import React, { StrictMode } from 'react';

const Footer = () => {

    const card1 = [
        {
            id: 1,
            title: "About",
            link: "#about"
        },
        {
            id: 2,
            title: "Project",
            link: "#project"
        },
        {
            id: 3,
            title: "Contact",
            link: "#contact"
        }
    ]


    const card2 = [
        {
            id: 1,
            imgPath: 'bx bxl-whatsapp',
            link: "https://api.whatsapp.com/send/?phone=7972232633&text&type=phone_number&app_absent=0"
        },
        {
            id: 2,
            imgPath: 'bx bxl-linkedin',
            link: "https://www.linkedin.com/in/keshav-semwal-b89764219/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"

        },
        {
            id: 3,
            imgPath: 'bx bxl-github',
            link: "https://github.com/Kom22910"
        }
    ]



    return (
        <StrictMode>

            <div className="col-12 footer p-sm-5 p-3 py-5">

                <div className="col-sm-6 col-12 m-auto section">
                    <div className="row">


                        {/* part 1 */}
                        <div className="col-sm-9 col-10 m-auto part1">
                            <div className="col-sm-5 col-7 m-auto">

                                <div className="row">

                                    {
                                        card1.map((val) => {
                                            return (
                                                <div className="col-4" key={val.id}>
                                                    <a href={val.link} className='nav-link'>
                                                        <p>{val.title}</p>
                                                    </a>
                                                </div>
                                            )
                                        })
                                    }

                                </div>
                            </div>
                        </div>


                        {/* part 2 */}
                        <div className="col-8 m-auto py-2 part2">

                            <div className="col-sm-4 col-6 m-auto boxContainer">

                                {
                                    card2.map((val) => {
                                        return (
                                            <a href={val.link}>
                                                <div className="box" key={val.id}>
                                                    <i class={val.imgPath} ></i>
                                                </div>
                                            </a>
                                        )
                                    })
                                }



                            </div>

                            <div className="col-sm-5 col-12 m-auto text-center mt-4">
                                <p>&copy; Keshav Semwal.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </StrictMode>
    )
}

export default Footer;