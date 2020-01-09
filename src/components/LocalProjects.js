import React from 'react'

export default function LocalProjects() {
    return (
        <div className="localProjects text-white  " id='localprojects' style={{ paddingTop: '80px' }} >
            <div className="bg-dark text-center p-4" >
                <div className="container">
                    <h1 className=" m-0" style={{ paddingBottom: '40px' }}>Github projects</h1>
                </div>
            </div>

            <div className=" text-center pb-1 bg-info">
                <i className="fab fa-github fa-4x" style={{ marginTop: '-50px' }}></i>
                <div className="container">

                    <p className="lead p-2">Here presenting you some of my top notch projects on github, you can take a look over
                        it.
                    <br />
                        You can also rate my projects.
                </p>
                </div>
            </div>


            <div className="projectsLocal"
            >
                <div className='section'>
                    <div className="container text-dark mb-2 ">

                        <div className="row mb-2">
                            <div className="col-6 text-center col-md-4 ">
                                <div className="card p-3 ">
                                    <h5 className=''>Chat </h5>
                                    <hr />
                                    <img src={require("../gallary/chat.png")} alt="" className="img-fluid" />
                                    <h5 className='text-danger'>Ongoing</h5>



                                </div>

                            </div>
                            <div className="col-6 col-md-4 ">
                                <div className="card text-center">

                                    <h5 className="">Blog </h5>

                                    <hr />
                                    <img src={require("../gallary/blogger.png")} alt="" className="img-fluid" />
                                    <div className="content">
                                        <h6>Build in Python</h6>
                                        <hr />
                                        <div> <img src={require("../gallary/django-icon.jpg")} alt=""
                                            className="img-fluid" />

                                            <img src={require("../gallary/python.png")} alt=""
                                                className="img-fluid" /></div>
                                        <hr />

                                        <a className="btn btn-outline-info btn-sm " href='https://github.com/arpitmishra61/Blog-Django' target='_blank'>Github</a>
                                        <a className="btn btn-dark btn-sm" href="https://github.com/arpitmishra61/Blog-Django">
                                            Live
                                            </a>
                                    </div>


                                </div>
                            </div>
                            <div className="col-md-4 col-12">
                                <div className="card rcard">

                                    <h5 className="">Movie <br /> Viewer</h5>
                                    <hr />
                                    <img src={require("../gallary/video-camera.png")} alt="" />
                                    <div className="content">

                                        <div>
                                            <h6>Build in Javascript</h6>
                                            <hr />
                                            <img src={require("../gallary/react.png")} alt=""
                                                className="img-fluid" />

                                            <img src={require("../gallary/nodejs.png")} alt=""
                                                className="img-fluid" /></div>
                                        <hr />
                                        <button className="btn btn-outline-info btn-sm mx-1">Github</button>
                                        <button className="btn btn-dark btn-sm">Live</button>
                                    </div>

                                </div>
                            </div>

                        </div>




                        <div className="row mt-4">
                            <div className="col-6 col-md-4">
                                <div className="card">
                                    <h5 className="">Railway</h5>
                                    <hr />
                                    <img src={require("../gallary/train.png")} alt="" />
                                    <div className="content">
                                        <div>
                                            <h6>Build in Python</h6>

                                            <hr />
                                            <img src={require("../gallary/python.png")} alt=""
                                                className="img-fluid" />

                                            <img src={require("../gallary/django-icon.jpg")} alt=""
                                                className="img-fluid" /></div>
                                        <hr />
                                        <button className="btn btn-outline-info btn-sm mx-1">Github</button>
                                        <button className="btn btn-dark btn-sm">Live</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-4">

                                <div className="card ">
                                    <h5 className="">News feed</h5>
                                    <hr />
                                    <img src={require("../gallary/news.png")} alt="" className="" />
                                    <div className="content">
                                        <div>
                                            <h6>Build in Javascript</h6>

                                            <hr />
                                            <img src={require("../gallary/react.png")} alt=""
                                                className="img-fluid" />

                                            <img src={require("../gallary/javascript.png")} alt=""
                                                className="img-fluid" /></div>
                                        <hr />
                                        <a className="btn btn-outline-info btn-sm " href='https://github.com/arpitmishra61/NewsFeed' target='_blank'>Github</a>
                                        <a className="btn btn-dark btn-sm" href="https://github.com/arpitmishra61/NewsFeed">
                                            Live
                                            </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 ">
                                <div className="card rcard">
                                    <h5 className="p">Attendence Manager</h5>
                                    <hr />
                                    <img src={require("../gallary/student.png")} alt="" className="" />
                                    <div className="content">
                                        <div>
                                            <h6>Build in Javascript</h6>

                                            <hr />


                                            <img src={require("../gallary/javascript.png")} alt=""
                                                className="img-fluid" /></div>
                                        <hr />
                                        <a className="btn btn-outline-info btn-sm " href='https://github.com/arpitmishra61/attendence' target='_blank'>Github</a>
                                        <button className="btn btn-dark btn-sm">Live</button>
                                    </div>
                                </div>


                            </div>
                        </div>

                    </div>
                </div>

            </div>


        </div>



    )
}
