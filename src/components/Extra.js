import React from 'react'

export default function Extra() {
    return (
        <div className="profile-2 text-center">
            <div className="bg-info m-0 p-4 px-1">
                <h1 className=" text-center  text-white"> <strong>What I love</strong> </h1>
                <p className="detail">I really love to design Responsive
            applications. </p>
            </div>

            <div className="section  text-center p-4 mt-4 ">
                <div className="row pt-4 px-2">
                    <div className="col-md-3  text-dark col-6 "  >
                        <div className="card p-3 text-center " >
                            <img src={require('../gallary/rocket.png')} alt="" className="rimg bg-info rounded-circle p-1" />
                            <h4>Dynamic</h4>
                            <p className="lead">
                                Websites don't have to be static, I love making pages come to life.
                    </p>
                        </div>
                    </div>
                    <div className="col-md-3 col-6">
                        <div className="card p-3 text-center">
                            <img src={require('../gallary/responsive.png')} alt='nothing' className="rimg  bg-dark rounded-circle p-1" />
                            <h4>Responsive</h4>
                            <p className="lead">
                                My layouts will work on any device, big or small.
                    </p>
                        </div>
                    </div>


                    <div className="col-md-3 col-6">
                        <div className="card p-3">
                            <img src={require('../gallary/bulb.png')} alt="none" className="rimg  bg-info rounded-circle " />
                            <h4>Intutive</h4>
                            <p className="lead">
                                Strong preference for easy to use, intuitive UX/UI.
                    </p>
                        </div>
                    </div>
                    <div className="col-md-3 col-6">
                        <div className="card p-3">
                            <img src={require('../gallary/design.png')} alt="" className="rimg  bg-dark rounded-circle p-1" />
                            <h4>Beauty</h4>
                            <p className="lead">
                                I Make beautiful websites that have classNameical and eligent look.
                    </p>
                        </div>
                    </div>

                </div>

            </div>

        </div>

    )
}
