import React from 'react'

export default function Achievements() {
    return (
        <div className="achievements mb-4"

            id='achievements'>

            <div className="" style={{ backgroundColor: "rgba(250, 250, 250, 0.026)" }}>
                <div className="p-4">

                    <div className="container p-2 text-center">

                        <h3 className="display-4 py-2 text-secondary text-center">Achievements</h3>
                        <hr />
                        <div className="text-center"><img src={require("../gallary/hackerrank1.png")} alt="hackerrank1" className="rimg"
                            height="128px" />
                        </div>
                    </div>

                </div>
                <div className="card container rounded">

                    <div className="row">
                        <div className="col-lg-6 p-4 ">

                            <img src={require("../gallary/programmer (1).png")} alt="hackerrank" style={{ height: '100px', width: '20%', margin: 'auto', display: 'block' }} />

                            <div className="text-center pt-4">


                                <h3 className='text-success'>Hacker Rank</h3>
                                <hr />
                                <p className='text-left'>

                                    <strong>Hacker Rank</strong>  is a place where programmers from all over the world come together to solve problems in a wide range of Computer Science domains such as algorithms, machine learning, or artificial intelligence, as well as to practice different programming paradigms like functional programming.

                                </p>

                                <a href="https://www.hackerrank.com/arpitmishra61?h_r=internal-search&hr_r=1" target="_blank"
                                    className="btn btn-info anav">
                                    See Profile</a>

                            </div>

                        </div>
                        <div className="col-lg-6 icons">
                            <div className="row p-3">


                                <h5 className='text-secondary'>Programmimg Languages</h5>
                                <div className="col-lg-1 p-2">


                                </div>
                                <div className="col-lg-11 p-2 my-2">
                                    <div className="row">
                                        <div className="col-4">
                                            <img src={require("../gallary/cpp_logo.png")} alt="none" height='100px' />

                                            <img src={require("../gallary/goldMedal.png")} alt="none" className='medal' height='20px' />


                                        </div>
                                        <div className="col-4">
                                            <img src={require("../gallary/python.png")} alt="none" height="100px" />

                                            <img src={require("../gallary/goldMedal.png")} alt="none" className='medal' height='20px' />


                                        </div>
                                        <div className="col-4">

                                            <img src={require("../gallary/javascript.png")} alt="none" height='100px' />
                                            <img src={require("../gallary/goldMedal.png")} alt="none" className='medal' height='20px' />


                                        </div>
                                    </div>


                                    <hr /></div>


                                <h5 className='text-secondary'>Special Skills</h5>
                                <div className="col-lg-1 p-2">


                                </div>
                                <div className="col-lg-11 p-2">
                                    <div className="row">
                                        <div className="col-4">

                                            <img src={require("../gallary/problem-solving.png")} alt="none" height="100px" />
                                            <h6 className=' text-info'>Problem
                                         Solving</h6>
                                        </div>
                                        <div className="col-4">

                                            <img src={require("../gallary/interview.png")} alt="none" height="100px" />
                                            <h6 className='text-info'>Interview Preperation</h6>

                                        </div>
                                        <div className="col-4">

                                            <img src={require("../gallary/database.png")} alt="none" height="100px" />
                                            <h6 className='text-info'>Databases</h6>
                                        </div>


                                    </div></div>


                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>


    )
}
