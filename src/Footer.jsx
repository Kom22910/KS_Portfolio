



import React, { StrictMode } from 'react'

const Footer = () => {

    const card1 = [
        {
            id: 1,
            title: "About"
        },
        {
            id: 2,
            title: "Project"
        },
        {
            id: 3,
            title: "Contact"
        }
    ]


    const card2 = [
        {
            id: 1,
            imgPath: "bx bxl-instagram"
        },
        {
            id: 2,
            imgPath: 'bx bxl-linkedin'
        },
        {
            id: 3,
            imgPath: 'bx bxl-github'
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
                                                    <p>{val.title}</p>
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
                                            <div className="box" key={val.id}>
                                                <i class={val.imgPath} ></i>
                                            </div>
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