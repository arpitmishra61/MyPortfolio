import React from 'react'

export default function MainProjects() {
    return (
        <div className="project  " id='projects'>
            <div className="pb-4  p-4 " style={{backgroundColor: 'rgba(255, 255, 255, 0.788)'}}>
                <div className="container p-3">

                    <h1 className="display-4 text-center">
                        <span className="text-info"> My</span> Projects</h1>
                    <p className="content lead  text-capitalize text-secondary">I done many projects in various domain some of them
                        are live and
                        majority of them
                        are on
                github.<br /> Some currently active project are shown below.
        
            </p>
                        <div className="text-center">
                            <button className="btn btn-outline-dark ">Github Projects
                    <i className="fab fa-github"></i>
                            </button></div>

        </div>
                    <hr />

                    <div className="pb-4  ">
                        <div className=" liveProjects container">
                            <div className="row text-center">
                                <div className="col-md-4  p-3">
                                    <div className="card p-3">
                                        <img src={require("../gallary/library.png" )}alt="none" className="rimg" />
                                            <h3 className="text-info">Magzine</h3>
                                            <hr />
                                            <p className="lead text-secondary">
                                                <strong> It is simple magzine website build in Node.js.</strong>
                                                <br />
                                                    It is hindi magzine website run by admin and it is live since 2002.
                            </p>
                                                


                        </div>
                    </div>
                                        <div className="col-md-4  p-3">
                                            <div className="card p-3 bg-info text-light">
                                                <img src={require("../gallary/shopping-cart.png")} alt="" className="rimg" />

                                                    <h3 className="text-light">E-Cart</h3>
                                                    <hr />
                                                    <p className="lead text-light">
                                                        <strong>This is E-Commerce website built in Django.</strong>
                                                        <br />
                                                            This website includes paytm-gateway integration for
                                                            payment
                            
                            </p>

                                                     
                        </div>
                    </div>
                                                <div className="col-md-4 p-3">
                                                    <div className="card p-3 alter">
                                                        <img src={require("../gallary/blogging.png" )}alt="none" className="rimg  " />
                                                            <h3 className="text-info">Portfolio</h3>

                                                            <hr />
                                                            <p className="lead text-secondary">
                                                                <strong>You are currently viewing my portfolio this is build by me.</strong>
                                                                <br />
                                                                    But I have many portfolio themes you can take look on github
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
