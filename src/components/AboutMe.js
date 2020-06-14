import React from 'react'

export default function AboutMe() {
    return (
        <div id='about'>
            <div
                className='aboutMe' >

                <div style={{ backgroundColor: "rgba(255, 255, 255, 0.822)" }}>

                    <div className="profile animated fadeInLeft px-3 pb-3 " style={{ paddingTop: "38px" }}>

                        <div className="section container text-center">

                            <h1 className="display-3 ">
                                <span className="text-info">About</span> Me

                </h1>
                            <p className="  text-secondary">
                                Here is Few Things About Me



                </p>
                            <hr />
                        </div>
                    </div>

                    <div className='bioSection p-3 mb-4'>
                        <div className="container section">
                            <div className="row">

                                <div className="col-lg-4">
                                    <div className="my-4 adminPhoto">
                                        <div className='adminOverlay'></div>

                                        <img src={require("../gallary/profile/test.jpg")} alt="Arpit Mishra"

                                            title="Arpit Mishra"

                                            height='300px' width='100%'

                                            className='rounded-circleimg-fluid'
                                            style={{ border: '5px dashed dodgerblue' }} />


                                    </div>





                                </div>


                                <div className="col-lg-8  p-4 context">

                                    <p className="p-4  " style={{ lineHeight: '2em', wordSpacing: '0.3em', fontSize: '19px' }}>
                                        Iam a <strong>Full Stack</strong> , self taught web developer.

                                 Currently actively working in field of <strong>
                                            MERN STACK and Django.
                                </strong>
                                        <hr />

                                        <p className="" style={{ lineHeight: '2em', wordSpacing: '0.3em', fontSize: '19px' }}>
                                            I also take care the security aspects of website,  which are fully protected
                                            from hackers.

                                            I always like the
                                    <strong> Responsive Websites </strong>

                                            which gives user the same look and feel on the mobile devices also.
                                            <br />

                                            The biggest power of any website is
                                            <strong> Rank No.1 on Google</strong>, which I provide through
                                           <strong>  Search Engine Optimization</strong>
                                            .
                            </p>



                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
