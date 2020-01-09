import React from 'react'

export default function Skills() {
    return (
        <div className=" text-center " id='skills' >

            <div className="bg-dark text-white p-2">
                <img src={require("../gallary/television.png")} alt="" className='rimg' height='90px' />
                <div className="container">

                    <h1 className="">Technologies I worked In.
                </h1>

                </div>

            </div>



            <div className="card  tech ">
                <div style={{ backgroundColor: "rgba(255, 255, 254, 0.37)" }}>
                    <div className="section py-4">
                        <div className="row p-4">
                            <div className="col-3">
                                <img src={require("../gallary/reduxLogo.png")} alt="" height="100px" className="img-fluid" />
                            </div>
                            <div className="col-3"> <img src={require("../gallary/nodejs.png")} alt="" height="100px" className="img-fluid" />
                            </div>
                            <div className="col-3"> <img src={require("../gallary/javascript.png")} alt="" height="100px" className="img-fluid" />
                            </div>
                            <div className="col-3"> <img src={require("../gallary/github.png")} alt="" height="100px" className="img-fluid" />
                            </div>
                        </div>
                        <div>
                            <div className="row p-4">
                                <div className="col-3 pt-4 ">
                                    <img src={require("../gallary/react.png")} alt="" height="100px" className="img-fluid" />
                                </div>

                                <div className="col-6">
                                    <img src={require("../gallary/programmer1.png")} alt="" className=" img-fluid  main" height="180px" />
                                </div>
                                <div className="col-3 pt-4">
                                    <img src={require("../gallary/bootstrap.png")} alt="" className="img-fluid" style={{ height: '100px' }} />
                                </div>
                            </div>
                            <div className="row p-4">
                                <div className="col-3">
                                    <img src={require("../gallary/django-icon.jpg")} alt="" className="img-fluid" height="100px" /></div >
                                <div className="col-3">
                                    <img src={require("../gallary/cpp_logo.png")} alt=""
                                        height="100px" className="img-fluid" /></div>
                                <div className="col-3">
                                    <img src={require("../gallary/postgres.jpg")} alt="" className="img-fluid" height='100px' />
                                </div>
                                <div className=" col-3">
                                    <img src={require("../gallary/mongoDB.png")} alt="" height="100px" className="img-fluid" />
                                </div>

                            </div>


                        </div>
                    </div>


                </div>

            </div>
        </div>

    )
}
